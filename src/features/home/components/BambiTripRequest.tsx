import type React from 'react';

const BAMBI_EMBED_URL =
  'https://api.hibambi.com/public/trips/embed/trip-request/?access_token=juFOB_JYFtkf-JdhiwlsrGl7ZaH_7aKszJviz1PsYAg';

const BambiTripRequest: React.FC = () => {
  return (
    <div className="w-full min-h-[900px] bg-white rounded-2xl shadow-lg overflow-hidden">
      <iframe
        title="Trip Request Form"
        src={BAMBI_EMBED_URL}
        className="w-full h-full min-h-[900px] border-0"
      />
    </div>
  );
};

export default BambiTripRequest;
