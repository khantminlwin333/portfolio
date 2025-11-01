// components/PrivacyPolicy.tsx
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
          <p className="text-blue-100 text-sm mt-1">
            Last updated November 2, 2025
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              MTP Finance Tracker ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. Information We Collect
            </h2>
            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">Personal Information:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Email address (when you sign up with Google)</li>
                <li>Profile information (name, profile picture from Google)</li>
                <li>Financial transaction data you enter</li>
              </ul>
              
              <h3 className="font-medium text-gray-700 mt-4">Automatically Collected:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Device information</li>
                <li>Usage statistics</li>
                <li>App performance data</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Third-Party Services
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Firebase (Google)</h4>
                <p className="text-gray-600 text-sm">
                  We use Firebase for authentication, data storage, and analytics. 
                  Firebase may collect device information and usage data.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">Google AdMob</h4>
                <p className="text-gray-600 text-sm">
                  We show advertisements through Google AdMob, which may collect information 
                  to provide personalized ads.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">Google Sign-In</h4>
                <p className="text-gray-600 text-sm">
                  For authentication, we use Google Sign-In which provides us with your 
                  basic profile information.
                </p>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide and maintain the finance tracking service</li>
              <li>Authenticate your account securely</li>
              <li>Show relevant advertisements</li>
              <li>Improve app performance and user experience</li>
              <li>Send important notifications about your account</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information. 
              However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
              <li>Opt-out of personalized ads</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Contact Us
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="font-medium">khantminlwin333@gmail.com</p>
              <p className="text-sm text-gray-500">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Policy Updates
            </h2>
            <p className="text-gray-600 text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy in the app and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
