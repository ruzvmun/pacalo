import type React from 'react';
import { FaShieldAlt, FaAmbulance, FaHeartbeat, FaUserCheck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const CertificationsStrip: React.FC = () => {
  const certifications = [
    { icon: FaShieldAlt, text: "IDHS NEMT Provider" },
    { icon: FaAmbulance, text: "IDPH Licensed Stretcher Van" },
    { icon: FaHeartbeat, text: "EMT / CPR Qualified" },
    { icon: FaUserCheck, text: "Background-Checked Drivers" }
  ];

  const CertificationCard = ({ icon: Icon, text }: { icon: React.ComponentType<any>, text: string }) => (
    <div className="group flex items-center gap-2.5 px-4 md:px-5 py-2.5 bg-white/95 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-pacalo-blue transition-all duration-300">
      <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg group-hover:bg-pacalo-blue group-hover:text-white transition-colors">
        <Icon className="w-4 h-4 text-pacalo-blue group-hover:text-white" />
      </div>
      <span className="font-bold text-gray-800 text-[13px] md:text-sm whitespace-nowrap">
        {text}
      </span>
    </div>
  );

  return (
    <>
      {/* Mobile: Swiper carousel */}
      <div className="block md:hidden w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.5}
          spaceBetween={16}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
          }}
        >
          {certifications.map(({ icon, text }) => (
            <SwiperSlide key={text}>
              <CertificationCard icon={icon} text={text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Regular flex layout */}
      <div className="hidden md:flex flex-wrap gap-3 md:gap-5 lg:gap-6">
        {certifications.map(({ icon, text }) => (
          <CertificationCard key={text} icon={icon} text={text} />
        ))}
      </div>
    </>
  );
};

export default CertificationsStrip;