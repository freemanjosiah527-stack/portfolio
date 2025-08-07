'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="py-16 px-4 border-t border-gray-800">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="text-gray-300">
            Interested in working together? Let’s have a conversation.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Baltimore, MD</span>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:freemanjosiah572@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
            >
              Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

