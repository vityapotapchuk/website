import './App.css'
import Navbar from './Components/Header/Navbar'
import Main from './Components/Main/Main'
import ImageGallery from './Components/Projects/ImageGallery'
import Slider from './Components/Slider/Slider'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
import useForm from "./hooks/useForm.js";


function App() {
    return (
        <>
            <Navbar/>
            <Main />
            <Slider />
            <ImageGallery />
            <About />
            <Services />
            <Contacts />
            <Footer />
        </>
    )
}

export default App;