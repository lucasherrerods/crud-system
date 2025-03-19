import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'
import Cards from '../../components/Charts/Cards.jsx'

function Home() {

  return (
    <div>
      <Sidebar></Sidebar>
      <Main>
        <h1 className='text-2xl text-gray-800 font-bold'>Home</h1>
        <Cards />
      </Main>
    </div>
  )
}

export default Home