import { useEffect, useState } from 'react'
import DashboardShell from '../components/dashboard/DashboardShell'
import DashboardViews from '../components/dashboard/DashboardViews'
import { ToastProvider } from '../components/common/UI'

export default function DashboardPage() {
  const [active, setActive] = useState('dashboard')
  const [dark, setDark] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <ToastProvider>
      <div className={`dashboard-app ${dark ? 'dark' : ''}`}>
        <DashboardShell active={active} onNavigate={(id)=>{setActive(id);setSidebarOpen(false)}} dark={dark} setDark={setDark} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} assistantOpen={assistantOpen} setAssistantOpen={setAssistantOpen}>
          <DashboardViews active={active} onNavigate={setActive} openAssistant={()=>setAssistantOpen(true)} />
        </DashboardShell>
      </div>
    </ToastProvider>
  )
}
