import { Donor, BloodRequest, BloodBank, Event } from '../types';

export const mockDonors: Donor[] = [
  {
    id: '1',
    name: 'John Smith',
    bloodGroup: 'O+',
    phone: '+1 (555) 123-4567',
    email: 'john@email.com',
    city: 'New York',
    availability: true,
    lastDonation: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    bloodGroup: 'A+',
    phone: '+1 (555) 234-5678',
    email: 'sarah@email.com',
    city: 'Los Angeles',
    availability: true,
    lastDonation: '2024-02-20'
  },
  {
    id: '3',
    name: 'Michael Brown',
    bloodGroup: 'B-',
    phone: '+1 (555) 345-6789',
    email: 'michael@email.com',
    city: 'Chicago',
    availability: false,
    lastDonation: '2024-03-10'
  },
  {
    id: '4',
    name: 'Emma Davis',
    bloodGroup: 'AB+',
    phone: '+1 (555) 456-7890',
    email: 'emma@email.com',
    city: 'Houston',
    availability: true,
    lastDonation: '2024-01-05'
  },
  {
    id: '5',
    name: 'David Wilson',
    bloodGroup: 'O-',
    phone: '+1 (555) 567-8901',
    email: 'david@email.com',
    city: 'Phoenix',
    availability: true,
    lastDonation: '2024-02-28'
  }
];

export const mockBloodBanks: BloodBank[] = [
  {
    id: '1',
    name: 'City General Blood Bank',
    address: '123 Medical Center Dr, Downtown',
    city: 'New York',
    phone: '+1 (555) 111-2222',
    emergencyPhone: '+1 (555) 111-0000',
    bloodGroups: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    hours: '24/7'
  },
  {
    id: '2',
    name: 'Memorial Hospital Blood Center',
    address: '456 Health Ave, Midtown',
    city: 'Los Angeles',
    phone: '+1 (555) 222-3333',
    emergencyPhone: '+1 (555) 222-0000',
    bloodGroups: ['A+', 'B+', 'O+', 'AB+'],
    hours: '6:00 AM - 10:00 PM'
  },
  {
    id: '3',
    name: 'Regional Blood Services',
    address: '789 Care Blvd, Northside',
    city: 'Chicago',
    phone: '+1 (555) 333-4444',
    emergencyPhone: '+1 (555) 333-0000',
    bloodGroups: ['A+', 'A-', 'B+', 'O+', 'O-'],
    hours: '24/7'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Community Blood Drive',
    date: '2025-01-25',
    time: '10:00 AM - 4:00 PM',
    location: 'Central Community Center, Main Street',
    organizer: 'Red Cross Society',
    description: 'Join us for our monthly community blood drive. All blood types needed!'
  },
  {
    id: '2',
    title: 'Emergency Blood Collection',
    date: '2025-01-28',
    time: '8:00 AM - 6:00 PM',
    location: 'City Hospital, Emergency Wing',
    organizer: 'City Hospital',
    description: 'Urgent collection drive for critical patients. O- and AB+ donors especially needed.'
  },
  {
    id: '3',
    title: 'University Health Fair',
    date: '2025-02-02',
    time: '12:00 PM - 5:00 PM',
    location: 'State University Campus, Health Center',
    organizer: 'University Health Services',
    description: 'Health awareness and blood donation event for students and faculty.'
  }
];

export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];