import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import IconImg1 from '../../public/images/landing/icon1.png'
import IconImg2 from '../../public/images/landing/icon2.png'
import IconImg3 from '../../public/images/landing/icon3.png'
import IconImg4 from '../../public/images/landing/icon4.png'
import IconImg5 from '../../public/images/landing/icon5.png'
import IconImg6 from '../../public/images/landing/icon6.png'

export default function BoxSection() {
    return (
        <>
            <section className='boxSection'>
                <Container>
                    <Row>
                        <div className='heading_area'>
                            <h2>SLICELEDGER Features</h2>
                            <p>SliceLedger Chain is built to enhance the on-chain decentralized experience and scale up the decentralized economy</p>
                        </div>
                    </Row>
                    <Row className='row_wrap'>
                        <Col lg={4} md={6} sm={12} className="col_wrap">
                            <div className='outer_wrap'>
                                <Image className='icon' src={IconImg1.src} fluid alt='icons'/>
                                <div className='box'>
                                    <Image className='blur_img' src={IconImg1.src} fluid alt='icons'/>
                                    <h4>ETH COMPATIBILITY</h4>
                                    <p>Industry dominance, established tech stack, tools, languages, standards, enterprise adoption</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="col_wrap">
                            <div className='outer_wrap'>
                                <Image className='icon' src={IconImg2.src} fluid alt='icons'/>
                                <div className='box'>
                                    <Image className='blur_img' src={IconImg2.src} fluid alt='icons'/>
                                    <h4>SCALABILITY</h4>
                                    <p>Dedicated blockchains, scalable consensus algorithms, custom Wasm execution environments.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="col_wrap">
                            <div className='outer_wrap'>
                                <Image className='icon' src={IconImg3.src} fluid alt='icons'/>
                                <div className='box'>
                                    <Image className='blur_img' src={IconImg3.src} fluid alt='icons'/>
                                    <h4>SECURITY</h4>
                                    <p>Modular ''security as a service'', provided either by Ethereum or by a pool of professional validators</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="col_wrap">
                            <div className='outer_wrap'>
                                <Image className='icon' src={IconImg4.src} fluid alt='icons'/>
                                <div className='box'>
                                    <Image className='blur_img' src={IconImg4.src} fluid alt='icons'/>
                                    <h4>DEVELOPER EXPERIENCE</h4>
                                    <p>Equivalent to Ethereum, no protocol level knowledge required, no token deposits, fees or permissions</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="col_wrap">
                            <div className='outer_wrap'>
                                <Image className='icon' src={IconImg5.src} fluid alt='icons'/>
                                <div className='box'>
                                    <Image className='blur_img' src={IconImg5.src} fluid alt='icons'/>
                                    <h4>Blazingly Fast</h4>
                                    <p>Perform a transaction in no time with the network capable of processing as high as 100000 transactions per second.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="col_wrap">
                            <div className='outer_wrap'>
                                <Image className='icon' src={IconImg6.src} fluid alt='icons'/>
                                <div className='box'>
                                    <Image className='blur_img' src={IconImg6.src} fluid alt='icons'/>
                                    <h4>Lower Cost</h4>
                                    <p>The cost of a transaction is almost zero yet in superfast speed and inexpensive deployment of smart contracts with developer bounty programs.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
