import { ArrowRight, CheckCircle2, Play, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '../common/UI'
import ProductMockup from './ProductMockup'

export default function Hero({ onDemo }) {
  const navigate = useNavigate()
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="landing-container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <div className="dark-eyebrow"><i /> Built for WhatsApp-first India <Sparkles size={14} /></div>
          <h1>Turn WhatsApp chaos into <span>smart customer conversations.</span></h1>
          <p>Whalexy brings chats, customers, campaigns and practical AI into one calm workspace—so your team knows who to reply to, what to say, and what to do next.</p>
          <div className="hero-actions"><Button onClick={() => navigate('/dashboard')} className="btn-lg">Start free trial <ArrowRight size={18} /></Button><Button variant="ghost" onClick={onDemo} className="btn-lg"><Play size={17} /> Watch 2-min demo</Button></div>
          <div className="hero-proof"><div className="avatar-stack"><span>RS</span><span>MK</span><span>AP</span></div><div><p>{[1,2,3,4,5].map(n => <Star key={n} size={14} fill="currentColor" />)}</p><span>Built for owners, teams and real Indian conversations</span></div></div>
          <div className="hero-points"><span><CheckCircle2 /> No credit card</span><span><CheckCircle2 /> Guided setup</span><span><CheckCircle2 /> Human control</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .75, delay: .15 }}><ProductMockup /><div className="float-chip chip-one"><Sparkles /><span><small>INTENT FOUND</small><b>Store visit + Price</b></span><em>96%</em></div><div className="float-chip chip-two"><strong>91</strong><span><small>LEAD SCORE</small><b>Hot lead</b></span></div><div className="float-chip chip-three"><Sparkles/><span><small>AI ASSISTANT</small><b>Reply ready</b></span><em>✓</em></div><div className="float-chip chip-four"><span className="clock-glyph">◷</span><span><small>FOLLOW-UP</small><b>Due today</b></span></div></motion.div>
      </div>
      <div className="landing-container hero-stats"><div><b>3×</b><span>faster first response</span></div><div><b>42%</b><span>fewer missed follow-ups</span></div><div><b>24/7</b><span>customer context ready</span></div><p><i /> One clear workspace for every conversation</p></div>
    </section>
  )
}
