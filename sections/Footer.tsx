'use client';

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-6 relative z-10 rounded-t-[40px] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                    {/* Left Column - Brand, Tagline, and Links */}
                    <div>
                        {/* Logo and Tagline - Inline on same line */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-2">

                                <Image
                                    src="/images/venuze-logo.png"
                                    alt="Venuze Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                                <div>
                                    <h3 className="text-lg font-medium text-white leading-relaxed">
                                        Make it memorable—book the perfect venue<br />
                                        and the pros who make it shine.
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Footer Links Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

                            {/* Venuze Column */}
                            <div>
                                <h4 className="font-bold text-white mb-4 text-sm">Venuze</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li><a href="#" className="hover:text-[#FF5037] transition">About</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">News</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Careers</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Investors</a></li>
                                </ul>
                            </div>

                            {/* Support Column */}
                            <div>
                                <h4 className="font-bold text-white mb-4 text-sm">Support</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Listing your venue</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Listing your service</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Help center</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">FAQ</a></li>
                                </ul>
                            </div>

                            {/* Explore Column */}
                            <div>
                                <h4 className="font-bold text-white mb-4 text-sm">Explore</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Venue types</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Venue features</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Service options</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Locations</a></li>
                                </ul>
                            </div>

                            {/* Legal & Privacy Column */}
                            <div>
                                <h4 className="font-bold text-white mb-4 text-sm">Legal & Privacy</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Terms of service</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Payment & refund policy</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Host agreement</a></li>
                                    <li><a href="#" className="hover:text-[#FF5037] transition">Vendor agreement</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Get in Touch</h4>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-[#1A1A1A] text-white p-3 rounded-lg border border-gray-700 focus:border-[#FF5037] focus:ring-1 focus:ring-[#FF5037] outline-none transition placeholder-gray-500"
                            />
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full bg-[#1A1A1A] text-white p-3 rounded-lg border border-gray-700 focus:border-[#FF5037] focus:ring-1 focus:ring-[#FF5037] outline-none transition resize-none placeholder-gray-500"
                            ></textarea>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-[#FF5037] text-white font-bold py-3 px-10 rounded-lg shadow-md hover:bg-[#E5452F] transition duration-200"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Footer - Social Icons and Copyright */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Social Icons - Left */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>

                    {/* Copyright - Right */}
                    <div>
                        <p className="text-gray-500 text-sm">© 2025 Venuze. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}