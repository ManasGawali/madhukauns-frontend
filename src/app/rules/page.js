'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import CompetitionIcon from '@/components/CompetitionIcon';

const rulesData = [
  {
    id: 'common',
    title: 'Common Rules & Regulations',
    type: null,
    rules: [
      'These competitions are open to amateurs only.',
      'The decision of the appointed judges will be final and legally binding on all participants.',
      'No expenses such as lodging & boarding, travel fare, conveyance or any other expenses will be paid or reimbursed to participants and their accompanists.',
      'All participants must produce their age proof on the day of their performance.',
      'Participants must be present at least half an hour before the time stated for their performance.',
      'Each participant must mention his/her Mobile number and email address in the application form (both mandatory).',
      'The Winner (First Prize Winner only) who has won this competition in the same age group in any preceding years is not eligible to participate again.',
      'Right of admission reserved.',
      'Results of each segment will be announced soon after the competition. Prize amount will be credited to the bank account mentioned in the form. Prize amount will not be paid in cash or by cheque.',
      'While announcement of result, attendance of each participant is compulsory. Prizes will be given to winners subject to their attendance.',
      'Participant will be disqualified if found speaking to the judges or asking friends/relatives to do the same.',
      'Certificate of participation will be given to each participant.',
      'All participants must submit the form and pay the entrance fees of Rs. 350/- (Rupees Three Hundred Fifty Only) through online mode only and produce the e-acknowledgement receipt on competition day.',
      'Please don\'t try to fill the form again. If you wish to alter any field, email the details to madhukauns@gmail.com.',
      'In case of cancellation of participation, entrance fees will not be returned.',
      'The number and amount of prizes will depend upon the quantitative number of participants and their qualitative performances.',
      'All legal matters will be under Pune Jurisdiction only.'
    ]
  },
  {
    id: 'kathak',
    title: 'Kathak Dance Competition Rules',
    type: 'KATHAK',
    rules: [
      'Junior Group: Age must be 10 years complete to 18 years as on 31.12.2025. DOB between 01.01.2008 to 31.12.2015.',
      'Senior Group: Age must be 18 years complete to 30 years as on 31.12.2025. DOB between 01.01.1995 to 31.12.2007.',
      'Participants will make their own arrangements about orchestra, make-up, accompanists etc. at their own cost.',
      'Recorded music, only in MP3 format on PENDRIVE is permitted.',
      'Dance performance on film music or fusion is NOT allowed.',
      'Participants must include Nritta and Nrittya in their performance (separate marks are allocated).',
      'Time limit for performance is 10 minutes maximum for each participant.',
      'Forms must be submitted on or before 6th January 2026.',
      'Only first 25 entries will be accepted in both Junior and Senior Group.'
    ]
  },
  {
    id: 'tabla',
    title: 'Tabla Solo Competition Rules',
    type: 'TABLA',
    rules: [
      'Age must be 14 years complete to 35 years as on 31.12.2025. DOB between 01.01.1990 to 31.12.2011.',
      'Each participant must carry his/her instrument along with Electronic Tanpura.',
      'Time limit for performance is 12 minutes maximum for each participant.',
      'Organizers have arranged accompanists for Harmonium Lehra. Make your own arrangement at your cost if not comfortable.',
      'Only Harmonium and Tanpura are permissible instruments for accompaniment.',
      'Participant may present any Taal of his/her choice.',
      'Only first 40 entries will be accepted.',
      'Forms must be submitted on or before 6th January 2026.'
    ]
  },
  {
    id: 'harmonium',
    title: 'Harmonium Solo Competition Rules',
    type: 'HARMONIUM',
    rules: [
      'Age must be 14 years complete to 35 years as on 31.12.2025. DOB between 01.01.1990 to 31.12.2011.',
      'Each participant must carry his/her instrument along with Electronic Tanpura.',
      'Time limit for performance is 15 minutes maximum. Participant has to perform in Vilambit/Madhya Laya and Drut Laya.',
      'Participant has complete freedom for selection of Bandish or Gaat.',
      'Organizers have arranged accompanists on Tabla. Make your own arrangement at your cost if not comfortable.',
      'Participant must present any raga as chosen by the judges among three ragas given by you.',
      'Only first 30 entries will be accepted.',
      'Forms must be submitted on or before 30th December 2025.'
    ]
  },
  {
    id: 'vocal',
    title: 'Vocal Competition Rules',
    type: 'VOCAL',
    rules: [
      'Junior Group: Age must be 12 years complete to 18 years as on 31.12.2025. DOB between 01.01.2008 to 31.12.2013.',
      'Senior Group: Age must be 18 years complete to 35 years as on 31.12.2025. DOB between 01.01.1990 to 31.12.2007.',
      'No instruments other than Tanpura, Harmonium and Tabla will be allowed.',
      'Organizers have arranged accompanists for Harmonium and Tabla. Make your own arrangement at your cost if not comfortable.',
      'Organizers have arranged Tanpura, Harmonium and Tabla of Kali 1,2,4,5 sur only.',
      'Each participant must carry his/her electronic Tanpura.',
      'Junior Group: Time limit is 10 minutes maximum. Senior Group: Time limit is 15 minutes maximum.',
      'Junior Group must present any raga chosen by judges among two ragas given by participant.',
      'Senior Group must present any raga chosen by judges among three ragas given by participant.',
      'Junior Group can present khayal in Vilambit or Madhya or Drut Laya.',
      'Junior Group: Only first 20 entries. Senior Group: Only first 40 entries will be accepted.',
      'Forms must be submitted on or before 30th December 2025.'
    ]
  }
];

function SectionIcon({ type, className }) {
  if (!type) {
    // Common rules: no illustration, so use a simple inline SVG (clipboard)
    return (
      <span className={className} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4h6v3H9z" />
          <path d="M8.5 12h7M8.5 16h5" />
        </svg>
      </span>
    );
  }
  return <CompetitionIcon type={type} className={className} sizes="48px" />;
}

export default function RulesPage() {
  const [activeSection, setActiveSection] = useState('common');

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>Rules & Regulations</h1>
            <div className="section-header__ornament">
              <span className="section-header__ornament-icon">✦</span>
            </div>
            <p className={styles.subtitle}>
              Please read all rules carefully before submitting your registration form
            </p>
          </div>
        </div>
        <div className="container">
          <div className={styles.content}>
            <nav className={styles.sidebar}>
              {rulesData.map(section => (
                <button
                  key={section.id}
                  className={`${styles.sidebarBtn} ${activeSection === section.id ? styles.sidebarBtnActive : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <SectionIcon type={section.type} className={styles.sidebarIcon} />
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
            <div className={styles.rulesContent}>
              {rulesData.filter(s => s.id === activeSection).map(section => (
                <div key={section.id} className={styles.rulesSection}>
                  <h2 className={styles.rulesSectionTitle}>
                    <SectionIcon type={section.type} className={styles.titleIcon} />
                    {section.title}
                  </h2>
                  <ol className={styles.rulesList}>
                    {section.rules.map((rule, i) => (
                      <li key={i} className={styles.rulesItem}>{rule}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
