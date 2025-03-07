import { createPortal } from 'react-dom'

function Modal({ open, onClose, children }) {

  return createPortal(
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${open ? 'visible bg-black/30' : 'invisible'}`}>
      <div onClick={e => e.stopPropagation()} className={`relative bg-white rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal