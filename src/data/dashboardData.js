import { Activity, Bot, Boxes, Cable, ChartNoAxesCombined, CircleDollarSign, ClipboardCheck, ContactRound, CreditCard, MessageSquareText as Facebook, GitBranch, Home, Camera as Instagram, KeyRound, LayoutTemplate, MessageCircle, MessageSquareText, PackageCheck, PanelsTopLeft, PlugZap, Rocket, Send, Settings, ShoppingBag, Store, Users, Webhook, Zap } from 'lucide-react'

export const sidebarGroups = [
  { label: 'Workspace', items: [
    { id: 'dashboard', label: 'Dashboard', icon: Home }, { id: 'setup', label: 'Setup', icon: ClipboardCheck },
  ]},
  { label: 'Channels', items: [
    { id: 'whatsapp', label: 'WhatsApp Setup', icon: MessageCircle }, { id: 'facebook', label: 'Facebook Setup', icon: Facebook }, { id: 'instagram', label: 'Instagram Setup', icon: Instagram },
  ]},
  { label: 'Conversations', items: [
    { id: 'inbox', label: 'Smart Inbox', icon: MessageSquareText, badge: '12' }, { id: 'chats', label: 'All Chats', icon: PanelsTopLeft }, { id: 'contacts', label: 'Contacts', icon: ContactRound }, { id: 'templates', label: 'Templates', icon: LayoutTemplate },
  ]},
  { label: 'Growth & automation', items: [
    { id: 'conversion', label: 'Conversion Studio', icon: Rocket, badge: 'NEW' }, { id: 'campaigns', label: 'Campaigns', icon: Send }, { id: 'flows', label: 'Flows', icon: GitBranch }, { id: 'chatbot', label: 'Chatbot Settings', icon: Bot },
  ]},
  { label: 'Commerce', items: [
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingBag }, { id: 'wa-orders', label: 'WhatsApp Orders', icon: PackageCheck }, { id: 'shopify', label: 'Shopify', icon: Store }, { id: 'woocommerce', label: 'WooCommerce', icon: Boxes },
  ]},
  { label: 'Operations', items: [
    { id: 'integrations', label: 'Integrations', icon: PlugZap }, { id: 'payments', label: 'Orders & Payments', icon: CircleDollarSign }, { id: 'api', label: 'API Access & Webhook', icon: Webhook }, { id: 'agents', label: 'Agents', icon: Users }, { id: 'analytics', label: 'Analytics', icon: ChartNoAxesCombined }, { id: 'ai-center', label: 'AI Center', icon: Zap },
  ]},
  { label: 'Account', items: [
    { id: 'plan', label: 'My Plan', icon: CreditCard }, { id: 'settings', label: 'Settings', icon: Settings },
  ]},
]

export const metrics = [
  { label: 'Total contacts', value: '12,840', change: '+8.4%', icon: ContactRound, tone: 'emerald' },
  { label: 'Active chats', value: '286', change: '+12 today', icon: MessageSquareText, tone: 'sky' },
  { label: 'Pending replies', value: '38', change: '11 urgent', icon: Activity, tone: 'amber' },
  { label: 'Hot leads', value: '94', change: '+18.2%', icon: Zap, tone: 'rose' },
  { label: 'Campaign replies', value: '1,204', change: '18.7% rate', icon: Send, tone: 'violet' },
  { label: 'Open complaints', value: '7', change: '3 escalated', icon: MessageCircle, tone: 'red' },
  { label: 'AI auto replies', value: '68%', change: '2,486 handled', icon: Bot, tone: 'lime' },
  { label: 'Revenue tracked', value: '₹8.4L', change: '+21.3%', icon: CircleDollarSign, tone: 'teal' },
]

export const campaignChart = [
  { day: 'Mon', sent: 720, replies: 190 }, { day: 'Tue', sent: 880, replies: 260 }, { day: 'Wed', sent: 640, replies: 220 }, { day: 'Thu', sent: 1080, replies: 340 }, { day: 'Fri', sent: 920, replies: 310 }, { day: 'Sat', sent: 1260, replies: 420 }, { day: 'Sun', sent: 1040, replies: 370 },
]

export const customers = [
  { id: 1, name: 'Priya Sharma', initials: 'PS', message: 'bridal necklace ka price batao', time: 'Now', unread: 3, intent: 'Price + Visit', sentiment: 'Positive', score: 91, priority: 'hot', summary: 'Looking for a bridal necklace, asked price and wants to visit the Jaipur store tomorrow.', risk: 'Low', urgency: 'High', replies: ['Ji Priya ji, bridal collection available hai. Aap kal kis time visit karenge?', 'Main catalogue aur appointment slots abhi share kar deti hoon.'] },
  { id: 2, name: 'Rahul Verma', initials: 'RV', message: 'payment kar diya screenshot bheja hai', time: '2m', unread: 1, intent: 'Payment', sentiment: 'Neutral', score: 74, priority: 'urgent', summary: 'Claims payment of ₹24,500 and has shared a screenshot. Needs manual verification.', risk: 'High', urgency: 'Urgent', replies: ['Thanks Rahul ji. Hum payment verify karke 10 minutes mein confirm karte hain.', 'Screenshot mil gaya hai. Verification ke liye finance team ko assign kar raha hoon.'] },
  { id: 3, name: 'Meera Shah', initials: 'MS', message: 'catalogue bhejo', time: '8m', unread: 2, intent: 'Catalogue', sentiment: 'Positive', score: 78, priority: 'warm', summary: 'Interested in the new festive collection and requested a catalogue.', risk: 'Low', urgency: 'Normal', replies: ['Bilkul Meera ji, latest festive catalogue yeh raha ✨', 'Aap jewellery ya ethnic wear collection dekhna chahengi?'] },
  { id: 4, name: 'Amit Soni', initials: 'AS', message: 'order abhi tak ready nahi hua', time: '14m', unread: 4, intent: 'Complaint', sentiment: 'Frustrated', score: 62, priority: 'urgent', summary: 'Order is delayed by four days. Customer is frustrated and expects a clear update.', risk: 'High', urgency: 'Urgent', replies: ['Amit ji, delay ke liye maafi. Main abhi production team se exact update lekar batata hoon.', 'Main is chat ko manager ko escalate kar raha hoon so we can resolve this today.'] },
  { id: 5, name: 'Nisha Jain', initials: 'NJ', message: 'discount milega kya', time: '24m', unread: 0, intent: 'Negotiation', sentiment: 'Neutral', score: 69, priority: 'warm', summary: 'Comparing two products and asking for the best available price.', risk: 'Medium', urgency: 'Normal', replies: ['Ji, selected pieces par best possible price available hai. Aap kaunsa design dekh rahe hain?', 'Main aapke selected item par current offer check kar deti hoon.'] },
  { id: 6, name: 'Sana Khan', initials: 'SK', message: 'kal store visit kar sakte?', time: '31m', unread: 1, intent: 'Store Visit', sentiment: 'Positive', score: 86, priority: 'hot', summary: 'High intent buyer asking to book a store visit tomorrow.', risk: 'Low', urgency: 'High', replies: ['Haan Sana ji. Kal 12:30 PM ya 5 PM ka slot available hai—kaunsa convenient rahega?', 'Perfect, main aapke liye collection ready rakhwa deti hoon.'] },
]

export const chatHistories = {
  1: [ ['customer', 'Hi, bridal necklace ka price batao'], ['agent', 'Namaste Priya ji! Aap kis style ka bridal set dekh rahi hain?'], ['customer', 'Kundan, aur kal store visit kar sakte?'] ],
  2: [ ['customer', 'payment kar diya screenshot bheja hai'], ['system', 'Payment content detected · Human verification required'] ],
  3: [ ['customer', 'Hello catalogue bhejo'], ['agent', 'Hi Meera ji, festive ya everyday collection?'], ['customer', 'Festive collection please'] ],
  4: [ ['customer', 'order abhi tak ready nahi hua'], ['customer', '4 din ho gaye, koi clear update nahi hai'] ],
  5: [ ['customer', 'yeh design pasand hai'], ['customer', 'discount milega kya'] ],
  6: [ ['customer', 'kal store visit kar sakte?'], ['agent', 'Of course. Main available slots check karti hoon.'] ],
}

export const contacts = [
  { name: 'Priya Sharma', phone: '+91 98201 44321', segment: 'Wedding lead', score: 91, last: 'Just now', agent: 'Kavita', value: '₹1.2L' },
  { name: 'Rahul Verma', phone: '+91 98711 23740', segment: 'Payment risk', score: 74, last: '2 min ago', agent: 'Aman', value: '₹24.5K' },
  { name: 'Meera Shah', phone: '+91 97693 88210', segment: 'Festival buyer', score: 78, last: '8 min ago', agent: 'Meera', value: '₹68K' },
  { name: 'Sana Khan', phone: '+91 99102 56118', segment: 'Premium buyer', score: 86, last: '31 min ago', agent: 'Kavita', value: '₹2.4L' },
  { name: 'Nisha Jain', phone: '+91 99877 21064', segment: 'Price sensitive', score: 69, last: 'Today', agent: 'Arjun', value: '₹42K' },
  { name: 'Amit Soni', phone: '+91 98199 02154', segment: 'Complaint risk', score: 62, last: 'Today', agent: 'Arjun', value: '₹32K' },
]

export const templates = [
  { name: 'bridal_preview_invite', category: 'Marketing', lang: 'EN + HI', status: 'Approved', updated: 'Today', body: 'Hi {{1}}, our new bridal collection is here ✨ Book your private preview this weekend.' },
  { name: 'order_ready', category: 'Utility', lang: 'English', status: 'Approved', updated: 'Yesterday', body: 'Hi {{1}}, your order {{2}} is ready for pickup from our store.' },
  { name: 'festival_early_access', category: 'Marketing', lang: 'Hindi', status: 'Pending', updated: '12 Jun', body: 'Namaste {{1}}, festive collection ka early access ab live hai.' },
  { name: 'login_otp', category: 'Authentication', lang: 'English', status: 'Approved', updated: '8 Jun', body: '{{1}} is your verification code. It expires in 10 minutes.' },
  { name: 'flash_discount', category: 'Marketing', lang: 'English', status: 'Rejected', updated: '4 Jun', body: 'Flash sale! Get an exclusive discount for the next 2 hours.' },
]

export const campaigns = [
  { name: 'Private Bridal Preview', audience: 'Wedding Leads', sent: '1,207', delivered: '96.2%', read: '82.4%', replied: '24.8%', failed: '3.8%', conversion: '8.4%', status: 'Live' },
  { name: 'Festive Early Access', audience: 'Premium Buyers', sent: '472', delivered: '98.1%', read: '88.6%', replied: '31.2%', failed: '1.9%', conversion: '12.1%', status: 'Completed' },
  { name: '60-day Winback', audience: 'Inactive Customers', sent: '2,042', delivered: '91.4%', read: '64.2%', replied: '9.6%', failed: '8.6%', conversion: '3.2%', status: 'Scheduled' },
]

export const orders = [
  { id: '#WAX-1062', customer: 'Priya Sharma', amount: '₹62,000', channel: 'WhatsApp', payment: 'Pending', verification: 'Awaiting', time: '5m ago' },
  { id: '#WAX-1058', customer: 'Rahul Verma', amount: '₹24,500', channel: 'WhatsApp', payment: 'Claimed', verification: 'Manual check', time: '1h ago' },
  { id: '#WAX-1052', customer: 'Karan Mehta', amount: '₹16,800', channel: 'Shopify', payment: 'Paid', verification: 'Verified', time: 'Today' },
  { id: '#WAX-1046', customer: 'Sana Khan', amount: '₹22,400', channel: 'WhatsApp', payment: 'Paid', verification: 'Verified', time: 'Yesterday' },
]

export const webhookLogs = [
  ['message.received', '200 OK', '12:42:08', '184ms'], ['delivery.status', '200 OK', '12:41:52', '96ms'], ['payment.event', '202 Accepted', '12:39:14', '221ms'], ['template.status', '200 OK', '12:30:02', '88ms'],
]

export const agents = [
  { name: 'Kavita Mehta', role: 'Sales Lead', status: 'Online', chats: 24, reply: '1m 48s', score: 92, initials: 'KM' },
  { name: 'Meera Shah', role: 'Sales Associate', status: 'Online', chats: 18, reply: '2m 06s', score: 87, initials: 'MS' },
  { name: 'Arjun Rao', role: 'Support Specialist', status: 'Online', chats: 21, reply: '2m 31s', score: 83, initials: 'AR' },
  { name: 'Nisha Soni', role: 'Campaign Manager', status: 'Away', chats: 8, reply: '3m 12s', score: 79, initials: 'NS' },
]

export const moduleMeta = Object.fromEntries(sidebarGroups.flatMap(g => g.items.map(i => [i.id, i.label])))
export const connectionCards = [
  { icon: MessageCircle, name: 'WhatsApp Cloud API', status: 'Connected', detail: '+91 98765 43210' },
  { icon: Cable, name: 'Webhook', status: 'Healthy', detail: '99.99% delivery' },
  { icon: KeyRound, name: 'Template quality', status: 'High', detail: '18 approved' },
  { icon: Bot, name: 'AI assistant', status: 'Online', detail: '68% automated' },
]
