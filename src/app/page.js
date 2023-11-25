import Footer from "@/Components/Footer/Footer";
import HomePage from "@/Components/HomePage/HomePage";
import Navber from "@/Components/NavBer/Navber";
import './globals.css'


export default function Home() {
  return (
    <main>
      <Navber/>
      <HomePage/>
      <Footer/>
    </main>
  )
}
