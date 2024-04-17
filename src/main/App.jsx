import './App.css'
import { Navbar } from '../navbar/Navbar.jsx'
import { MainPage } from '../mainPage/MainPage.jsx'
import { Hero } from '../hero/Hero.jsx'
import { Footer } from '../footer/Footer.jsx'

export const App = () => {
  return (
      <div className="app">
        <div className="left">     
          < Hero />     
          < Navbar />
          < Footer />
        </div>
        <div className="right">
          < MainPage />
        </div>
      </div>
  )
}

export default App
