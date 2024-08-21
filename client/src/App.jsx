

// import Companies from "./Components/Companies";
// import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Navbar from "./Components/NavBar";
// import Details from "./Components/Details";
// import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
// import House from './Components/House'
// import ButtonUsage from "./Components/ButtonUsage";
// import Services from "./Components2/Services";
import NewsSlider from "./Components/NewsSlider";
import BasicCard from "./Components/BasicCard"; // Adjust the import path as necessary
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';
import CallToAction from "./Components/CallToAction";
import ContactForm from "./Components/ContactForm";
import AboutUs from "./Components/AboutUs";








function App() {
  return (

    <>
<div style={{ backgroundColor: "#E6F0FF"}}>

<Navbar></Navbar>
<Hero></Hero>
<Divider>
  <Chip variant="soft" color="neutral" size="xlrg">
  Latest News
  </Chip>
</Divider>
<NewsSlider></NewsSlider>
<Divider></Divider>
<AboutUs></AboutUs>
<Divider>
  <Chip variant="soft" color="neutral" size="xlrg">
  Out Partners
  </Chip>
</Divider>
<BasicCard/>
<Divider>
  </Divider>
<CallToAction></CallToAction>
<Divider>
  <Chip variant="soft" color="neutral" size="xlrg">
  Services
  </Chip>
</Divider>
<Services></Services>
<Divider>
</Divider>
<ContactForm></ContactForm>
<Divider>
</Divider>

{/* <ButtonUsage></ButtonUsage>  */}
 {/* <House></House> 
 <Details></Details> */}
{/* <GetStarted></GetStarted> */}
<Footer></Footer>
</div>


{/* <Router>
      <div className="App">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </Router> */}

    </>
 


  );
}

export default App;
