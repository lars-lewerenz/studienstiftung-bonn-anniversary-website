import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description?: string;
  href?: string;
  date: string;
  location: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, href, date, location }) => {
  const content = (
      <div className="flex flex-col space-y-3">
        <h3 className="text-xl font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <div className="flex items-center text-white/80 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-white/80 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        {description && <p className="text-white/80">{description}</p>}
        <div className="flex items-center text-white mt-2">
        <span className="text-sm">
          {href ? 'Zur Anmeldung' : 'Keine Anmeldung erforderlich'}
        </span>
          {href && (
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          )}
        </div>
      </div>
  );

  const cardClasses =
      'group bg-white/20 backdrop-blur-md rounded-xl p-6 transition-all hover:bg-white/30 hover:shadow-lg';

  return href ? (
      <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClasses}
      >
        {content}
      </a>
  ) : (
      <div className={cardClasses}>
        {content}
      </div>
  );
};

export default LinkCard;
