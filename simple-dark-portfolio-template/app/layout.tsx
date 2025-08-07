import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Josiah Freeman - Technical Intern',
  description:
    'Cybersecurity, AI automation, and systems optimization portfolio. Explore my work in CTFs, Slack bots, and network analysis.',
  keywords: [
    'Cybersecurity',
    'AI Automation',
    'Slack Bots',
    'CTFs',
    'Wireshark',
    'OpenAI',
    'n8n',
    'Developer Portfolio',
    'Josiah Freeman',
    'Technical Intern',
    'Codeworks',
    'Problem Solving',
    'Systems Thinking',
  ],
  authors: [{ name: 'Josiah Freeman' }],
  creator: 'Josiah Freeman',
  openGraph: {
    title: 'Josiah Freeman - Developer Portfolio',
    description:
      'Explore my work in cybersecurity, AI, and systems design. Built during my internship at Codeworks.',
    url: 'https://your-custom-domain.com',
    siteName: 'Josiah Freeman Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Josiah Freeman Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josiah Freeman - Developer',
    description:
      'Explore my work in cybersecurity, AI, and cyber forensics. Built during my internship at Codeworks.',
    creator: '@yourhandle',
  },
};
