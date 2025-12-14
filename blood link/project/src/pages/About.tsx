import React from 'react';
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every life matters. We work with compassion and empathy to ensure no one faces a blood shortage alone.'
    },
    {
      icon: Target,
      title: 'Efficiency',
      description: 'Time is critical. Our platform connects donors and recipients instantly, reducing wait times and saving lives.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a network of heroes. Together, we create a community where everyone looks out for each other.'
    },
    {
      icon: Award,
      title: 'Trust',
      description: 'Verified donors, secure connections, and reliable service. Trust is the foundation of life-saving relationships.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Lives Saved' },
    { number: '2,500+', label: 'Active Donors' },
    { number: '50+', label: 'Cities Covered' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-12 w-12 text-white" fill="currentColor" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto">
              To create a world where no one dies from blood shortage. BloodLink bridges the gap 
              between those who can give and those who need, making blood donation accessible, 
              efficient, and life-saving.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  BloodLink was born from a simple yet powerful idea: What if we could connect blood donors 
                  with people in need instantly, anywhere, anytime?
                </p>
                <p>
                  Started by a team of passionate high school students who witnessed the challenges 
                  of blood shortage in their community, BloodLink has grown into a comprehensive 
                  platform that saves lives every day.
                </p>
                <p>
                  Today, we're proud to connect thousands of donors with patients in need, 
                  making blood donation more accessible and efficient than ever before.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/register">
                  <Button size="lg">
                    Join Our Mission
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-l-4 border-red-600">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and drive our commitment to saving lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-red-600 hover:transform hover:scale-105 transition-all duration-200">
                <value.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600 mb-8">
            We envision a future where blood shortage is eliminated through technology, community, 
            and the power of human kindness. A world where every person who needs blood can access 
            it quickly and safely.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1M</span>
              </div>
              <h4 className="font-semibold text-gray-900">Donors by 2026</h4>
              <p className="text-sm text-gray-600">Building the largest blood donor network</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100</span>
              </div>
              <h4 className="font-semibold text-gray-900">Cities Worldwide</h4>
              <p className="text-sm text-gray-600">Expanding globally to serve more communities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
              <h4 className="font-semibold text-gray-900">Zero Shortage</h4>
              <p className="text-sm text-gray-600">Working toward eliminating blood shortages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              High school students passionate about using technology to save lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Chen', role: 'Lead Developer', bio: 'Full-stack developer passionate about healthcare technology' },
              { name: 'Maria Rodriguez', role: 'UX Designer', bio: 'Designs user experiences that save lives' },
              { name: 'James Thompson', role: 'Community Outreach', bio: 'Connects with hospitals and blood banks nationwide' }
            ].map((member, index) => (
              <Card key={index} className="text-center border-l-4 border-red-600">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Life-Saving Mission</h2>
          <p className="text-xl text-red-100 mb-8">
            Ready to make a difference? Whether you want to donate blood or need help finding donors, 
            BloodLink is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="outline" size="lg" className="bg-white text-red-600 hover:bg-red-50 border-white">
                <Heart className="h-5 w-5 mr-2" />
                Become a Donor
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get in Touch
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;