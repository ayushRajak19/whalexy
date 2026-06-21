import { ArrowRight, Check, ChevronDown, CircleCheck, Gem, HeartHandshake, Hotel, PlayCircle, Quote, Send, Shirt, ShoppingBag, Sparkles, Stethoscope, UsersRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { differentiators, faqs, features, howItWorks, industries, plans, problems, testimonials } from '../data/websiteData'
import { Brand, Button, Modal } from '../components/common/UI'
import Hero from '../components/landing/Hero'
import Navbar from '../components/landing/Navbar'
import ProductMockup from '../components/landing/ProductMockup'

const Reveal = ({ children, className = '', delay = 0 }) => <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .5, delay }}>{children}</motion.div>

function SectionHeading({ eyebrow, title, copy, light = false, center = false }) {
  return <div className={`section-heading ${center ? 'text-center mx-auto' : ''} ${light ? 'text-white' : ''}`}><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export default function LandingPage() {
  const [demo, setDemo] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const navigate = useNavigate()
  const bookDemo = () => setDemo(true)
  return (
    <main className="landing-page">
      <Navbar onDemo={bookDemo} />
      <Hero onDemo={bookDemo} />

      <section className="landing-section bg-[#f7f8f4]">
        <div className="landing-container"><Reveal><SectionHeading center eyebrow="The WhatsApp workday" title="Your best leads should not be buried under ‘Good morning’ messages." copy="When everything happens in one chat list, urgency, opportunity and customer context all look the same." /></Reveal><div className="problem-grid">{problems.map((p, i) => <Reveal key={p.title} delay={i*.06} className="problem-card"><div><span>{p.n}</span><i className={p.accent}><MessageIcon n={i} /></i></div><h3>{p.title}</h3><p>{p.copy}</p><div className="problem-visual"><span /><span /><b>{i === 0 ? 'Bridal set price?' : i === 1 ? 'WhatsApp · Excel · Notes' : i === 2 ? '“Price bhejo?” × 17' : 'Hot · Warm · Risk'}</b></div></Reveal>)}</div></div>
      </section>

      <section id="product" className="landing-section bg-white">
        <div className="landing-container solution-layout"><Reveal><SectionHeading eyebrow="One WhatsApp command centre" title="Run every customer conversation with more clarity." copy="Whalexy organises the messy parts in the background and keeps the human decision simple in the foreground." /><div className="solution-list">{['Smart inbox', 'AI assistant', 'Campaigns + CRM', 'Automation + handover'].map((x, i) => <div key={x} className={i===0?'active':''}><span>0{i+1}</span><div><b>{x}</b><p>{['See urgent, high-intent and follow-up chats first.','Understand intent and prepare a useful reply in seconds.','Segment, broadcast and track the customer journey.','Automate routine work and bring in a human when it matters.'][i]}</p></div><ArrowRight /></div>)}</div></Reveal><Reveal delay={.12} className="ops-card"><header><div><small>LIVE OPERATIONS</small><h3>Today’s conversation pulse</h3></div><span>Live</span></header><div className="ops-bars">{[44,58,49,76,64,82,71,66,91,74].map((h,i)=><i key={i} style={{height:`${h}%`}} className={i===8?'active':''} />)}</div><div className="ops-metrics"><span><small>Open chats</small><b>128</b><em>−14%</em></span><span><small>Hot leads</small><b>34</b><em>+18%</em></span><span><small>Avg. reply</small><b>2m 14s</b><em>−32%</em></span></div><div className="next-action"><span>PS</span><div><small>NEXT BEST ACTION</small><b>Invite Priya for a store visit</b><p>High purchase intent · replied now</p></div><ArrowRight /></div></Reveal></div>
      </section>

      <section id="ai-features" className="landing-section ai-features-section">
        <div className="landing-container"><Reveal><SectionHeading light eyebrow="Useful AI, not AI theatre" title="It reads the signals. You keep the judgement." copy="Every insight helps a busy owner or sales team make one better decision—without learning a new technical language." /></Reveal><div className="feature-grid">{features.map((f,i)=><Reveal key={f.title} delay={(i%3)*.06} className={`feature-card feature-${f.tone} ${i===0||i===5?'wide':''}`}><div className="feature-icon"><f.icon /></div><small>{f.overline}</small><h3>{f.title}</h3><p>{f.copy}</p>{i===0?<div className="intent-demo"><p>“Blue kurta XL mein hai?”</p><span>Availability · High intent <b>94%</b></span></div>:i===2?<div className="reply-demo"><Sparkles /><p>Ji, aap 5 baje aa jaiye. Main collection ready rakhwa deta hoon.</p></div>:i===3?<div className="score-demo"><b>91</b><span>HOT LEAD</span></div>:<div className="card-lines"><i/><i/><i/></div>}</Reveal>)}</div></div>
      </section>

      <section className="landing-section product-preview-section">
        <div className="landing-container"><Reveal><SectionHeading center eyebrow="See the whole customer journey" title="A working day that feels under control." copy="From the first question to the final payment, your team gets one connected view of the customer." /></Reveal><Reveal className="preview-wrap"><ProductMockup showAI /><div className="preview-tabs"><button className="active">Smart Inbox</button><button>Campaigns</button><button>AI Center</button><button>Analytics</button></div></Reveal></div>
      </section>

      <section className="landing-section routing-section">
        <div className="landing-container"><Reveal><SectionHeading center eyebrow="Automation with judgement" title="Every message takes the safest useful path." /></Reveal><div className="routing-flow"><div><MessageIcon n={0}/><span>Customer message</span></div><ArrowRight/><div><Sparkles/><span>Intent + sentiment</span></div><ArrowRight/><div><HeartHandshake/><span>Risk decision</span></div><ArrowRight/><section><span className="auto">Auto-reply</span><span className="suggest">Suggest reply</span><span className="human">Human escalation</span></section></div><Reveal className="handover-grid"><article><small>SAFE + ROUTINE</small><h3>Answer instantly when confidence is high.</h3><p>Store timings, catalogue requests and simple availability questions can move quickly within your rules.</p><b><CircleCheck/> Auto-reply eligible</b></article><article><small>SENSITIVE + IMPORTANT</small><h3>Bring in a human with the context ready.</h3><p>Payment, refunds, complaints and frustration arrive with a summary, risk level and recommended action.</p><b><UsersRound/> Owner notified</b></article></Reveal></div>
      </section>

      <section id="industries" className="landing-section bg-[#f7f8f4]">
        <div className="landing-container"><Reveal><SectionHeading center eyebrow="Built for conversational commerce" title="One engine. Many kinds of business." copy="Whalexy adapts to the intent, workflow and tone that matter in your category." /></Reveal><div className="industry-grid">{industries.map((item,i)=>{const Icon=[Gem,ShoppingBag,UsersRound,Stethoscope,Hotel,Shirt][i];return <Reveal key={item[0]} delay={i%3*.05} className="industry-card"><Icon/><h3>{item[0]}</h3><p>{item[1]}</p><button>View workflow <ArrowRight/></button></Reveal>})}</div></div>
      </section>

      <section className="landing-section bg-white"><div className="landing-container"><Reveal><SectionHeading center eyebrow="From setup to signal" title="Useful on day one. Smarter every day." /></Reveal><div className="steps-grid">{howItWorks.map((s,i)=><Reveal key={s.title} className="step-card" delay={i*.08}><span>0{i+1}</span><s.icon/><h3>{s.title}</h3><p>{s.copy}</p></Reveal>)}</div></div></section>

      <section className="landing-section diff-section"><div className="landing-container diff-layout"><Reveal><SectionHeading light eyebrow="A different kind of WhatsApp CRM" title="Built to help you decide, not just deliver." copy="Most tools stop at shared inboxes, broadcasts and bots. Whalexy turns conversations into an operating system for customer action." /><Button onClick={() => navigate('/dashboard')}>Explore the workspace <ArrowRight/></Button></Reveal><div className="diff-grid">{differentiators.map((d,i)=><Reveal key={d.title} delay={i*.06} className="diff-card"><d.icon/><h3>{d.title}</h3><p>{d.copy}</p></Reveal>)}</div></div></section>

      <section className="landing-section segment-section"><div className="landing-container segment-layout"><Reveal className="segment-console"><header><div><small>SMART AUDIENCES</small><h3>Segments that stay alive</h3></div><span>AI refreshed</span></header>{[['Wedding leads','1,248','+86'],['Premium buyers','486','+21'],['Inactive 60d','2,104','−42'],['Complaint risk','68','+8']].map((s,i)=><div className="segment-row" key={s[0]}><i className={`tone-${i}`}/><span><b>{s[0]}</b><small>{['Intent + catalogue + store visit','Lifetime value above ₹1 lakh','No engagement in 60 days','Negative or frustrated sentiment'][i]}</small></span><strong>{s[1]}</strong><em>{s[2]}</em></div>)}<footer><Send/> Estimated reach <b>1,207 opted-in customers</b></footer></Reveal><Reveal><SectionHeading eyebrow="Smart broadcast segmentation" title="The audience updates when the conversation does." copy="Stop rebuilding spreadsheets before every campaign. Whalexy creates living segments from what customers ask, buy and feel." /><ul className="check-list"><li><Check/> Mix CRM tags with AI intent</li><li><Check/> Exclude risk and complaint conversations</li><li><Check/> Estimate reachable, opted-in contacts</li><li><Check/> Track replies back to revenue</li></ul></Reveal></div></section>

      <section className="landing-section testimonials-section"><div className="landing-container"><Reveal><SectionHeading center eyebrow="Trusted by ambitious teams" title="Less inbox anxiety. More useful conversations." /></Reveal><div className="testimonial-grid">{testimonials.map((t,i)=><Reveal key={t.name} className="testimonial-card" delay={i*.07}><Quote/><p>“{t.quote}”</p><div><span>{t.initials}</span><p><b>{t.name}</b><small>{t.role}</small></p></div></Reveal>)}</div></div></section>

      <section id="pricing" className="landing-section pricing-section"><div className="landing-container"><Reveal><SectionHeading center eyebrow="Simple pricing" title="Start with the team you have. Scale into the one you’re building." copy="Every plan includes official WhatsApp-ready workflows, onboarding guidance and human-first controls." /></Reveal><div className="pricing-grid">{plans.map((p,i)=><Reveal key={p.name} delay={i*.06} className={`price-card ${p.popular?'popular':''}`}>{p.popular&&<em>Most popular</em>}<small>{p.name}</small><h3>{p.price}<span>{p.price.startsWith('₹')?'/ month':''}</span></h3><p>{p.note}</p><Button variant={p.popular?'primary':'secondary'} onClick={() => navigate('/dashboard')}>Start free trial <ArrowRight/></Button><ul>{p.items.map(x=><li key={x}><Check/> {x}</li>)}</ul></Reveal>)}</div></div></section>

      <section id="faq" className="landing-section bg-white"><div className="landing-container faq-layout"><Reveal><SectionHeading eyebrow="Questions, answered" title="The practical details." copy="Still curious? Book a short walkthrough and we’ll map Whalexy to your current WhatsApp workflow." /><Button variant="secondary" onClick={bookDemo}>Book a demo</Button></Reveal><div className="faq-list">{faqs.map((f,i)=><div key={f[0]} className={openFaq===i?'open':''}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{f[0]}</span><ChevronDown/></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></div></section>

      <section id="final-cta" className="final-cta"><div className="landing-container"><div><span><Sparkles/> Your next best conversation is waiting</span><h2>Make WhatsApp feel like a growth system, not a group chat.</h2><p>Bring your team, customer context and practical AI into one composed workspace.</p><div><Button onClick={() => navigate('/dashboard')} className="btn-lg">Start free trial <ArrowRight/></Button><Button onClick={bookDemo} variant="ghost" className="btn-lg"><PlayCircle/> Book a live demo</Button></div></div></div></section>

      <footer className="landing-footer"><div className="landing-container footer-grid"><div><Brand light/><p>AI-powered WhatsApp CRM for Indian businesses that care about every conversation.</p></div><div><b>Product</b><a href="#product">Smart Inbox</a><a href="#ai-features">AI features</a><a href="#pricing">Pricing</a></div><div><b>Company</b><a href="#industries">Industries</a><button onClick={bookDemo}>Book demo</button><a href="#faq">FAQ</a></div><div><b>Legal</b><span>Privacy</span><span>Terms</span><span>Security</span></div></div><div className="landing-container footer-bottom"><span>© 2026 Whalexy Technologies</span><span><i/> Systems operational · Made for India</span></div></footer>

      <Modal open={demo} onClose={()=>setDemo(false)} eyebrow="LIVE PRODUCT TOUR" title="See Whalexy on your workflow">
        <form className="demo-form" onSubmit={(e)=>{e.preventDefault();setDemo(false);document.getElementById('final-cta')?.scrollIntoView({behavior:'smooth'})}}><p>Tell us a little about your team. This prototype keeps the form local.</p><label>Work email<input type="email" placeholder="you@company.com" required /></label><label>Monthly WhatsApp conversations<select><option>Under 1,000</option><option>1,000–10,000</option><option>10,000+</option></select></label><Button type="submit">Request my demo <ArrowRight/></Button></form>
      </Modal>
    </main>
  )
}

function MessageIcon({ n }) { const icons=[<ShoppingBag key="a"/>,<HeartHandshake key="b"/>,<Quote key="c"/>,<UsersRound key="d"/>]; return icons[n] }
