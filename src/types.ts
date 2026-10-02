export type PageTab = 'home' | 'partnership' | 'contact';

export interface SponsorshipTier {
  id: string;
  name: string;
  kicker: string;
  priceNum: number;
  priceFormatted: string;
  seats: number;
  popular?: boolean;
  description: string;
  features: string[];
}
