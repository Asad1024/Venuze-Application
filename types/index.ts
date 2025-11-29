export interface Venue {
    id: number;
    title: string;
    location: string;
    price: string;
    period: string;
    rating: number;
    reviews: number;
    image: string;
    type: string;
    details: string[];
}

export interface SearchBarProps {
    isScrolled: boolean;
    onSearch?: (query: string) => void;
}

export interface Property {
    id: number;
    title: string;
    price: string;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
}
