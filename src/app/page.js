import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import HighlightsCarousel from '@/components/HighlightsCarousel';
import CompetitionIcon from '@/components/CompetitionIcon';

// Static competition data (will be fetched from API in production)
const competitions = [
  {
    id: 'harmonium',
    name: 'Harmonium Solo',
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
    name: 'Hindustani Classical Vocal – Junior',
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
    name: 'Hindustani Classical Vocal – Senior',
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
    name: 'Kathak Dance – Junior',
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
    name: 'Kathak Dance – Senior',
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
    name: 'Tabla Solo',
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

const schedule = [
  { date: 'Sat, 3rd Jan 2026', time: '08:30 AM', event: 'Harmonium Solo', type: 'HARMONIUM' },
  { date: 'Sat, 3rd Jan 2026', time: '02:00 PM', event: 'Hindustani Vocal – Junior', type: 'VOCAL' },
  { date: 'Sun, 4th Jan 2026', time: '08:30 AM', event: 'Hindustani Vocal – Senior', type: 'VOCAL' },
  { date: 'Sat, 10th Jan 2026', time: '08:30 AM', event: 'Kathak Dance', type: 'KATHAK' },
  { date: 'Sun, 11th Jan 2026', time: '08:30 AM', event: 'Tabla Solo', type: 'TABLA' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ===== Hero Section ===== */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroImageWrapper}>
            <Image
              src="/images/hero-banner.jpg"
              alt="Indian Classical Music Instruments and Kathak Dancer"
              fill
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroTag}>
              <span className={styles.heroTagDot}></span>
              Registrations Open for January 2026
            </div>
            <h1 className={styles.heroTitle}>
              Indian Classical<br />
              <span className={styles.heroTitleAccent}>Music Competitions</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Vocal · Tabla Solo · Kathak Dance · Harmonium Solo
            </p>
            <p className={styles.heroOrg}>
              Organized by <strong>Madhukauns</strong> &amp; <strong>Gandharva Mahavidyalaya, Pune</strong>
            </p>
            <h3 className={styles.heroLegacy}>
              <strong>Madhukauns Pune</strong> is proud to enter the <em>16th year</em> of its
              prestigious annual National-Level Music Competitions, a platform dedicated to
              nurturing and celebrating excellence in Indian classical music. For 16 years,
              this event has upheld a legacy of inspiring and recognizing young talent across
              the nation.
            </h3>

            <div className={styles.heroActions}>
              <Link href="/competitions" className="btn btn--gold btn--lg" id="hero-register-btn">
                Explore Competitions
              </Link>
              <Link href="/rules" className="btn btn--outline btn--lg" id="hero-rules-btn">
                View Rules
              </Link>
            </div>
            <div className={styles.heroVenue}>
              <span>📍</span>
              <span>Vishnu Vinayak Swarmandir, Gandharva Mahavidyalaya, Shaniwar Peth, Pune</span>
            </div>
          </div>
        </section>

        {/* ===== Highlights Carousel ===== */}
        <HighlightsCarousel />

        {/* ===== About Section ===== */}
        <section className="section section--alt" id="about">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">About the Competitions</h2>
              <div className="section-header__ornament">
                <span className="section-header__ornament-icon">✦</span>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p className={styles.aboutPara}>
                  <strong>Madhukauns</strong>, in association with the prestigious <strong>Gandharva Mahavidyalaya, Pune</strong>,
                  brings you a celebration of Indian classical performing arts. These competitions are designed to
                  nurture and showcase the talent of amateur artists across four glorious disciplines.
                </p>
                <p className={styles.aboutPara}>
                  Whether you&apos;re a vocalist exploring the depths of raga, a tabla player weaving intricate rhythms,
                  a Kathak dancer bringing stories to life, or a harmonium artist filling the air with melody —
                  this is your platform to shine.
                </p>
                <p className={styles.aboutPara}>
                  All competitions are held at the revered <strong>Vishnu Vinayak Swarmandir</strong>, a venue
                  steeped in musical heritage, providing the perfect ambiance for classical performances.
                </p>
                <div className={styles.aboutCta}>
                  <Link href="/competitions" className="btn btn--primary">
                    View All Competitions
                  </Link>
                </div>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src="/images/decorative-pattern.jpg"
                  alt="Indian Classical Music Decorative Pattern"
                  width={500}
                  height={280}
                  className={styles.aboutImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Schedule Section ===== */}
        <section className="section" id="schedule">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Competition Schedule</h2>
              <div className="section-header__ornament">
                <span className="section-header__ornament-icon">✦</span>
              </div>
              <p className="section-header__subtitle">
                January 2026 at Vishnu Vinayak Swarmandir, Gandharva Mahavidyalaya, Pune
              </p>
            </div>
            <div className={styles.timeline}>
              {schedule.map((item, i) => (
                <div key={i} className={`${styles.timelineItem} animate-fadeInUp animate-delay-${Math.min(i + 1, 6)}`}>
                  <div className={styles.timelineDot}>
                    <CompetitionIcon type={item.type} className={styles.timelineIcon} sizes="40px" />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineDate}>{item.date}</span>
                    <h4 className={styles.timelineEvent}>{item.event}</h4>
                    <span className={styles.timelineTime}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Competitions Grid ===== */}
        <section className="section section--warm" id="competitions-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Our Competitions</h2>
              <div className="section-header__ornament">
                <span className="section-header__ornament-icon">✦</span>
              </div>
              <p className="section-header__subtitle">
                Choose your discipline and register before the deadline
              </p>
            </div>
            <div className={styles.competitionsGrid}>
              {competitions.map((comp, i) => (
                <CompetitionMiniCard key={comp.id} competition={comp} index={i} />
              ))}
            </div>
            <div className={styles.competitionsAll}>
              <Link href="/competitions" className="btn btn--outline">
                View All Competitions →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Prizes Highlight ===== */}
        <section className="section" id="prizes-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Prizes &amp; Recognition</h2>
              <div className="section-header__ornament">
                <span className="section-header__ornament-icon">✦</span>
              </div>
            </div>
            <div className={styles.prizesGrid}>
              <div className={`${styles.prizeCard} ${styles.prizeFirst}`}>
                <span className={styles.prizeMedal}>🥇</span>
                <span className={styles.prizeLabel}>1st Prize</span>
                <span className={styles.prizeAmount}>Up to ₹8,001</span>
                <span className={styles.prizePlus}>+ Trophy</span>
              </div>
              <div className={`${styles.prizeCard} ${styles.prizeSecond}`}>
                <span className={styles.prizeMedal}>🥈</span>
                <span className={styles.prizeLabel}>2nd Prize</span>
                <span className={styles.prizeAmount}>Up to ₹6,001</span>
                <span className={styles.prizePlus}>+ Trophy</span>
              </div>
              <div className={`${styles.prizeCard} ${styles.prizeThird}`}>
                <span className={styles.prizeMedal}>🥉</span>
                <span className={styles.prizeLabel}>3rd Prize</span>
                <span className={styles.prizeAmount}>Up to ₹4,001</span>
                <span className={styles.prizePlus}>+ Trophy</span>
              </div>
            </div>
            <p className={styles.prizesNote}>
              All winners receive prizes along with trophies. Certificate of participation given to every participant.<br />
              Prize amount credited to bank account. Entry fee: ₹350/- per participant (online only).
            </p>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/prizes" className="btn btn--gold">View Complete Prize Details</Link>
            </div>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className={styles.ctaSection} id="cta">
          <div className={`container ${styles.ctaContent}`}>
            <h2 className={styles.ctaTitle}>Ready to Showcase Your Talent?</h2>
            <p className={styles.ctaSubtitle}>
              Register now for the upcoming competitions. Limited entries available.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/competitions" className="btn btn--gold btn--lg">
                Register Now
              </Link>
              <Link href="/contact" className="btn btn--ghost" style={{ color: 'white' }}>
                Need Help? Contact Us →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* Mini competition card for the home page grid */
function CompetitionMiniCard({ competition, index }) {
  const formattedDate = new Date(competition.date).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  return (
    <div className={`${styles.miniCard} animate-fadeInUp animate-delay-${Math.min(index + 1, 6)}`}>
      <div className={styles.miniCardHeader}>
        <CompetitionIcon type={competition.type} className={styles.miniCardIcon} sizes="56px" />
        <span className={`badge ${competition.status === 'OPEN' ? 'badge--open' : 'badge--closed'}`}>
          {competition.status === 'OPEN' ? '● Open' : '● Closed'}
        </span>
      </div>
      <h4 className={styles.miniCardTitle}>{competition.name}</h4>
      <div className={styles.miniCardMeta}>
        <span>📅 {formattedDate}</span>
        <span>👤 {competition.ageMin}–{competition.ageMax} yrs</span>
      </div>
      <div className={styles.miniCardPrize}>
        🏆 1st Prize: {competition.prizes.first.label}
      </div>
      <Link href={`/competitions/${competition.id}`} className={styles.miniCardLink}>
        View Details &amp; Register →
      </Link>
    </div>
  );
}