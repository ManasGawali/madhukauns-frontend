import Image from 'next/image';

// One place to map a competition type to its illustration.
export const typeImages = {
  VOCAL: { src: '/images/art/vocal.png', alt: 'Hindustani vocalist with tanpura' },
  TABLA: { src: '/images/art/tabla.png', alt: 'Tabla pair' },
  KATHAK: { src: '/images/art/kathak.png', alt: 'Kathak dancer' },
  HARMONIUM: { src: '/images/art/harmonium.png', alt: 'Harmonium' },
};

/**
 * Renders the illustration for a competition type.
 * The parent controls the box size (width/height in CSS); the image
 * fills it with object-fit: contain, so nothing is cropped or stretched.
 */
export default function CompetitionIcon({ type, className = '', sizes = '56px' }) {
  const img = typeImages[type];
  if (!img) return <span className={className} aria-hidden="true">♪</span>;

  return (
    <span className={className} style={{ position: 'relative', display: 'block' }}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        style={{ objectFit: 'contain' }}
      />
    </span>
  );
}
