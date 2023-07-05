import React from 'react'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import { ImLocation } from 'react-icons/im'
export default function HeroSection() {

    function explorer() {
        window.open("https://slicescan.io/", '_blank',)
    }

    function document() {
        window.open("https://slice-ledger.gitbook.io/sliceledger/", '_blank',)
    }
    const settings = {
        accessibility: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 8000,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        beforeChange: function (currentSlide, nextSlide) {
            // setrender(!render)
            // console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            // console.log("after change", currentSlide);
        }
    }
    function meeting() {
        window.open("https://calendly.com/business-meet-dubai/30min?back=1&month=2023-06", '_blank',)
    }
    function knowMore() {
        window.open("https://sliceledger.io/event-du.html", '_blank',)
    }
    function schedulemeet() {
        window.open("https://calendly.com/business-meet-dubai/30min?back=1&month=2023-07", '_blank')
    }
    
    
    return (
        <>
            <Slider {...settings}>
                <div>
                    <section className='heroSection banner1'>
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>The Most Anticipated Blockchain Network</h1>
                                            <p>The world's first decentralized and permissionless ecosystem offers the Blockchain stream various opportunities and innovations, attracting developers, innovators, artists, businesses, and other stakeholders. Sliceledger offers a number of communities to join, develop, and grow.</p>
                                            <div className='action_btn_group'>
                                                <button onClick={explorer}>Explorer</button>
                                                <button onClick={document}>Document</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection dubai_event'>
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Meet the Team Sliceledger in Dubai</h1>
                                            <p>Don't miss out on the opportunity to connect with top blockchain experts in Dubai. Schedule a meeting today to brainstorm innovative solutions together with the core team of Sliceledger.</p>
                                            <div className='action_btn_group'>
                                                <button onClick={knowMore}>Know more</button>
                                                <button onClick={meeting}>Schedule a meeting</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Dubai</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>5th Jun to 15th Jun 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection optimism'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by optimistic rollups</div>
                                            <h1>Pioneering the Future of Blockchain with Optimistic Rollups Brilliance</h1>
                                            <p>Introducing SliceLedger, the trailblazer in blockchain technology. With our groundbreaking Optimistic Rollups innovation, we are revolutionizing industries, unleashing unparalleled efficiency, scalability, and security. Join us as we shape the future of blockchain, empowering businesses and individuals to thrive in a decentralized world.</p>
                                            <div className='action_btn_group'>
                                                <button >Coming soon</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection gitex_global'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Gitex Global</h1>
                                            <p>Join us at GITEX 2023 to ignite your blockchain journey. Schedule a meeting to identify how Sliceledger's integration into your business can accelerate growth.</p>
                                            <div className='action_btn_group'>
                                                <Link href="/event-gitex.html" target='_blank'>
                                                    <button >Know more</button>
                                                </Link>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>16th october to 20th October 2023 </strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection internatinalcrypto'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Internatinal Crypto, Blockchain & Metaverse Expo</h1>
                                            <p>Embrace the future of blockchain with Sliceledger. Join us at ICBM 2023 in Dubai to learn about its benefits and integration opportunities.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>07th September to 08th september 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection global_tech_innovation'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchains</div>
                                            <h1>Global Tech Innovation Summit</h1>
                                            <p>Join us at the Global Tech Innovation Summit 2023. Schedule a meeting to explore the blockchain future with Sliceledger.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>26th September to 27th september 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection crypto_expo_dubai'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Crypto Expo Dubai 2023</h1>
                                            <p>Discover the next frontier of blockchain. Interact with the team of Sliceledger at Crypto Expo Dubai 2023. Schedule a meeting now!</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>20th September to 21st september 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection world_metaverse_show'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>World Metaverse Show</h1>
                                            <p>Australia, Are you ready to explore new tech innovations? Embrace future-ready technology solutions to bring revolution to your industry.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet} >Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>October 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection global_inovation'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Future Innovation Summit</h1>
                                            <p>Secure your meeting with team Sliceledger at Future Innovation Summit 2023. Seize the opportunity and know more about Sliceledger Blockchain Protocol.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>10th October to 11th October 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection forex_expo'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>The Forex Expo</h1>
                                            <p>Schedule a meeting with the team of Sliceledger at the Forex Expo 2023 in Dubai. Learn how you can leverage Sliceledger for innovative business solutions.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet} >Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>26th September to 27th September 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection vibe_martech_fest'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Vibe Martech Fest 2023</h1>
                                            <p>Meet with the team Sliceledger to see why this protocol is the best choice for blockchain development projects.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>12th September  to 14th September 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection fintech_surge'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Fintech Surge 2023/ Northstar</h1>
                                            <p>Shape the future of Blockchain with Sliceledger. Meet us at Fintech Surge/Northstar 2023 to learn more about this transformative blockchain protocol.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Dubai, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>15h October to 18th october 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection techspo_dubai'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>TECHSPO Dubai 2023</h1>
                                            <p>Connect with team Sliceledger at Techspo Dubai to explore this cutting-edge blockchain protocol. Schedule a meeting now to stay ahead of the curve.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet} >Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>10th October to 11th October 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection blockchain_economy'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>Blockchain Economy Dubai Summit</h1>
                                            <p>Australia, Are you ready to explore new tech innovations? Embrace future-ready technology solutions to bring revolution to your industry.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Duabi, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>04th october to 05 october 2023</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <div>
                    <section className='heroSection wolrd_blockchain_summit'>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <div className='content_area_wrapper'>
                                        <div className='content_container'>
                                            <div className='tag_line'>Powered by blockchain</div>
                                            <h1>World Blockchain Summit</h1>
                                            <p>Sliceledger at World Blockchain Summit 2023-Join us at WBS 2023 to discover how Sliceledger revolutionizes your industry.</p>
                                            <div className='action_btn_group'>
                                                <button >Know more</button>
                                                <button onClick={schedulemeet}>Schedule Now</button>
                                            </div>
                                            <div className='my-4'>
                                                <div className='mb-2'>
                                                    <ImLocation className='text-light me-3' />
                                                    <strong className='text-light'>Dubai, UAE</strong>
                                                </div>
                                                <div className='d-flex'>
                                                    <img className='me-3' src="/images/calender.svg" alt="calender-icon" />
                                                    <strong className='text-light'>01st November to 02nd November 2023 </strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}></Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </Slider>
        </>
    )
}
