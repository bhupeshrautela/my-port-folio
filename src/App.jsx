
import Intro from './Pages/Intro'
import Navbar from './Pages/Navbar'
import Skills from './Pages/Skills'
import Projects from "./Pages/Projects"
import About from './Pages/About'
function App() {
  return (
    <>
      <div id='overlay'></div>
      <header>
        <Navbar />
      </header>
   
      <main>
        <Intro/>
        <Skills/>
        <Projects/>
        <About/>
    
      </main>


    </>
  )

}

export default App
