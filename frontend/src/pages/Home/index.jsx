import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'

function Home() {

  return (
    <div>
      <Sidebar></Sidebar>
      <Main>
        <h1 className='text-2xl text-gray-800 font-bold'>Home</h1>
      </Main>
    </div>
  )
}

export default Home