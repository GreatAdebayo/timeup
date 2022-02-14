import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'
import { useLocation, Link } from 'react-router-dom'

const AllWatches = () => {
  let location = useLocation()
  return (
    <>
      <Navbar />
      <section class="shop_section layout_padding" id="allprod">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Our Watches
            </h2>
          </div>
          <div class="row">
            <div class="col-sm-6 col-xl-3">
              <div class="box">
                  <div class="img-box">
                    <img src="assets/images/w1.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h6>
                      Smartwatch
                    </h6>
                    <h6>
                      Price:
                      <span>
                        $300
                      </span>
                    </h6>
                  </div>
                  <div class="new">
                    <span>
                      <i class="fa-duotone fa-plus"></i> Add to Cart
                    </span>
                  </div>
              </div>
            </div>
            <div class="col-sm-6 col-xl-3">
              <div class="box">
                <a href="">
                  <div class="img-box">
                    <img src="assets/images/w2.png" alt="" />
                  </div>
                  <div class="detail-box">
                   <Link to='/watch/2'>
                   <h6>
                      Smartwatch
                    </h6>
                   </Link>
                    <h6>
                      Price:
                      <span>
                        $125
                      </span>
                    </h6>
                  </div>
                  <div class="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-xl-3">
              <div class="box">
                <a href="">
                  <div class="img-box">
                    <img src="assets/images/w3.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h6>
                      Smartwatch
                    </h6>
                    <h6>
                      Price:
                      <span>
                        $110
                      </span>
                    </h6>
                  </div>
                  <div class="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-xl-3">
              <div class="box">
                <a href="">
                  <div class="img-box">
                    <img src="assets/images/w4.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h6>
                      Smartwatch
                    </h6>
                    <h6>
                      Price:
                      <span>
                        $145
                      </span>
                    </h6>
                  </div>
                  <div class="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-xl-3">
              <div class="box">
                <a href="">
                  <div class="img-box">
                    <img src="assets/images/w5.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h6>
                      Smartwatch
                    </h6>
                    <h6>
                      Price:
                      <span>
                        $195
                      </span>
                    </h6>
                  </div>
                  <div class="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6  col-xl-3">
              <div class="box">
                <a href="">
                  <div class="img-box">
                    <img src="assets/images/w6.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h6>
                      Smartwatch
                    </h6>
                    <h6>
                      Price:
                      <span>
                        $170
                      </span>
                    </h6>
                  </div>
                  <div class="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-xl-3">
              <div class="box">
                <a href="">
                  <div class="img-box">
                    <img src="assets/images/w1.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h6>
                      Smartwatch
                    </h6>
                    <h6>
                      Price:
                      <span>
                        $230
                      </span>
                    </h6>
                  </div>
                  <div class="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {location.pathname === '/' ? <div class="btn-box">
            <Link to="/watches">
              View All
            </Link>
          </div> : null}
        </div>
      </section>
      {location.pathname === '/watches' ? <Footer /> : null}
    </>

  )
}

export default AllWatches