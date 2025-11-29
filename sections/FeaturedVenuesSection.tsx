'use client';

export default function FeaturedVenuesSection() {
    const venueTypes = ["ROOFTOP", "GALLERY", "RESTAURANT", "OUTDOOR", "STUDIO", "TERRACE", "BALLROOM"];

    const venues = [
        {
            id: 1,
            title: "High-Spec Room in Trendy Home",
            subtitle: "Clapham/ Stockwell",
            location: "London, SW1",
            image: "/images/venue-1.jpg",
            capacity: "300+",
            area: "2000 sq ft",
            parking: "Free parking",
            price: "$50",
            moreAmenities: "+25 more"
        },
        {
            id: 2,
            title: "High-Spec Room in Trendy Home",
            subtitle: "Clapham/ Stockwell",
            location: "London, SW1",
            image: "/images/venue-2.png",
            capacity: "300+",
            area: "2000 sq ft",
            parking: "Free parking",
            price: "$50",
            moreAmenities: "+25 more"
        },
        {
            id: 3,
            title: "High-Spec Room in Trendy Home",
            subtitle: "Clapham/ Stockwell",
            location: "London, SW1",
            image: "/images/venue-3.png",
            capacity: "300+",
            area: "2000 sq ft",
            parking: "Free parking",
            price: "$50",
            moreAmenities: "+25 more"
        },
        {
            id: 4,
            title: "High-Spec Room in Trendy Home",
            subtitle: "Clapham/ Stockwell",
            location: "London, SW1",
            image: "/images/venue-4.png",
            capacity: "300+",
            area: "2000 sq ft",
            parking: "Free parking",
            price: "$60",
            moreAmenities: "+25 more"
        }
    ];

    return (
        <section className="py-12 md:py-20 relative">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/featured-bg.png')"
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6 md:mb-12">
                    Featured Venues
                </h2>

                {/* Venue Type Filters - Horizontal Scroll on Mobile */}
                <div className="mb-8 md:mb-12">
                    {/* Mobile: Horizontal Scroll */}
                    <div className="md:hidden">
                        <div className="flex gap-3 overflow-x-auto pb-2 px-1 -mx-1 scrollbar-hide snap-x snap-mandatory">
                            {venueTypes.map((type, index) => (
                                <button
                                    key={type}
                                    className={`flex-shrink-0 px-5 py-2.5 snap-start ${index === 1
                                            ? 'bg-[#FF5037] text-white'
                                            : 'bg-gray-600/80 backdrop-blur-sm text-white hover:bg-gray-500'
                                        } rounded-lg transition-all duration-300 font-medium text-sm whitespace-nowrap`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Flex Wrap */}
                    <div className="hidden md:flex flex-wrap justify-center gap-3">
                        {venueTypes.map((type, index) => (
                            <button
                                key={type}
                                className={`px-6 py-3 ${index === 1
                                        ? 'bg-[#FF5037] text-white'
                                        : 'bg-gray-600/80 backdrop-blur-sm text-white hover:bg-gray-500'
                                    } rounded-lg transition-all duration-300 font-medium`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Venues Carousel Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Mobile: Horizontal Scroll */}
                    <div className="md:hidden">
                        <div className="flex gap-4 overflow-x-auto pb-4 px-1 -mx-1 scrollbar-hide snap-x snap-mandatory">
                            {venues.map((venue) => (
                                <div
                                    key={venue.id}
                                    className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                                        {/* Image Section */}
                                        <div className="relative h-48">
                                            <img
                                                src={venue.image}
                                                alt={venue.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Top Badges */}
                                            <div className="absolute top-3 left-3 flex items-center gap-2">
                                                <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    Verified
                                                </div>
                                            </div>
                                            {/* Top Right Icons */}
                                            <div className="absolute top-3 right-3 flex items-center gap-2">
                                                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                    </svg>
                                                </button>
                                                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-gray-900 mb-0.5 leading-tight">
                                                {venue.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">
                                                {venue.subtitle}
                                            </p>
                                            <p className="text-[#FF5037] text-sm mb-3 flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                {venue.location}
                                            </p>

                                            {/* Amenities */}
                                            <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3 pb-3 border-b border-gray-200">
                                                <div className="flex flex-col items-start">
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <span>{venue.capacity}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                        </svg>
                                                        <span>{venue.area}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                        </svg>
                                                        <span className="whitespace-nowrap">{venue.parking}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* More Link */}
                                            <button className="text-sm text-gray-600 hover:text-[#FF5037] mb-4">
                                                {venue.moreAmenities}
                                            </button>

                                            {/* Price and CTA */}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-sm text-gray-600">From </span>
                                                    <span className="text-xl font-bold text-gray-900">{venue.price}</span>
                                                    <span className="text-sm text-gray-600">/hour</span>
                                                </div>
                                                <button className="px-4 py-2 border-2 border-[#FF5037] text-[#FF5037] rounded-lg hover:bg-[#FF5037] hover:text-white transition-all duration-300 font-semibold text-sm">
                                                    View details →
                                                </button>
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
                            {venues.map((venue) => (
                                <div key={venue.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    {/* Image Section */}
                                    <div className="relative h-52">
                                        <img
                                            src={venue.image}
                                            alt={venue.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Top Badges */}
                                        <div className="absolute top-3 left-3 flex items-center gap-2">
                                            <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Verified
                                            </div>
                                        </div>
                                        {/* Top Right Icons */}
                                        <div className="absolute top-3 right-3 flex items-center gap-2">
                                            <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>
                                            </button>
                                            <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {venue.title}
                                        </h3>
                                        <p className="text-[#FF5037] text-sm mb-3 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {venue.location}
                                        </p>

                                        {/* Amenities */}
                                        <div className="flex items-center gap-4 text-xs text-gray-600 mb-3 pb-3 border-b border-gray-200">
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                {venue.capacity}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                                {venue.area}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                </svg>
                                                {venue.parking}
                                            </div>
                                        </div>

                                        {/* More Link */}
                                        <button className="text-sm text-gray-600 hover:text-[#FF5037] mb-4">
                                            {venue.moreAmenities}
                                        </button>

                                        {/* Price and CTA */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-sm text-gray-600">From </span>
                                                <span className="text-xl font-bold text-gray-900">{venue.price}</span>
                                                <span className="text-sm text-gray-600">/hour</span>
                                            </div>
                                            <button className="px-5 py-2 border-2 border-[#FF5037] text-[#FF5037] rounded-lg hover:bg-[#FF5037] hover:text-white transition-all duration-300 font-semibold text-sm">
                                                View details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows - Desktop Only */}
                        <div className="flex justify-center gap-3 mt-8">
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

            {/* Custom Scrollbar Hiding Styles */}
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