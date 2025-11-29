'use client';

import { Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Location options from dummy data
const locationOptions = [
    'London, SWI',
    'London, E1',
    'London, NW1',
    'London, WC2',
    'London, SW3',
    'London, SE1',
    'London, N1',
    'New York, USA'
];

// Guest options
const guestOptions = [
    '1–5 Guests',
    '5–10 Guests',
    '10–20 Guests',
    '20–50 Guests',
    '50+ Guests'
];

// Generate next 3 days dates
const getDateOptions = () => {
    const options = ['Anytime'];
    const today = new Date();

    for (let i = 0; i < 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
        options.push(formattedDate);
    }

    return options;
};

export default function NavSearchBar({ visible }: { visible: boolean }) {
    const [location, setLocation] = useState('London, SWI');
    const [date, setDate] = useState('Anytime');
    const [guests, setGuests] = useState('10–20 Guests');
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
    const router = useRouter();

    const locationRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);
    const guestsRef = useRef<HTMLDivElement>(null);

    const dateOptions = getDateOptions();

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
                setShowLocationDropdown(false);
            }
            if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
                setShowDateDropdown(false);
            }
            if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
                setShowGuestsDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = () => {
        const searchParams = new URLSearchParams({
            location: location.replace(', UK', '').replace(', USA', ''),
            guests: guests.replace(' Guests', '').replace('–', '-').replace('+', '')
        });

        if (date !== 'Anytime') {
            searchParams.append('date', date);
        }

        router.push(`/search?${searchParams.toString()}`);
    };

    const handleLocationSelect = (selectedLocation: string) => {
        setLocation(selectedLocation);
        setShowLocationDropdown(false);
    };

    const handleDateSelect = (selectedDate: string) => {
        setDate(selectedDate);
        setShowDateDropdown(false);
    };

    const handleGuestsSelect = (selectedGuests: string) => {
        setGuests(selectedGuests);
        setShowGuestsDropdown(false);
    };

    return (
        <div
            className={`
        transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
        >
            <div className="
        bg-white border border-gray-200 shadow-md rounded-2xl
        flex items-center px-5 py-3
        w-[430px]
      ">
                {/* Location - Dropdown */}
                <div className="flex-1 relative" ref={locationRef}>
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded px-1"
                        onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    >
                        <span className="text-sm font-semibold text-gray-900">
                            {location}
                        </span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </div>

                    {showLocationDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                            {locationOptions.map((loc, index) => (
                                <div
                                    key={index}
                                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 ${location === loc ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                                        }`}
                                    onClick={() => handleLocationSelect(loc)}
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="h-5 w-px bg-gray-300 mx-3"></div>

                {/* Date - Dropdown */}
                <div className="flex-1 relative" ref={dateRef}>
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded px-1"
                        onClick={() => setShowDateDropdown(!showDateDropdown)}
                    >
                        <span className="text-sm font-semibold text-gray-900">
                            {date}
                        </span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </div>

                    {showDateDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            {dateOptions.map((dateOption, index) => (
                                <div
                                    key={index}
                                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 ${date === dateOption ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                                        }`}
                                    onClick={() => handleDateSelect(dateOption)}
                                >
                                    {dateOption}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="h-5 w-px bg-gray-300 mx-3"></div>

                {/* Guests - Dropdown */}
                <div className="flex-1 relative" ref={guestsRef}>
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded px-1"
                        onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
                    >
                        <span className="text-sm font-semibold text-gray-900">
                            {guests}
                        </span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </div>

                    {showGuestsDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            {guestOptions.map((guest, index) => (
                                <div
                                    key={index}
                                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 ${guests === guest ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                                        }`}
                                    onClick={() => handleGuestsSelect(guest)}
                                >
                                    {guest}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="ml-3 bg-[#FF5037] p-3 rounded-xl text-white hover:bg-[#e4462e] transition"
                >
                    <Search size={18} />
                </button>
            </div>
        </div>
    );
}