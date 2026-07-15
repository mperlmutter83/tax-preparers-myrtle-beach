import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400">Tax Preparers Myrtle Beach</h3>
            <p className="mt-4 text-gray-400">
              Expert tax preparation services for individuals and businesses in Myrtle Beach, SC. Accurate, compliant, and optimized tax returns.
            </p>
            <div className="mt-4">
              <p className="text-gray-400">6850 Blue Heron Blvd Unit 103</p>
              <p className="text-gray-400">Myrtle Beach, SC 29588</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+18435551234" className="text-gray-400 hover:text-blue-400 transition-colors">
                  (843) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@taxpreparersmyrtlebeach.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@taxpreparersmyrtlebeach.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-gray-500 text-sm">Monday - Friday: 9 AM - 5 PM</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tax Preparers Myrtle Beach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
