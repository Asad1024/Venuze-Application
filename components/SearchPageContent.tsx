"use client";

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

const SearchPageContent: React.FC = () => {
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
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

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
                                    <div className="flex flex-col items-center justify-center w-full h-[80vh] lg:h-[85vh] text-center mx-auto">
                                        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M166.337 32.0996H29.0292C27.0046 32.0996 25.3633 33.7409 25.3633 35.7656V118.506C25.3633 120.53 27.0046 122.172 29.0292 122.172H166.337C168.362 122.172 170.003 120.53 170.003 118.506V35.7656C170.003 33.7409 168.362 32.0996 166.337 32.0996Z" fill="#8A8A8A" />
                                            <path d="M165.924 36.5234H29.4453V117.761H165.924V36.5234Z" fill="#F4F4F4" />
                                            <path d="M120.134 122.178H75.2266V133.423H120.134V122.178Z" fill="#8A8A8A" />
                                            <path d="M141.627 139.878C133.415 133.247 116.817 128.715 97.6766 128.715C78.5358 128.715 61.9429 133.247 53.7266 139.878H141.622H141.627Z" fill="#8A8A8A" />
                                            <path d="M53.731 141.024H138.043C139.189 141.024 140.334 141.052 141.48 141.024C141.53 141.024 141.581 141.024 141.626 141.024C143.102 141.024 143.102 138.733 141.626 138.733H57.319C56.1734 138.733 55.0278 138.705 53.8822 138.733C53.8318 138.733 53.7814 138.733 53.7356 138.733C52.26 138.733 52.26 141.024 53.7356 141.024H53.731Z" fill="#8A8A8A" />
                                            <path d="M158.462 42.1719H36.8945V112.457H158.462V42.1719Z" fill="white" />
                                            <path d="M158.462 42.1719H36.8945V48.9447H158.462V42.1719Z" fill="#EAEAEA" />
                                            <path d="M42.8087 45.7149C42.8087 46.5718 42.1167 47.2637 41.2598 47.2637C40.4029 47.2637 39.7109 46.5718 39.7109 45.7149C39.7109 44.858 40.4029 44.166 41.2598 44.166C42.1167 44.166 42.8087 44.858 42.8087 45.7149Z" fill="#828282" />
                                            <path d="M48.0274 45.7149C48.0274 46.5718 47.3355 47.2637 46.4785 47.2637C45.6216 47.2637 44.9297 46.5718 44.9297 45.7149C44.9297 44.858 45.6216 44.166 46.4785 44.166C47.3355 44.166 48.0274 44.858 48.0274 45.7149Z" fill="#F9AB43" />
                                            <path d="M53.2462 45.7149C53.2462 46.5718 52.5542 47.2637 51.6973 47.2637C50.8404 47.2637 50.1484 46.5718 50.1484 45.7149C50.1484 44.858 50.8404 44.166 51.6973 44.166C52.5542 44.166 53.2462 44.858 53.2462 45.7149Z" fill="#8A8A8A" />
                                            <path d="M140.635 78.6707C140.635 82.859 137.033 86.2867 132.634 86.2867H64.997C60.5979 86.2867 56.9961 82.859 56.9961 78.6707C56.9961 74.4823 60.5979 71.0547 64.997 71.0547H132.634C137.033 71.0547 140.635 74.4823 140.635 78.6707Z" fill="#EAEAEA" />
                                            <path d="M73.7291 82.2627L70.9522 79.6782C71.3692 79.0871 71.5891 78.3768 71.5616 77.639C71.5296 76.75 71.1538 75.9206 70.4985 75.3157C69.8478 74.7063 68.9955 74.3901 68.1019 74.4221C67.2129 74.4542 66.3835 74.83 65.7786 75.4853C65.1691 76.136 64.853 76.9883 64.885 77.8819C64.9171 78.7709 65.2929 79.6003 65.9482 80.2052C66.5989 80.8146 67.4512 81.1308 68.3402 81.0987C69.078 81.0712 69.7699 80.8055 70.329 80.3472L73.1059 82.9317L73.7245 82.2673L73.7291 82.2627ZM66.5668 79.5407C66.0902 79.0962 65.8153 78.4959 65.7924 77.8498C65.7694 77.1991 65.9986 76.5805 66.4431 76.1039C66.8876 75.6273 67.4879 75.3524 68.134 75.3295C68.7847 75.3065 69.4033 75.5357 69.8799 75.9802C70.3565 76.4247 70.6314 77.025 70.6543 77.6711C70.6772 78.3218 70.4481 78.9404 70.0036 79.417C69.5591 79.8936 68.9588 80.1685 68.3127 80.1914C67.662 80.2143 67.0434 79.9852 66.5668 79.5407Z" fill="#8A8A8A" />
                                            <path d="M85.768 79.327C86.2007 79.327 86.5516 78.9761 86.5516 78.5434C86.5516 78.1106 86.2007 77.7598 85.768 77.7598C85.3352 77.7598 84.9844 78.1106 84.9844 78.5434C84.9844 78.9761 85.3352 79.327 85.768 79.327Z" fill="#828282" />
                                            <path d="M94.9281 79.327C95.3609 79.327 95.7117 78.9761 95.7117 78.5434C95.7117 78.1106 95.3609 77.7598 94.9281 77.7598C94.4954 77.7598 94.1445 78.1106 94.1445 78.5434C94.1445 78.9761 94.4954 79.327 94.9281 79.327Z" fill="#828282" />
                                            <path d="M104.096 79.327C104.529 79.327 104.88 78.9761 104.88 78.5434C104.88 78.1106 104.529 77.7598 104.096 77.7598C103.663 77.7598 103.312 78.1106 103.312 78.5434C103.312 78.9761 103.663 79.327 104.096 79.327Z" fill="#828282" />
                                            <path d="M113.26 79.327C113.693 79.327 114.044 78.9761 114.044 78.5434C114.044 78.1106 113.693 77.7598 113.26 77.7598C112.827 77.7598 112.477 78.1106 112.477 78.5434C112.477 78.9761 112.827 79.327 113.26 79.327Z" fill="#828282" />
                                            <path d="M183.53 16.7363H123.02V83.3098H183.53V16.7363Z" fill="#EAEAEA" />
                                            <path d="M185.53 14.7363H125.02V81.3098H185.53V14.7363Z" fill="#F4F4F4" />
                                            <path d="M185.53 14.7363H125.02V22.2423H185.53V14.7363Z" fill="#EAEAEA" />
                                            <path d="M131.566 18.6598C131.566 19.6084 130.796 20.3782 129.847 20.3782C128.899 20.3782 128.129 19.6084 128.129 18.6598C128.129 17.7113 128.899 16.9414 129.847 16.9414C130.796 16.9414 131.566 17.7113 131.566 18.6598Z" fill="#828282" />
                                            <path d="M137.351 18.6598C137.351 19.6084 136.581 20.3782 135.632 20.3782C134.684 20.3782 133.914 19.6084 133.914 18.6598C133.914 17.7113 134.684 16.9414 135.632 16.9414C136.581 16.9414 137.351 17.7113 137.351 18.6598Z" fill="#F9AB43" />
                                            <path d="M143.132 18.6598C143.132 19.6084 142.362 20.3782 141.414 20.3782C140.465 20.3782 139.695 19.6084 139.695 18.6598C139.695 17.7113 140.465 16.9414 141.414 16.9414C142.362 16.9414 143.132 17.7113 143.132 18.6598Z" fill="#8A8A8A" />
                                            <path d="M167.76 56.4705L165.262 58.9688L187.662 81.3687L190.16 78.8705L167.76 56.4705Z" fill="#FF5037" />
                                            <path d="M168.538 55.0386L163.836 59.7402L170.391 66.2953L175.093 61.5937L168.538 55.0386Z" fill="#FF5037" />
                                            <g opacity="0.2">
                                                <path d="M166.514 57.7169C160.653 63.5732 151.121 63.5778 145.265 57.7169C139.404 51.856 139.409 42.3245 145.265 36.4682C151.121 30.6119 160.657 30.6073 166.514 36.4682C172.37 42.3291 172.37 51.8606 166.514 57.7169Z" fill="#FF5037" />
                                            </g>
                                            <path d="M167.939 59.1455C161.294 65.7901 150.479 65.7901 143.835 59.1455C137.19 52.501 137.19 41.6865 143.835 35.042C150.479 28.3975 161.294 28.3975 167.939 35.042C174.583 41.6865 174.583 52.501 167.939 59.1455ZM146.332 37.5394C141.067 42.8046 141.067 51.3783 146.332 56.6435C151.598 61.9087 160.171 61.9087 165.436 56.6435C170.702 51.3783 170.702 42.8046 165.436 37.5394C160.171 32.2742 151.598 32.2742 146.332 37.5394Z" fill="#FF5037" />
                                            <path d="M163.362 41.8187L161.162 39.6191L155.888 44.8889L150.618 39.6191L148.414 41.8187L153.688 47.0931L148.414 52.3629L150.618 54.567L155.888 49.2926L161.162 54.567L163.362 52.3629L158.092 47.0931L163.362 41.8187Z" fill="#FF5037" />
                                            <path d="M70.7543 91.6484H43.3789V141.097H85.6014V105.872L70.7543 91.6484Z" fill="#F8B2A8" />
                                            <path d="M70.4609 91.6484L85.308 105.872H70.4609V91.6484Z" fill="#DD8D81" />
                                            <path d="M59.2281 110.65C59.2281 112.135 58.3666 113.335 57.3035 113.335C56.2404 113.335 55.3789 112.13 55.3789 110.65C55.3789 109.17 56.2404 107.965 57.3035 107.965C58.3666 107.965 59.2281 109.17 59.2281 110.65Z" fill="white" />
                                            <path d="M70.1121 113.335C71.1751 113.335 72.0367 112.133 72.0367 110.65C72.0367 109.167 71.1751 107.965 70.1121 107.965C69.0492 107.965 68.1875 109.167 68.1875 110.65C68.1875 112.133 69.0492 113.335 70.1121 113.335Z" fill="white" />
                                            <path d="M58.3841 118.72C59.186 117.841 60.2996 117.153 61.4085 116.754C64.2176 115.742 66.9303 116.8 69.0658 118.72C69.6386 119.234 70.4863 118.39 69.9135 117.873C67.5444 115.742 64.4696 114.491 61.3169 115.522C59.933 115.975 58.5308 116.791 57.541 117.873C57.0231 118.441 57.8663 119.289 58.3887 118.72H58.3841Z" fill="white" />
                                            <path d="M51.3789 127.743V123.981H52.1167L53.6564 126.497V123.981H54.3621V127.743H53.6014L52.0846 125.287V127.743H51.3789Z" fill="white" />
                                            <path d="M55.5389 125.881C55.5389 125.496 55.5939 125.176 55.7131 124.914C55.8001 124.722 55.9147 124.552 56.0613 124.397C56.208 124.245 56.373 124.131 56.5471 124.057C56.7808 123.957 57.0511 123.906 57.3582 123.906C57.9126 123.906 58.3571 124.08 58.6917 124.424C59.0262 124.768 59.1911 125.244 59.1911 125.858C59.1911 126.472 59.0262 126.94 58.6962 127.283C58.3663 127.627 57.9264 127.797 57.3719 127.797C56.8174 127.797 56.3684 127.627 56.0384 127.283C55.7085 126.94 55.5435 126.472 55.5435 125.872L55.5389 125.881ZM56.3225 125.854C56.3225 126.28 56.4188 126.601 56.6158 126.825C56.8129 127.045 57.0603 127.155 57.3673 127.155C57.6744 127.155 57.9172 127.045 58.1143 126.83C58.3067 126.61 58.4075 126.285 58.4075 125.849C58.4075 125.414 58.3113 125.098 58.1234 124.882C57.9356 124.672 57.6835 124.562 57.3719 124.562C57.0603 124.562 56.8083 124.667 56.6158 124.882C56.4234 125.098 56.3271 125.423 56.3271 125.854H56.3225Z" fill="white" />
                                            <path d="M62.2945 123.981H63.6829C63.9945 123.981 64.2328 124.004 64.3978 124.054C64.6178 124.119 64.8056 124.233 64.966 124.403C65.1264 124.572 65.2456 124.774 65.328 125.012C65.4105 125.25 65.4518 125.548 65.4518 125.901C65.4518 126.213 65.4151 126.478 65.3372 126.703C65.241 126.978 65.1081 127.198 64.9339 127.367C64.8011 127.496 64.6223 127.597 64.3978 127.67C64.2283 127.725 64.0037 127.748 63.7242 127.748H62.2945V123.981ZM63.0552 124.618V127.111H63.6234C63.8342 127.111 63.99 127.097 64.0816 127.074C64.2053 127.042 64.3062 126.992 64.3886 126.918C64.4711 126.845 64.5353 126.726 64.5857 126.556C64.6361 126.387 64.6636 126.158 64.6636 125.869C64.6636 125.58 64.6361 125.356 64.5857 125.2C64.5353 125.044 64.462 124.92 64.3703 124.833C64.2787 124.746 64.1595 124.687 64.0175 124.655C63.9121 124.632 63.7013 124.618 63.3942 124.618H63.0506H63.0552Z" fill="white" />
                                            <path d="M70.0121 127.743H69.1873L68.8573 126.886H67.3543L67.0427 127.743H66.2362L67.7026 123.981H68.5045L70.0121 127.743ZM68.6145 126.254L68.0967 124.856L67.588 126.254H68.6145Z" fill="white" />
                                            <path d="M71.3971 127.743V124.618H70.279V123.981H73.2713V124.618H72.1578V127.743H71.3971Z" fill="white" />
                                            <path d="M77.2892 127.743H76.4643L76.1344 126.886H74.6314L74.3198 127.743H73.5132L74.9796 123.981H75.7816L77.2892 127.743ZM75.8915 126.254L75.3737 124.856L74.8651 126.254H75.8915Z" fill="white" />
                                            <path d="M31.2073 59.5244L15.9249 51.8672L2.08594 79.4763L25.6579 91.2898L35.5147 71.622L31.2073 59.5244Z" fill="#F8B2A8" />
                                            <path d="M31.2087 59.5254L35.5162 71.623L27.2266 67.4667L31.2087 59.5254Z" fill="#DD8D81" />
                                            <path d="M27.5348 70.549L26.8062 68.3494L21.5364 70.0999L19.7814 64.8301L17.5818 65.5587L19.3323 70.8331L14.0625 72.5835L14.7957 74.7831L20.0655 73.0326L21.816 78.3024L24.0155 77.5692L22.265 72.2994L27.5348 70.549Z" fill="white" />
                                        </svg>


                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                            No data found for your search.
                                        </h3>

                                        <p className="text-gray-600 max-w-sm mb-4">
                                            Explore other options or clear filters to see more results.
                                        </p>

                                    </div>

                        )}
                    </div>

                    {/* Right Column: Map */}
                    {results.length > 0 && (
                        <div className="hidden lg:block flex-grow sticky top-16 h-[calc(100vh-64px)] overflow-hidden">
                            <img
                                src="/images/map.png"
                                alt="Map of London venues with pins"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPageContent;
