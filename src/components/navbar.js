import React from 'react'
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll'


const Navbar = () => {
  return (
    <>
      <header class="header_section fixed-top">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <Link class="navbar-brand" to='/'>
              <span>
                Timeup
              </span>
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link" to='/'>Home </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/watches'>Watches</Link>
                </li>
                <li class="nav-item" style={{ cursor: 'pointer' }}>
                  <Scroll to='footer' class="nav-link">Contact Us</Scroll>
                </li>
              </ul>
              <div class="user_option-box">
                <Link to='/cart'><i class="fa fa-cart-plus" aria-hidden="true"></i><span class="badge badge-sm bg-secondary bg-warning text-dark rounded-pill">4</span>
                </Link>
                <a href="/">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
                <a href="/">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

    </>
  )
}

export default Navbar