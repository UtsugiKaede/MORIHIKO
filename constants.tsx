
import { Product, GalleryImage } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '森の雫 (Mori no Shizuku)',
    description: 'Morihiko\'s signature deep roast coffee. Crafted with a proprietaryネルドリップ method for a thick, syrup-like body.',
    price: '¥750',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    category: 'coffee'
  },
  {
    id: 'p2',
    name: '雪見ラテ (Winter Snow Latte)',
    description: 'A seasonal specialty with rich espresso and velvet foam, topped with white chocolate flakes like fallen snow.',
    price: '¥850',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    category: 'coffee'
  },
  {
    id: 'p3',
    name: 'ガトーショコラ (Gateau Chocolat)',
    description: 'Rich, moist chocolate cake baked slowly to perfection. A timeless companion to our deep roasted coffee.',
    price: '¥680',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    category: 'cake'
  },
  {
    id: 'p4',
    name: 'Winter Blend 2024',
    description: 'Limited edition beans featuring seasonal beans from Ethiopia and Brazil. Notes of dried fruit and wine.',
    price: '¥1,400',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800',
    category: 'beans'
  }
];

export const GALLERY: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800', alt: 'Coffee Preparation', caption: 'ネルドリップの静寂' },
  { id: 2, url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=800', alt: 'Nostalgic Interior', caption: '刻まれた時間' },
  { id: 3, url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800', alt: 'Antique Details', caption: 'アンティークの温もり' },
  { id: 4, url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800', alt: 'Snowy Landscape', caption: '円山の冬景色' },
  { id: 5, url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800', alt: 'Roasting', caption: '深煎りの哲学' },
  { id: 6, url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800', alt: 'A Moment with Coffee', caption: '自分へ帰る時間' },
];
