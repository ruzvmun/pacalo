import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '@/@pacalo.core/data/constants';
import { getAssetPath } from '@/utils/assets';

const AboutUsSectionNew = () => {
  const partners = [
    { name: 'Fresenius Kidney Care', logo: getAssetPath('/assets/images/logos/fraseneus.png'), url: 'https://www.freseniuskidneycare.com/' },
    { name: 'NetSpap', logo: getAssetPath('/assets/images/logos/netspap-bw.png'), url: 'https://netspap.com/' },
    { name: 'OSF Healthcare', logo: getAssetPath('/assets/images/logos/osf.png'), url: 'https://www.osfhealthcare.org/' }
  ];

  return (
    <section id="about-us" className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* About Us - Single Column */}
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm text-center rounded-2xl p-6 lg:p-10 border border-white/20 shadow-xl">
            <div className="mb-8 flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h2>
              <div className="w-20 h-1.5 bg-yellow-400 rounded-full"></div>
            </div>

            <div className="space-y-6 text-base lg:text-lg leading-relaxed">
              <p className="text-gray-100">
                <strong className="text-yellow-400 text-lg lg:text-xl">PACALO Transportation</strong> is highly qualified staff, ranging from licensed EMTs to CPR-certified professionals, deliver safe, reliable non-emergency medical transport, including stretcher, wheelchair, and ambulatory services, across McLean County, Central Illinois, and beyond, offering door-to-door care as a fully credentialed and compliant Illinois provider serving Medicaid, private insurance, and private-pay clients for routine appointments, hospital releases, and events.
              </p>

              <div className="bg-yellow-400/20 rounded-xl p-5 border border-yellow-400/30 mt-6">
                <p className="text-yellow-400 font-bold text-xl lg:text-2xl text-center">
                  Call us for peace of mind!
                </p>
              </div>
            </div>

            {/* Partners - Inside About Us */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">Our Partners</h3>
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                {partners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us - Separate Row */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-10 border border-white/10 shadow-xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Questions about availability, rates, or scheduling? Send us a note or give us a call.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="flex flex-row md:flex-col items-center md:justify-center p-5 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/10 md:text-center gap-4 md:gap-0"
              >
                <div className="text-yellow-400 text-3xl md:mb-3 flex-shrink-0">
                  <FaPhone />
                </div>
                <div className="flex-1 md:flex-auto">
                  <span className="block text-xs text-gray-300 mb-2">Call Us Anytime</span>
                  <span className="text-lg font-bold">(309) 307-4564</span>
                </div>
              </a>

              <a
                href={CONTACT.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row md:flex-col items-center md:justify-center p-5 bg-green-600/20 rounded-xl hover:bg-green-600/30 transition-all border border-green-500/30 md:text-center gap-4 md:gap-0"
              >
                <div className="text-green-400 text-3xl md:mb-3 flex-shrink-0">
                  <FaWhatsapp />
                </div>
                <div className="flex-1 md:flex-auto">
                  <span className="block text-xs text-gray-300 mb-2">WhatsApp</span>
                  <span className="text-lg font-bold">(309) 307-4564</span>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="flex flex-row md:flex-col items-center md:justify-center p-5 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/10 md:text-center gap-4 md:gap-0"
              >
                <div className="text-yellow-400 text-3xl md:mb-3 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div className="flex-1 md:flex-auto">
                  <span className="block text-xs text-gray-300 mb-2">Email Us</span>
                  <span className="text-lg font-bold break-all">{CONTACT.EMAIL}</span>
                </div>
              </a>

              <div className="flex flex-row md:flex-col items-center md:justify-center p-5 bg-yellow-400/20 rounded-xl border border-yellow-400/30 md:text-center gap-4 md:gap-0">
                <div className="text-yellow-400 text-3xl md:mb-3 flex-shrink-0">
                  <FaClock />
                </div>
                <div className="flex-1 flex flex-col md:flex-auto">
                  <span className="block text-xs text-gray-300 mb-2">Service Hours</span>
                  <span className="text-lg font-bold text-yellow-400">24/7 Available</span>
                  <span className="text-xs text-gray-400 mt-1">Monday - Sunday</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSectionNew;