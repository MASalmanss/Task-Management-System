import './App.css'
import {HomeComponent} from "./home/HomeComponent.jsx";
import {Navbar} from "./scaffold/Navbar.jsx";
import {Footer} from "./scaffold/Footer.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <HomeComponent/>
        <Footer/>
    </>
  )
}

export default App
