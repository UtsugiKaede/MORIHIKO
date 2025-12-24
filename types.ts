
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'coffee' | 'cake' | 'beans';
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
