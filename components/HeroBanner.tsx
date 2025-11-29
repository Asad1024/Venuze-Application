'use client';

import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const HeroBanner = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const slides = [
        {
            id: 1,
            image: '/images/hero-bg.jpg', // You'll need to add this image
            title: 'Find Your Dream Home',
            description: 'Discover the perfect property that matches your lifestyle and budget',
        },
        // Add more slides as needed
    ];

    return (
        <section className="relative h-screen bg-gradient-to-r from-blue-600 to-purple-700">
            {/* Background Image/Content */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative h-full flex items-center justify-center text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Find Your Dream Home
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        Discover the perfect property that matches your lifestyle and budget
                    </p>

                    {/* Search Bar in Hero (initial state) */}
                    {!isScrolled && (
                        <div className="flex justify-center">
                            <SearchBar isScrolled={false} />
                        </div>
                    )}
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${index === 0 ? 'bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroBanner;