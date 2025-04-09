import Navbar from "./components/Navbar"
import hero from "@assets/images/carbon.jpg"

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <img src={hero} alt="hero" className="w-[100%] h-[100vh] object-cover"/>
      </div>
    </div>
  )
}

export default App