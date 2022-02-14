import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AllWatches from './components/pages/all-watches';
import Watch from './components/pages/watch'
import Cart from './components/pages/cart';
import Homepage from './components/pages/homepage';
import ScrollToTop from "react-scroll-to-top";
import Scroll from './components/scroll-to-top'

const App = () => {
  return (
    <Router>
      <Scroll>
        <ScrollToTop smooth />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/watches" element={<AllWatches />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </Scroll>
    </Router>
  )
}




export default App;
