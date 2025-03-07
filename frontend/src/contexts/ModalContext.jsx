import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export function ModalProvider({ children }) {
  //Estado para controle de toggle do Modal
  const [open, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen((prev) => !prev)
  }

  return (
    <ModalContext.Provider value={{ open, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}