import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Services from "./pages/Services"
import Bookings from "./sections/Bookings"
import Footer from "./sections/Footer"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/service" element={<Services />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Bookings />
      <Footer />
    </div>
  )
}

export default App
