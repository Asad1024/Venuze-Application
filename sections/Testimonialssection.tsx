'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    const stats = [
        {
            number: "1,500+",
            label: "Venues Vetted & Approved",
            bgColor: "#F8796C"
        },
        {
            number: "7,500+",
            label: "Events Successfully Hosted",
            bgColor: "#F6564B"
        },
        {
            number: "35+",
            label: "Cities Across the Region",
            bgColor: "#FFB547"
        },
        {
            number: "4.9",
            label: "Average Host Rating",
            bgColor: "#F9CD5C",
            hasStar: true
        }
    ];

    const testimonials = [
        {
            name: "Michael Carter",
            image: "/images/michael-carter.png",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            bgGradient: "linear-gradient(90deg, #F3E5F5 0%, #FFFFFF 50%)",
            imageBgColor: "#C3B1E1"
        },
        {
            name: "by Ayesha M.",
            image: "/images/ayesha-m.png",
            quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            bgGradient: "linear-gradient(90deg, #E0F7FA 0%, #FFFFFF 50%)",
            imageBgColor: "#80DEEA"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Gradient Background Layer */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    background: 'linear-gradient(135deg, #FFEFBA 0%, #FFFFFF 50%, #FFC3A0 100%)'
                }}
            ></div>

            <div className="container relative z-10 mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Trusted by Event Creators Who Demand Excellence
                    </h2>
                    <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                        Join thousands of planners and hosts who love our seamless discovery and booking experience.
                    </p>
                </div>

                {/* Main Container */}
                <div className="max-w-7xl mx-auto">

                    {/* 1. Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-6 md:p-8 text-center shadow-lg"
                                style={{
                                    backgroundColor: stat.bgColor,
                                    color: stat.bgColor === "#F9CD5C" ? "#000000" : "#FFFFFF"
                                }}
                            >
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <div className="text-4xl lg:text-5xl font-extrabold">{stat.number}</div>
                                    {stat.hasStar && (
                                        <div className="flex pt-1">
                                            <Star className="w-8 h-8 fill-current text-[#F99D1C]" />
                                        </div>
                                    )}
                                </div>
                                <div className={`font-semibold text-lg ${stat.bgColor !== "#F9CD5C" ? "opacity-90" : ""}`}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ************************************* */}
                    {/* 2. TESTIMONIALS — MOBILE HORIZONTAL */}
                    {/* ************************************* */}
                    <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide lg:hidden snap-x snap-mandatory">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="snap-start min-w-[85%] bg-white rounded-3xl overflow-hidden shadow-xl"
                                style={{ background: testimonial.bgGradient }}
                            >
                                <div className="grid grid-cols-3">
                                    {/* Left Image */}
                                    <div
                                        className="col-span-1 min-w-[120px]"
                                        style={{ backgroundColor: testimonial.imageBgColor }}
                                    >
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Right Text */}
                                    <div className="col-span-2 p-6 flex flex-col justify-center">
                                        <p className="text-gray-700 text-base font-medium mb-3 leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                        <div className="font-extrabold text-gray-900">{testimonial.name}</div>
                                        <div className="flex text-[#F9CD5C] mt-1">
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ************************************* */}
                    {/* 3. TESTIMONIALS — DESKTOP GRID */}
                    {/* ************************************* */}
                    <div className="hidden lg:grid grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-3xl overflow-hidden shadow-xl"
                                style={{ background: testimonial.bgGradient }}
                            >
                                {/* Left Image */}
                                <div
                                    className="col-span-1 min-w-[120px]"
                                    style={{ backgroundColor: testimonial.imageBgColor }}
                                >
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover min-h-[200px]"
                                    />
                                </div>

                                {/* Right Text */}
                                <div className="col-span-2 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-gray-700 text-lg font-medium mb-4 leading-relaxed">
                                        {testimonial.quote}
                                    </p>
                                    <div className="font-extrabold text-lg text-gray-900 mb-1">{testimonial.name}</div>
                                    <div className="flex text-[#F9CD5C]">
                                        <Star className="w-5 h-5 fill-current" />
                                        <Star className="w-5 h-5 fill-current" />
                                        <Star className="w-5 h-5 fill-current" />
                                        <Star className="w-5 h-5 fill-current" />
                                        <Star className="w-5 h-5 fill-current" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation arrows (unchanged but optional) */}
                <div className="hidden lg:flex justify-end gap-3 mt-6">
                    <button className="bg-white border border-gray-300 hover:border-gray-400 rounded-full p-3 transition-all duration-200 hover:shadow-md">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="bg-white border border-gray-300 hover:border-gray-400 rounded-full p-3 transition-all duration-200 hover:shadow-md">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scrollbar Hide */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
