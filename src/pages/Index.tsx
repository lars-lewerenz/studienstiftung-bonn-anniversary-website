
import React from 'react';
import Logo from '@/components/Logo';
import LinkCard from '@/components/LinkCard';

const Index = () => {
  const links = [
    {
      title: "Sport & Studieninfo",
      description: "",
      date: "Samstag, 21.06.2025, 16 Uhr",
      location: "Wiese im Hofgarten",
      href: null
    },
    {
      title: "Führung Botanischer Garten",
      description: "Stündliche Führungen zu jeder vollen Stunde",
      date: "Montag, 23.06.2025, 12 – 18 Uhr",
      location: "Meckenheimer Allee 171 (vor dem Tropenhaus)",
      href: "https://lets-meet.org/reg/8bc4061e5b45e8ba39"
    },
    {
      title: "Poetry- & Science-Slam",
      description: "",
      date: "Mittwoch, 25.06.2025, 19 Uhr",
      location: "Hörsaal im alten anatomischen Institut (Nussallee 10)",
      href: "https://lets-meet.org/reg/76937f5bd03010655b"
    },
    {
      title: "Vortrag Markus Gabriel",
      description: "",
      date: "Donnerstag, 26.06.2025, 19 Uhr",
      location: "Lipschitz-Saal, Endenicher Allee 60",
      href: "https://lets-meet.org/reg/b41d5251640d2a7818"
    },
    {
      title: "Sommerfest",
      description: "",
      date: "Freitag, 27.06.2025, 18 Uhr",
      location: "Wolfgang-Paul-Hörsaal (Kreuzbergweg 8)",
      href: "https://lets-meet.org/reg/2c091d3b22f9ecd4de"
    }
  ];

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Jubiläumswoche Bonn
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                Wir feiern unseren 100. Geburtstag!
              </p>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                Stipendiat:innen der Studienstiftung laden ein
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {links.map((link, index) => (
                  <LinkCard
                  key={index}
                  title={link.title}
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
        <footer className="w-full py-6 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="text-center text-white/60 text-sm">
              © {new Date().getFullYear()} Studienstiftung des deutschen Volkes
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
