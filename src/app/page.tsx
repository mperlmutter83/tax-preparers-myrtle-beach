import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Individual Tax Preparation', description: 'Personalized tax preparation for individuals, ensuring maximum deductions and compliance with all tax regulations.', icon: '👤' },
    { title: 'Small Business Tax Services', description: 'Comprehensive tax solutions for small businesses, including bookkeeping and tax filing to optimize your financial outcomes.', icon: '🏪' },
    { title: 'Corporate Tax Preparation', description: 'Expert corporate tax services designed to meet the complex needs of larger businesses, ensuring compliance and strategic planning.', icon: '🏢' },
  ];

  const faqs = [
    { question: 'What documents do I need to prepare my taxes?', answer: 'You will need your W-2s, 1099s, any relevant receipts for deductions, and last year\'s tax return. Having these documents ready will streamline the preparation process.' },
    { question: 'How can I maximize my tax refund?', answer: 'To maximize your refund, ensure you claim all eligible deductions and credits. Our team will help identify opportunities to reduce your tax liability legally.' },
    { question: 'What is the deadline for filing taxes?', answer: 'The deadline for filing federal taxes is typically April 15th. However, if it falls on a weekend or holiday, the deadline may be extended.' },
    { question: 'Can I file my taxes electronically?', answer: 'Yes, electronic filing is available and often recommended for faster processing and quicker refunds. Our team can assist you with e-filing your tax return.' },
    { question: 'What should I do if I made a mistake on my tax return?', answer: 'If you discover an error after filing, you can file an amended return using Form 1040-X. We can help you correct any mistakes to ensure compliance.' },
    { question: 'How do I know if I need to pay estimated taxes?', answer: 'If you are self-employed or have significant income not subject to withholding, you may need to pay estimated taxes quarterly. We can help determine your obligations.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert Tax Solutions for<br />Your Peace of Mind
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Navigate the complexities of tax season with confidence. Our expert team is here to ensure your tax returns are accurate, compliant, and optimized to save you money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+18435551234"
                className="bg-white text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call (843) 555-1234
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <span className="text-3xl mr-3">📋</span>
                <span className="text-gray-700 font-medium">Comprehensive Tax Services</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-3">🤝</span>
                <span className="text-gray-700 font-medium">Client-Centric Approach</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-3">💡</span>
                <span className="text-gray-700 font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-blue-700">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-blue-700">2000+</p>
                  <p className="text-gray-600">Returns Filed</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-blue-700">99%</p>
                  <p className="text-gray-600">Accuracy Rate</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-blue-700">5★</p>
                  <p className="text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Tax Partner</h2>
              <p className="text-gray-600 mb-4">
                At Tax Preparers Myrtle Beach, we specialize in providing comprehensive tax preparation services tailored to meet the unique needs of individuals, small businesses, and corporations.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to ensure accurate and timely tax filings, helping you navigate the complexities of tax laws with ease. With a commitment to precision and client satisfaction, we strive to minimize your tax liabilities while maximizing your returns.
              </p>
              <Link
                href="/about"
                className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tax Preparation Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of tax services designed to meet your specific needs. Whether you&apos;re an individual, a small business owner, or a corporate entity, we have the expertise to assist you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions About Tax Preparation</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Tax Consultation Today</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Unlock the full potential of your financial future with our expert tax services. Whether you&apos;re an individual or a business, our team is here to ensure your tax returns are accurate and compliant.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
