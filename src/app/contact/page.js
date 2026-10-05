'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to the backend
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>Contact Us</h1>
            <div className="section-header__ornament">
              <span className="section-header__ornament-icon">✦</span>
            </div>
            <p className={styles.subtitle}>
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.content}>
            {/* Contact Info */}
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📍</span>
                <h3 className={styles.infoTitle}>Address</h3>
                <p>B-2, Mangalmurty Complex,<br />Sinhagad Road, Pune – 411030</p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🏛️</span>
                <h3 className={styles.infoTitle}>Venue</h3>
                <p>Vishnu Vinayak Swarmandir,<br />Gandharva Mahavidyalaya,<br />Shaniwar Peth, Near Prabhat Talkies,<br />Pune – 411030</p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📞</span>
                <h3 className={styles.infoTitle}>Phone</h3>
                <p>
                  <a href="tel:+919881425448">+91 98814 25448</a><br />
                  <a href="tel:+919850082435">+91 98500 82435</a><br />
                  <a href="tel:+919604329412">+91 96043 29412</a>
                </p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>✉️</span>
                <h3 className={styles.infoTitle}>Email</h3>
                <p><a href="mailto:madhukauns@gmail.com">madhukauns@gmail.com</a></p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button className="btn btn--outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className={styles.formTitle}>Send us a Message</h2>
                  <div className="form-group">
                    <label className="form-label form-label--required">Your Name</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is this about?"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Message</label>
                    <textarea
                      className="form-input"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..."
                    />
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <h2 className={styles.mapTitle}>Find Us</h2>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3557953556!2d73.85!3d18.515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGandharva%20Mahavidyalaya%20Pune!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                allowFullScreen=""
                loading="lazy"
                title="Gandharva Mahavidyalaya Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
