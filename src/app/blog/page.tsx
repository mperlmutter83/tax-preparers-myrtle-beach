import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tax tips, insights, and guides from Tax Preparers Myrtle Beach. Stay informed about tax preparation, deductions, and compliance.',
};

export default function BlogPage() {
  const topics = [
    'Personal Tax Strategies',
    'Small Business Tax Tips',
    'Corporate Tax Planning',
    'Tax Law Updates',
    'Filing Deadlines',
    'Tax Deductions and Credits',
  ];

  const faqs = [
    { question: 'What documents do I need to prepare my taxes?', answer: 'You will need your W-2s, 1099s, any relevant receipts, and documentation for deductions or credits you plan to claim.' },
    { question: 'How can I maximize my tax refund?', answer: 'To maximize your refund, ensure you claim all eligible deductions and credits, and consider contributing to retirement accounts.' },
    { question: 'What is the deadline for filing taxes?', answer: 'The federal tax filing deadline is typically April 15th, but it can vary if it falls on a weekend or holiday.' },
    { question: 'Can I file my taxes electronically?', answer: 'Yes, electronic filing is available and often preferred for its speed and accuracy.' },
    { question: 'What should I do if I made a mistake on my tax return?', answer: 'If you discover an error, you can file an amended return using Form 1040-X to correct it.' },
    { question: 'How long should I keep my tax records?', answer: 'It\'s recommended to keep tax records for at least three years, but some documents may need to be kept longer.' },
    { question: 'What are the benefits of hiring a tax preparer?', answer: 'A tax preparer can help ensure accuracy, maximize deductions, and provide peace of mind during tax season.' },
    { question: 'How do tax credits differ from tax deductions?', answer: 'Tax credits directly reduce your tax bill, while deductions lower your taxable income.' },
    { question: 'What happens if I miss the tax filing deadline?', answer: 'Missing the deadline can result in penalties and interest, so it\'s important to file as soon as possible.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-700 font-semibold mb-4">Explore Expert Tax Guidance</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Navigate Your Tax Journey with Confidence</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Discover essential insights and strategies to streamline your tax preparation and ensure compliance with the latest regulations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Latest Insights in Tax Preparation</h2>
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <span className="text-6xl">📝</span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Blog Posts Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We&apos;re working on creating helpful content about tax preparation, deductions, credits, and strategies to help you save money. Check back soon for valuable insights!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Us for Tax Help
            </Link>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore Our Tax Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topics.map((topic) => (
              <div key={topic} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700 font-medium text-sm">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Tax Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-xl p-6">
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
          <h2 className="text-3xl font-bold text-white mb-4">Reach Out for Expert Tax Assistance</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us now to receive personalized tax preparation services tailored to your unique needs. Our team at Tax Preparers Myrtle Beach is ready to help you navigate the complexities of tax season with ease and confidence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
