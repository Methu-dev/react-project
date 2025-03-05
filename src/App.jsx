import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav'

function App() {

  return (
    <>
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Nav />
        <Home />
        <About />
        <Experience />
      </div>
    </>
  )
}

export default App
