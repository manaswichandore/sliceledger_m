import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const ExtensionGoals = () => {
    return (
        <>
            <section className='our_goals'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='content'>
                                <h2>Our Goals</h2>
                                <p>We aim to offer a fluid user experience to reduce the complexity of blockchain-based operations and transactions to enable users of all ages to access the Slice platform and engage with the various features it has to offer.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ExtensionGoals