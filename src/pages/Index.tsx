import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/components/Logo';
import LinkCard from '@/components/LinkCard';

const Index = () => {
  const links = [
    {
      title: "Sport & Studieninfo",
      subtitle: null,
      description: "Sportlicher Auftakt mit Spikeball & Co. – dazu Infos zur Studienstiftung und Stipendienbewerbung für alle Interessierten",
      date: "Samstag, 21.06.2025, 13 – 17 Uhr",
      location: "Wiese am Poppelsdorfer Schloss (Clemens-August-Weg)",
      href: null
    },
    {
      title: "Führung und Zeichenkurs im Botanischen Garten",
      subtitle: null,
      description: "Zu jeder vollen Stunde",
      date: "Montag, 23.06.2025, 12 – 18 Uhr",
      location: "Vor dem Tropenhaus (Meckenheimer Allee 171)",
      href: "https://lets-meet.org/reg/8bc4061e5b45e8ba39"
    },
    {
      title: "Poetry- & Science-Slam-Abend",
      subtitle: null,
      description: null,
      date: "Mittwoch, 25.06.2025, 19 Uhr",
      location: "Hörsaal im alten anatomischen Institut (Nussallee 10)",
      href: "https://lets-meet.org/reg/76937f5bd03010655b"
    },
    {
      title: "Vortrag von Philosoph Markus Gabriel",
      subtitle: null,
      description: "Thema: „Wissen, Wahrheit und gesellschaftliche Verantwortung“",
      date: "Donnerstag, 26.06.2025, 19 Uhr",
      location: "Lipschitz-Saal im mathematischen Institut (Endenicher Allee 60)",
      href: "https://lets-meet.org/reg/b41d5251640d2a7818"
    },
    {
      title: "Sommerfest",
      subtitle: null,
      description: "Mit Dr. Eckart von Hirschhausen und musikalischen Beiträgen sowie Buffet",
      date: "Freitag, 27.06.2025, 18 Uhr",
      location: "Wolfgang-Paul-Hörsaal (Kreuzbergweg 8)",
      href: "https://lets-meet.org/reg/2c091d3b22f9ecd4de"
    }
  ];

  const [headingVisible, setHeadingVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);
  useEffect(() => {
    setHeadingVisible(true);
    setTimeout(() => setSubtitleVisible(true), 250);
    setTimeout(() => setDescVisible(true), 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Gradient Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-turquoise to-orange z-0"></div>
      <div className="absolute inset-0 backdrop-blur-[100px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full py-6 px-4 md:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <Logo />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 md:px-8 py-10 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight transition-opacity duration-1000 ${headingVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                Jubiläumswoche Bonn
              </h1>
              <p className={`text-xl md:text-2xl text-white/80 max-w-2xl mx-auto transition-opacity duration-1000 ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}>
                Wir feiern unseren 100. Geburtstag!
              </p>
              <p className={`text-xl md:text-2xl text-white/80 max-w-2xl mx-auto transition-opacity duration-1000 ${descVisible ? 'opacity-100' : 'opacity-0'}`}>
                Stipendiat:innen der Studienstiftung laden ein
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {links.map((link, index) => (
                <LinkCard
                  key={index}
                  title={link.title}
                  subtitle={link.subtitle}
                  description={link.description}
                  href={link.href}
                  date={link.date}
                  location={link.location}
                />
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`w-full py-6 px-4 md:px-8 transition-opacity duration-1000 ${descVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto">
            <div className="text-center text-white/60 text-sm">
              © {new Date().getFullYear()} <a href="https://www.studienstiftung.de" className="footer-link underline-animate">Studienstiftung des deutschen Volkes</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
