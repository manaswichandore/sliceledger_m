import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

const ExtensionBenefits = () => {
  return (
    <>
        <section className='benefits'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="heading">
                                <h2>The wonderful benefits that the Slice Wallet Extension delivers</h2>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="content">
                                <p>It is open-source blockchain software, and developers are constantly trying to improve it.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="content">
                                <p>In addition to being straightforward, the user interface also demonstrates excellent intuitive features that can help consumers maintain a seamless and uninterrupted cryptocurrency experience.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="content">
                                <p>The platform provides dependable, 24/7 customer support that consistently works.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    </>
  )
}

export default ExtensionBenefits