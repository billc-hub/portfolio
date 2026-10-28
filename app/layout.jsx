import './globals.css';

export const metadata = {
  title: 'Bill Crawley | Founder, CEO & Global Business Executive',
  description: 'Executive portfolio of Bill Crawley based in Dubai, UAE. 30+ years of global leadership scaling enterprises across Africa, Middle East, Asia Pacific, and the US.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-navy-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
