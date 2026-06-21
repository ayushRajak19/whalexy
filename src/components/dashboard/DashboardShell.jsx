import { Bell, Building2, Check, ChevronDown, Menu, Moon, PanelLeftClose, PanelLeftOpen, Search, Sparkles, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { sidebarGroups, moduleMeta } from '../../data/dashboardData'
import { Brand } from '../common/UI'

export default function DashboardShell({ children, active, onNavigate, dark, setDark, sidebarOpen, setSidebarOpen, assistantOpen, setAssistantOpen }) {
  const [collapsed, setCollapsed] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [profile, setProfile] = useState(false)
  const [business, setBusiness] = useState(false)
  return (
    <div className={`dashboard-shell ${collapsed ? 'sidebar-collapsed' : ''}`}>
      {sidebarOpen && <button className="mobile-overlay" onClick={()=>setSidebarOpen(false)} aria-label="Close menu" />}
      <aside className={`app-sidebar ${sidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-brand"><Brand light compact={collapsed}/><button onClick={()=>setCollapsed(!collapsed)}>{collapsed?<PanelLeftOpen/>:<PanelLeftClose/>}</button></div>
        <div className="sidebar-business"><span>NJ</span><div><b>Noorika Jewels</b><small><i/> WhatsApp is live</small></div><ChevronDown/></div>
        <nav className="sidebar-nav">{sidebarGroups.map(group=><div className="sidebar-group" key={group.label}>{!collapsed&&<small>{group.label}</small>}{group.items.map(item=><button key={item.id} title={collapsed?item.label:''} className={active===item.id?'active':''} onClick={()=>onNavigate(item.id)}><item.icon/><span>{item.label}</span>{item.badge&&<em>{item.badge}</em>}</button>)}</div>)}</nav>
        <div className="sidebar-foot"><button onClick={()=>setAssistantOpen(true)}><span><Sparkles/></span><div><b>Ask Whalexy AI</b><small>Copilot is online</small></div></button><div><span>AS</span><div><b>Aman Shah</b><small>Workspace owner</small></div><ChevronDown/></div></div>
      </aside>
      <div className="app-main">
        <header className="app-topbar">
          <button className="mobile-menu" onClick={()=>setSidebarOpen(true)}><Menu/></button>
          <div className="topbar-title"><small>{active === 'dashboard' ? 'COMMAND CENTER' : moduleMeta[active]?.toUpperCase()}</small><h1>{active === 'dashboard' ? 'Good morning, Aman' : moduleMeta[active]}</h1></div>
          <label className="global-search"><Search/><input placeholder="Search chats, contacts, orders..."/><kbd>⌘ K</kbd></label>
          <div className="topbar-actions">
            <div className="popover-anchor business-selector"><button onClick={()=>setBusiness(!business)}><Building2/><span>Noorika Jewels</span><ChevronDown/></button>{business&&<div className="top-popover business-pop"><small>WORKSPACES</small><button className="active"><span>NJ</span><div><b>Noorika Jewels</b><small>Jaipur · WhatsApp live</small></div><Check/></button><button><span>AK</span><div><b>Aavira Kids</b><small>Mumbai · Trial</small></div></button></div>}</div>
            <button className="theme-toggle" onClick={()=>setDark(!dark)} aria-label="Toggle dark mode">{dark?<Sun/>:<Moon/>}</button>
            <div className="popover-anchor"><button className="icon-button" onClick={()=>setNotifications(!notifications)}><Bell/><i/></button>{notifications&&<div className="top-popover notification-pop"><header><b>Notifications</b><button>Mark all read</button></header><article><span className="alert">!</span><div><b>Payment needs verification</b><p>Rahul shared a payment screenshot.</p><small>2 min ago</small></div></article><article><span className="lead"><Sparkles/></span><div><b>New hot lead</b><p>Priya’s lead score reached 91.</p><small>8 min ago</small></div></article><article><span className="ok"><Check/></span><div><b>Campaign completed</b><p>Festive Early Access reached 472 people.</p><small>34 min ago</small></div></article></div>}</div>
            <div className="popover-anchor profile-anchor"><button onClick={()=>setProfile(!profile)}><span>AS</span><div><b>Aman Shah</b><small>Owner</small></div><ChevronDown/></button>{profile&&<div className="top-popover profile-pop"><button>My profile</button><button>Workspace settings</button><button>Help center</button><hr/><button>Sign out</button></div>}</div>
          </div>
        </header>
        <main className="dashboard-content">{children}</main>
      </div>
      <aside className={`assistant-panel ${assistantOpen?'open':''}`}><header><div><span><Sparkles/></span><p><b>Whalexy AI</b><small><i/> Copilot online</small></p></div><button onClick={()=>setAssistantOpen(false)}><X/></button></header><div className="assistant-body"><small>TODAY’S BRIEF</small><h2>Three things need your attention.</h2><article><span>01</span><p><b>Verify Rahul’s payment</b><small>₹24,500 claim · high risk</small></p></article><article><span>02</span><p><b>Recover 6 hot leads</b><small>No reply for more than 2 hours</small></p></article><article><span>03</span><p><b>Review complaint queue</b><small>3 escalations are waiting</small></p></article><div className="assistant-chat"><p>Ask about your workspace, campaign performance or what to prioritise.</p><label><input placeholder="Ask Whalexy AI..."/><button><Sparkles/></button></label></div></div></aside>
    </div>
  )
}
