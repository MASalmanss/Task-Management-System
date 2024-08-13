import './App.css'
import {HomeComponent} from "./home/HomeComponent.jsx";
import {Navbar} from "./scaffold/Navbar.jsx";
import {Footer} from "./scaffold/Footer.jsx";
import {TasksList} from "./rooms/TasksList.jsx";
import {Rooms} from "./rooms/Rooms.jsx";

function App() {

  return (
    <>
        <Navbar/>
        {
            //<HomeComponent/>
        }
        <Rooms/>
        <Footer/>
    </>
  )
}

export default App
