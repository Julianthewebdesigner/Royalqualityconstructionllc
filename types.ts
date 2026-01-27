// Import React to resolve 'React' namespace for ReactNode types
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQ {
  question: string;
  answer: string;
}