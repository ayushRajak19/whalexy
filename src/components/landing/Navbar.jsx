import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navLinks } from '../../data/websiteData'
import { Brand, Button } from '../common/UI'

export default function Navbar({ onDemo }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return (
    <header className="landing-nav">
      <div className="landing-container flex h-18 items-center justify-between">
        <button onClick={() => go('home')} aria-label="Whalexy home"><Brand light /></button>
        <nav className={`nav-links-shell ${open ? 'open' : ''}`}>
          <div className="nav-links">{navLinks.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div>
          <div className="nav-actions"><button onClick={() => navigate('/dashboard')}>Log in</button><Button onClick={() => navigate('/dashboard')}>Start free <ArrowUpRight size={16} /></Button><button className="md:hidden" onClick={onDemo}>Book demo</button></div>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
