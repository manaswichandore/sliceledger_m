import Head from 'next/head';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
export default function roadmap() {
    const [render, setrender] = React.useState(false)

    const settings = {
        accessibility: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            setrender(!render)
            // console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            // console.log("after change", currentSlide);
        }
    }
    return (
        <>
        <Head>
            <title>RoadMap - Slice Ledger Blockchain Protocol</title>
            <meta name='description' content='Roadmap- This roadmap has the comprehensive plan of Slice Ledger from testnet to token launch.'/>
        </Head>
            <section className='roadMap'>
                <div className='top_head'>
                    <Container className='head_container'>
                        <Row>
                            <Col lg={12}>
                                <div className='head'>
                                    <h2>RoadMap</h2>
                                </div>
                            </Col>
                        </Row>
                        {/* <Row>
                        <Col lg={12}>
                            <div className='roadMap_slider'>
                                <Slider {...settings} className="custom_verti_slider">
                                    <div className='roadMap_inner_section'>
                                        <Container>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className='phase_wrapper'>
                                                        <div className='phase_1'>
                                                            <h5>Q1 2023 - Q3 2023</h5>
                                                            <div className="content_box">
                                                                <h4>Testnet Date</h4>
                                                                <ul>
                                                                    <li>Testnet (Alpha)</li>
                                                                    <li>Mainnet (Alpha)</li>
                                                                    <li>Testnet (Alpha)</li>
                                                                    <li>Testnet (Alpha)</li>
                                                                    <li>Mainnet (Alpha)</li>
                                                                    <li>Mainnet (Alpha)</li>
                                                                    <li>Mainnet (Alpha)</li>
                                                                    <li>Mainnet (Alpha)</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="bar">
                                                            <div className='main_line'>.</div>
                                                        </div>
                                                        <div className="date_box">
                                                            <h5>26 July 2022</h5>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    <div>
                                        <div className='list_divs'>
                                            <h4>AI Empowered</h4>
                                            <p>Infosense has led the AI innovation curve and is still at the forefront of technology.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='list_divs' >
                                            <h4>Technical Expertise</h4>
                                            <p>With our strong technical skills and knowledge of artificial intelligence, you can eliminate the talent gap for your project</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='list_divs' >
                                            <h4>AI-focused Process</h4>
                                            <p>By concentrating on the final result from the beginning, our project development approach guarantees the success of your AI-powered product.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='list_divs' >
                                            <h4>Support</h4>
                                            <p>We focus on customer satisfaction. We will provide you with 24*7 support from the beginning till the end of the project.</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row> */}
                    </Container>
                </div>
                {/* <Container>
                    <Row>
                        <Col lg={12}>
                            
                        </Col>
                    </Row>
                </Container> */}
                <div className='roadMap_inner_section'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='phase_wrapper'>
                                    <div className='phase_1'>
                                        <h5>Q1 2023 - Q3 2023</h5>
                                        <div className="content_box">
                                            <h4>Testnet Date</h4>
                                            <ul>
                                                <li>Testnet (Alpha)</li>
                                                <li>Mainnet (Alpha)</li>
                                                <li>Consensus Protocol</li>
                                                <li>Mainnet upgrade</li>
                                                <li>Testnet upgrade</li>
                                                <li>Application Programming Interface</li>
                                                <li>Software Development Toolkit</li>
                                                <li>Mainnet Validator Onboarding</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className='main_line'>.</div>
                                    </div>
                                    <div className="date_box">
                                        <h5>26 July 2022</h5>
                                    </div>
                                </div>
                                <div className='phase_wrapper'>
                                    <div className="date_box">
                                        <h5>26 July 2022</h5>
                                    </div>
                                    <div className="bar">
                                        <div className='main_line'>.</div>
                                    </div>
                                    <div className='phase_1'>
                                        <h5>Q4 2023 - Q1 2024</h5>
                                        <div className="content_box">
                                            <h4>Testnet Date</h4>
                                            <ul>
                                                <li>Interoperability</li>
                                                <li>Governance System</li>
                                                <li>Cross chain integration Application</li>
                                                <li>Programming Interface</li>
                                                <li>SliceLedger Mainnet Upgrade</li>
                                                <li>SliceLedger Documentation Release</li>
                                                <li>Cross Chain Sustainability Software Development Toolkit</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* ========================= Mobile Device =============================================== */}
                <div className='mobile_roadMap'>
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                                <div className='phase_wrapper'>
                                    <div className="bar">
                                        <div className='main_line'>.</div>
                                    </div>
                                    <div className='phase_1'>
                                        <h5>Q1 2023 - Q3 2023</h5>
                                        <div className="content_box">
                                            <h5>26 July 2022</h5>
                                            <h4>Testnet Date</h4>
                                            <ul>
                                                <li>Testnet (Alpha)</li>
                                                <li>Mainnet (Alpha)</li>
                                                <li>Consensus Protocol</li>
                                                <li>Mainnet upgrade</li>
                                                <li>Testnet upgrade</li>
                                                <li>Application Programming Interface</li>
                                                <li>Software Development Toolkit</li>
                                                <li>Mainnet Validator Onboarding</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <div className="date_box">
                                        <h5>26 July 2022</h5>
                                    </div> */}
                                </div>
                                <div className='phase_wrapper'>
                                    <div className="bar">
                                        <div className='main_line'>.</div>
                                    </div>
                                    <div className='phase_1'>
                                        <h5>Q4 2023 - Q1 2024</h5>
                                        <div className="content_box">
                                            <h5>26 July 2022</h5>
                                            <h4>Testnet Date</h4>
                                            <ul>
                                                <li>Interoperability</li>
                                                <li>Governance System</li>
                                                <li>Cross chain integration Application</li>
                                                <li>Programming Interface</li>
                                                <li>SliceLedger Mainnet Upgrade</li>
                                                <li>SliceLedger Documentation Release</li>
                                                <li>Cross Chain Sustainability Software Development Toolkit</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
