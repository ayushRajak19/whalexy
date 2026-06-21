import { ArrowUp, BarChart3, CheckCheck, MessageSquareText, Search, Sparkles, Users } from 'lucide-react'

export default function ProductMockup({ compact = false, showAI = false }) {
  const people = [
    ['PS', 'Priya Sharma', 'Bridal necklace ka price...', 'Hot · 91'],
    ['RV', 'Rahul Verma', 'Payment screenshot bheja hai', 'Verify'],
    ['MS', 'Meera Shah', 'Catalogue bhejo please', 'Warm · 78'],
  ]
  return (
    <div className={`product-mockup ${compact ? 'compact' : ''} ${showAI ? 'with-ai' : ''}`}>
      <div className="mockup-top"><div className="window-dots"><i /><i /><i /></div><span><Search size={14} /> Search conversations</span><b><i /> Live</b></div>
      <div className="mockup-body">
        <aside className="mockup-rail"><strong>w</strong><button className="active"><MessageSquareText /></button><button><Users /></button><button><BarChart3 /></button><span>AS</span></aside>
        <section className="mockup-list"><header><span>SMART INBOX</span><b>Priority <em>12</em></b></header>{people.map((p, i) => <article key={p[1]} className={i === 0 ? 'active' : ''}><span>{p[0]}</span><div><strong>{p[1]}</strong><p>{p[2]}</p><em>{p[3]}</em></div><time>{i ? `${i * 4}m` : 'Now'}</time></article>)}</section>
        <section className="mockup-chat"><header><span>PS</span><div><strong>Priya Sharma</strong><small>online · Wedding lead</small></div></header><div className="mockup-messages"><time>TODAY</time><p className="incoming">Hi, bridal necklace ka price batao, kal store aa sakte?<small>10:42</small></p><div className="mock-ai"><Sparkles size={13} /> Intent: Price + Store visit <b>96%</b></div><p className="outgoing">Ji Priya ji, bridal collection available hai. Aap kal kis time visit karenge?<small>10:43 <CheckCheck size={12} /></small></p></div><footer><Sparkles size={15} /><span>Use AI suggested reply...</span><button><ArrowUp size={15} /></button></footer></section>
        {showAI && <aside className="mockup-ai"><header><span><Sparkles size={15} /></span><div><strong>AI Intelligence</strong><small>Updated now</small></div></header><label>Intent</label><b>Price + Store visit</b><div className="mock-score"><strong>91</strong><span>HOT LEAD</span></div><label>Next best action</label><p>Offer a private store appointment and share the bridal catalogue.</p><button>Use suggested reply</button></aside>}
      </div>
    </div>
  )
}
