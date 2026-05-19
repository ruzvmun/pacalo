import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaWhatsapp, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { CONTACT } from '@/@pacalo.core/data/constants';

const FloatingActionButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const actions = [
    {
      icon: FaPhone,
      label: 'Call Us',
      href: `tel:${CONTACT.PHONE}`,
      bgColor: 'bg-pacalo-blue',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: CONTACT.WHATSAPP_URL,
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: `mailto:${CONTACT.EMAIL}`,
      bgColor: 'bg-pacalo-gold',
      hoverColor: 'hover:bg-yellow-600',
    },
    {
      icon: FaCalendarAlt,
      label: 'Book',
      href: '/request-ride',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      internal: true,
    },
  ];

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-4 right-4 z-50">
        {isExpanded && (
          <div className="flex flex-col gap-3 mb-3 items-end">
            {actions.map((action, index) => {
              const commonProps = {
                key: action.label,
                className: `flex items-center justify-center gap-3 px-4 py-3 ${action.bgColor} ${action.hoverColor} 
                  text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 
                  animate-in slide-in-from-right fade-in`,
                style: {
                  animationDelay: `${index * 50}ms`,
                  animationDuration: '300ms',
                  animationFillMode: 'backwards',
                },
                onClick: () => setIsExpanded(false),
              };

              if (action.internal) {
                return (
                  <Link to={action.href} {...commonProps}>
                    <action.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold text-sm whitespace-nowrap">{action.label}</span>
                  </Link>
                );
              }

              return (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...commonProps}
                >
                  <action.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm whitespace-nowrap">{action.label}</span>
                </a>
              );
            })}
          </div>
        )}

        <button
          onClick={toggleExpanded}
          className="ml-auto relative flex items-center justify-center px-5 py-3.5 bg-gradient-to-r from-pacalo-blue to-blue-600 
            text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label={isExpanded ? 'Close menu' : 'Open contact menu'}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pacalo-blue to-blue-600 rounded-full blur-md opacity-50 -z-10 scale-110"></div>
          {isExpanded ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <span className="font-bold text-sm whitespace-nowrap">Book Now</span>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingActionButton;
