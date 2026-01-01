import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Footer } from "@/layout/Footer";
// import { Testimonials } from "@/sections/Testimonials";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        {/* <Testimonials />  */}
      </main>
      <Footer />
    </div>
  )
}

export default App;
