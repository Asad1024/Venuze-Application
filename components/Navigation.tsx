'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import NavSearchBar from "@/components/NavSearchBar";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", throttledScroll);
        };
    }, []);

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "md:bg-white md:shadow-lg md:py-3" : "md:bg-transparent md:py-6"}
        py-4 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} md:bg-transparent
    `}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">

                    {/* MOBILE: Only Logo */}
                    <div className="flex items-center md:hidden">
                        <Image
                            src="/images/venuze-logo.png"
                            alt="Venuze Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>

                    {/* DESKTOP: Logo + Text */}
                    <Link href="/" className="hidden md:flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10">
                            <Image
                                src="/images/venuze-logo.png"
                                alt="Venuze Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <span
                            className={`text-2xl font-bold transition-colors ${isScrolled ? "text-red-600" : "text-white"
                                }`}
                        >
                            venuze
                        </span>
                    </Link>

                    {/* DESKTOP: Search bar on scroll */}
                    <div
                        className={`
                            hidden md:flex transition-all duration-300
                            ${isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                        `}
                    >
                        {isScrolled && <NavSearchBar visible={isScrolled} />}
                    </div>

                    {/* MOBILE: Add Listing + Menu */}
                    <div className="flex items-center gap-3 md:hidden">

                        {/* White Pill Add Listing */}
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-medium shadow flex items-center">
                            Add your listing
                            <ChevronDown size={16} className="ml-1" />
                        </button>

                        {/* Round Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="bg-white p-2 rounded-full shadow"
                        >
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* DESKTOP RIGHT ACTIONS */}
                    <div className="hidden md:flex items-center space-x-3">
                        <button className="bg-white text-[#FF5037] px-4 py-2 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition">
                            Add your listing
                        </button>

                        <button className="bg-white text-[#FF5037] px-3 py-2 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition flex items-center space-x-1">
                            <span>EN</span>
                            <ChevronDown size={16} />
                        </button>

                        <button className="bg-white text-[#FF5037] p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                            <User size={20} />
                        </button>
                    </div>
                </div>

                {/* MOBILE DROP-DOWN MENU */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
                        <button className="w-full bg-white text-[#FF5037] py-3 px-4 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 mb-3">
                            Add your listing
                        </button>

                        <button className="w-full bg-white text-[#FF5037] py-3 px-4 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 flex items-center justify-between mb-3">
                            <span>EN</span>
                            <ChevronDown size={16} />
                        </button>

                        <button className="w-full bg-white text-[#FF5037] py-3 px-4 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 flex items-center gap-2 justify-center">
                            <User size={20} />
                            <span>Account</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
