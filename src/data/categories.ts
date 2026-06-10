export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  count?: number;
}

export const categories: Category[] = [
  { slug: 'weird', name: 'Weird Websites', description: 'The strangest corners of the internet', icon: '🌀', color: '#8b5cf6' },
  { slug: 'fun', name: 'Fun Websites', description: 'Guaranteed to cure boredom instantly', icon: '🎉', color: '#f59e0b' },
  { slug: 'ai-tools', name: 'AI Tools', description: 'Cutting-edge artificial intelligence tools', icon: '🤖', color: '#6366f1' },
  { slug: 'productive', name: 'Productive', description: 'Boost your workflow and get things done', icon: '⚡', color: '#10b981' },
  { slug: 'educational', name: 'Educational', description: 'Learn something new every day', icon: '📚', color: '#3b82f6' },
  { slug: 'gaming', name: 'Gaming', description: 'Browser games and gaming resources', icon: '🎮', color: '#ef4444' },
  { slug: 'retro', name: 'Retro Websites', description: 'Nostalgia from the early internet era', icon: '📺', color: '#f97316' },
  { slug: 'hidden-gems', name: 'Hidden Gems', description: 'Underrated sites most people never find', icon: '💎', color: '#06b6d4' },
];
