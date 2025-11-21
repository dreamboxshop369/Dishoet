import React from 'react';

export interface Product {
  id: string;
  name: string;
  image: string; // URL to the product mockup base
  overlayStyle: React.CSSProperties; // Positioning for the design
}

export interface ArtStyle {
  id: string;
  name: string;
  description: string;
  prompt: string;
  previewColor: string;
}

export interface CharacterReference {
  id: string;
  src: string;
}