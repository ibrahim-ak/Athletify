
// import House from './Components/House'
// import ButtonUsage from "./Components/ButtonUsage";
// import Details from "./Components/Details";
// import GetStarted from "./Components/GetStarted";


// import Hero from "./Components/Hero";
// import Navbar from "./Components/NavBar";
// import Footer from "./Components/Footer";
// import Services from "./Components/Services";
// import NewsSlider from "./Components/NewsSlider";
// import BasicCard from "./Components/BasicCard"; 
// import Divider from '@mui/material/Divider';
// import Chip from '@mui/joy/Chip';
// import CallToAction from "./Components/CallToAction";
// import ContactForm from "./Components/ContactForm";
// import AboutUs from "./Components/AboutUs";
// import NewsForm from "./Components/NewsForm";
// import { Routes, Route } from 'react-router-dom';
// import MainPage from './Components/MainPage';


// function App() {
//   return (

//     <>
// <div style={{ backgroundColor: "#E6F0FF"}}>

// <MainPage></MainPage>


// {/* <Navbar></Navbar>
// <Hero></Hero>
// <Divider>
//   <Chip variant="soft" color="neutral" size="xlrg">
//   Latest News
//   </Chip>
// </Divider>
// <NewsSlider></NewsSlider>
// <Divider></Divider>
// <AboutUs></AboutUs>
// <Divider>
//   <Chip variant="soft" color="neutral" size="xlrg">
//   Out Partners
//   </Chip>
// </Divider>
// <BasicCard/>
// <Divider>
//   </Divider>
// <CallToAction></CallToAction>
// <Divider>
//   <Chip variant="soft" color="neutral" size="xlrg">
//   Services
//   </Chip>
// </Divider>
// <Services></Services>
// <Divider>
// </Divider>
// <ContactForm></ContactForm>
// <Divider>
// </Divider> */}
// {/* <NewsForm></NewsForm> */}
// {/* <ButtonUsage></ButtonUsage>  */}
//  {/* <House></House> 
//  <Details></Details> */}
// {/* <GetStarted></GetStarted> */}
// {/* <Footer></Footer> */}


// </div>




//     </>


//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import NewsForm from './Components/NewsForm';

function App() {
  return (
    <Routes>
      {/* Route for the Main Page */}
      <Route path="/" element={<MainPage />} />

      {/* Route for the News Form */}
      <Route path="/add-news" element={<NewsForm />} />
    </Routes>
  );
}

export default App;
