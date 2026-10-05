'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

function PaymentResultContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const transactionId = searchParams.get('transactionId');
  const amount = searchParams.get('amount');
  const reason = searchParams.get('reason');

  const [verifiedStatus, setVerifiedStatus] = useState(status);
  const [checking, setChecking] = useState(status === 'PENDING');

  // If status is PENDING, poll the backend for the real status
  useEffect(() => {
    if (status === 'PENDING' && transactionId) {
      const checkStatus = async () => {
        try {
          const res = await fetch(`https://madhukauns-backend.onrender.com/api/payments/status/${transactionId}`);
          const data = await res.json();
          if (data.status === 'SUCCESS' || data.status === 'PAYMENT_SUCCESS') {
            setVerifiedStatus('SUCCESS');
            setChecking(false);
          } else if (data.status === 'FAILED' || data.status === 'PAYMENT_ERROR') {
            setVerifiedStatus('FAILED');
            setChecking(false);
          }
          // else keep checking
        } catch (e) {
          console.error('Status check failed:', e);
        }
      };

      checkStatus();
      const interval = setInterval(checkStatus, 3000);
      return () => clearInterval(interval);
    }
  }, [status, transactionId]);

  const isSuccess = verifiedStatus === 'SUCCESS';
  const isFailed = verifiedStatus === 'FAILED';
  const isPending = !isSuccess && !isFailed;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            {/* Status Icon */}
            <div className={`${styles.iconWrapper} ${
              isSuccess ? styles.iconSuccess : isFailed ? styles.iconFailed : styles.iconPending
            }`}>
              {isSuccess && (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {isFailed && (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {isPending && (
                <div className={styles.spinnerLarge}></div>
              )}
            </div>

            {/* Title */}
            <h1 className={styles.title}>
              {isSuccess && 'Payment Successful!'}
              {isFailed && 'Payment Failed'}
              {isPending && 'Verifying Payment...'}
            </h1>

            <p className={styles.subtitle}>
              {isSuccess && 'Your entry fee has been received. Your registration is now confirmed.'}
              {isFailed && 'Something went wrong during the payment process. No money was deducted.'}
              {isPending && 'Please wait while we verify your payment with PhonePe...'}
            </p>

            {/* Transaction Details */}
            <div className={styles.details}>
              {transactionId && (
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Transaction ID</span>
                  <span className={styles.detailValue}>{transactionId}</span>
                </div>
              )}
              {amount && (
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Amount</span>
                  <span className={styles.detailValue}>₹{amount}</span>
                </div>
              )}
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Status</span>
                <span className={`${styles.statusBadge} ${
                  isSuccess ? styles.badgeSuccess : isFailed ? styles.badgeFailed : styles.badgePending
                }`}>
                  {isSuccess ? '✓ Confirmed' : isFailed ? '✗ Failed' : '⏳ Pending'}
                </span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Gateway</span>
                <span className={styles.detailValue}>PhonePe (Sandbox)</span>
              </div>
            </div>

            {/* Sandbox Notice */}
            <div className={styles.sandboxNotice}>
              <span>🧪</span>
              <p>This was a <strong>sandbox/test</strong> transaction. No real money was charged.</p>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <a href="/" className="btn btn--primary">
                Back to Home
              </a>
              {isFailed && (
                <a href="/competitions" className="btn btn--outline">
                  Try Again
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function PaymentResultPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text-muted)',
      }}>
        Loading payment result...
      </div>
    }>
      <PaymentResultContent />
    </Suspense>
  );
}
