"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#6d4432] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Ambio, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-[#6d4432] mb-2">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Profile information</li>
                <li>Payment information</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-[#6d4432] mb-2">2.2 Usage Data</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information</li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">5. Your Data Protection Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request transfer of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">6. Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">7. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: emodevelopers@gmail.com<br />
                
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/#waitlist" className="text-[#6d4432] hover:text-[#f2a365] transition-colors">
                ← Back to Waitlist Form
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 