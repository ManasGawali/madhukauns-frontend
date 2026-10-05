'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import styles from './HighlightsCarousel.module.css';

const slides = [
  {
    src: '/images/art/vocal.png',
    alt: 'Hindustani vocalist seated with a tanpura',
    title: 'Hindustani Classical Vocal',
    desc: 'Junior and Senior categories. Explore the depths of raga before a live audience.',
  },
  {
    src: '/images/art/kathak.png',
    alt: 'Kathak dancer mid-twirl in red and cream',
    title: 'Kathak Dance',
    desc: 'Tell stories through rhythm, expression and footwork in Junior and Senior categories.',
  },
  {
    src: '/images/art/tabla.png',
    alt: 'A pair of tabla drums',
    title: 'Tabla Solo',
    desc: 'Show your command of taal with intricate compositions and fast layakari.',
  },
  {
    src: '/images/art/harmonium.png',
    alt: 'Ornate wooden harmonium',
    title: 'Harmonium Solo',
    desc: 'Fill the hall with melody in an open category for ages 14 to 35.',
  },
];

const facts = [
  { title: 'Cash prizes', desc: 'Win up to ₹8,001 along with trophies' },
  { title: 'Certificates', desc: 'Every participant receives a certificate' },
  { title: '4 categories', desc: 'Vocal, Tabla, Kathak and Harmonium' },
  { title: 'Amateur only', desc: 'Open to emerging artists' },
];

export default function HighlightsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const count = slides.length;

  const go = useCallback((i) => setActive((i + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % count), 5000);
    return () => clearInterval(t);
  }, [paused, count]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <section className={styles.section} id="highlights" aria-roledescription="carousel" aria-label="Competition highlights">
      <div className="container">
        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles.track} style={{ transform: `translateX(-${active * 100}%)` }}>
            {slides.map((s, i) => (
              <div
                key={s.title}
                className={styles.slide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={i !== active}
              >
                <div className={styles.art}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 480px"
                    style={{ objectFit: 'contain' }}
                    priority={i === 0}
                  />
                </div>
                <div className={styles.copy}>
                  <h3 className={styles.title}>{s.title}</h3>
                  <p className={styles.desc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.arrow} ${styles.prev}`} onClick={() => go(active - 1)} aria-label="Previous slide">‹</button>
          <button className={`${styles.arrow} ${styles.next}`} onClick={() => go(active + 1)} aria-label="Next slide">›</button>

          <div className={styles.dots}>
            {slides.map((s, i) => (
              <button
                key={s.title}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => go(i)}
                aria-label={`Show ${s.title}`}
                aria-current={i === active}
              />
            ))}
          </div>
        </div>

        <ul className={styles.facts}>
          {facts.map((f) => (
            <li key={f.title} className={styles.fact}>
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
