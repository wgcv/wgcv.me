'use client'

export default function CEMSAlertTracker() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                        Privacy Policy – CEMS - AlertTracker
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Effective Date: August 26, 2025
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                CEMS - AlertTracker ("we," "our," or "the App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard the information you provide while using our application, designed for CERT teams and first responders.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We collect only the information necessary to provide the app's functionality:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                                <li><strong>Profile Information:</strong> Name, team affiliation, role, and other contact details you provide.</li>
                                <li><strong>Emergency Data:</strong> Task lists, damage assessments, victim treatment information, and related reports.</li>
                                <li><strong>Device Data:</strong> Basic device information and offline usage data to ensure proper functionality.</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                Note: All data collected is stored securely on your device and/or our servers and is used solely for the purpose of emergency management and coordination.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Your information is used only to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                                <li>Facilitate emergency management operations.</li>
                                <li>Track tasks, incidents, and responses.</li>
                                <li>Maintain accurate and ICS-compliant records.</li>
                                <li>Improve app functionality and reliability.</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We do not sell or share your personal information with third parties for marketing purposes.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                3. Data Storage and Security
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                                <li>All information is encrypted and stored securely.</li>
                                <li>The app is designed to work offline, so critical data remains accessible even without internet connectivity.</li>
                                <li>Only authorized personnel or team members can access sensitive emergency data.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                4. Sharing Information
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Information is shared only:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                                <li>With your authorized CERT team or organization.</li>
                                <li>When required by law for emergency or safety purposes.</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We never share your data with advertisers or external marketing companies.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                5. Your Choices
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                                <li>You may update or delete your profile information at any time.</li>
                                <li>You can control task and report entries within the app.</li>
                                <li>If you wish to request deletion of all data, contact us at [support email].</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                6. Children's Privacy
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                CEMS - AlertTracker is not intended for children under 13. We do not knowingly collect personal information from children.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                7. Changes to this Privacy Policy
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We may update this policy occasionally. Any changes will be reflected in the app and on our website. Continued use of the app constitutes acceptance of any updates.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                                8. Contact Us
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                For questions or concerns about your privacy, please contact us at:
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Email: <a href="mailto:gstavocevallos@gmail.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">gstavocevallos@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        CEMS AlertTracker Privacy Policy | Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    )
}
