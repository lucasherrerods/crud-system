import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'
import Cards from '../../components/Charts/Cards.jsx'
import StockCategory from '../../components/Charts/StockCategory.jsx'
import AvgPrice from '../../components/Charts/AvgPrice.jsx'

function Home() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <Main className="flex-1 flex flex-col">
        <h1 className="text-2xl text-gray-800 font-bold">Home</h1>
        <Cards />
        <div className="flex flex-row-reverse gap-4 w-full">
          <div className="flex-1">
            <h2 className="bg-gray-200 mb-10 p-2 rounded-md text-base font-semibold text-right">Estoque por categoria</h2>
            <StockCategory />
          </div>
          <div className="flex-1">
            <h2 className="bg-gray-200 mb-10 p-2 rounded-md text-base font-semibold">Preço médio por categoria</h2>
            <AvgPrice />
          </div>
        </div>
      </Main>
    </div>
  )
}

export default Home