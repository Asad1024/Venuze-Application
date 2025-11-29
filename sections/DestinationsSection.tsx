'use client';

export default function DestinationsSection() {
    const destinations = [
        {
            city: "New York, USA",
            venues: 24,
            tags: "Coastal energy, modern venue",
            popular: "Rooftop",
            price: "$50 per hour",
            image: "/images/new-york.png"
        },
        {
            city: "London, UK",
            venues: 100,
            tags: "Coastal energy, modern Venue",
            popular: "Rooftop",
            price: "$25 per hour",
            image: "/images/london.png"
        },
        {
            city: "Dubai, UAE",
            venues: 12,
            tags: "Coastal energy, modern Venue",
            popular: "Rooftop",
            price: "$80 per hour",
            image: "/images/dubai.png"
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Discover Exceptional Destinations Across the Region
                    </h2>
                    <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        From cosmopolitan cityscapes to cultural treasures, explore where celebrations come alive with local flavor.
                    </p>
                </div>

                {/* ******************************** */}
                {/* MOBILE HORIZONTAL SCROLL */}
                {/* ******************************** */}
                <div className="flex md:hidden gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 pb-4">
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="snap-start min-w-[85%] h-[450px] relative rounded-2xl overflow-hidden shadow-xl group"
                        >
                            {/* Image */}
                            <img
                                src={dest.image}
                                alt={dest.city}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                            {/* Venues Badge */}
                            <div className="absolute top-4 left-4 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                {dest.venues} Venues
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 p-6 text-white w-full">
                                <h3 className="text-3xl font-bold mb-1">{dest.city}</h3>
                                <p className="text-sm opacity-90 mb-4">{dest.tags}</p>

                                <div className="flex justify-between items-center border-t border-white/20 pt-3 text-sm">
                                    <div>
                                        <span className="font-bold">Popular: </span>{dest.popular}
                                    </div>
                                    <div className="bg-black/30 py-1 px-3 rounded-full font-semibold">
                                        from {dest.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ******************************** */}
                {/* DESKTOP GRID LAYOUT */}
                {/* ******************************** */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <div key={index} className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl group">
                            {/* Background Image */}
                            <img
                                src={dest.image}
                                alt={dest.city}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Dark Overlay with Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                            {/* "Venues" Badge */}
                            <div className="absolute top-4 left-4 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                {dest.venues} Venues
                            </div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 p-6 text-white w-full">
                                <h3 className="text-3xl font-bold mb-1">{dest.city}</h3>
                                <p className="text-sm opacity-90 mb-4">{dest.tags}</p>

                                <div className="flex justify-between items-center border-t border-white/20 pt-3 text-sm">
                                    <div>
                                        <span className="font-bold">Popular: </span>{dest.popular}
                                    </div>
                                    <div className="bg-black/30 py-1 px-3 rounded-full font-semibold whitespace-nowrap">
                                        from {dest.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Scrollbar hide */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
