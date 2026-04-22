import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Fitness from './components/Fitness';
import Hollywood from './components/Hollywood';
import Food from './components/Food';
import Technology from './components/Technology';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </>
  );
};

export default App;