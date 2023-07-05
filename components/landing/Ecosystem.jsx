import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaQuoteLeft } from 'react-icons/fa'
export default function Ecosystem() {
    return (
        <>
            <section className='ecosystem'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <FaQuoteLeft />
                                <h2>Join the fastest-growing ecosystem in crypto across DeFi, Web3, and NFTs</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='content_row'>
                        <Col lg={6} md={12} sm={12}>
                            <div className='box_wrapper one'>
                                <div className='box'>
                                    <h6>Sliceledger Community</h6>
                                    <p>It's a vibrant global community powered by SliceledgerChain. Sliceledger empowers community members to work together and create valuable SliceledgerHub.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className='box_wrapper two'>
                                <div className='box'>
                                    <h6>Become a Validator</h6>
                                    <p>Validators form the Backbone of SliceLedger network. By processing transactions and participating in consensus, apiece validator helps make it great SliceLedger blockchain network globally.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className='box_wrapper three'>
                                <div className='box'>
                                    <h6>Learn about Sliceledger</h6>
                                    <p>Learn more about SliceledgerChain and see what makes it great.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className='box_wrapper four'>
                                <div className='box'>
                                    <h6>Developer Resources</h6>
                                    <p>Welcome to the most exciting and innovative platform This documentation provides Developer Resources details on the SliceLedger technology.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
