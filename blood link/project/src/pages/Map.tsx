import React, { useState } from 'react';
import { MapPin, Navigation, Heart, Phone, Filter } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Map: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mapPins = [
    { id: '1', type: 'donor', name: 'John S.', bloodGroup: 'O+', lat: 40.7128, lng: -74.0060, city: 'New York' },
    { id: '2', type: 'donor', name: 'Sarah J.', bloodGroup: 'A+', lat: 34.0522, lng: -118.2437, city: 'Los Angeles' },
    { id: '3', type: 'hospital', name: 'City General Hospital', lat: 41.8781, lng: -87.6298, city: 'Chicago' },
    { id: '4', type: 'bloodbank', name: 'Regional Blood Center', lat: 29.7604, lng: -95.3698, city: 'Houston' },
    { id: '5', type: 'donor', name: 'Emma D.', bloodGroup: 'B+', lat: 33.4484, lng: -112.0740, city: 'Phoenix' }
  ];

  const filters = [
    { id: 'all', label: 'Show All', icon: MapPin },
    { id: 'donors', label: 'Donors Only', icon: Heart },
    { id: 'hospitals', label: 'Hospitals', icon: Phone },
    { id: 'bloodbanks', label: 'Blood Banks', icon: MapPin }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'donor': return 'text-green-600';
      case 'hospital': return 'text-blue-600';
      case 'bloodbank': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const filteredPins = selectedFilter === 'all' 
    ? mapPins 
    : mapPins.filter(pin => 
        selectedFilter === 'donors' ? pin.type === 'donor' :
        selectedFilter === 'hospitals' ? pin.type === 'hospital' :
        selectedFilter === 'bloodbanks' ? pin.type === 'bloodbank' :
        true
      );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Blood Map</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find nearby donors, hospitals, and blood banks on our interactive map.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] relative overflow-hidden">
              {/* Filter Buttons */}
              <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-2">
                <div className="flex space-x-1">
                  {filters.map((filter) => (
                    <Button
                      key={filter.id}
                      size="sm"
                      variant={selectedFilter === filter.id ? 'primary' : 'outline'}
                      onClick={() => setSelectedFilter(filter.id)}
                      className="text-xs"
                    >
                      <filter.icon className="h-3 w-3 mr-1" />
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Mock Map */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 relative">
                {/* Map Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ccc" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Map Pins */}
                {filteredPins.map((pin, index) => (
                  <div
                    key={pin.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110`}
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 10)}%`
                    }}
                  >
                    <div className={`bg-white rounded-full p-2 shadow-lg border-2 ${
                      pin.type === 'donor' ? 'border-green-500' :
                      pin.type === 'hospital' ? 'border-blue-500' :
                      'border-red-500'
                    }`}>
                      <MapPin className={`h-6 w-6 ${getIconColor(pin.type)}`} fill="currentColor" />
                    </div>
                    
                    {/* Pin Info Card */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-max z-20 opacity-0 hover:opacity-100 transition-opacity">
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{pin.name}</div>
                        {'bloodGroup' in pin && (
                          <div className="text-red-600 font-medium">{pin.bloodGroup}</div>
                        )}
                        <div className="text-gray-500">{pin.city}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2">
                  <div className="space-y-1">
                    <button className="block w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold">+</button>
                    <button className="block w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold">-</button>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                  <Button size="sm">
                    <Navigation className="h-4 w-4 mr-2" />
                    My Location
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Legend */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 text-red-600 mr-2" />
                Map Legend
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Available Donors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Hospitals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Blood Banks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Your Location</span>
                </div>
              </div>
            </Card>

            {/* Nearby Resources */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Nearby Resources</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Available Donors</p>
                    <p className="text-sm text-gray-500">Within 5 miles</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    12
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Blood Banks</p>
                    <p className="text-sm text-gray-500">Within 10 miles</p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                    3
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Hospitals</p>
                    <p className="text-sm text-gray-500">Within 15 miles</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                    7
                  </span>
                </div>
              </div>
            </Card>

            {/* Emergency Actions */}
            <Card className="bg-red-50 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-4">Emergency Actions</h3>
              <div className="space-y-2">
                <Button className="w-full" size="sm" variant="danger">
                  <Heart className="h-4 w-4 mr-2" />
                  Request Blood Now
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Nearest Bank
                </Button>
              </div>
            </Card>

            {/* Statistics */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Today's Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Donations</span>
                  <span className="font-semibold text-green-600">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Requests</span>
                  <span className="font-semibold text-red-600">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lives Saved</span>
                  <span className="font-semibold text-blue-600">72</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;