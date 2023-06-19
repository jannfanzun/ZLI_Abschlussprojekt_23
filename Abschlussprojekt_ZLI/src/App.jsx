import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components/components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative">
        <Tech />
        <StarsCanvas />
        </div>
        <Experience />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
