import type { Metadata } from 'next';
import IosPhone from './ios-phone';
import './ios.css';

export const metadata: Metadata = {
  title: 'Sapnil Basnet | iOS Portfolio',
  description: 'An iPhone-style portfolio of Sapnil Basnet, a computer science student building thoughtful AI products and trustworthy software.',
};

export default function IosPortfolio() {
  return <IosPhone />;
}
