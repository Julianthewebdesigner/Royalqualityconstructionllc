
import React from 'react';
import { 
  Wrench, 
  Layers, 
  Palette, 
  Square, 
  Hammer, 
  Layout, 
  Umbrella,
  MessageSquare,
  Tag,
  ShieldCheck,
  Home
} from 'lucide-react';
import { Service, Benefit, FAQ } from './types';

export const BUSINESS_INFO = {
  name: "Royal Quality Construction LLC",
  serviceArea: "Seattle, Washington (and nearby areas)",
  email: "royalqualityconstructionllc@gmail.com",
  phone: "206-856-1486",
  address: "Seattle, WA",
};

export const SERVICES: Service[] = [
  {
    id: "remodeling",
    title: "Remodeling & Renovations",
    description: "Complete kitchen, bathroom, and full-home updates tailored to your lifestyle.",
    image: "/images/remodeling-repair.jpeg",
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "Expert installation of hardwood, tile, laminate, and vinyl for a lasting finish.",
    image: "/images/flooring.jpeg",
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: "drywall",
    title: "Drywall & Painting",
    description: "Seamless drywall repair and premium painting for a fresh, clean look.",
    image: "/images/drywall 2.jpeg",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: "tile",
    title: "Custom Tile",
    description: "Precision tile work for backsplashes, showers, and detailed floor patterns.",
    image: "/images/tile.jpeg",
    icon: <Square className="w-6 h-6" />
  },
  {
    id: "framing",
    title: "Framing & Carpentry",
    description: "Solid structural framing and detailed finish carpentry you can depend on.",
    image: "/images/framing-carpentry.jpeg",
    icon: <Hammer className="w-6 h-6" />
  },
  {
    id: "exterior",
    title: "Decks & Siding",
    description: "Durable outdoor spaces and exterior protection built for Seattle weather.",
    image: "/images/Deck.jpeg",
    icon: <Umbrella className="w-6 h-6" />
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Clear Communication",
    description: "We keep you updated at every step so there are no surprises along the way.",
    icon: <MessageSquare className="w-8 h-8 text-accent" />
  },
  {
    title: "Upfront Pricing",
    description: "We give fair, honest quotes and stick to them—no hidden costs later.",
    icon: <Tag className="w-8 h-8 text-accent" />
  },
  {
    title: "Built to Last",
    description: "We follow the right methods and use strong materials that hold up for years.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />
  },
  {
    title: "Respect for Your Home",
    description: "We stay clean, safe, and treat your space like it's our own from day one.",
    icon: <Home className="w-8 h-8 text-accent" />
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What types of projects do you take on?",
    answer: "We handle a wide range of residential construction, from full interior remodels and kitchen renovations to structural framing, siding, and custom deck builds."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation estimates to help you plan and budget your project effectively."
  },
  {
    question: "How long will my project take?",
    answer: "Timelines vary depending on project scope. A small remodel might take 2-3 weeks, while larger structural projects could take several months. We provide clear schedules before starting."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Royal Quality Construction LLC is fully licensed, bonded, and insured in the state of Washington for your protection and peace of mind."
  },
  {
    question: "How do I get started?",
    answer: "Simply fill out our 'Get a Free Estimate' form or give us a call. We'll discuss your goals and schedule a site visit to provide a detailed quote."
  }
];
