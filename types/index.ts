import { ReactNode } from 'react';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  amenities: string[];
  rating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkInDate: Date;
  checkOutDate: Date;
  totalPrice: number;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface AppContextProps {
  properties: Property[];
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  fetchProperties: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default {}; // Default export to avoid issues with empty module