import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { BsArrowDown } from 'react-icons/bs'
import Img from '../../public/images/Slice-white-paper-graphic.png'
export default function Section1() {
    return (
        <>
            <section className="research_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head">
                                <h2>Whitepaper</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='content_section'>
                    <Container>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <div className='image_wrapper'>
                                    <Image src={Img.src} fluid alt='whitepaper' />
                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div className='content_wrapper'>
                                    <div className='content'>
                                        <p>This paper proposes a new blockchain architecture based on Proof of Stake and Proof of Play. SliceLedger Chain vision of lowering the barrier and enabling established businesses with blockchain technology to create value and solve real-world economic problems.</p>
                                        <a href='https://sliceledger.io/sliceledger_whitepaper.pdf' download target="_blank" className='download_btn'>Download <BsArrowDown /></a>
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
