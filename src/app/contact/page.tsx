import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Tax Preparers Myrtle Beach. Call (843) 555-1234 or fill out our form to schedule your tax consultation.',
};

export default function ContactPage() {
  const faqs = [
    { question: 'How do I schedule an appointment?', answer: 'You can schedule an appointment by calling us at (843) 555-1234 or filling out the contact form on this page.' },
    { question: 'What documents should I bring to my appointment?', answer: 'Please bring your W-2s, 1099s, previous tax returns, and any other relevant financial documents.' },
    { question: 'Can you help with tax amendments?', answer: 'Yes, we can assist with filing amendments if there are errors in your previous tax returns.' },
    { question: 'Do you offer electronic filing?', answer: 'Absolutely, we provide electronic filing to ensure your returns are submitted promptly and securely.' },
    { question: 'What are your office hours?', answer: 'Our office is open Monday to Friday, from 9 AM to 5 PM.' },
    { question: 'How do you ensure the confidentiality of my information?', answer: 'We adhere to strict confidentiality protocols and use secure systems to protect your data.' },
    { question: 'Can you assist with state and local taxes?', answer: 'Yes, we are experienced in handling both state and local tax filings.' },
    { question: 'What if I need to contact the IRS?', answer: 'We can guide you on how to contact the IRS or handle communications on your behalf if needed.' },
    { question: 'Do you offer services for small businesses?', answer: 'Yes, we specialize in tax preparation for individuals and small businesses alike.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Streamline Your Tax Filing Process with Expert Guidance</h1>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <span className="text-3xl">📞</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">(843) 555-1234</h3>
              <p className="text-gray-600 text-sm">Call Us Anytime</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <span className="text-3xl">✉️</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">info@taxpreparersmyrtlebeach.com</h3>
              <p className="text-gray-600 text-sm">Email Our Support Team</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <span className="text-3xl">📍</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">6850 Blue Heron Blvd Unit 103</h3>
              <p className="text-gray-600 text-sm">Myrtle Beach, SC 29588</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Tax Questions Answered</h2>
              <p className="text-gray-600 mb-6">
                Explore common inquiries about our tax preparation services and how we can assist you.
              </p>
              <div className="space-y-4">
                {faqs.slice(0, 6).map((faq) => (
                  <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>
              <p className="text-gray-600 mb-6">
                Book a convenient time for your tax consultation with our expert team. Fill out the form below and we will confirm your appointment shortly.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Expert Tax Assistance Today!</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team at Tax Preparers Myrtle Beach is ready to help you navigate the complexities of tax preparation. Whether you&apos;re an individual or a business, we ensure your tax returns are accurate and compliant. Reach out now to minimize your tax liability and maximize your peace of mind.
          </p>
          <a
            href="tel:+18435551234"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
