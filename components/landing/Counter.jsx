import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery"
const Counter = () => {
  useEffect(() => {
    $('.counter').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          console.log("now", now);
          $(this).text(now.toFixed(5));
        }
      });
    });
  }, [])
  return (
    <>
      <div className="counter_wrap">
        <Container>
          {/* <section className="wow fadeIn animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated border_box" data-wow-duration="300ms" style={{ visibility: "visible", animationDuration: "300ms", animationName: "fadeInUp" }}>
                  <div className='counter_data'>
                    <span id="anim-number-pizza" className="counter-number"></span>
                    <span className="timer counter alt-font appear" data-to="0.000018" data-speed="7000">0.000018</span>
                    <p className="counter-title">Min. cost per transaction</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated border_box" data-wow-duration="600ms" style={{ visibility: "visible", animationDuration: "600ms", animationName: "fadeInUp" }}>
                  <div className='counter_data'>
                    <span className="timer counter alt-font appear" data-to="1.5" data-speed="7000">1.5</span><span className='counter_size'>S</span>
                    <span className="counter-title">Block Time</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated border_box" data-wow-duration="900ms" style={{ visibility: "visible", animationDuration: "900ms", animationName: "fadeInUp" }}>
                  <div className='counter_data'>
                    <span className="timer counter alt-font appear" data-to="620" data-speed="7000">620</span><span className='counter_size'>B</span>
                    <span className="counter-title">Block Size</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated border_box" data-wow-duration="1200ms" style={{ visibility: "visible", animationDuration: "1200ms", animationName: "fadeInUp" }}>
                  <div className='counter_data'>
                    <span className="timer counter alt-font appear" data-to="1.5" data-speed="7000">1.5</span><span className='counter_size'>S</span>
                    <span className="counter-title">Transaction Time</span>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <Row>
            <Col sm={6} md={3} lg={3} xl={3}>
              <div className="border_box">
                <div className='counter_data'>
                  <h3 className="h3_title">0.000018</h3>
                  <p>Min. cost per transaction</p>
                </div>
              </div>
            </Col>
            <Col sm={6} md={3} lg={3} xl={3}>
              <div className="border_box">
                <div className='counter_data'>
                  <h3 className="h3_title">1.5<span className='counter_size'>S</span></h3>
                  <p>Block Time</p>
                </div>
              </div>
            </Col>
            <Col sm={6} md={3} lg={3} xl={3}>
              <div className="border_box">
                <div className='counter_data'>
                  <h3 className="h3_title">620<span className='counter_size'>B</span></h3>
                  <p>Block Size</p>
                </div>
              </div>
            </Col>
            <Col sm={6} md={3} lg={3} xl={3}>
              <div className="border_box">
                <div className='counter_data'>
                  <h3 className="h3_title">1.5<span className='counter_size'>S</span></h3>
                  <p>Transaction Time</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Counter