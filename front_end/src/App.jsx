import {
  Navbar,
  Footer,
  Product,
  FAQ,
  Contact,
  Hero,
  About,
} from "./components";

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
