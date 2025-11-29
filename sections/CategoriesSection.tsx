'use client';

export default function CategoriesSection() {
    const categories = [
        {
            name: "Celebration",
            subtitle: "Venues",
            image: "/images/venue-4.png",
            venueCount: 37
        },
        {
            name: "Private Party",
            subtitle: "Venues",
            image: "/images/venue-5.png",
            venueCount: 37
        },
        {
            name: "Corporate",
            subtitle: "Meetings",
            image: "/images/venue-2.png",
            venueCount: 27
        },
        {
            name: "Creative",
            subtitle: "Studios",
            image: "/images/venue-3.png",
            venueCount: 27
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
                        Find The Best Venue For Any Occasion
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        Explore venues by category, from timeless ballrooms and rooftops with a view to modern studios and outdoor gardens,
                        discover spaces designed to inspire unforgettable experiences.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Mobile: Horizontal Scroll */}
                    <div className="md:hidden">
                        <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[280px] snap-start"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                                        <div className="h-[320px] bg-cover bg-center relative overflow-hidden">
                                            <img
                                                src={category.image}
                                                alt={`${category.name} ${category.subtitle}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-800">
                                                {category.venueCount} Venues
                                            </div>
                                            <div className="absolute bottom-6 left-6 text-white">
                                                <h3 className="text-xl font-bold leading-tight">
                                                    {category.name}<br />{category.subtitle}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Grid Layout */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {categories.map((category, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                                    <div className="h-[380px] bg-cover bg-center relative overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={`${category.name} ${category.subtitle}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                                            {category.venueCount} Venues
                                        </div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <h3 className="text-2xl font-bold">{category.name}<br />{category.subtitle}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows - Desktop Only */}
                        <div className="flex justify-end gap-3 mt-8">
                            <button className="bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-400 rounded-full p-4 transition-all duration-200 hover:shadow-lg">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-400 rounded-full p-4 transition-all duration-200 hover:shadow-lg">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom scrollbar hiding styles */}
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