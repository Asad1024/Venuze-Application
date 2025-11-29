import { Property } from '@/types';
import { Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200">
                {/* Property Image */}
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {property.title}
                </h3>

                <p className="text-2xl font-bold text-primary-500 mb-2">
                    {property.price}
                </p>

                <p className="text-gray-600 mb-3">{property.address}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <Bed size={16} />
                        <span>{property.beds} beds</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <Bath size={16} />
                        <span>{property.baths} baths</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <Square size={16} />
                        <span>{property.sqft} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;