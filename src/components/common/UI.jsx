import { Check, X } from 'lucide-react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export function Brand({ compact = false, light = false }) {
  return <span className={`brand ${light ? 'text-white' : 'text-slate-950'}`}><span className="brand-mark"><i /><i /><i /></span>{!compact && <b>whalexy</b>}</span>
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = { primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost', danger: 'btn-danger' }
  return <button className={`btn ${styles[variant]} ${className}`} {...props}>{children}</button>
}

export function Badge({ children, tone = 'slate', dot = false }) {
  return <span className={`badge badge-${tone}`}>{dot && <i className="badge-dot" />}{children}</span>
}

export function Modal({ open, onClose, title, eyebrow, children, wide = false }) {
  if (!open) return null
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`modal-card ${wide ? 'max-w-4xl' : 'max-w-xl'}`} role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal-head"><div><span>{eyebrow}</span><h2>{title}</h2></div><button onClick={onClose} aria-label="Close modal"><X size={20} /></button></div>
        {children}
      </div>
    </div>
  )
}

const ToastContext = createContext(() => {})

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const showToast = useCallback((title, detail = '') => {
    setToast({ title, detail })
    window.setTimeout(() => setToast(null), 2800)
  }, [])
  const value = useMemo(() => showToast, [showToast])
  return <ToastContext.Provider value={value}>{children}{toast && <div className="toast"><span><Check size={16} /></span><div><strong>{toast.title}</strong>{toast.detail && <p>{toast.detail}</p>}</div><button onClick={() => setToast(null)}><X size={16} /></button></div>}</ToastContext.Provider>
}

export const useToast = () => useContext(ToastContext)

export function Toggle({ checked, onChange, label }) {
  return <button type="button" className={`toggle ${checked ? 'on' : ''}`} onClick={() => onChange?.(!checked)} role="switch" aria-checked={checked} aria-label={label}><span /></button>
}

export function EmptyState({ icon: Icon, title, copy, action }) {
  return <div className="empty-state"><span><Icon size={24} /></span><h3>{title}</h3><p>{copy}</p>{action}</div>
}
