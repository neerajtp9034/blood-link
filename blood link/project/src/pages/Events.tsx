import React from 'react';
import { Calendar, MapPin, Users, Clock, Heart } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { mockEvents } from '../data/mockData';

const Events: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) >= new Date();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blood Donation Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join upcoming blood drives and community events. Make a difference in your local community.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6" fill="currentColor" />
              <span className="text-sm font-semibold uppercase tracking-wide">Featured Event</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Emergency Blood Drive</h2>
            <p className="text-xl text-red-100 mb-6">
              Join us for an urgent community blood drive. All blood types needed to replenish local hospital supplies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>This Saturday, Jan 25</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Central Community Center</span>
              </div>
            </div>
            <Button variant="outline" className="bg-white text-red-600 hover:bg-red-50 border-white">
              Register Now
            </Button>
          </div>
        </div>

        {/* All Events */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Upcoming Events</h2>
          
          {mockEvents.map((event) => (
            <Card key={event.id} className="border-l-4 border-red-600">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-2 text-red-600 font-medium">
                        <Users className="h-4 w-4" />
                        <span>{event.organizer}</span>
                      </div>
                    </div>
                    {isUpcoming(event.date) && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-3">
                  <Button className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Register for Event
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="secondary" className="w-full">
                    Share Event
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-red-50 border border-red-200">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" fill="currentColor" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Organize an Event?</h3>
            <p className="text-gray-600 mb-6">
              Partner with BloodLink to organize blood donation drives in your community.
            </p>
            <Button>
              Contact Our Team
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;