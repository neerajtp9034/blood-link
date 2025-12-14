import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, MapPin, Calendar, Phone, ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Landing: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Donors', value: '2,500+' },
    { icon: Heart, label: 'Lives Saved', value: '10,000+' },
    { icon: MapPin, label: 'Cities Covered', value: '50+' },
    { icon: Calendar, label: 'Monthly Drives', value: '200+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Every Drop
                <span className="block text-red-200">Saves Lives</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-red-100">
                Connect with blood donors in your area instantly. 
                Because when seconds count, BloodLink delivers hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Heart className="h-6 w-6 mr-2" />
                    Donate Now
                  </Button>
                </Link>
                <Link to="/request">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-red-600">
                    Request Blood
                    <ArrowRight className="h-6 w-6 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <Heart className="h-24 w-24 text-red-300 mx-auto mb-4" fill="currentColor" />
                    <h3 className="text-2xl font-bold mb-2">Real-time Matching</h3>
                    <p className="text-red-100">
                      Instantly connect with compatible donors in your area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How BloodLink Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, fast, and life-saving. Our platform makes blood donation and requests seamless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-l-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Register as Donor</h3>
              <p className="text-gray-600">
                Sign up with your blood type and contact information. Join our community of life savers.
              </p>
            </Card>

            <Card className="text-center border-l-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Get Matched</h3>
              <p className="text-gray-600">
                Our system instantly matches requests with nearby compatible donors for quick response.
              </p>
            </Card>

            <Card className="text-center border-l-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Save Lives</h3>
              <p className="text-gray-600">
                Connect directly and coordinate donation. Every donation can save up to 3 lives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Phone className="h-8 w-8 text-white animate-bounce" />
            <h2 className="text-3xl font-bold text-white">24/7 Emergency Support</h2>
          </div>
          <p className="text-xl text-red-100 mb-6">
            Need blood urgently? Our emergency team is available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="outline" size="lg" className="bg-white text-red-600 hover:bg-red-50 border-white">
                Request Blood Now
              </Button>
            </Link>
            <a href="tel:1-800-BLOOD-NOW" className="inline-block">
              <Button variant="secondary" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of heroes who are already saving lives. Your donation could be someone's miracle.
          </p>
          <Link to="/register">
            <Button size="lg" className="text-xl px-12 py-4">
              <Heart className="h-6 w-6 mr-2" />
              Start Saving Lives Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;