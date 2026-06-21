import { Bot, Boxes, BrainCircuit, ChartNoAxesCombined, Clock3, Gauge, HeartPulse, MessagesSquare, ScanText, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'

export const navLinks = [
  ['Product', 'product'], ['AI features', 'ai-features'], ['Industries', 'industries'], ['Pricing', 'pricing'], ['FAQ', 'faq'],
]

export const problems = [
  { n: '01', title: 'Good leads get missed', copy: 'A serious buyer waits behind dozens of low-priority messages.', accent: 'bg-rose-50 text-rose-600' },
  { n: '02', title: 'Context is scattered', copy: 'Chats, contact sheets and follow-ups live in different places.', accent: 'bg-violet-50 text-violet-600' },
  { n: '03', title: 'The team repeats itself', copy: 'Catalogue, pricing and timings are typed again and again.', accent: 'bg-amber-50 text-amber-700' },
  { n: '04', title: 'No clear next action', copy: 'Hot, warm, cold and unhappy customers all sit in one queue.', accent: 'bg-sky-50 text-sky-700' },
]

export const features = [
  { icon: ScanText, overline: '01 / Intent', title: 'Know what every customer wants.', copy: 'Price, catalogue, order status, complaint, payment or store visit—classified automatically.', tone: 'emerald' },
  { icon: HeartPulse, overline: '02 / Sentiment', title: 'Spot frustration before it grows.', copy: 'Positive, neutral, angry, urgent or frustrated—visible at a glance.', tone: 'rose' },
  { icon: Sparkles, overline: '03 / Replies', title: 'Reply naturally, in your voice.', copy: 'Short, useful, Hinglish-friendly suggestions—ready to review and send.', tone: 'violet' },
  { icon: Gauge, overline: '04 / Lead score', title: 'Put the hottest leads first.', copy: 'Behaviour and chat signals turn into clear opportunity scores.', tone: 'amber' },
  { icon: MessagesSquare, overline: '05 / Summary', title: 'Catch up without reading 42 messages.', copy: 'Long chats become crisp context, customer need and the next action.', tone: 'sky' },
  { icon: UsersRound, overline: '06 / Segments', title: 'Broadcast to people, not spreadsheets.', copy: 'Build living audiences from intent, behaviour and customer value.', tone: 'lime' },
]

export const industries = [
  ['Jewellery & fashion', 'Turn catalogue questions into appointments and sales.'],
  ['D2C & e-commerce', 'Recover intent, answer product questions and track orders.'],
  ['Education', 'Qualify enquiries and guide applicants to the next step.'],
  ['Healthcare', 'Manage appointment requests with careful human handover.'],
  ['Real estate', 'Prioritise site visits and match buyers to inventory.'],
  ['Services', 'Capture requirements, estimates and follow-ups in one place.'],
]

export const testimonials = [
  { quote: 'Our team finally starts the day with a priority list, not 400 unread messages.', name: 'Ritika Shah', role: 'Founder, Aavira Studio', initials: 'RS' },
  { quote: 'Whalexy understands the way our customers actually type. The Hinglish suggestions feel useful.', name: 'Manish Kapoor', role: 'Director, MK Jewels', initials: 'MK' },
  { quote: 'Campaign replies now become sales conversations instead of disappearing in someone’s phone.', name: 'Aditi Patel', role: 'Growth, Kaira Living', initials: 'AP' },
]

export const plans = [
  { name: 'Starter', price: '₹2,499', note: 'For owner-led teams', items: ['2 team members', 'Smart shared inbox', '1,000 AI actions', 'Basic broadcasts'] },
  { name: 'Growth', price: '₹6,999', note: 'For growing sales teams', popular: true, items: ['10 team members', 'AI intelligence suite', 'Smart segmentation', 'Flows & integrations'] },
  { name: 'Scale', price: 'Custom', note: 'For advanced operations', items: ['Unlimited teams', 'Custom AI policies', 'Priority onboarding', 'Advanced API access'] },
]

export const faqs = [
  ['Do I need a new WhatsApp number?', 'No. You can connect an eligible existing business number through the official WhatsApp Cloud API setup.'],
  ['Will AI reply without my approval?', 'Only if you choose to allow safe auto-replies. You can keep human approval on for every suggested response.'],
  ['Does Whalexy understand Hinglish?', 'Yes. It is designed around the short, mixed-language conversations common in Indian commerce.'],
  ['Can I import my customer list?', 'Yes. Import CSV or Excel contacts, map fields, add tags, and build segments.'],
  ['Is this a real WhatsApp integration?', 'This project is a polished interactive product prototype. Production messaging requires Meta credentials and backend services.'],
]

export const differentiators = [
  { icon: BrainCircuit, title: 'Understands the conversation', copy: 'Intent, sentiment, urgency and next action—not just message delivery.' },
  { icon: ShieldCheck, title: 'Human control by design', copy: 'Clear safety rules decide when to automate, suggest or escalate.' },
  { icon: ChartNoAxesCombined, title: 'Built around outcomes', copy: 'See lead quality, campaign replies and response performance together.' },
  { icon: Boxes, title: 'One operating layer', copy: 'Inbox, contacts, campaigns, flows, commerce and API context stay connected.' },
]

export const howItWorks = [
  { icon: MessagesSquare, title: 'Connect channels', copy: 'Bring WhatsApp and your customer operations into one calm workspace.' },
  { icon: Bot, title: 'Set your AI policy', copy: 'Choose tone, safe intents, handover rules and team ownership.' },
  { icon: Clock3, title: 'Act on what matters', copy: 'Reply, follow up, broadcast and measure—with context ready.' },
]
