import React, { Fragment } from 'react'
import Navbar from "../navbar";
import Footer from "../footer";
import Hero from './hero';
import AllWatches from './all-watches';


const Homepage = () => {
  return (
    <Fragment>
      <Navbar/>
       <Hero/>
       <AllWatches/>
      <Footer />
    </Fragment>
  )
}

export default Homepage
