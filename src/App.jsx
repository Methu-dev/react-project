import About from './Components/About/About'
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav'

function App() {

  return (
    <>
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Nav />
        <Home />
        <About />
      </div>
    </>
  )
}

export default App
