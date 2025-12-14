import React, { useState } from 'react';
import { Send, MessageCircle, Heart, Users, AlertTriangle } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { ChatMessage } from '../types';

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'Sarah Johnson (Donor)',
      message: 'I have A+ blood type and I\'m available for donation. Where do you need me?',
      timestamp: '10:30 AM',
      type: 'donor'
    },
    {
      id: '2',
      sender: 'Emergency Request',
      message: 'Patient at City Hospital needs 2 units of A+ blood urgently. Surgery scheduled in 3 hours.',
      timestamp: '10:25 AM',
      type: 'seeker'
    },
    {
      id: '3',
      sender: 'Michael Brown (Donor)',
      message: 'I can be there in 45 minutes. Is that soon enough?',
      timestamp: '10:32 AM',
      type: 'donor'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [userType, setUserType] = useState<'donor' | 'seeker'>('seeker');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        sender: userType === 'donor' ? 'You (Donor)' : 'You (Seeker)',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: userType
      };
      
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Emergency Chat</h1>
          <p className="text-xl text-gray-600">
            Connect instantly with donors and seekers for urgent blood requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-600 p-2 rounded-full">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Emergency Blood Chat</h3>
                      <p className="text-sm text-gray-500">12 active participants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-gray-500">+9 more</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender.includes('You') ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender.includes('You')
                        ? 'bg-red-600 text-white'
                        : message.type === 'donor'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium opacity-80">{message.sender}</span>
                        <span className="text-xs opacity-60">{message.timestamp}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant={userType === 'seeker' ? 'primary' : 'outline'}
                      onClick={() => setUserType('seeker')}
                    >
                      Seeker
                    </Button>
                    <Button
                      size="sm"
                      variant={userType === 'donor' ? 'primary' : 'outline'}
                      onClick={() => setUserType('donor')}
                    >
                      Donor
                    </Button>
                  </div>
                  
                  <div className="flex-1 flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Requests */}
            <Card className="border-l-4 border-red-600">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                Urgent Requests
              </h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-red-800">A+ Blood</span>
                    <span className="text-xs text-red-600">CRITICAL</span>
                  </div>
                  <p className="text-sm text-red-700">City Hospital - 2 units</p>
                </div>
                
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-orange-800">O- Blood</span>
                    <span className="text-xs text-orange-600">HIGH</span>
                  </div>
                  <p className="text-sm text-orange-700">Memorial Hospital - 1 unit</p>
                </div>
              </div>
            </Card>

            {/* Online Donors */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 text-green-600 mr-2" />
                Online Donors (8)
              </h3>
              <div className="space-y-2">
                {['Sarah J. (A+)', 'Michael B. (O-)', 'Emma D. (B+)', 'David W. (AB+)', 'John S. (O+)'].map((donor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{donor}</span>
                  </div>
                ))}
                <button className="text-sm text-red-600 hover:text-red-700">View all donors</button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Request
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Find Donors
                </Button>
                <Button variant="secondary" className="w-full" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Hotline
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;