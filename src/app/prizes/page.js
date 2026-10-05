import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import CompetitionIcon from '@/components/CompetitionIcon';

export const metadata = {
  title: 'Prizes | Madhukauns',
  description: 'View prize details for all Indian Classical Music competitions organized by Madhukauns.',
};

const prizeCategories = [
  {
    title: 'Kathak Dance – Junior Group',
    type: 'KATHAK',
    ageRange: '10 to 18 years',
    prizes: [
      { position: '1st', amount: '₹4,001/-', icon: '🥇' },
      { position: '2nd', amount: '₹3,001/-', icon: '🥈' },
      { position: '3rd', amount: '₹2,001/-', icon: '🥉' },
    ]
  },
  {
    title: 'Kathak Dance – Senior Group',
    type: 'KATHAK',
    ageRange: '18 to 30 years',
    prizes: [
      { position: '1st', amount: '₹8,001/-', icon: '🥇' },
      { position: '2nd', amount: '₹6,001/-', icon: '🥈' },
      { position: '3rd', amount: '₹4,001/-', icon: '🥉' },
    ]
  },
  {
    title: 'Tabla Solo',
    type: 'TABLA',
    ageRange: '14 to 35 years',
    prizes: [
      { position: '1st', amount: '₹8,001/-', icon: '🥇' },
      { position: '2nd', amount: '₹6,001/-', icon: '🥈' },
      { position: '3rd', amount: '₹4,001/-', icon: '🥉' },
    ]
  },
  {
    title: 'Harmonium Solo',
    type: 'HARMONIUM',
    ageRange: '14 to 35 years',
    prizes: [
      { position: '1st', amount: '₹8,001/-', icon: '🥇' },
      { position: '2nd', amount: '₹6,001/-', icon: '🥈' },
      { position: '3rd', amount: '₹4,001/-', icon: '🥉' },
    ]
  },
  {
    title: 'Indian Classical Vocal – Junior Group',
    type: 'VOCAL',
    ageRange: '12 to 18 years',
    prizes: [
      { position: '1st', amount: '₹4,001/-', icon: '🥇' },
      { position: '2nd', amount: '₹3,001/-', icon: '🥈' },
      { position: '3rd', amount: '₹2,001/-', icon: '🥉' },
    ]
  },
  {
    title: 'Indian Classical Vocal – Senior Group',
    type: 'VOCAL',
    ageRange: '18 to 35 years',
    prizes: [
      { position: '1st', amount: '₹8,001/-', icon: '🥇' },
      { position: '2nd', amount: '₹6,001/-', icon: '🥈' },
      { position: '3rd', amount: '₹4,001/-', icon: '🥉' },
    ]
  },
];

export default function PrizesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>Prizes &amp; Recognition</h1>
            <div className="section-header__ornament">
              <span className="section-header__ornament-icon">✦</span>
            </div>
            <p className={styles.subtitle}>
              All winners receive cash prizes along with trophies. Certificate of participation for every participant.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.grid}>
            {prizeCategories.map((cat, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader}>
                  <CompetitionIcon type={cat.type} className={styles.cardIcon} sizes="52px" />
                  <div>
                    <h3 className={styles.cardTitle}>{cat.title}</h3>
                    <span className={styles.cardAge}>Age: {cat.ageRange}</span>
                  </div>
                </div>
                <div className={styles.prizesTable}>
                  {cat.prizes.map((prize, j) => (
                    <div key={j} className={`${styles.prizeRow} ${j === 0 ? styles.prizeRowFirst : ''}`}>
                      <span className={styles.prizeIcon}>{prize.icon}</span>
                      <span className={styles.prizePosition}>{prize.position} Prize</span>
                      <span className={styles.prizeAmount}>{prize.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.info}>
            <h3>Additional Information</h3>
            <ul>
              <li>All winners will be given prizes along with trophies.</li>
              <li>Certificate of participation will be given to each participant.</li>
              <li>Prize amount will be credited to the bank account mentioned in the registration form.</li>
              <li>Prize amount will <strong>not</strong> be paid in cash or by cheque.</li>
              <li>The number and amount of prizes depend upon the quantitative number of participants and their qualitative performances.</li>
              <li>Attendance of each participant is compulsory during the announcement of results.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
