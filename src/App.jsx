
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from '../src/components/About.jsx';
import Projects from './components/Projects.jsx'



export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <main>
      <img src="/gradient.png" className="absolute top-0 right-0 opacity-60 -z-10 " alt="img01" />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10">
      </div>

      <Header />
      <Hero />
      <About />
      <Projects />

    </main>

  )
}