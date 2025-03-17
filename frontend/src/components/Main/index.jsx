import { useContext } from "react"
import { ToggleContext } from "../../contexts/ToggleContext"

function Main({ children }) {

  const { isOpen } = useContext(ToggleContext)

  return (
    <main className={`h-full transition-all ease-in-out transform whitespace-nowrap p-10 ${isOpen ? 'w-[calc(100%-240px)] duration-200 ml-60' : 'w-[calc(100%-80px)] duration-900 ml-20'}`}>
      {children}
    </main>
  )
}

export default Main