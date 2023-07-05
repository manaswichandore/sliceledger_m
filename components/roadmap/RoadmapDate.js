import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
const RoadmapDate = () => {
    return (
        <>
            <section className='roadmapDate_wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className="roadmap_date">
                                <h3>Testnet Date</h3>
                                <p>26th January, 2023</p>
                                <p>STAGE 1</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className="roadmap_date">
                                <h3>Token Launch</h3>
                                <p>15th August, 2023</p>
                                <p>STAGE 2</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='roadmapDate_line'></div>
                </Container>
            </section>
        </>
    )
}

export default RoadmapDate