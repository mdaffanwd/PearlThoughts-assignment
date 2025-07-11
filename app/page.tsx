'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:pt-10">
            <div className="w-full max-w-4xl text-center flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Teacher Management UI Assignment — crafted by{' '}
                    <strong className="text-blue-600">Mohammad Affan</strong>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
                    I've built two user interfaces — one replicates the original design provided in the assignment, and the other is a modern version I crafted with my own design approach. <a href=" https://pearlthoughts-my.sharepoint.com/:o:/p/suraj/ElmuzmMXgvBMltlvXX9Q5F0Bn-A_5GOQT1i3-4BTS2wDnA?e=NW37Sjhttps://pearlthoughts-my.sharepoint.com/:o:/p/suraj/ElmuzmMXgvBMltlvXX9Q5F0Bct1z0BMWCesCDlgowLDwCw?e=4Ru4Xj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 transition"
                    >
                        View Assignment Details
                    </a>
                </p>


                {/* Buttons */}
                <div className="flex flex-col items-center gap-4 w-full sm:w-auto mb-4">
                    {/* Button Group */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                        <Link
                            href="/assignment"
                            className="px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition w-full sm:w-auto text-center"
                        >
                            View Assignment
                        </Link>
                        <Link
                            href="/my-attempt"
                            className="px-4 py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition w-full sm:w-auto text-center"
                        >
                            With My Design (UI Upgrade)
                        </Link>
                    </div>

                    {/* GitHub Button (Full Width on Mobile) */}
                    <a
                        href="https://github.com/mdaffanwd/PearlThoughts-assignment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-xl hover:bg-gray-700 transition w-full sm:w-[300px]"
                    >
                        <FaGithub className="text-lg" />
                        View Source Code on GitHub
                    </a>
                </div>
                {/* Social Links */}

                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-4 underline decoration-wavy decoration-blue-500 underline-offset-4">
                    My Social Links
                </h2>
                <div className="flex justify-center gap-6 mb-6 text-gray-600 text-2xl">
                    <a
                        href="https://github.com/mdaffanwd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/mdaffan-codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/mdaffan_codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition"
                        aria-label="X / Twitter"
                    >
                        <FaXTwitter />
                    </a>
                </div>

                {/* Footer Note */}
                <div className="sm:text-sm text-gray-600 capitalize">
                    Built with Next.js, Tailwind CSS & TypeScript<br />as mentioned in requirements of the assignment
                </div>
            </div>
        </main>
    );
}
