import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive tax preparation services in Myrtle Beach: individual tax returns, small business tax, corporate tax, and tax consultation.',
};

export default function ServicesPage() {
  const services = [
    { name: 'Individual Tax Returns', description: 'Personalized tax preparation for individuals, ensuring maximum deductions and compliance with all tax regulations.', icon: '👤' },
    { name: 'Small Business Tax Services', description: 'Comprehensive tax solutions for small businesses, including bookkeeping and tax filing to optimize your financial outcomes.', icon: '🏪' },
    { name: 'Corporate Tax Preparation', description: 'Expert corporate tax services designed to meet the complex needs of larger businesses, ensuring compliance and strategic tax planning.', icon: '🏢' },
    { name: 'Tax Consultation', description: 'Professional tax advice and planning to help you make informed financial decisions and minimize tax liabilities.', icon: '💬' },
    { name: 'Amendments and Corrections', description: 'Assistance with amending tax returns and correcting errors to ensure accuracy and compliance with tax laws.', icon: '📝' },
    { name: 'Electronic Filing Services', description: 'Efficient electronic filing services to ensure your tax returns are submitted accurately and on time.', icon: '📧' },
  ];

  const features = [
    { title: 'Precision and Accuracy', description: 'Our meticulous approach ensures every detail of your tax return is accurate, minimizing the risk of errors.' },
    { title: 'Compliance with Tax Laws', description: 'Stay compliant with the latest tax regulations and benefit from our up-to-date knowledge of tax codes.' },
  ];

  const faqs = [
    { question: 'What documents do I need to bring for tax preparation?', answer: 'You should bring all relevant financial documents, including W-2s, 1099s, receipts for deductions, and any other income or expense records.' },
    { question: 'How long does the tax preparation process take?', answer: 'The duration varies depending on the complexity of your tax situation, but most returns are completed within a week.' },
    { question: 'Can you help with past tax returns?', answer: 'Yes, we can assist with filing past tax returns and making any necessary amendments to previous filings.' },
    { question: 'How do you ensure my information is kept confidential?', answer: 'We adhere to strict confidentiality protocols and use secure systems to protect your personal and financial information.' },
    { question: 'What if I receive a notice from the IRS after filing?', answer: 'If you receive any correspondence from the IRS, we are here to help you understand and respond appropriately.' },
    { question: 'Do you offer electronic filing?', answer: 'Yes, we offer electronic filing for faster processing and quicker refunds.' },
    { question: 'How do you stay updated on tax law changes?', answer: 'Our team regularly attends training sessions and seminars to stay informed about the latest tax law updates.' },
    { question: 'What are your fees for tax preparation services?', answer: 'Our fees vary based on the complexity of your tax return. Please contact us for a detailed quote.' },
    { question: 'Can you assist with tax planning for next year?', answer: 'Absolutely, we offer tax planning services to help you prepare for the upcoming tax year and optimize your financial strategy.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-700 font-semibold mb-4">Comprehensive Tax Solutions for Your Needs</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Expert Tax Preparation Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Navigate the complexities of tax season with confidence. Our expert team is here to ensure your tax returns are accurate, compliant, and filed on time.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="text-2xl mr-2">✓</span>
              <span className="text-gray-700">Accurate Filings</span>
            </div>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="text-2xl mr-2">⏰</span>
              <span className="text-gray-700">Timely Submissions</span>
            </div>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="text-2xl mr-2">🛡️</span>
              <span className="text-gray-700">Compliance Assurance</span>
            </div>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="text-2xl mr-2">💡</span>
              <span className="text-gray-700">Expert Guidance</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Tax Services</h2>
          <p className="text-gray-600 text-center mb-12">Tailored Tax Preparation</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12">Key Features of Our Services</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <Link href="/contact" className="text-blue-700 font-medium hover:text-blue-800 mt-4 inline-block">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise and Qualifications</h2>
              <p className="text-gray-600 mb-4">
                At Tax Preparers Myrtle Beach, we pride ourselves on our deep understanding of tax codes and regulations. Our team of certified tax preparers is dedicated to providing accurate and efficient tax preparation services.
              </p>
              <p className="text-gray-600">
                With years of experience in the industry, we ensure compliance with all federal, state, and local tax laws. Our mission is to minimize your tax liability while maximizing your financial outcomes. Trust us to handle your tax needs with professionalism and confidentiality.
              </p>
            </div>
            <div className="bg-blue-100 rounded-2xl p-8 text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-700">15+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-700">CPA</p>
                  <p className="text-gray-600 text-sm">Certified</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-700">IRS</p>
                  <p className="text-gray-600 text-sm">Enrolled Agent</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-700">24/7</p>
                  <p className="text-gray-600 text-sm">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions About Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Simplify Your Tax Process?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Let our experts handle your taxes while you focus on what matters most.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
