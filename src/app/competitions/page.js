import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompetitionCard from '@/components/CompetitionCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Competitions | Madhukauns',
  description: 'Browse all Indian Classical Music competitions - Vocal, Tabla Solo, Kathak Dance & Harmonium Solo. Register now.',
};

const competitions = [
  {
    id: 'harmonium',
    name: 'Harmonium Solo Competition',
    type: 'HARMONIUM',
    ageGroup: 'OPEN',
    date: '2026-01-03T08:30:00+05:30',
    maxEntries: 30,
    currentEntries: 0,
    entryFee: 350,
    status: 'OPEN',
    deadlineDate: '2025-12-30',
    timeLimit: 15,
    ageMin: 14,
    ageMax: 35,
    prizes: { first: { label: 'Rs. 8,001/-' }, second: { label: 'Rs. 6,001/-' }, third: { label: 'Rs. 4,001/-' } }
  },
  {
    id: 'vocal-junior',
    name: 'Hindustani Classical Vocal – Junior Group',
    type: 'VOCAL',
    ageGroup: 'JUNIOR',
    date: '2026-01-03T14:00:00+05:30',
    maxEntries: 20,
    currentEntries: 0,
    entryFee: 350,
    status: 'OPEN',
    deadlineDate: '2025-12-30',
    timeLimit: 10,
    ageMin: 12,
    ageMax: 18,
    prizes: { first: { label: 'Rs. 4,001/-' }, second: { label: 'Rs. 3,001/-' }, third: { label: 'Rs. 2,001/-' } }
  },
  {
    id: 'vocal-senior',
    name: 'Hindustani Classical Vocal – Senior Group',
    type: 'VOCAL',
    ageGroup: 'SENIOR',
    date: '2026-01-04T08:30:00+05:30',
    maxEntries: 40,
    currentEntries: 0,
    entryFee: 350,
    status: 'OPEN',
    deadlineDate: '2025-12-30',
    timeLimit: 15,
    ageMin: 18,
    ageMax: 35,
    prizes: { first: { label: 'Rs. 8,001/-' }, second: { label: 'Rs. 6,001/-' }, third: { label: 'Rs. 4,001/-' } }
  },
  {
    id: 'kathak-junior',
    name: 'Kathak Dance – Junior Group',
    type: 'KATHAK',
    ageGroup: 'JUNIOR',
    date: '2026-01-10T08:30:00+05:30',
    maxEntries: 25,
    currentEntries: 0,
    entryFee: 350,
    status: 'OPEN',
    deadlineDate: '2026-01-06',
    timeLimit: 10,
    ageMin: 10,
    ageMax: 18,
    prizes: { first: { label: 'Rs. 4,001/-' }, second: { label: 'Rs. 3,001/-' }, third: { label: 'Rs. 2,001/-' } }
  },
  {
    id: 'kathak-senior',
    name: 'Kathak Dance – Senior Group',
    type: 'KATHAK',
    ageGroup: 'SENIOR',
    date: '2026-01-10T08:30:00+05:30',
    maxEntries: 25,
    currentEntries: 0,
    entryFee: 350,
    status: 'OPEN',
    deadlineDate: '2026-01-06',
    timeLimit: 10,
    ageMin: 18,
    ageMax: 30,
    prizes: { first: { label: 'Rs. 8,001/-' }, second: { label: 'Rs. 6,001/-' }, third: { label: 'Rs. 4,001/-' } }
  },
  {
    id: 'tabla',
    name: 'Tabla Solo Competition',
    type: 'TABLA',
    ageGroup: 'OPEN',
    date: '2026-01-11T08:30:00+05:30',
    maxEntries: 40,
    currentEntries: 0,
    entryFee: 350,
    status: 'OPEN',
    deadlineDate: '2026-01-06',
    timeLimit: 12,
    ageMin: 14,
    ageMax: 35,
    prizes: { first: { label: 'Rs. 8,001/-' }, second: { label: 'Rs. 6,001/-' }, third: { label: 'Rs. 4,001/-' } }
  }
];

export default function CompetitionsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>All Competitions</h1>
            <div className="section-header__ornament">
              <span className="section-header__ornament-icon">✦</span>
            </div>
            <p className={styles.subtitle}>
              Choose your discipline and register before the deadline. Entry fee: ₹350/- (online only).
            </p>
          </div>
        </div>
        <div className="container">
          <div className={styles.grid}>
            {competitions.map((comp, i) => (
              <CompetitionCard key={comp.id} competition={comp} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
