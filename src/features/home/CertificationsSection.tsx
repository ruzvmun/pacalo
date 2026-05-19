import type React from 'react'
import { getAssetPath } from '../../utils/assets'
import { Link } from 'react-router-dom'

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      image: getAssetPath("/assets/images/idhs.jpg"),
      alt: "IDHS logo",
      className: "h-20 w-auto",
      content: (
        <p className="leading-relaxed">
          We are a certified <strong>IDHS Non-Emergency Medical Transportation (NEMT) Service Provider</strong>, essential for serving clients in state-supported programs. This certification ensures we meet all state requirements for compliance and quality care.
        </p>
      )
    },
    {
      image: getAssetPath("/assets/images/cpr.png"),
      alt: "CPR badge",
      className: "h-20 w-20",
      content: (
        <p className="leading-relaxed">
          Our team is <strong>CPR-qualified</strong> to ensure the highest standard of patient care and immediate response during every transport. We provide professional, comfortable, and safe transportation.
        </p>
      )
    },
    {
      image: getAssetPath("/assets/images/national-registry.png"),
      alt: "EMT registry badge",
      className: "h-20 w-20",
      content: (
        <p className="leading-relaxed">
          <strong>Our licensed EMTs</strong> ensure safe, compassionate non-emergency transportation, leveraging their expertise in patient care and medical support for your peace of mind.
        </p>
      )
    },
    {
      image: getAssetPath("/assets/images/idph.png"),
      alt: "IDPH logo",
      className: "h-20 w-auto",
      content: (
        <p className="leading-relaxed">
          We are a fully <strong>IDPH Licensed Stretcher Van Service Provider</strong> in Illinois, License <strong>#0018SV</strong>, meeting the highest state safety standards.
        </p>
      )
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted certifications that set us apart in medical transportation
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[160px,1fr] gap-6 items-center">
                <div className="flex justify-center md:justify-start">
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className={`${cert.className} object-contain mx-auto`}
                    />
                  </div>
                </div>
                <div className="text-gray-700 text-base md:text-lg">
                  {cert.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/certifications" className="inline-block px-6 py-3 rounded-xl bg-pacalo-blue text-white font-bold hover:bg-blue-700 transition-colors">See our certifications</Link>
        </div>
      </div>

    </section>
  )
}

export default CertificationsSection