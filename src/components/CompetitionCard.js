import Link from 'next/link';
import CompetitionIcon from '@/components/CompetitionIcon';
import styles from './CompetitionCard.module.css';

export default function CompetitionCard({ competition, index = 0 }) {
  const {
    id, name, type, ageGroup, date, maxEntries,
    currentEntries, status, deadlineDate, timeLimit,
    ageMin, ageMax, prizes, entryFee
  } = competition;

  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedTime = new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const formattedDeadline = new Date(deadlineDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const slotsLeft = maxEntries - (currentEntries || 0);
  const isOpen = status === 'OPEN';

  return (
    <div className={`${styles.card} animate-fadeInUp animate-delay-${Math.min(index + 1, 6)}`}
         id={`competition-card-${id || index}`}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <CompetitionIcon type={type} className={styles.icon} sizes="72px" />
        </div>
        <div className={styles.badges}>
          <span className={`badge ${isOpen ? 'badge--open' : 'badge--closed'}`}>
            {isOpen ? '● Open' : '● Closed'}
          </span>
          {ageGroup !== 'OPEN' && (
            <span className="badge badge--gold">{ageGroup}</span>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{name}</h3>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>📅</span>
          <div>
            <span className={styles.detailLabel}>Date</span>
            <span className={styles.detailValue}>{formattedDate}</span>
          </div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>⏰</span>
          <div>
            <span className={styles.detailLabel}>Time</span>
            <span className={styles.detailValue}>{formattedTime}</span>
          </div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>👤</span>
          <div>
            <span className={styles.detailLabel}>Age Group</span>
            <span className={styles.detailValue}>{ageMin} – {ageMax} years</span>
          </div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>⏱️</span>
          <div>
            <span className={styles.detailLabel}>Time Limit</span>
            <span className={styles.detailValue}>{timeLimit} minutes</span>
          </div>
        </div>
      </div>

      {prizes && (
        <div className={styles.prizes}>
          <div className={styles.prizeItem}>
            <span className={styles.prizeIcon}>🥇</span>
            <span className={styles.prizeAmount}>{prizes.first?.label}</span>
          </div>
          <div className={styles.prizeItem}>
            <span className={styles.prizeIcon}>🥈</span>
            <span className={styles.prizeAmount}>{prizes.second?.label}</span>
          </div>
          <div className={styles.prizeItem}>
            <span className={styles.prizeIcon}>🥉</span>
            <span className={styles.prizeAmount}>{prizes.third?.label}</span>
          </div>
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.meta}>
          <div className={styles.slots}>
            <div className={styles.slotsBar}>
              <div
                className={styles.slotsFill}
                style={{ width: `${((currentEntries || 0) / maxEntries) * 100}%` }}
              ></div>
            </div>
            <span className={styles.slotsText}>
              {slotsLeft} of {maxEntries} slots left
            </span>
          </div>
          <span className={styles.deadline}>Deadline: {formattedDeadline}</span>
        </div>

        <div className={styles.actions}>
          <Link href={`/competitions/${id || type.toLowerCase()}`} className={styles.detailsLink}>
            View Details →
          </Link>
          {isOpen && (
            <Link href={`/register/${id || type.toLowerCase()}`} className="btn btn--primary btn--sm">
              Register · ₹{entryFee || 350}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
