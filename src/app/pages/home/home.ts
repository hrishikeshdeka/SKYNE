import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: string;
  title: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice: number;
  href: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly year = new Date().getFullYear();

  readonly products: Product[] = [
    {
      id: 'volume',
      title: 'The Volume Collection (21 wallpapers)',
      image: '/images/money.png',
      hoverImage: '/images/justtry.png',
      price: 1300,
      originalPrice: 2500,
      href: '/products/volume',
    },
    {
      id: 'volume-iv',
      title: 'Volume IV (7 wallpapers)',
      image: '/images/justtry.png',
      hoverImage: '/images/money.png',
      price: 625,
      originalPrice: 800,
      href: '/products/volume-iv',
    },
    {
      id: 'volume-iii',
      title: 'Volume III (7 wallpapers)',
      image: '/images/money.png',
      hoverImage: '/images/justtry.png',
      price: 625,
      originalPrice: 800,
      href: '/products/volume-iii',
    },
    {
      id: 'volume-ii',
      title: 'Volume II (7 wallpapers)',
      image: '/images/justtry.png',
      hoverImage: '/images/money.png',
      price: 625,
      originalPrice: 800,
      href: '/products/volume-ii',
    },
  ];

  readonly faqs = [
    {
      question: 'Why wallpapers?',
      answer:
        'Your screen is something you see every day. Give it artwork that inspires you and makes your space feel like your own.',
    },
    {
      question: 'How do I get my wallpapers after I pay?',
      answer:
        'After checkout, you’ll receive an email containing your download link. Download the files, save them, and set your favourite as your wallpaper.',
    },
    {
      question: 'What makes this STIX different?',
      answer:
        'A collection of art-inspired wallpapers designed to bring a distinctive look to the screens you use every day.',
    },
  ];

  readonly paymentLabels = [
    'AMEX',
    'Apple Pay',
    'Google Pay',
    'Mastercard',
    'PayPal',
    'Shop Pay',
    'VISA',
  ];
}
