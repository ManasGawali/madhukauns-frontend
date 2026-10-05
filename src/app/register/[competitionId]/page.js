'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const STEPS = [
  { id: 1, label: 'Personal Details', icon: '👤' },
  { id: 2, label: 'Music Details', icon: '🎵' },
  { id: 3, label: 'Video Upload', icon: '🎬' },
  { id: 4, label: 'Bank Details', icon: '🏦' },
  { id: 5, label: 'Payment', icon: '💳' },
  { id: 6, label: 'Review', icon: '✅' },
];

const competitionNames = {
  'harmonium': 'Harmonium Solo Competition',
  'vocal-junior': 'Hindustani Classical Vocal – Junior Group',
  'vocal-senior': 'Hindustani Classical Vocal – Senior Group',
  'kathak-junior': 'Kathak Dance – Junior Group',
  'kathak-senior': 'Kathak Dance – Senior Group',
  'tabla': 'Tabla Solo Competition'
};

export default function RegisterPage() {
  const params = useParams();
  const competitionId = params.competitionId;
  const competitionName = competitionNames[competitionId] || 'Competition';

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [agreeRules, setAgreeRules] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    guardianName: '',
    guruName: '',
    experience: '',
    raga1: '',
    raga2: '',
    raga3: '',
    bankAccountNumber: '',
    bankIFSC: '',
    bankName: '',
    bankAccountHolder: '',
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleVideoSelect = (file) => {
    if (!file) return;
    
    // Validate file type
    const validTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid video file (MP4, WebM, MOV, or AVI)');
      return;
    }

    // Validate file size (max 2GB)
    if (file.size > 2 * 1024 * 1024 * 1024) {
      alert('Video file size must be less than 2GB');
      return;
    }

    setVideoFile(file);
    setVideoPreviewUrl(URL.createObjectURL(file));
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setUploadProgress(Math.round(progress));
    }, 300);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleVideoSelect(file);
  };

  const handleSubmit = () => {
    // In production, this would submit to the backend API
    setSubmitted(true);
  };

  const handlePayment = async () => {
    setPaymentLoading(true);
    setPaymentError(null);

    try {
      const response = await fetch('http://localhost:5000/api/payments/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          competitionId: competitionId,
          competitionName: competitionName,
          amount: 350,
        }),
      });

      const data = await response.json();

      if (data.success && data.url) {
        setTransactionId(data.transactionId);
        // Redirect to PhonePe payment page
        window.location.href = data.url;
      } else {
        setPaymentError(data.message || 'Failed to initiate payment. Please try again.');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setPaymentError('Could not connect to the payment server. Make sure the backend is running on port 5000.');
    } finally {
      setPaymentLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className={styles.main}>
          <div className={`container ${styles.successContainer}`}>
            <div className={styles.successCard}>
              <span className={styles.successIcon}>🎉</span>
              <h2 className={styles.successTitle}>Registration Submitted!</h2>
              <p className={styles.successText}>
                Thank you for registering for <strong>{competitionName}</strong>. 
                Your application has been received.
              </p>
              <div className={styles.successDetails}>
                <div className={styles.successDetailItem}>
                  <span>Name:</span>
                  <strong>{formData.fullName}</strong>
                </div>
                <div className={styles.successDetailItem}>
                  <span>Email:</span>
                  <strong>{formData.email}</strong>
                </div>
                <div className={styles.successDetailItem}>
                  <span>Status:</span>
                  <span className="badge badge--gold">Pending Confirmation</span>
                </div>
              </div>
              <p className={styles.successNote}>
                Confirmation will be communicated via email after the last date of form acceptance. 
                Please produce the e-acknowledgement receipt on competition day.
              </p>
              <a href="/" className="btn btn--primary">Back to Home</a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>Registration Form</h1>
            <p className={styles.competitionName}>{competitionName}</p>
          </div>
        </div>

        <div className="container">
          {/* Stepper */}
          <div className={styles.stepper}>
            {STEPS.map((step, i) => (
              <div key={step.id} className={styles.stepperRow}>
                <div
                  className={`${styles.stepperStep} ${
                    currentStep === step.id ? styles.stepperStepActive : ''
                  } ${currentStep > step.id ? styles.stepperStepCompleted : ''}`}
                >
                  <div className={styles.stepperCircle}>
                    {currentStep > step.id ? '✓' : step.icon}
                  </div>
                  <span className={styles.stepperLabel}>{step.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`${styles.stepperLine} ${currentStep > step.id ? styles.stepperLineCompleted : ''}`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className={styles.formCard}>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Personal Details</h2>
                <p className={styles.stepDesc}>Tell us about yourself</p>
                <div className={styles.formGrid}>
                  <div className="form-group">
                    <label className="form-label form-label--required">Full Name</label>
                    <input type="text" className="form-input" required value={formData.fullName} onChange={e => updateField('fullName', e.target.value)} placeholder="Enter your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Email Address</label>
                    <input type="email" className="form-input" required value={formData.email} onChange={e => updateField('email', e.target.value)} placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Mobile Number</label>
                    <input type="tel" className="form-input" required value={formData.phone} onChange={e => updateField('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Date of Birth</label>
                    <input type="date" className="form-input" required value={formData.dateOfBirth} onChange={e => updateField('dateOfBirth', e.target.value)} />
                    <span className="form-helper">Must meet the age criteria for the selected competition</span>
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label form-label--required">Address</label>
                    <textarea className="form-input" rows={3} required value={formData.address} onChange={e => updateField('address', e.target.value)} placeholder="Your full address" />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">City</label>
                    <input type="text" className="form-input" required value={formData.city} onChange={e => updateField('city', e.target.value)} placeholder="City" />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">State</label>
                    <input type="text" className="form-input" required value={formData.state} onChange={e => updateField('state', e.target.value)} placeholder="State" />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Pincode</label>
                    <input type="text" className="form-input" required value={formData.pincode} onChange={e => updateField('pincode', e.target.value)} placeholder="411030" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Guardian Name <span style={{fontSize: '0.75rem', color: 'var(--color-text-muted)'}}>(if under 18)</span></label>
                    <input type="text" className="form-input" value={formData.guardianName} onChange={e => updateField('guardianName', e.target.value)} placeholder="Parent/Guardian name" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Music Details */}
            {currentStep === 2 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Music Details</h2>
                <p className={styles.stepDesc}>Tell us about your musical background</p>
                <div className={styles.formGrid}>
                  <div className="form-group">
                    <label className="form-label form-label--required">Guru / Teacher Name</label>
                    <input type="text" className="form-input" required value={formData.guruName} onChange={e => updateField('guruName', e.target.value)} placeholder="Name of your Guru" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Years of Experience / Training</label>
                    <input type="text" className="form-input" value={formData.experience} onChange={e => updateField('experience', e.target.value)} placeholder="e.g., 5 years" />
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-charcoal)' }}>
                      Ragas for Performance
                    </h4>
                    <p className="form-helper" style={{ marginBottom: 'var(--space-md)', marginTop: 0 }}>
                      For Vocal & Harmonium: Provide the ragas you will present. The judges will choose from among these.
                    </p>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Raga 1</label>
                    <input type="text" className="form-input" value={formData.raga1} onChange={e => updateField('raga1', e.target.value)} placeholder="e.g., Yaman" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Raga 2</label>
                    <input type="text" className="form-input" value={formData.raga2} onChange={e => updateField('raga2', e.target.value)} placeholder="e.g., Bhimpalasi" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Raga 3</label>
                    <input type="text" className="form-input" value={formData.raga3} onChange={e => updateField('raga3', e.target.value)} placeholder="e.g., Bageshri" />
                    <span className="form-helper">Third raga is required for Senior Vocal & Harmonium only</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Video Upload */}
            {currentStep === 3 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Video Upload</h2>
                <p className={styles.stepDesc}>Upload your performance video (up to 15 minutes, max 2GB)</p>
                
                {!videoFile ? (
                  <div
                    className={`${styles.videoUploader} ${isDragging ? styles.videoUploaderDrag : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/mp4,video/webm,video/quicktime,video/x-msvideo"
                      style={{ display: 'none' }}
                      onChange={e => handleVideoSelect(e.target.files[0])}
                    />
                    <span className={styles.uploadIcon}>🎬</span>
                    <h3 className={styles.uploadTitle}>Drag & drop your video here</h3>
                    <p className={styles.uploadSubtitle}>or click to browse files</p>
                    <div className={styles.uploadFormats}>
                      <span className="badge badge--gold">MP4</span>
                      <span className="badge badge--gold">WebM</span>
                      <span className="badge badge--gold">MOV</span>
                      <span className="badge badge--gold">AVI</span>
                    </div>
                    <p className={styles.uploadLimit}>Maximum duration: 15 minutes • Maximum size: 2GB</p>
                  </div>
                ) : (
                  <div className={styles.videoPreview}>
                    {videoPreviewUrl && (
                      <video
                        src={videoPreviewUrl}
                        controls
                        className={styles.videoPlayer}
                      />
                    )}
                    <div className={styles.videoInfo}>
                      <div>
                        <p className={styles.videoName}>{videoFile.name}</p>
                        <p className={styles.videoSize}>
                          {(videoFile.size / (1024 * 1024)).toFixed(1)} MB
                        </p>
                      </div>
                      {uploadProgress < 100 ? (
                        <div className={styles.videoProgress}>
                          <div className="progress-bar">
                            <div className="progress-bar__fill" style={{ width: `${uploadProgress}%` }}></div>
                          </div>
                          <span className={styles.progressText}>{uploadProgress}% uploaded</span>
                        </div>
                      ) : (
                        <span className="badge badge--open">✓ Upload Complete</span>
                      )}
                      <button
                        className="btn btn--ghost btn--sm"
                        onClick={() => { setVideoFile(null); setVideoPreviewUrl(null); setUploadProgress(0); }}
                      >
                        Remove & Re-upload
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Bank Details */}
            {currentStep === 4 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Bank Details</h2>
                <p className={styles.stepDesc}>For prize disbursement (if you win). Prize amount will be credited to this account.</p>
                <div className={styles.formGrid}>
                  <div className="form-group">
                    <label className="form-label">Account Holder Name</label>
                    <input type="text" className="form-input" value={formData.bankAccountHolder} onChange={e => updateField('bankAccountHolder', e.target.value)} placeholder="Name as per bank records" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Bank Name</label>
                    <input type="text" className="form-input" value={formData.bankName} onChange={e => updateField('bankName', e.target.value)} placeholder="e.g., State Bank of India" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-input" value={formData.bankAccountNumber} onChange={e => updateField('bankAccountNumber', e.target.value)} placeholder="Your account number" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">IFSC Code</label>
                    <input type="text" className="form-input" value={formData.bankIFSC} onChange={e => updateField('bankIFSC', e.target.value)} placeholder="e.g., SBIN0001234" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Payment */}
            {currentStep === 5 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Payment</h2>
                <p className={styles.stepDesc}>Entry fee of ₹350/- via PhonePe (Sandbox/Test Mode)</p>
                <div className={styles.paymentCard}>
                  <div className={styles.paymentSummary}>
                    <div className={styles.paymentRow}>
                      <span>Competition</span>
                      <strong>{competitionName}</strong>
                    </div>
                    <div className={styles.paymentRow}>
                      <span>Participant</span>
                      <strong>{formData.fullName || '—'}</strong>
                    </div>
                    <div className={styles.paymentRow}>
                      <span>Entry Fee</span>
                      <strong className={styles.paymentAmount}>₹350.00</strong>
                    </div>
                  </div>

                  {paymentCompleted ? (
                    <div className={styles.paymentSuccess}>
                      <span className={styles.paymentSuccessIcon}>✅</span>
                      <h3 className={styles.paymentSuccessTitle}>Payment Successful!</h3>
                      <p className={styles.paymentSuccessText}>
                        Transaction ID: <strong>{transactionId}</strong>
                      </p>
                      <p className={styles.paymentNote}>You can proceed to review your registration.</p>
                    </div>
                  ) : (
                    <div className={styles.paymentActions}>
                      <div className={styles.paymentGatewayInfo}>
                        <span className={styles.paymentIcon}>📱</span>
                        <p className={styles.paymentGatewayText}>
                          You will be redirected to <strong>PhonePe</strong> to complete the payment.
                        </p>
                        <p className={styles.paymentNote}>
                          🧪 This is a <strong>sandbox/test</strong> environment. No real money will be charged.
                        </p>
                      </div>

                      {paymentError && (
                        <div className={styles.paymentErrorBox}>
                          <span>⚠️</span>
                          <p>{paymentError}</p>
                        </div>
                      )}

                      <button
                        className={`btn btn--gold btn--lg ${styles.payButton}`}
                        onClick={handlePayment}
                        disabled={paymentLoading}
                      >
                        {paymentLoading ? (
                          <>
                            <span className={styles.spinner}></span>
                            Processing...
                          </>
                        ) : (
                          <>💳 Pay ₹350 with PhonePe</>
                        )}
                      </button>

                      <p className={styles.paymentSecure}>
                        🔒 Secured by PhonePe Payment Gateway
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 6: Review */}
            {currentStep === 6 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Review & Submit</h2>
                <p className={styles.stepDesc}>Please review all your details before submitting</p>
                
                <div className={styles.reviewSection}>
                  <h4 className={styles.reviewSectionTitle}>Personal Details</h4>
                  <div className={styles.reviewGrid}>
                    <div><span>Name:</span> <strong>{formData.fullName}</strong></div>
                    <div><span>Email:</span> <strong>{formData.email}</strong></div>
                    <div><span>Phone:</span> <strong>{formData.phone}</strong></div>
                    <div><span>DOB:</span> <strong>{formData.dateOfBirth}</strong></div>
                    <div><span>City:</span> <strong>{formData.city}, {formData.state}</strong></div>
                    {formData.guardianName && <div><span>Guardian:</span> <strong>{formData.guardianName}</strong></div>}
                  </div>
                </div>

                <div className={styles.reviewSection}>
                  <h4 className={styles.reviewSectionTitle}>Music Details</h4>
                  <div className={styles.reviewGrid}>
                    <div><span>Guru:</span> <strong>{formData.guruName}</strong></div>
                    <div><span>Experience:</span> <strong>{formData.experience || 'N/A'}</strong></div>
                    {formData.raga1 && <div><span>Raga 1:</span> <strong>{formData.raga1}</strong></div>}
                    {formData.raga2 && <div><span>Raga 2:</span> <strong>{formData.raga2}</strong></div>}
                    {formData.raga3 && <div><span>Raga 3:</span> <strong>{formData.raga3}</strong></div>}
                  </div>
                </div>

                <div className={styles.reviewSection}>
                  <h4 className={styles.reviewSectionTitle}>Video</h4>
                  <p>{videoFile ? `✅ ${videoFile.name} (${(videoFile.size / (1024 * 1024)).toFixed(1)} MB)` : '⚠️ No video uploaded'}</p>
                </div>

                <div className={styles.reviewSection}>
                  <h4 className={styles.reviewSectionTitle}>Bank Details</h4>
                  <div className={styles.reviewGrid}>
                    <div><span>Account Holder:</span> <strong>{formData.bankAccountHolder || 'N/A'}</strong></div>
                    <div><span>Bank:</span> <strong>{formData.bankName || 'N/A'}</strong></div>
                  </div>
                </div>

                <div className={styles.agreeSection}>
                  <label className={styles.checkbox}>
                    <input type="checkbox" checked={agreeRules} onChange={e => setAgreeRules(e.target.checked)} />
                    <span className={styles.checkmark}></span>
                    <span>I have read and agree to all the <a href="/rules" target="_blank">rules and regulations</a> of the competition. I confirm that all the information provided is correct.</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className={styles.formActions}>
              {currentStep > 1 && (
                <button className="btn btn--outline" onClick={prevStep}>
                  ← Previous
                </button>
              )}
              <div className={styles.formActionsRight}>
                {currentStep < 6 ? (
                  <button className="btn btn--primary" onClick={nextStep}>
                    Next Step →
                  </button>
                ) : (
                  <button
                    className="btn btn--gold btn--lg"
                    onClick={handleSubmit}
                    disabled={!agreeRules}
                  >
                    Submit Registration
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
