import { createContext, useState } from "react";

export const ToggleContext = createContext()

export function ToggleProvider({ children }) {
  // Estado que controla a funcionalidade toggle da sidebar, inicia fechada
  const [isOpen, setIsOpen] = useState(false)

  //Altera entre true/false quando chamada
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    //Envolve os componentes que vão receber os dados
    <ToggleContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </ToggleContext.Provider>
  )
}