import Nav from '../src/components/Nav/Nav'
import Footer from '../src/components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
