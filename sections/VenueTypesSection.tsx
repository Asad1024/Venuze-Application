'use client';

export default function VenueTypesSection() {
    const venueTypes = ["HALL", "GALLERY", "RESTAURANT", "OUTDOOR", "STUDIO", "TERRACE", "BALLROOM"];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                    Explore Venue Types
                </h2>

                {/* Venue Types Pills */}
                <div className="flex flex-wrap justify-center gap-4">
                    {venueTypes.map((type) => (
                        <div
                            key={type}
                            className="px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200 hover:border-[#FF5037] hover:text-[#FF5037] font-medium text-gray-700"
                        >
                            {type}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}