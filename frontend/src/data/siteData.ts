import {
  BarChart3,
  Building2,
  Calculator,
  CalendarClock,
  Cloud,
  Headphones,
  Hotel,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Utensils,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface ProductItem {
  title: string
  description: string
  icon: LucideIcon
  status?: string
}

export interface MetricItem {
  label: string
  value: number
  suffix: string
}

export interface TestimonialItem {
  name: string
  business: string
  review: string
  avatar: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const featureItems: FeatureItem[] = [
  {
    title: 'Fast Billing',
    description: 'Create GST-ready invoices, split bills, and settle payments in seconds.',
    icon: ReceiptText,
  },
  {
    title: 'Cloud Sync',
    description: 'Keep outlets, stock, and reports updated across every device in real time.',
    icon: Cloud,
  },
  {
    title: 'GST Ready',
    description: 'Automated tax fields, compliant reports, and audit-friendly bill history.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Support',
    description: 'Get expert help for rollout, training, and day-to-day operations.',
    icon: Headphones,
  },
]

export const productItems: ProductItem[] = [
  {
    title: 'Restaurant POS',
    description: 'Table orders, kitchen tickets, QR menus, and daily settlements.',
    icon: Utensils,
  },
  {
    title: 'GST Billing',
    description: 'Fast invoices, tax reports, discounts, returns, and payment tracking.',
    icon: Calculator,
  },
  {
    title: 'Hotel Management',
    description: 'Room billing, reservations, housekeeping tasks, and guest ledgers.',
    icon: Hotel,
  },
  {
    title: 'Payroll System',
    description: 'Attendance, salary cycles, employee records, and compliance exports.',
    icon: Users,
  },
  {
    title: 'Inventory Management',
    description: 'Stock transfers, reorder alerts, vendor purchases, and wastage control.',
    icon: PackageCheck,
  },
  {
    title: 'Coming Soon',
    description: 'Advanced workflow automation and AI-assisted business insights.',
    icon: Sparkles,
    status: 'Beta waitlist',
  },
]

export const metrics: MetricItem[] = [
  { label: 'Businesses', value: 1000, suffix: '+' },
  { label: 'Bills Generated', value: 50, suffix: 'k+' },
  { label: 'Uptime', value: 99.9, suffix: '%' },
  { label: 'Support', value: 24, suffix: '/7' },
]

export const testimonials: TestimonialItem[] = [
  {
    name: 'Riya Mehta',
    business: 'Supermarket Owner',
    review:
      'AppzetBilling made our checkout counters faster and gave us clean stock visibility without adding extra admin work.',
    avatar: 'RM',
  },
  {
    name: 'Arjun Nair',
    business: 'Restaurant Operator',
    review:
      'The POS and inventory flow fits how our team works. Kitchen orders, settlements, and reports now feel controlled.',
    avatar: 'AN',
  },
  {
    name: 'Farhan Khan',
    business: 'Hotel Manager',
    review:
      'We moved from spreadsheets to one dashboard for billing, payroll, and guest-ledger follow-ups. The transition was smooth.',
    avatar: 'FK',
  },
]

export const marqueeItems = [
  'POS Billing',
  'GST Billing',
  'Payroll',
  'Hotel Management',
  'Restaurant POS',
  'Inventory',
  'HRMS',
  'Analytics',
  'QR Ordering',
  'Task Management',
]

export const footerGroups = [
  {
    title: 'Products',
    links: ['Restaurant POS', 'GST Billing', 'Inventory', 'Payroll'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Partners', 'Pricing'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Book Demo', 'Contact', 'Status'],
  },
]

export const audienceItems = [
  { label: 'Retail', icon: Store },
  { label: 'Hotels', icon: Building2 },
  { label: 'Restaurants', icon: Utensils },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Scheduling', icon: CalendarClock },
  { label: 'Checkout', icon: ShoppingCart },
]
