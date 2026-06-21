import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  Copy,
  Eye,
  FileText,
  Gem,
  Globe2,
  GripVertical,
  Image,
  LayoutGrid,
  Link2,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  PackagePlus,
  Plus,
  QrCode,
  Rocket,
  Search,
  Send,
  Settings2,
  ShoppingBag,
  Sparkles,
  Store,
  Trash2,
  Users,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Badge, Button, Modal, Toggle, useToast } from '../common/UI'

const tabs = [
  ['overview', 'Overview', Rocket],
  ['ads', 'Ads', Megaphone],
  ['forms', 'Forms', FileText],
  ['catalog', 'Catalog', ShoppingBag],
  ['links', 'Links & QR', QrCode],
  ['webviews', 'Webviews', Globe2],
]

const initialFields = [
  { id: 1, label: 'Full name', type: 'Short answer', required: true, enabled: true },
  { id: 2, label: 'Event date', type: 'Date', required: true, enabled: true },
  { id: 3, label: 'Preferred budget', type: 'Multiple choice', required: false, enabled: true },
  { id: 4, label: 'Store visit preference', type: 'Time slots', required: false, enabled: true },
]

const initialProducts = [
  { id: 1, name: 'Ivory Kundan Bridal Set', price: '₹68,000', stock: 4, tag: 'Best seller', tone: 'rose' },
  { id: 2, name: 'Emerald Polki Necklace', price: '₹42,500', stock: 8, tag: 'High intent', tone: 'emerald' },
  { id: 3, name: 'Noor Diamond Choker', price: '₹1,24,000', stock: 2, tag: 'Premium', tone: 'violet' },
  { id: 4, name: 'Festive Jadau Earrings', price: '₹18,400', stock: 14, tag: 'Trending', tone: 'amber' },
]

export default function ConversionStudio() {
  const [active, setActive] = useState('overview')
  const [published, setPublished] = useState(true)
  const toast = useToast()

  const publish = () => {
    setPublished(true)
    toast('Experience published', 'Ad, form, catalog and tracking are live')
  }

  return (
    <div className="dashboard-view conversion-studio">
      <header className="conversion-head">
        <div>
          <span><Sparkles /> WHALEXY GROWTH OS</span>
          <h2>Conversion Studio</h2>
          <p>Build one intelligent journey from first click to qualified WhatsApp conversation.</p>
        </div>
        <div>
          <Badge tone={published ? 'emerald' : 'amber'} dot>{published ? 'Live experience' : 'Draft changes'}</Badge>
          <Button variant="secondary" onClick={() => toast('Preview opened', 'Customer journey is ready to review')}><Eye /> Preview</Button>
          <Button onClick={publish}><Rocket /> Publish experience</Button>
        </div>
      </header>

      <nav className="conversion-tabs" aria-label="Conversion Studio sections">
        {tabs.map(([id, label, Icon]) => (
          <button key={id} className={active === id ? 'active' : ''} onClick={() => setActive(id)}>
            <Icon /> <span>{label}</span>{id === 'overview' && <i />}
          </button>
        ))}
      </nav>

      {active === 'overview' && <StudioOverview onOpen={setActive} />}
      {active === 'ads' && <AdsStudio onDirty={() => setPublished(false)} />}
      {active === 'forms' && <FormsStudio onDirty={() => setPublished(false)} />}
      {active === 'catalog' && <CatalogStudio onDirty={() => setPublished(false)} />}
      {active === 'links' && <LinksStudio onDirty={() => setPublished(false)} />}
      {active === 'webviews' && <WebviewStudio onDirty={() => setPublished(false)} />}
    </div>
  )
}

function StudioOverview({ onOpen }) {
  const stages = [
    { label: 'Ad reach', value: '48.2K', rate: '100%', icon: Megaphone, tone: 'violet' },
    { label: 'Link clicks', value: '4,820', rate: '10.0%', icon: MousePointerClick, tone: 'sky' },
    { label: 'WhatsApp starts', value: '2,146', rate: '44.5%', icon: MessageCircle, tone: 'emerald' },
    { label: 'Qualified leads', value: '638', rate: '29.7%', icon: Sparkles, tone: 'lime' },
    { label: 'Payments', value: '₹8.4L', rate: '12.8%', icon: CircleDollarSign, tone: 'amber' },
  ]
  const modules = [
    { id: 'ads', icon: Megaphone, title: 'Click-to-WhatsApp Ads', copy: 'Launch Meta-ready creatives with AI copy and intent mapping.', stat: '3 live ads', tone: 'violet' },
    { id: 'forms', icon: FileText, title: 'Native Lead Forms', copy: 'Qualify buyers inside WhatsApp before an agent steps in.', stat: '68% completion', tone: 'sky' },
    { id: 'catalog', icon: ShoppingBag, title: 'Intent-aware Catalog', copy: 'Show the right products based on budget, occasion and lead score.', stat: '28 products', tone: 'emerald' },
    { id: 'links', icon: QrCode, title: 'Smart Links & QR', copy: 'Track every source, message and offline scan automatically.', stat: '12.4K clicks', tone: 'amber' },
    { id: 'webviews', icon: Globe2, title: 'WhatsApp Webviews', copy: 'Create fast mini-pages for booking, payment and product discovery.', stat: '4 published', tone: 'rose' },
  ]
  return (
    <div className="conversion-overview">
      <section className="conversion-hero">
        <div>
          <Badge tone="emerald">Bridal Appointment Engine</Badge>
          <h3>One connected journey.<br/><span>Zero lost context.</span></h3>
          <p>Whalexy carries source, campaign, form answers and product interest into the first agent reply.</p>
          <div><Button onClick={() => onOpen('ads')}>Edit journey <ArrowRight /></Button><button onClick={() => onOpen('links')}>View attribution <BarChart3 /></button></div>
        </div>
        <JourneyMap />
      </section>

      <section className="studio-funnel panel">
        <header><div><small>LIVE CONVERSION FUNNEL</small><h3>Private Bridal Preview · Last 30 days</h3></div><Badge tone="emerald" dot>Tracking healthy</Badge></header>
        <div>{stages.map((stage, index) => <article key={stage.label} className={`funnel-${stage.tone}`}><span><stage.icon /></span><p><small>{stage.label}</small><b>{stage.value}</b><em>{stage.rate} from previous</em></p>{index < stages.length - 1 && <ChevronRight />}</article>)}</div>
      </section>

      <div className="studio-module-grid">
        {modules.map(module => <button key={module.id} className={`studio-module module-${module.tone}`} onClick={() => onOpen(module.id)}><header><span><module.icon /></span><ArrowRight /></header><h3>{module.title}</h3><p>{module.copy}</p><footer><i /><b>{module.stat}</b><span>Open studio</span></footer></button>)}
      </div>

      <section className="ai-advantage panel"><div><span><WandSparkles /></span><div><small>WHALEXY AI ADVANTAGE</small><h3>The experience changes with customer intent.</h3><p>Hot bridal leads see appointment slots. Price-sensitive shoppers see curated ranges. Payment-risk conversations go straight to a human.</p></div></div><div className="ai-rules"><span><i className="hot"/> Lead score ≥ 80 <ArrowRight/> Private booking</span><span><i className="warm"/> Budget below ₹50K <ArrowRight/> Curated catalog</span><span><i className="risk"/> Payment or complaint <ArrowRight/> Human handover</span></div></section>
    </div>
  )
}

function JourneyMap() {
  const steps = [[Megaphone,'Ad'],[FileText,'Form'],[Sparkles,'AI'],[ShoppingBag,'Catalog'],[MessageCircle,'Chat']]
  return <div className="journey-map"><div className="journey-orbit"/><small>LIVE EXPERIENCE MAP</small><div>{steps.map(([Icon,label],index)=><span key={label} className={index===2?'core':''}><Icon/><b>{label}</b>{index<steps.length-1&&<ArrowRight/>}</span>)}</div><p><i/> Source and intent stay attached end-to-end</p></div>
}

function AdsStudio({ onDirty }) {
  const toast = useToast()
  const [copy, setCopy] = useState('Your bridal look deserves a private preview ✨ Explore handcrafted Kundan sets with a stylist on WhatsApp.')
  const [budget, setBudget] = useState(2500)
  const [objective, setObjective] = useState('Qualified WhatsApp leads')
  const generate = () => {
    setCopy('Shaadi ka perfect bridal set, without the endless search ✨ Tell us your budget and get a private Kundan shortlist on WhatsApp.')
    onDirty()
    toast('AI creative generated', 'Tone matched to high-intent wedding buyers')
  }
  return <div className="studio-workspace ads-workspace">
    <section className="studio-editor panel">
      <EditorTitle icon={Megaphone} eyebrow="META-READY CAMPAIGN" title="Create a Click-to-WhatsApp ad" copy="Build the campaign and preserve attribution inside every new chat." />
      <div className="editor-section"><small>CAMPAIGN</small><label>Campaign name<input defaultValue="Jaipur Bridal Preview · June" onChange={onDirty}/></label><label>Objective<select value={objective} onChange={e=>{setObjective(e.target.value);onDirty()}}><option>Qualified WhatsApp leads</option><option>Catalog discovery</option><option>Store appointments</option></select></label></div>
      <div className="editor-section"><div className="section-label"><small>CREATIVE</small><button onClick={generate}><WandSparkles/> Generate with AI</button></div><label>Primary text<textarea rows="4" value={copy} onChange={e=>{setCopy(e.target.value);onDirty()}}/></label><div className="two-fields"><label>Headline<input defaultValue="Book your private bridal preview" onChange={onDirty}/></label><label>CTA<select onChange={onDirty}><option>Send WhatsApp message</option><option>Get offer</option><option>Book now</option></select></label></div></div>
      <div className="editor-section"><small>AUDIENCE & BUDGET</small><div className="audience-card"><span><Users/></span><p><b>Wedding intent · Jaipur + 50 km</b><small>Women, 23–38 · Engaged shoppers · Premium affinity</small></p><button>Refine</button></div><label>Daily budget <b className="range-value">₹{budget.toLocaleString('en-IN')}</b><input type="range" min="500" max="10000" step="500" value={budget} onChange={e=>{setBudget(Number(e.target.value));onDirty()}}/></label><div className="estimate-strip"><span><small>Estimated reach</small><b>18K–24K/day</b></span><span><small>WhatsApp starts</small><b>180–260/day</b></span><span><small>Cost per lead</small><b>₹42–₹68</b></span></div></div>
      <footer><Button variant="secondary" onClick={() => toast('Draft saved')}>Save draft</Button><Button onClick={() => toast('Campaign sent for review', `${objective} · ₹${budget.toLocaleString('en-IN')}/day`)}><Rocket/> Review & launch</Button></footer>
    </section>
    <aside className="studio-preview ad-preview-panel"><PreviewHeader label="INSTAGRAM FEED PREVIEW"/><div className="social-ad"><header><span>NJ</span><p><b>Noorika Jewels</b><small>Sponsored · Jaipur</small></p><Settings2/></header><div className="ad-creative"><div className="ad-jewel"><Gem/><i/><i/></div><span>THE BRIDAL<br/>PREVIEW</span><small>NOORIKA · JAIPUR</small></div><p>{copy}</p><div className="ad-meta"><span><b>Noorika Jewels</b><small>Private appointments now open</small></span><button>Send message</button></div></div><div className="preview-intelligence"><Sparkles/><div><b>AI predicts strong creative fit</b><p>Wedding intent match 94% · CTA clarity 88%</p></div><Badge tone="emerald">92 / 100</Badge></div>
    </aside>
  </div>
}

function FormsStudio({ onDirty }) {
  const toast = useToast()
  const [fields, setFields] = useState(initialFields)
  const toggle = (id, key) => { setFields(list => list.map(item => item.id === id ? {...item,[key]:!item[key]} : item)); onDirty() }
  const addField = () => { setFields(list => [...list,{id:Date.now(),label:'New qualification question',type:'Short answer',required:false,enabled:true}]);onDirty();toast('Question added','Customize the label and response type') }
  const remove = id => {setFields(list=>list.filter(item=>item.id!==id));onDirty()}
  return <div className="studio-workspace forms-workspace">
    <section className="studio-editor panel"><EditorTitle icon={FileText} eyebrow="WHATSAPP NATIVE FORM" title="Bridal consultation qualifier" copy="Ask only what the agent needs to make the first reply useful."/><div className="form-health"><span><Sparkles/></span><p><b>AI form health: Excellent</b><small>4 questions · estimated completion 68% · about 42 seconds</small></p><Badge tone="emerald">Optimized</Badge></div><div className="field-builder"><div className="section-label"><small>FORM FIELDS</small><button onClick={addField}><Plus/> Add field</button></div>{fields.map((field,index)=><article key={field.id} className={!field.enabled?'disabled':''}><GripVertical/><span>{index+1}</span><div><input value={field.label} onChange={e=>{setFields(list=>list.map(x=>x.id===field.id?{...x,label:e.target.value}:x));onDirty()}}/><select value={field.type} onChange={e=>{setFields(list=>list.map(x=>x.id===field.id?{...x,type:e.target.value}:x));onDirty()}}><option>Short answer</option><option>Multiple choice</option><option>Date</option><option>Time slots</option><option>Phone</option></select></div><label><small>Required</small><Toggle checked={field.required} onChange={()=>toggle(field.id,'required')}/></label><label><small>Active</small><Toggle checked={field.enabled} onChange={()=>toggle(field.id,'enabled')}/></label><button onClick={()=>remove(field.id)}><Trash2/></button></article>)}</div><div className="form-routing"><div><Zap/><p><b>After submission</b><small>Score lead → tag “Bridal Form” → show matched catalog → assign if score ≥ 80</small></p></div><button>Edit routing <ChevronRight/></button></div><footer><Button variant="secondary">Save draft</Button><Button onClick={()=>toast('Form published','Available inside the Bridal Preview journey')}><Rocket/> Publish form</Button></footer></section>
    <aside className="studio-preview"><PreviewHeader label="WHATSAPP FORM PREVIEW"/><div className="wa-form-phone"><header><ChevronRight/><span>NJ</span><p><b>Noorika Jewels</b><small>Business account</small></p><X/></header><div className="wa-form-cover"><Gem/><b>Private Bridal Preview</b><span>Find your perfect set in under a minute.</span></div><div className="wa-form-content"><small>STEP 1 OF {fields.filter(f=>f.enabled).length}</small><h3>{fields.find(f=>f.enabled)?.label}</h3><input placeholder="Type your answer"/><button>Continue <ArrowRight/></button><p><ShieldText/> Your details stay private with Noorika Jewels.</p></div></div>
    </aside>
  </div>
}

function ShieldText(){return <Check/>}

function CatalogStudio({ onDirty }) {
  const toast = useToast()
  const [products,setProducts]=useState(initialProducts.map(product => ({...product, active:true})))
  const [query,setQuery]=useState('')
  const [modal,setModal]=useState(false)
  const visible=products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase()))
  const addProduct=e=>{e.preventDefault();const form=new FormData(e.currentTarget);setProducts(list=>[...list,{id:Date.now(),name:form.get('name'),price:`₹${Number(form.get('price')).toLocaleString('en-IN')}`,stock:Number(form.get('stock')),tag:'New',tone:'sky',active:true}]);setModal(false);onDirty();toast('Product added','Catalog rules will index it automatically')}
  return <div className="catalog-studio"><section className="catalog-toolbar panel"><div><span><ShoppingBag/></span><p><small>INTENT-AWARE CATALOG</small><b>Bridal Collection</b></p><Badge tone="emerald">28 live products</Badge></div><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search catalog"/></label><Button variant="secondary"><LayoutGrid/> Collections</Button><Button onClick={()=>setModal(true)}><PackagePlus/> Add product</Button></section><div className="catalog-layout"><section className="product-grid">{visible.map((product,index)=><article className="product-card panel" key={product.id}><div className={`product-art art-${product.tone}`}><Gem/><span>{index%2===0?'PRIVATE BRIDAL':'NOORIKA SELECT'}</span><button><Settings2/></button></div><div><Badge tone={product.tone==='rose'?'rose':product.tone==='violet'?'violet':product.tone==='amber'?'amber':'emerald'}>{product.tag}</Badge><h3>{product.name}</h3><p><b>{product.price}</b><span>{product.stock} in stock</span></p><footer><span><Sparkles/> AI match ready</span><Toggle checked onChange={()=>{}}/></footer></div></article>)}</section><aside className="catalog-rules panel"><header><Sparkles/><div><small>AI MERCHANDISING</small><h3>Who sees what</h3></div></header><div className="catalog-rule"><span className="hot">91</span><p><b>Hot bridal lead</b><small>Premium + appointment-ready pieces</small></p><ChevronRight/></div><div className="catalog-rule"><span className="warm">68</span><p><b>Budget conscious</b><small>Under ₹50K + payment options</small></p><ChevronRight/></div><div className="catalog-rule"><span className="new">NEW</span><p><b>Catalogue request</b><small>Best sellers + guided questions</small></p><ChevronRight/></div><Button variant="secondary" className="w-full" onClick={()=>toast('Catalog rules opened')}>Manage recommendation rules</Button><div className="catalog-stat"><BarChart3/><p><b>34% higher product opens</b><small>vs. sending the same catalog to everyone</small></p></div></aside></div><Modal open={modal} onClose={()=>setModal(false)} eyebrow="CATALOG" title="Add a product"><form className="product-form" onSubmit={addProduct}><div className="upload-tile"><Image/><b>Add product image</b><small>PNG or JPG · up to 5 MB</small></div><label>Product name<input name="name" required placeholder="e.g. Ruby Polki Necklace"/></label><div><label>Price<input name="price" type="number" required placeholder="45000"/></label><label>Stock<input name="stock" type="number" required placeholder="6"/></label></div><Button type="submit" className="w-full"><Plus/> Add to catalog</Button></form></Modal></div>
}

function LinksStudio({ onDirty }) {
  const toast=useToast()
  const [slug,setSlug]=useState('bridal-preview')
  const [source,setSource]=useState('jaipur-store')
  const [message,setMessage]=useState('Hi, I would like to book a private bridal preview.')
  const link=`wa.me/919876543210?text=${encodeURIComponent(message)}&src=${source}&ref=${slug}`
  const update=setter=>e=>{setter(e.target.value);onDirty()}
  return <div className="studio-workspace links-workspace"><section className="studio-editor panel"><EditorTitle icon={Link2} eyebrow="ATTRIBUTED ENTRY POINT" title="Smart Link & QR Generator" copy="Every click and offline scan arrives with source, campaign and intent context."/><div className="editor-section"><small>LINK IDENTITY</small><label>Campaign slug<div className="input-prefix"><span>whale.xy/</span><input value={slug} onChange={update(setSlug)}/></div></label><div className="two-fields"><label>Source<select value={source} onChange={update(setSource)}><option>jaipur-store</option><option>instagram-bio</option><option>bridal-expo</option><option>packaging-insert</option></select></label><label>Default intent<select onChange={onDirty}><option>Store Visit + Bridal</option><option>Catalogue Request</option><option>Price Inquiry</option></select></label></div><label>Pre-filled WhatsApp message<textarea value={message} rows="3" onChange={update(setMessage)}/></label></div><div className="generated-link"><div><small>TRACKED DESTINATION</small><code>{link}</code></div><button onClick={()=>{navigator.clipboard?.writeText(`https://${link}`);toast('Smart link copied')}}><Copy/></button></div><div className="link-options"><SettingToggle title="Attach campaign attribution" copy="Keep source through chat and order"/><SettingToggle title="Create contact on click" copy="Complete profile after first message"/><SettingToggle title="AI intent pre-classification" copy="Seed the inbox with expected intent"/></div><footer><Button variant="secondary">Save as draft</Button><Button onClick={()=>toast('Smart link published',`whale.xy/${slug}`)}><Rocket/> Publish link</Button></footer></section><aside className="studio-preview qr-preview-panel"><PreviewHeader label="SMART QR PREVIEW"/><div className="qr-card"><BrandStamp/><div className="qr-shell"><QRGrid seed={link}/></div><h3>Scan for a private<br/>bridal preview</h3><p>Chat with a Noorika stylist on WhatsApp</p><span>whale.xy/{slug}</span></div><div className="qr-actions"><Button variant="secondary" onClick={()=>toast('QR downloaded','High-resolution PNG prepared')}><QrCode/> Download PNG</Button><Button variant="secondary" onClick={()=>toast('Print layout opened')}><Eye/> Print preview</Button></div><div className="click-snapshot"><header><b>Attribution snapshot</b><Badge tone="emerald">Live</Badge></header><div><span><small>Total scans</small><b>3,842</b></span><span><small>Chat starts</small><b>2,104</b></span><span><small>Qualified</small><b>638</b></span></div></div></aside></div>
}

function WebviewStudio({ onDirty }) {
  const toast=useToast()
  const [blocks,setBlocks]=useState(['Hero','Featured products','Appointment slots','Trust proof','Payment CTA'])
  const add=()=>{setBlocks(list=>[...list,`Custom block ${list.length-4}`]);onDirty();toast('Content block added')}
  return <div className="studio-workspace webview-workspace"><section className="studio-editor panel"><EditorTitle icon={Globe2} eyebrow="IN-WHATSAPP MINI EXPERIENCE" title="Private Bridal Preview" copy="A fast, conversion-focused page that opens without leaving WhatsApp."/><div className="webview-settings"><label>Page title<input defaultValue="Noorika Private Bridal Preview" onChange={onDirty}/></label><div className="two-fields"><label>Primary action<select onChange={onDirty}><option>Book appointment</option><option>Pay deposit</option><option>Chat with stylist</option></select></label><label>Theme<select onChange={onDirty}><option>Noorika Ivory</option><option>Emerald Night</option><option>Minimal White</option></select></label></div></div><div className="section-label"><small>PAGE BLOCKS</small><button onClick={add}><Plus/> Add block</button></div><div className="webview-blocks">{blocks.map((block,index)=><article key={`${block}-${index}`}><GripVertical/><span>{index===0?<Image/>:index===1?<ShoppingBag/>:index===2?<Store/>:index===3?<Users/>:<CircleDollarSign/>}</span><p><b>{block}</b><small>{['Editorial image, title and promise','AI-personalized product collection','Available dates and store location','Reviews, quality and trust markers','UPI deposit or WhatsApp handover'][Math.min(index,4)]}</small></p><Toggle checked onChange={onDirty}/><button onClick={()=>{setBlocks(list=>list.filter((_,i)=>i!==index));onDirty()}}><Trash2/></button></article>)}</div><div className="webview-performance"><Sparkles/><p><b>AI conversion check</b><small>Clear promise · 1 primary CTA · mobile load estimate 0.8s</small></p><Badge tone="emerald">Excellent</Badge></div><footer><Button variant="secondary">Save draft</Button><Button onClick={()=>toast('Webview published','The live WhatsApp journey now uses this page')}><Rocket/> Publish webview</Button></footer></section><aside className="studio-preview"><PreviewHeader label="MOBILE WEBVIEW PREVIEW"/><div className="webview-phone"><header><X/><p><b>Noorika Jewels</b><small>whalexy secure webview</small></p><Settings2/></header><div className="webview-hero"><Gem/><span>THE PRIVATE</span><h3>Bridal Preview</h3><p>Handpicked for your story.</p></div><div className="webview-products"><small>CURATED FOR YOU</small><div><span><Gem/><b>Ivory Kundan</b><em>₹68K</em></span><span><Gem/><b>Emerald Polki</b><em>₹42.5K</em></span></div></div><div className="webview-slots"><small>BOOK A PRIVATE APPOINTMENT</small><div><button>Sat 27<br/><b>12:30</b></button><button>Sat 27<br/><b>17:00</b></button><button>Sun 28<br/><b>11:00</b></button></div></div><button className="webview-cta">Book my private preview <ArrowRight/></button></div></aside></div>
}

function EditorTitle({icon:Icon,eyebrow,title,copy}){return <header className="studio-editor-title"><span><Icon/></span><div><small>{eyebrow}</small><h3>{title}</h3><p>{copy}</p></div><button><Settings2/></button></header>}
function PreviewHeader({label}){return <header className="preview-header"><span><i/> LIVE PREVIEW</span><b>{label}</b><button><Eye/></button></header>}
function SettingToggle({title,copy}){const [on,setOn]=useState(true);return <div><p><b>{title}</b><small>{copy}</small></p><Toggle checked={on} onChange={setOn}/></div>}
function BrandStamp(){return <div className="brand-stamp"><span><i/><i/><i/></span><b>whalexy</b></div>}
function QRGrid({seed}){const bits=useMemo(()=>{const s=[...seed].reduce((sum,ch)=>sum+ch.charCodeAt(0),0);return Array.from({length:441},(_,i)=>{const x=i%21,y=Math.floor(i/21);const finder=(x<7&&y<7)||(x>13&&y<7)||(x<7&&y>13);if(finder){const lx=x>13?x-14:x,ly=y>13?y-14:y;return lx===0||lx===6||ly===0||ly===6||(lx>1&&lx<5&&ly>1&&ly<5)}return ((i*i+s*(i+3)+x*11+y*7)%17)<8})},[seed]);return <div className="qr-grid">{bits.map((on,i)=><i className={on?'on':''} key={i}/>)}</div>}
