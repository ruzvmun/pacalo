import type React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const certifications: { highlight: string | null; text: string }[] = [
  { highlight: "IDHS", text: "NEMT Provider" },
  { highlight: "IDPH", text: "Licensed Stretcher Van" },
  { highlight: "EMT / CPR", text: "Qualified" }
];

const CertificationsStrip: React.FC = () => (
  <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-2">
    {certifications.map(({ highlight, text }) => (
      <div key={text} className="flex items-center gap-1.5 md:gap-2">
        <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" aria-hidden />
        <span className="text-sm md:text-base text-gray-900">
          {highlight && (
            <strong className="font-extrabold text-pacalo-blue">{highlight}</strong>
          )}
          <span className="hidden md:inline">
            {highlight && ' '}
            {text}
          </span>
        </span>
      </div>
    ))}
  </div>
);

export default CertificationsStrip;
