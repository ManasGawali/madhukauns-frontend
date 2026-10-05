import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';
import CompetitionIcon from '@/components/CompetitionIcon';

const competitionData = {
  'harmonium': {
    name: 'Harmonium Solo Competition',
    type: 'HARMONIUM',
    date: 'Saturday, 3rd January 2026',
    time: '08:30 AM',
    ageRange: '14 to 35 years',
    dobRange: '01.01.1990 to 31.12.2011',
    timeLimit: '15 minutes',
    maxEntries: 30,
    deadline: '30th December 2025',
    prizes: { first: '₹8,001/-', second: '₹6,001/-', third: '₹4,001/-' },
    rules: [
      'Each participant must carry his/her instrument along with Electronic Tanpura.',
      'Time limit for performance is 15 minutes maximum. Participant has to perform in Vilambit/Madhya Laya and Drut Laya.',
      'Participant has complete freedom for selection of Bandish or Gaat.',
      'The organizers have arranged accompanists on Tabla. If not comfortable, make your own arrangement at your own cost.',
      'Participant must present any raga as chosen by the judges among three ragas given by you.',
      'Only first 30 entries will be accepted.',
    ]
  },
  'vocal-junior': {
    name: 'Hindustani Classical Vocal – Junior Group',
    type: 'VOCAL',
    date: 'Saturday, 3rd January 2026',
    time: '02:00 PM',
    ageRange: '12 to 18 years',
    dobRange: '01.01.2008 to 31.12.2013',
    timeLimit: '10 minutes',
    maxEntries: 20,
    deadline: '30th December 2025',
    prizes: { first: '₹4,001/-', second: '₹3,001/-', third: '₹2,001/-' },
    rules: [
      'No instruments other than Tanpura, Harmonium and Tabla allowed.',
      'Organizers have arranged accompanists for Harmonium and Tabla.',
      'Each participant must carry his/her electronic Tanpura.',
      'Time limit is 10 minutes maximum.',
      'Must present any raga chosen by judges among two ragas given by participant.',
      'Can present khayal in Vilambit or Madhya or Drut Laya.',
      'Only first 20 entries will be accepted.',
    ]
  },
  'vocal-senior': {
    name: 'Hindustani Classical Vocal – Senior Group',
    type: 'VOCAL',
    date: 'Sunday, 4th January 2026',
    time: '08:30 AM',
    ageRange: '18 to 35 years',
    dobRange: '01.01.1990 to 31.12.2007',
    timeLimit: '15 minutes',
    maxEntries: 40,
    deadline: '30th December 2025',
    prizes: { first: '₹8,001/-', second: '₹6,001/-', third: '₹4,001/-' },
    rules: [
      'No instruments other than Tanpura, Harmonium and Tabla allowed.',
      'Organizers have arranged accompanists for Harmonium and Tabla.',
      'Each participant must carry his/her electronic Tanpura.',
      'Time limit is 15 minutes maximum.',
      'Must present any raga chosen by judges among three ragas given by participant.',
      'Only first 40 entries will be accepted.',
    ]
  },
  'kathak-junior': {
    name: 'Kathak Dance – Junior Group',
    type: 'KATHAK',
    date: 'Saturday, 10th January 2026',
    time: '08:30 AM',
    ageRange: '10 to 18 years',
    dobRange: '01.01.2008 to 31.12.2015',
    timeLimit: '10 minutes',
    maxEntries: 25,
    deadline: '6th January 2026',
    prizes: { first: '₹4,001/-', second: '₹3,001/-', third: '₹2,001/-' },
    rules: [
      'Participants will make their own arrangements about orchestra, make-up, accompanists etc. at their own cost.',
      'Recorded music, only in MP3 format on PENDRIVE is permitted.',
      'Dance performance on film music or fusion is NOT allowed.',
      'Must include Nritta and Nrittya in performance (separate marks allocated).',
      'Time limit is 10 minutes maximum.',
      'Only first 25 entries will be accepted.',
    ]
  },
  'kathak-senior': {
    name: 'Kathak Dance – Senior Group',
    type: 'KATHAK',
    date: 'Saturday, 10th January 2026',
    time: '08:30 AM',
    ageRange: '18 to 30 years',
    dobRange: '01.01.1995 to 31.12.2007',
    timeLimit: '10 minutes',
    maxEntries: 25,
    deadline: '6th January 2026',
    prizes: { first: '₹8,001/-', second: '₹6,001/-', third: '₹4,001/-' },
    rules: [
      'Participants will make their own arrangements about orchestra, make-up, accompanists etc. at their own cost.',
      'Recorded music, only in MP3 format on PENDRIVE is permitted.',
      'Dance performance on film music or fusion is NOT allowed.',
      'Must include Nritta and Nrittya in performance (separate marks allocated).',
      'Time limit is 10 minutes maximum.',
      'Only first 25 entries will be accepted.',
    ]
  },
  'tabla': {
    name: 'Tabla Solo Competition',
    type: 'TABLA',
    date: 'Sunday, 11th January 2026',
    time: '08:30 AM',
    ageRange: '14 to 35 years',
    dobRange: '01.01.1990 to 31.12.2011',
    timeLimit: '12 minutes',
    maxEntries: 40,
    deadline: '6th January 2026',
    prizes: { first: '₹8,001/-', second: '₹6,001/-', third: '₹4,001/-' },
    rules: [
      'Each participant must carry his/her instrument along with Electronic Tanpura.',
      'Time limit is 12 minutes maximum.',
      'Organizers have arranged accompanists for Harmonium Lehra.',
      'Only Harmonium and Tanpura are permissible instruments for accompaniment.',
      'Participant may present any Taal of his/her choice.',
      'Only first 40 entries will be accepted.',
    ]
  }
};

export default async function CompetitionDetailPage({ params }) {
  const { id } = await params;
  const comp = competitionData[id];

  if (!comp) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
          <h1>Competition Not Found</h1>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/competitions">← Back to Competitions</Link>
          </p>
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
            <div className={styles.headerIconWrap}>
  <CompetitionIcon type={comp.type} className={styles.headerIcon} sizes="120px" />
</div>
            <h1 className={styles.title}>{comp.name}</h1>
            <div className="section-header__ornament">
              <span className="section-header__ornament-icon">✦</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.content}>
            {/* Main Info */}
            <div className={styles.mainSection}>
              {/* Key Details Card */}
              <div className={styles.detailsCard}>
                <h3>Competition Details</h3>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📅</span>
                    <div>
                      <span className={styles.detailLabel}>Date</span>
                      <span className={styles.detailValue}>{comp.date}</span>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>⏰</span>
                    <div>
                      <span className={styles.detailLabel}>Time</span>
                      <span className={styles.detailValue}>{comp.time}</span>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>👤</span>
                    <div>
                      <span className={styles.detailLabel}>Age Group</span>
                      <span className={styles.detailValue}>{comp.ageRange}</span>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>🎂</span>
                    <div>
                      <span className={styles.detailLabel}>Date of Birth Range</span>
                      <span className={styles.detailValue}>{comp.dobRange}</span>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>⏱️</span>
                    <div>
                      <span className={styles.detailLabel}>Performance Time Limit</span>
                      <span className={styles.detailValue}>{comp.timeLimit}</span>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📝</span>
                    <div>
                      <span className={styles.detailLabel}>Max Entries</span>
                      <span className={styles.detailValue}>{comp.maxEntries} participants</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className={styles.rulesCard}>
                <h3>Rules & Requirements</h3>
                <ol className={styles.rulesList}>
                  {comp.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ol>
                <p className={styles.rulesNote}>
                  📌 Please also read the <Link href="/rules">Common Rules & Regulations</Link> before registering.
                </p>
              </div>

              {/* Venue */}
              <div className={styles.venueCard}>
                <h3>Venue</h3>
                <p>
                  <strong>Vishnu Vinayak Swarmandir</strong><br />
                  Gandharva Mahavidyalaya<br />
                  Shaniwar Peth, Near Prabhat Talkies<br />
                  Pune – 411030
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              {/* Prize Card */}
              <div className={styles.prizeCard}>
                <h3>Prizes</h3>
                <div className={styles.prizeList}>
                  <div className={styles.prizeItem}>
                    <span>🥇</span>
                    <span>1st Prize</span>
                    <strong>{comp.prizes.first}</strong>
                  </div>
                  <div className={styles.prizeItem}>
                    <span>🥈</span>
                    <span>2nd Prize</span>
                    <strong>{comp.prizes.second}</strong>
                  </div>
                  <div className={styles.prizeItem}>
                    <span>🥉</span>
                    <span>3rd Prize</span>
                    <strong>{comp.prizes.third}</strong>
                  </div>
                </div>
                <p className={styles.prizeNote}>+ Trophies for all winners<br />+ Certificate for all participants</p>
              </div>

              {/* Register Card */}
              <div className={styles.registerCard}>
                <h3>Register Now</h3>
                <p className={styles.registerDeadline}>
                  ⏰ Deadline: <strong>{comp.deadline}</strong>
                </p>
                <p className={styles.registerFee}>
                  Entry Fee: <strong>₹350/-</strong> (online only)
                </p>
                <Link href={`/register/${id}`} className="btn btn--gold btn--lg" style={{ width: '100%', textAlign: 'center' }}>
                  Register for this Competition
                </Link>
                <p className={styles.registerNote}>
                  Confirmation will be communicated via email after the last date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
