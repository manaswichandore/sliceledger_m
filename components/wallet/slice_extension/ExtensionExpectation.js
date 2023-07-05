import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ExtensionExpectation = () => {
    return (
        <>

            <section className='expectation'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="heading">
                                <h2>Expectations from Slice Wallet Extension</h2>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="content">
                                <h4>Seamless Trading of Assets</h4>
                                <p>Our Wallet Extension allows users to trade their digital assets effortlessly.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="content">
                                <h4>Single Platform for all assets</h4>
                                <p>There is no need to explore multiple platforms because our platform is designed for all kinds of digital assets.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="content">
                                <h4>Private Key will always be present on the device</h4>
                                <p>We guarantee that no one will have access to your private key despite this being a wallet extension platform.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ExtensionExpectation