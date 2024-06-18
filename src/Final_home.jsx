import "./App.css";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Home } from "./components/Home";
import { MyFooter } from "./components/MyFooter";
import { Navbar } from "./components/Navbar";
//import { Newsletter } from "./components/Newsletter";
//import { Products } from "./components/Products";
import { Services } from "./components/Services";

function Final() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      
      <Blog />
      
      <MyFooter />
    </>
  );
}

export default Final;
