export type Project = {
  id: number;
  title: string;
  category: 'AI & Automation' | 'Software Dev' | 'Creative Design' | 'Marketing';
  image: string;
  desc: string;
  accent: 'cyan' | 'purple' | 'pink' | 'yellow' | 'blue' | 'orange';
  challenge: string;
  outcome: string;
};

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: 'Nexus AI Engine',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1400',
    desc: 'Custom LLM integration for enterprise automation.',
    accent: 'cyan',
    challenge: 'Legacy workflows created bottlenecks and manual delays across departments.',
    outcome: 'Automated 62% of repetitive workflows and cut average processing time by 41%.'
  },
  {
    id: 2,
    title: 'Vanguard Fintech',
    category: 'Software Dev',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=1400',
    desc: 'High-performance banking infrastructure built for scale.',
    accent: 'purple',
    challenge: 'The platform needed low-latency transactions with strict reliability requirements.',
    outcome: 'Achieved 99.99% uptime and improved transaction throughput by 3.2x.'
  },
  {
    id: 3,
    title: 'Brand Identity Suite — Portfolio Brand 01',
    category: 'Creative Design',
    image: 'portfolio/designing/design-01.jpg',
    desc: 'Complete visual identity crafted for high recall, premium positioning, and social-first impact.',
    accent: 'pink',
    challenge: 'The brand looked inconsistent across posts, creatives, and sales touchpoints, which weakened trust and hurt conversion quality.',
    outcome: 'We built a unified design system (colors, typography, templates, and campaign style), creating a stronger premium presence and a clearer buying journey.'
  },
  {
    id: 4,
    title: 'Growth Surge 2.0',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400',
    desc: 'Global performance marketing campaign with 300% ROI.',
    accent: 'yellow',
    challenge: 'High CAC and inconsistent campaign performance across regions.',
    outcome: 'Scaled qualified leads by 2.8x while reducing blended CAC by 37%.'
  },
  {
    id: 5,
    title: 'Quantum Workflow',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=1400',
    desc: 'AI-driven supply chain optimization platform.',
    accent: 'blue',
    challenge: 'Demand forecasting and procurement cycles were disconnected and inefficient.',
    outcome: 'Forecast accuracy improved by 29% and stockout incidents dropped significantly.'
  },
  {
    id: 6,
    title: 'Stellar Commerce',
    category: 'Software Dev',
    image: 'https://images.unsplash.com/photo-1556741533-974f8e62a92d?auto=format&fit=crop&q=80&w=1400',
    desc: 'A futuristic headless commerce engine.',
    accent: 'orange',
    challenge: 'Monolithic storefront architecture limited speed, flexibility, and growth.',
    outcome: 'Launched modular commerce stack with faster releases and stronger checkout conversion.'
  },
  {
    id: 7,
    title: 'Campaign Visual System — Portfolio Brand 02',
    category: 'Creative Design',
    image: 'portfolio/designing/design-04.jpg',
    desc: 'Performance-focused creative direction designed to convert attention into qualified leads.',
    accent: 'purple',
    challenge: 'The second brand had good offers but weak creative consistency, so ads and content were not communicating value fast enough.',
    outcome: 'We redesigned the visual language around clarity + authority, producing a cleaner message hierarchy and creatives optimized for engagement and lead intent.'
  }
];
