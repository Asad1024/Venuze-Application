'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Venue } from '@/types';
import {
    Star, MapPin, Search, ChevronDown, Heart, Bookmark, SlidersHorizontal, ArrowLeft, ArrowRight,
    Grid, LayoutList, Camera, Film, Warehouse, Image, Utensils, Building, Building2, Factory,
    PartyPopper, CalendarDays, Plus, X
} from 'lucide-react';

// Enhanced mock search results with more variety
const mockSearchResults: Venue[] = [
    {
        id: 1,
        title: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
        location: 'London, SWI',
        price: '50',
        period: 'hour',
        rating: 4.7,
        reviews: 18,
        image: 'https://picsum.photos/400/300?random=1',
        type: 'Photo Studio',
        details: ['A 300+', '2,000 sq ft', 'free parking']
    },
    {
        id: 2,
        title: 'Modern Film Studio with Green Screen',
        location: 'London, E1',
        price: '120',
        period: 'hour',
        rating: 4.9,
        reviews: 32,
        image: 'https://picsum.photos/400/300?random=2',
        type: 'Film Studio',
        details: ['A 500+', '5,000 sq ft', 'paid parking']
    },
    {
        id: 3,
        title: 'Downtown Loft Space',
        location: 'New York, USA',
        price: '200',
        period: 'hour',
        rating: 4.8,
        reviews: 45,
        image: 'https://picsum.photos/400/300?random=3',
        type: 'Office Space',
        details: ['A 400+', '3,000 sq ft', 'valet parking']
    },
    {
        id: 4,
        title: 'Creative Photo Studio Natural Light',
        location: 'London, NW1',
        price: '75',
        period: 'hour',
        rating: 4.6,
        reviews: 22,
        image: 'https://picsum.photos/400/300?random=4',
        type: 'Photo Studio',
        details: ['A 350+', '2,500 sq ft', 'street parking']
    },
    {
        id: 5,
        title: 'Art Gallery Exhibition Space',
        location: 'London, WC2',
        price: '150',
        period: 'day',
        rating: 4.9,
        reviews: 28,
        image: 'https://picsum.photos/400/300?random=5',
        type: 'Gallery',
        details: ['A 600+', '4,000 sq ft', 'free parking']
    },
    {
        id: 6,
        title: 'Luxury Restaurant Private Dining',
        location: 'London, SW3',
        price: '300',
        period: 'hour',
        rating: 4.7,
        reviews: 36,
        image: 'https://picsum.photos/400/300?random=6',
        type: 'Restaurant',
        details: ['A 200+', '1,500 sq ft', 'valet parking']
    },
    {
        id: 7,
        title: 'Industrial Warehouse Event Space',
        location: 'London, SE1',
        price: '400',
        period: 'day',
        rating: 4.5,
        reviews: 15,
        image: 'https://picsum.photos/400/300?random=7',
        type: 'Warehouse',
        details: ['A 800+', '10,000 sq ft', 'free parking']
    },
    {
        id: 8,
        title: 'Cozy Apartment Photo Shoot',
        location: 'London, N1',
        price: '60',
        period: 'hour',
        rating: 4.4,
        reviews: 20,
        image: 'https://picsum.photos/400/300?random=8',
        type: 'Apartment',
        details: ['A 250+', '800 sq ft', 'paid parking']
    },
];

// Venue Card Component
const VenueCard: React.FC<{ venue: Venue, index: number }> = ({ venue, index }) => {
    const isVerified = index < 6;
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <div className="bg-white rounded-xl overflow-hidden cursor-pointer group">
            <div className="relative h-60 bg-gray-200">
                <img
                    src={venue.image}
                    alt={venue.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {isVerified && (
                    <div className="absolute top-3 left-3 flex items-center bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        Verified
                    </div>
                )}

                <div className="absolute top-3 right-3 flex items-center space-x-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsWishlisted(!isWishlisted);
                        }}
                        className={`p-1.5 backdrop-blur-sm rounded-full shadow-md transition-colors ${isWishlisted
                                ? 'bg-[#FF5037] text-white'
                                : 'bg-white/70 text-gray-800 hover:text-[#FF5037]'
                            }`}
                    >
                        <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsBookmarked(!isBookmarked);
                        }}
                        className={`p-1.5 backdrop-blur-sm rounded-full shadow-md transition-colors ${isBookmarked
                                ? 'bg-blue-600 text-white'
                                : 'bg-white/70 text-gray-800 hover:text-blue-600'
                            }`}
                    >
                        <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
                    </button>
                </div>
            </div>

            <div className="p-4 pt-3">
                <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-gray-500">{venue.location}</p>
                    <div className="flex items-center text-xs text-gray-700">
                        <Star className="text-yellow-400 fill-yellow-400 mr-1" size={12} />
                        <span className="font-semibold mr-1">{venue.rating}</span>
                        <span className="text-gray-500">({venue.reviews})</span>
                    </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-800 leading-tight group-hover:text-[#FF5037] transition-colors">
                    {venue.title}
                </h3>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3 border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-1">
                        <span className="font-medium text-red-500 text-xs">A</span>
                        <span className='text-xs'>{venue.details[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-medium text-red-500 text-xs">2+</span>
                        <span className='text-xs'>{venue.details[1]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-medium text-red-500 text-xs">P</span>
                        <span className='text-xs'>{venue.details[2]}</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-auto">+25 more</span>
                </div>

                <div className="flex items-end justify-between">
                    <div className="text-left">
                        <span className="text-sm text-gray-500">From</span>
                        <div className="text-xl font-bold text-gray-900 leading-none">
                            ${venue.price}
                        </div>
                        <span className="text-gray-500 text-xs">/per {venue.period}</span>
                    </div>
                    <button className="text-sm text-[#FF5037] font-semibold py-1 px-3 border border-[#FF5037] rounded-lg hover:bg-[#FFF0EF] transition-colors">
                        View details
                    </button>
                </div>
            </div>
        </div>
    );
};

// Venue Type Icon Data
const venueTypes = [
    {
        name: 'All Spaces',
        icon: (active: boolean) => <Grid size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: ''
    },
    {
        name: 'Photo Studio',
        icon: (active: boolean) => <Camera size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Photo Studio'
    },
    {
        name: 'Film Studio',
        icon: (active: boolean) => <Film size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Film Studio'
    },
    {
        name: 'Warehouse',
        icon: (active: boolean) => <Warehouse size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Warehouse'
    },
    {
        name: 'Gallery',
        icon: (active: boolean) => <Image size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Gallery'
    },
    {
        name: 'Restaurant',
        icon: (active: boolean) => <Utensils size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Restaurant'
    },
    {
        name: 'Apartment',
        icon: (active: boolean) => <Building size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Apartment'
    },
    {
        name: 'Office Space',
        icon: (active: boolean) => <Building2 size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Office Space'
    },
    {
        name: 'Venue',
        icon: (active: boolean) => <Factory size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Venue'
    },
    {
        name: 'Private Party',
        icon: (active: boolean) => <PartyPopper size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Private Party'
    },
    {
        name: 'Meeting',
        icon: (active: boolean) => <CalendarDays size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Meeting'
    },
    {
        name: 'Kitchen',
        icon: (active: boolean) => <Utensils size={28} className={active ? "text-[#FF5037]" : "text-gray-600"} />,
        value: 'Kitchen'
    },
];


// Venue Type Icon Component
const VenueTypeIcon: React.FC<{
    icon: React.ReactNode,
    name: string,
    value: string,
    isActive: boolean,
    onClick: () => void
}> = ({ icon, name, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors cursor-pointer w-24 flex-shrink-0 ${isActive ? 'border-b-2 border-[#FF5037]' : 'hover:bg-gray-50'
                }`}
        >
            <div className="mb-1 h-7 w-7 flex items-center justify-center">
                {icon}
            </div>

            <span className={`text-xs text-center font-medium ${isActive ? 'text-[#FF5037]' : 'text-gray-700'}`}>
                {name}
            </span>
        </div>
    );
};

export default function SearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get('query');
    const location = searchParams.get('location');

    const [searchInput, setSearchInput] = useState(query || '');
    const [results, setResults] = useState<Venue[]>(mockSearchResults); // Initialize with all data
    const [loading, setLoading] = useState(false);
    const [activeVenueType, setActiveVenueType] = useState('All Spaces');
    const [hasParkingFilter, setHasParkingFilter] = useState(false);
    const [sortBy, setSortBy] = useState('recommended');

    // Apply filters and search
    const performSearch = (newType?: string) => {
        setLoading(true);

        setTimeout(() => {
            let filteredResults = [...mockSearchResults];

            // Apply search input filter
            if (searchInput.trim()) {
                filteredResults = filteredResults.filter(venue =>
                    venue.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                    venue.location.toLowerCase().includes(searchInput.toLowerCase()) ||
                    venue.type.toLowerCase().includes(searchInput.toLowerCase())
                );
            }

            // Apply venue type filter (use newType if provided)
            const typeToUse = newType || activeVenueType;

            if (typeToUse !== 'All Spaces') {
                filteredResults = filteredResults.filter(venue =>
                    venue.type === typeToUse
                );
            }


            // Apply parking filter
            if (hasParkingFilter) {
                filteredResults = filteredResults.filter(venue =>
                    venue.details[2].toLowerCase().includes('parking')
                );
            }

            // Apply location filter from URL
            if (location) {
                filteredResults = filteredResults.filter(venue =>
                    venue.location.toLowerCase().includes(location.toLowerCase())
                );
            }

            // Apply sorting
            if (sortBy === 'price-low-high') {
                filteredResults.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            } else if (sortBy === 'price-high-low') {
                filteredResults.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            } else if (sortBy === 'rating-high-low') {
                filteredResults.sort((a, b) => b.rating - a.rating);
            }

            setResults(filteredResults);
            setLoading(false);
        }, 300);
    };

    // Handle search form submission
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        performSearch();
    };

    const handleVenueTypeClick = (type: string, value: string) => {
        // Remove all URL params
        router.replace('/search', { scroll: false });

        setActiveVenueType(type);
        performSearch(type);
    };


    // Handle parking filter toggle
    const handleParkingFilter = () => {
        setHasParkingFilter(!hasParkingFilter);
    };

    // Handle sort change
    const handleSortChange = (value: string) => {
        setSortBy(value);
    };

    // Perform search when filters change
    useEffect(() => {
        performSearch();
    }, [activeVenueType, hasParkingFilter, sortBy]);

    // Initialize with URL parameters
    useEffect(() => {
        if (query) {
            setSearchInput(query);
        }
        performSearch();
    }, [query, location]);

        useEffect(() => {
        window.scrollTo({
            top: 60,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="min-h-screen bg-white pt-16">
            <div className="relative">
                {/* TOP SEARCH/FILTER BAR */}
                <div className="w-full border-b border-gray-200 sticky top-[70px] md:top-[88px] z-40 bg-white shadow-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center py-3">
                            {/* Search Input */}
                            <div className="flex-1 mr-4">
                                <form onSubmit={handleSearch}>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Add keywords..."
                                            value={searchInput}
                                            onChange={(e) => setSearchInput(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF5037] focus:border-[#FF5037]"
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Filters Button */}
                            <button
                                onClick={() => setHasParkingFilter(!hasParkingFilter)}
                                className="flex items-center space-x-1 border border-gray-300 border-l border-y-0 border-r-0 pl-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors rounded-none"
                            >
                                <SlidersHorizontal size={18} />
                                <span>Filters</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Venue Type Horizontal Scroll */}
                <div className="w-full border-b border-gray-200 bg-white sticky top-[144px] z-30">
                    <div className="container mx-auto px-4">
                        <div className="flex overflow-x-auto space-x-5 py-3 scrollbar-hide items-center">
                            <button className="flex items-center text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0 p-2">
                                <ArrowLeft size={24} />
                            </button>

                            {venueTypes.map((type, index) => (
                                <VenueTypeIcon
                                    key={index}
                                    name={type.name}
                                    icon={type.icon(activeVenueType === type.name)}
                                    value={type.value}
                                    isActive={activeVenueType === type.name}
                                    onClick={() => handleVenueTypeClick(type.name, type.value)}
                                />
                            ))}

                            <button className="flex items-center text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0 p-2">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="container mx-auto px-4 py-6 flex">
                    {/* Left Column: Search Results */}
                    <div className="w-full lg:w-3/5 xl:w-7/12 pr-4">
                        {/* Results Header with Filters */}
                        <div className="mb-4 flex flex-wrap items-center justify-start">
                            <p className="text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 mr-4">
                                <span className="font-semibold">{results.length} venues</span>
                                {location ? ` near ${location}` : ' found'}
                                {searchInput && ` for "${searchInput}"`}
                            </p>

                            {/* Parking Pill and Sort */}
                            <div className="flex items-center space-x-2 overflow-x-auto flex-1 md:flex-initial">
                                {hasParkingFilter && (
                                    <button
                                        onClick={handleParkingFilter}
                                        className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
                                    >
                                        Parking <X size={12} className="ml-1 text-gray-500" />
                                    </button>
                                )}

                                <select
                                    value={sortBy}
                                    onChange={(e) => {
                                        handleSortChange(e.target.value);
                                    }}
                                    className="border-none bg-gray-100 rounded-full px-3 py-1 text-sm font-medium appearance-none cursor-pointer"
                                >
                                    <option value="recommended">Sort by: Recommended</option>
                                    <option value="price-low-high">Price: Low to High</option>
                                    <option value="price-high-low">Price: High to Low</option>
                                    <option value="rating-high-low">Rating: High to Low</option>
                                </select>
                            </div>

                            {/* Map Toggle Button */}
                            <button className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors ml-auto flex-shrink-0">
                                <LayoutList size={16} className="mr-1" />
                                <span>View List</span>
                            </button>
                        </div>

                        {/* Results Grid */}
                        {loading ? (
                            <div className="text-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF5037] mx-auto"></div>
                                <p className="mt-4 text-gray-600">Searching for venues...</p>
                            </div>
                        ) : results.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {results.map((venue, index) => (
                                    <VenueCard key={venue.id} venue={venue} index={index} />
                                ))}
                                <div className="col-span-full flex justify-center mt-4">
                                    <button className="flex items-center text-sm text-gray-600 font-medium px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                        <Plus size={16} className="mr-1" />
                                        <span>Show more listings</span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    No venues found
                                </h3>
                                <p className="text-gray-600 max-w-md mx-auto">
                                    Try adjusting your search terms or filters.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchInput('');
                                        setActiveVenueType('All Spaces');
                                        setHasParkingFilter(false);
                                        setSortBy('recommended');
                                    }}
                                    className="mt-4 bg-[#FF5037] text-white px-4 py-2 rounded-lg hover:bg-[#e4462e] transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Map */}
                    <div className="hidden lg:block lg:w-2/5 xl:w-5/12 sticky top-16 h-[calc(100vh-64px)] overflow-hidden">
                        <img
                            src="https://i.imgur.com/L79p6T9.png"
                            alt="Map of London venues with pins"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-lg shadow-lg border border-gray-200 text-xs font-semibold whitespace-nowrap">
                            Downtown Loft
                            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}