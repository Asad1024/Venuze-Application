'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SearchBarProps } from '@/types';

// Popular search suggestions
const searchSuggestions = [
    'Photo Studio London',
    'Film Studio',
    'Warehouse Space',
    'Event Venue',
    'Office Space',
    'Restaurant Private Dining'
];

const SearchBar: React.FC<SearchBarProps> = ({ isScrolled, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            if (onSearch) {
                onSearch(searchQuery);
            }
            router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        if (onSearch) {
            onSearch(suggestion);
        }
        router.push(`/search?query=${encodeURIComponent(suggestion)}`);
        setShowSuggestions(false);
    };

    const baseStyles = "search-bar-transition flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative";
    const sizeStyles = isScrolled
        ? "h-10 w-64"
        : "h-12 w-80 md:w-96";

    return (
        <div className="relative">
            <form onSubmit={handleSearch} className={`${baseStyles} ${sizeStyles}`}>
                <input
                    type="text"
                    placeholder="Search for venues, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-500 bg-transparent border-none outline-none"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                    <Search size={20} />
                </button>
            </form>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {searchSuggestions
                        .filter(suggestion =>
                            suggestion.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            searchQuery === ''
                        )
                        .map((suggestion, index) => (
                            <div
                                key={index}
                                className="px-4 py-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                                onMouseDown={() => handleSuggestionClick(suggestion)}
                            >
                                <div className="flex items-center">
                                    <Search size={16} className="text-gray-400 mr-2" />
                                    {suggestion}
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;