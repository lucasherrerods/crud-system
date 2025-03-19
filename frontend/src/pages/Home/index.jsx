import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'
import Cards from '../../components/Charts/Cards.jsx'
import StockCategory from '../../components/Charts/StockCategory.jsx'

function Home() {

  return (
    <div>
      <Sidebar></Sidebar>
      <Main>
        <h1 className='text-2xl text-gray-800 font-bold'>Home</h1>
        <Cards />
        <div className='mt-20'>
          <StockCategory />
        </div>
      </Main>
    </div>
  )
}

export default Home