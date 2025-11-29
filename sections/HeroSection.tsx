'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Search,
    Home as HomeIcon,
    Users as UsersIcon,
    ChevronDown
} from 'lucide-react';

// -------------------------------------------
// SAME OPTIONS USED IN NavSearchBar
// -------------------------------------------
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

const guestOptions = [
    '1–5 Guests',
    '5–10 Guests',
    '10–20 Guests',
    '20–50 Guests',
    '50+ Guests'
];

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

// -------------------------------------------
// COMPONENT
// -------------------------------------------
export default function HeroSection() {
    const router = useRouter();

    const dateOptions = getDateOptions();

    const [activeTab, setActiveTab] = useState<'venue' | 'vendors'>('venue');
    const [location, setLocation] = useState('London, SWI');
    const [date, setDate] = useState('Anytime');
    const [guests, setGuests] = useState('10–20 Guests');

    // Dropdown states
    const [dropdown, setDropdown] = useState({
        location: false,
        date: false,
        guests: false
    });

    // Refs for click-outside
    const locRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);
    const guestsRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (locRef.current && !locRef.current.contains(e.target as Node)) {
                setDropdown(d => ({ ...d, location: false }));
            }
            if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
                setDropdown(d => ({ ...d, date: false }));
            }
            if (guestsRef.current && !guestsRef.current.contains(e.target as Node)) {
                setDropdown(d => ({ ...d, guests: false }));
            }
        };

        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, []);

    // Search handler
    const handleSearch = (e?: React.FormEvent) => {
        e && e.preventDefault();

        const params = new URLSearchParams({
            type: activeTab,
            location: location.replace(', UK', '').replace(', USA', ''),
            guests: guests.replace(' Guests', '').replace('–', '-').replace('+', ''),
        });

        if (date !== 'Anytime') params.append('date', date);

        router.push(`/search?${params.toString()}`);
    };

    return (
        <section className="relative bg-black min-h-[110vh] md:min-h-screen">
            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
                <div className="w-full max-w-md md:max-w-4xl text-center">

                    {/* HERO TEXT */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
                        Celebrate in venues <br />
                        <span>big and small</span>
                    </h1>

                    {/* -------------------------------------------------- */}
                    {/* MOBILE SEARCH UI */}
                    {/* -------------------------------------------------- */}
                    <div className="md:hidden">
                        <div className="bg-white rounded-2xl shadow-2xl p-5 mx-auto max-w-sm">

                            {/* TABS */}
                            <div className="flex gap-2 mb-5">
                                <button
                                    onClick={() => setActiveTab('venue')}
                                    className={`flex-1 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold ${activeTab === 'venue'
                                            ? 'bg-[#FF5037] text-white'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    <HomeIcon size={18} /> Venue
                                </button>

                                <button
                                    onClick={() => setActiveTab('vendors')}
                                    className={`flex-1 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold ${activeTab === 'vendors'
                                            ? 'bg-[#FF5037] text-white'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    <UsersIcon size={18} /> Vendors
                                </button>
                            </div>

                            {/* FORM */}
                            <form onSubmit={handleSearch} className="space-y-4">

                                {/* LOCATION */}
                                <div ref={locRef}>
                                    <label className="block text-xs text-gray-500 mb-1.5">Where</label>
                                    <div
                                        className="relative border rounded-lg p-3 flex justify-between items-center cursor-pointer"
                                        onClick={() =>
                                            setDropdown(d => ({ ...d, location: !d.location }))
                                        }
                                    >
                                        {location}
                                        <ChevronDown size={18} className="text-gray-400" />
                                    </div>

                                    {dropdown.location && (
                                        <div className="mt-1 bg-white shadow-lg border rounded-lg max-h-56 overflow-y-auto">
                                            {locationOptions.map((loc, i) => (
                                                <div
                                                    key={i}
                                                    className="px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => {
                                                        setLocation(loc);
                                                        setDropdown(d => ({ ...d, location: false }));
                                                    }}
                                                >
                                                    {loc}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* DATE */}
                                <div ref={dateRef}>
                                    <label className="block text-xs text-gray-500 mb-1.5">When</label>
                                    <div
                                        className="relative border rounded-lg p-3 flex justify-between items-center cursor-pointer"
                                        onClick={() =>
                                            setDropdown(d => ({ ...d, date: !d.date }))
                                        }
                                    >
                                        {date}
                                        <ChevronDown size={18} className="text-gray-400" />
                                    </div>

                                    {dropdown.date && (
                                        <div className="mt-1 bg-white shadow-lg border rounded-lg">
                                            {dateOptions.map((dt, i) => (
                                                <div
                                                    key={i}
                                                    className="px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => {
                                                        setDate(dt);
                                                        setDropdown(d => ({ ...d, date: false }));
                                                    }}
                                                >
                                                    {dt}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* GUESTS */}
                                <div ref={guestsRef}>
                                    <label className="block text-xs text-gray-500 mb-1.5">Guests</label>
                                    <div
                                        className="relative border rounded-lg p-3 flex justify-between items-center cursor-pointer"
                                        onClick={() =>
                                            setDropdown(d => ({ ...d, guests: !d.guests }))
                                        }
                                    >
                                        {guests}
                                        <ChevronDown size={18} className="text-gray-400" />
                                    </div>

                                    {dropdown.guests && (
                                        <div className="mt-1 bg-white shadow-lg border rounded-lg">
                                            {guestOptions.map((g, i) => (
                                                <div
                                                    key={i}
                                                    className="px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => {
                                                        setGuests(g);
                                                        setDropdown(d => ({ ...d, guests: false }));
                                                    }}
                                                >
                                                    {g}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* MOBILE SEARCH BUTTON */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#FF5037] text-white py-3.5 rounded-lg font-semibold"
                                >
                                    <Search size={20} /> Search
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* -------------------------------------------------- */}
                    {/* DESKTOP SEARCH UI */}
                    {/* -------------------------------------------------- */}
                    <div className="hidden md:block relative max-w-4xl mx-auto mt-12">

                        {/* TABS */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-1 bg-white rounded-xl shadow-lg px-1 py-1">
                            <button
                                onClick={() => setActiveTab('venue')}
                                className={`px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${activeTab === 'venue'
                                        ? 'bg-[#FF5037] text-white'
                                        : 'bg-white text-gray-700 hover:text-[#FF5037]'
                                    }`}
                            >
                                <HomeIcon size={16} /> Venue
                            </button>

                            <button
                                onClick={() => setActiveTab('vendors')}
                                className={`px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${activeTab === 'vendors'
                                        ? 'bg-[#FF5037] text-white'
                                        : 'bg-white text-gray-700 hover:text-[#FF5037]'
                                    }`}
                            >
                                <UsersIcon size={16} /> Vendors
                            </button>
                        </div>

                        {/* MAIN DESKTOP SEARCH BAR */}
                        <form
                            onSubmit={handleSearch}
                            className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-4"
                        >
                            <div className="flex items-center h-16">

                                {/* LOCATION */}
                                <div ref={locRef} className="flex-1 h-full px-6 border-r border-gray-200 relative">
                                    <div
                                        className="h-full flex items-center justify-between cursor-pointer"
                                        onClick={() =>
                                            setDropdown(d => ({ ...d, location: !d.location }))
                                        }
                                    >
                                        <div>
                                            <div className="text-xs text-gray-500">Where</div>
                                            <div className="text-lg font-medium">{location}</div>
                                        </div>
                                        <ChevronDown size={18} className="text-gray-400" />
                                    </div>

                                    {dropdown.location && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-20">
                                            {locationOptions.map((loc, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => {
                                                        setLocation(loc);
                                                        setDropdown(d => ({ ...d, location: false }));
                                                    }}
                                                >
                                                    {loc}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* DATE */}
                                <div ref={dateRef} className="flex-1 h-full px-6 border-r border-gray-200 relative">
                                    <div
                                        className="h-full flex items-center justify-between cursor-pointer"
                                        onClick={() =>
                                            setDropdown(d => ({ ...d, date: !d.date }))
                                        }
                                    >
                                        <div>
                                            <div className="text-xs text-gray-500">When</div>
                                            <div className="text-lg font-medium">{date}</div>
                                        </div>
                                        <ChevronDown size={18} className="text-gray-400" />
                                    </div>

                                    {dropdown.date && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-20">
                                            {dateOptions.map((dt, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => {
                                                        setDate(dt);
                                                        setDropdown(d => ({ ...d, date: false }));
                                                    }}
                                                >
                                                    {dt}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* GUESTS */}
                                <div ref={guestsRef} className="flex-1 h-full px-6 border-r border-gray-200 relative">
                                    <div
                                        className="h-full flex items-center justify-between cursor-pointer"
                                        onClick={() =>
                                            setDropdown(d => ({ ...d, guests: !d.guests }))
                                        }
                                    >
                                        <div>
                                            <div className="text-xs text-gray-500">Guests</div>
                                            <div className="text-lg font-medium">{guests}</div>
                                        </div>
                                        <ChevronDown size={18} className="text-gray-400" />
                                    </div>

                                    {dropdown.guests && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-20">
                                            {guestOptions.map((g, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => {
                                                        setGuests(g);
                                                        setDropdown(d => ({ ...d, guests: false }));
                                                    }}
                                                >
                                                    {g}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* SEARCH BUTTON */}
                                <button
                                    type="submit"
                                    className="bg-[#FF5037] text-white px-10 h-full rounded-xl flex items-center gap-2 text-lg font-semibold hover:bg-[#E5452F]"
                                >
                                    <Search size={24} />
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* BOTTOM DOTS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                <span className="w-6 h-2 rounded-full bg-yellow-400"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/40"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/40"></span>
            </div>
        </section>
    );
}
