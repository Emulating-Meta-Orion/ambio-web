"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#6d4432] mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Ambio. These Terms of Service ("Terms") govern your use of our website, mobile application, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>"Service" refers to Ambio's platform, including all features, content, and services.</li>
                <li>"User" refers to anyone who accesses or uses the Service.</li>
                <li>"Content" refers to all materials, including text, images, designs, and other information.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                To use certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">4. User Content</h2>
              <p className="text-gray-600 mb-4">
                You retain ownership of any content you submit to the Service. By submitting content, you grant Ambio a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">5. Prohibited Activities</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Impersonating another person or entity</li>
                <li>Uploading malicious software or viruses</li>
                <li>Interfering with the Service's operation</li>
                <li>Collecting user information without consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The Service and its original content, features, and functionality are owned by Ambio and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Ambio shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#6d4432] mb-4">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms, please contact us at:
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