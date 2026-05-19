import type { FaqCategory } from "../models/faq";

export const DEFAULT_FAQS: FaqCategory[] = [
  {
    category: "Booking & Scheduling",
    questions: [
      {
        question: "How do I schedule a ride?",
        answer: "Call us anytime at (309) 307-4564 or email ride@pacalo.net. We're available 24/7 to get you scheduled and answer any questions about your transportation needs."
      },
      {
        question: "What areas do you serve?",
        answer: "We proudly serve McLean County and Central Illinois, plus we offer intercity, inter-county, and interstate services. Need to travel further? Just ask—we'll make sure you get there safely, no matter the distance."
      }
    ]
  },
  {
    category: "Services & Transportation Types",
    questions: [
      {
        question: "What types of medical transportation services do you provide?",
        answer: "We offer three specialized transport options to meet your needs: Wheelchair Transportation - ADA-compliant vehicles that accommodate wheelchairs of all sizes, including power wheelchairs. Perfect for patients who use mobility devices. Ambulatory Transportation - Reliable door-to-door service for those who can walk but need assistance getting to appointments. Great for routine medical visits. Stretcher Transport - Professional service with EMT-trained staff and medical equipment, including oxygen administration. Ideal for patients who need to remain lying down during transport."
      },
      {
        question: "What's the difference between wheelchair, ambulatory, and stretcher transport?",
        answer: "Wheelchair: You remain in your wheelchair during transport—we secure it safely in our vehicle Ambulatory: You can walk and sit in a regular vehicle seat with assistance getting in/out Stretcher: You're transported lying down on a medical stretcher with EMT-qualified staff monitoring you"
      },
      {
        question: "Are rides shared with other passengers?",
        answer: "No. We provide private, door-to-door service with no shared rides. Your appointment time matters, and you deserve personalized attention throughout your journey."
      }
    ]
  },
  {
    category: "Payment & Insurance",
    questions: [
      {
        question: "Do you take insurance?",
        answer: "Yes! On a case-by-case basis, we accept Illinois Standard Medicaid Insurance. We also work with private insurance and offer private pay options. Contact us to verify your specific coverage."
      },
      {
        question: "How much does medical transportation cost?",
        answer: "Costs vary based on service type, distance, and any special accommodations needed. We believe in transparent pricing—call us for a personalized quote based on your situation. No surprises, just honest estimates."
      }
    ]
  },
  {
    category: "Safety & Assistance",
    questions: [
      {
        question: "Can family members ride along?",
        answer: "Absolutely! We welcome family members or caregivers to accompany you. Your comfort and peace of mind are our priorities."
      },
      {
        question: "Do you help with mobility assistance getting in/out?",
        answer: "Yes—our professional drivers are trained to provide hands-on assistance. We'll help you safely in and out of the vehicle and ensure you're comfortable before we start moving. Your safety is our #1 concern."
      },
      {
        question: "Are your drivers qualified?",
        answer: "Our team includes: Professional drivers with comprehensive safety training CPR-qualified staff EMT-certified technicians for stretcher services Staff trained in oxygen administration and life-saving medications"
      }
    ]
  },
  {
    category: "Credentials & Certifications",
    questions: [
      {
        question: "What certifications does PACALO have?",
        answer: "We maintain the highest standards: IDHS Certified Non-Emergency Medical Transportation Provider IDPH Licensed Stretcher Van Service Provider (License #0018SV) CPR & EMT Qualified staff Fully insured and compliant with all Illinois state requirements"
      }
    ]
  }
];
