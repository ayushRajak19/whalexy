import { lazy, Suspense } from 'react'
import { AICenter, AgentsView, AnalyticsView, ApiView, CampaignsView, ChatbotView, ContactsView, FlowBuilder, GenericView, OrdersView, SetupView, TemplatesView } from './ModuleViews'
import DashboardHome from './DashboardHome'
import SmartInbox from './SmartInbox'

const ConversionStudio = lazy(() => import('./ConversionStudio'))

export default function DashboardViews({ active, onNavigate, openAssistant }) {
  const views = {
    dashboard: <DashboardHome onNavigate={onNavigate} openAssistant={openAssistant}/>,
    setup: <SetupView/>, inbox: <SmartInbox/>, contacts: <ContactsView/>, templates: <TemplatesView/>, conversion: <ConversionStudio/>, campaigns: <CampaignsView/>, flows: <FlowBuilder/>, chatbot: <ChatbotView/>, payments: <OrdersView/>, api: <ApiView/>, agents: <AgentsView/>, analytics: <AnalyticsView/>, 'ai-center': <AICenter/>,
    whatsapp: <GenericView type="channel" title="WhatsApp Cloud API"/>, facebook: <GenericView type="channel" title="Facebook Messenger"/>, instagram: <GenericView type="channel" title="Instagram Messaging"/>, chats: <GenericView type="chats" title="All conversations"/>, ecommerce: <GenericView type="commerce" title="Commerce overview"/>, 'wa-orders': <GenericView type="orders" title="WhatsApp Orders"/>, shopify: <GenericView type="integration" title="Shopify"/>, woocommerce: <GenericView type="integration" title="WooCommerce"/>, integrations: <GenericView type="integrations" title="Integrations"/>, plan: <GenericView type="plan" title="Growth plan"/>, settings: <GenericView type="settings" title="Workspace settings"/>,
  }
  return <Suspense fallback={<div className="studio-loading"><span/><b>Preparing Conversion Studio…</b></div>}><div className="view-enter" key={active}>{views[active] || views.dashboard}</div></Suspense>
}
