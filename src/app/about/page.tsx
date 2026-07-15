import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Tax Preparers Myrtle Beach - our commitment to providing personalized, accurate tax preparation services.',
};

export default function AboutPage() {
  const features = [
    { title: 'Personalized Consultations', description: 'We provide one-on-one consultations to tailor our services to your specific tax needs.' },
    { title: 'Comprehensive Tax Solutions', description: 'Our services cover everything from individual returns to complex corporate filings, ensuring compliance and accuracy.' },
    { title: 'Stress-Free Experience', description: 'We handle all the details, so you can focus on what matters most, without the worry of tax season.' },
  ];

  const process = [
    { step: '1', title: 'Initial Consultation', description: 'We start by discussing your financial situation and tax history to identify your specific needs.' },
    { step: '2', title: 'In-Depth Analysis', description: 'Our team reviews your documents and asks detailed questions to ensure nothing is overlooked.' },
    { step: '3', title: 'Tailored Tax Strategy', description: 'We develop a personalized plan to minimize your tax liability and ensure compliance with all regulations.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Empowering Your Financial Future</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Navigate the complexities of taxes with confidence and clarity. Our dedicated team is here to guide you every step of the way, ensuring your peace of mind and financial success.
          </p>
          <Link
            href="/services"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Discover More
          </Link>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
              <p className="text-gray-600 mb-4">
                At Tax Preparers Myrtle Beach, we believe in treating each client with empathy and understanding. We recognize that every financial situation is unique, and we are committed to asking the right questions to uncover the root of your concerns.
              </p>
              <p className="text-gray-600">
                Our mission is to alleviate the stress associated with tax preparation by providing clear, confident guidance and ensuring you feel supported every step of the way.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-600">Certified and experienced tax professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-600">Up-to-date knowledge of tax laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-600">Personalized service for individuals and businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-600">Secure handling of confidential information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-600">Year-round support, not just during tax season</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Tax Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process Explained</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We believe in a thorough approach to understand your tax needs and provide the best solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Resolve Your Tax Concerns?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let tax uncertainties weigh you down. Connect with us today for a personalized consultation and discover how our expertise can guide you through your unique tax challenges with confidence and clarity.
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
