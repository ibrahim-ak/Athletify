import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Components/Chat';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
