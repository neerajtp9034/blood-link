import React, { useState } from 'react';
import { Heart, User, Phone, MapPin, AlertTriangle, Calendar, Hash } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { bloodGroups, cities } from '../data/mockData';

const RequestBlood: React.FC = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    contactPerson: '',
    contactPhone: '',
    bloodGroup: '',
    urgency: '',
    unitsNeeded: '',
    hospital: '',
    city: '',
    requiredBy: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const urgencyLevels = [
    { value: 'low', label: 'Low - Within 7 days', color: 'text-green-600' },
    { value: 'medium', label: 'Medium - Within 3 days', color: 'text-yellow-600' },
    { value: 'high', label: 'High - Within 24 hours', color: 'text-orange-600' },
    { value: 'critical', label: 'Critical - Immediate', color: 'text-red-600' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center border-l-4 border-red-600">
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your blood request has been sent to all compatible donors in your area. 
              You should receive responses within minutes.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-medium">
                🚨 For critical emergencies, call our 24/7 hotline: 1-800-BLOOD-NOW
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Submit Another Request
              </Button>
              <Button>
                View Active Requests
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request Blood</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Submit an urgent blood request and connect with compatible donors in your area immediately.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-100 border-l-4 border-red-600 p-4 mb-8 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
            <p className="text-red-800 font-medium">
              For life-threatening emergencies, call 911 first, then use this form to find additional blood sources.
            </p>
          </div>
        </div>

        {/* Request Form */}
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-red-200 pb-2">
                  Patient Information
                </h3>
                
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      required
                      value={formData.patientName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Patient's full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group Required *
                  </label>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    required
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  >
                    <option value="">Select blood group needed</option>
                    {bloodGroups.map((group) => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="unitsNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                    Units Needed *
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      id="unitsNeeded"
                      name="unitsNeeded"
                      required
                      min="1"
                      max="10"
                      value={formData.unitsNeeded}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Number of units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  >
                    <option value="">Select urgency level</option>
                    {urgencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact & Location */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-red-200 pb-2">
                  Contact & Location
                </h3>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Your name or family member"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      required
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-2">
                    Hospital/Medical Center *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="hospital"
                      name="hospital"
                      required
                      value={formData.hospital}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Hospital name and address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  >
                    <option value="">Select city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="requiredBy" className="block text-sm font-medium text-gray-700 mb-2">
                    Required By *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="datetime-local"
                      id="requiredBy"
                      name="requiredBy"
                      required
                      value={formData.requiredBy}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                placeholder="Any additional details about the patient's condition or special requirements..."
              />
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                size="lg" 
                loading={isSubmitting}
                className="w-full"
                variant="danger"
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Submitting Request...' : 'Submit Blood Request'}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500">
              Your request will be immediately sent to all compatible donors in your area.
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RequestBlood;