import Frame1 from "./components/Frame1";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Hero from "./components/Hero";
import MobileFrame2 from "./components/MobileFrame2";
import { Navbar } from "./components/Navbar";
import DesktopFrame2 from "./components/DesktopFrame2";
import Frame5 from "./components/Frame5";
import Frame6 from "./components/Frame6";
import MobileFrame6 from "./components/MobileFrame6";
import Frame7 from "./components/Frame7";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Frame1 />
      <DesktopFrame2 />
      <MobileFrame2/>
      <Frame3 />
      <Frame4/>
      <Frame5/>
      <Frame6/>
      <MobileFrame6/>
      <Frame7/>
      <Footer/>
      <MobileFooter/>
    </>
  );
}

export default App;
