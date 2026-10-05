import './globals.css';

export const metadata = {
  title: 'मधुकंस | भारतीय शास्त्रीय संगीत स्पर्धा',
  description: 'हिंदुस्तानी शास्त्रीय गायन, तबला वादन, कथ्थक नृत्य आणि हार्मोनियम वादन स्पर्धा. मधुकंस आणि गांधर्व महाविद्यालय, पुणे यांच्या संयुक्त विद्यमाने आयोजित. आत्ताच नोंदणी करा.',
  keywords: 'भारतीय शास्त्रीय संगीत, गायन स्पर्धा, तबला वादन, कथ्थक नृत्य, हार्मोनियम वादन, पुणे, गांधर्व महाविद्यालय, मधुकंस, Indian classical music, Madhukauns',
  openGraph: {
    title: 'मधुकंस | भारतीय शास्त्रीय संगीत स्पर्धा',
    description: 'पुण्यातील प्रतिष्ठित भारतीय शास्त्रीय संगीत स्पर्धांमध्ये सहभागी व्हा. गायन, तबला, कथ्थक आणि हार्मोनियम विभाग.',
    type: 'website',
    locale: 'mr_IN',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
