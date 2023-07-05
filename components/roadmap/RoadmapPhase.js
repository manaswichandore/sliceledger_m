import React from 'react';
import { Container, Row, Col } from "react-bootstrap"

const RoadmapPhase = () => {
    return (
        <section className='roadmapPhase_main_wrap'>
            <Container>
                <Row>
                    <Col sm={6} md={6} lg={6} xl={6}>
                        <div className="roadmapPhase_wrap">
                            <div className='roadmapPhase_title'>
                                <h4>Q1 2023 - Q3 2023</h4>
                            </div>
                            <div className='roadmapPhase_list'>
                                <ul>
                                    <li>Testnet (Alpha)</li>
                                    <li>Mainnet (Alpha)</li>
                                    <li>Consensus Protocol</li>
                                    <li>Mainnet upgrade</li>
                                    <li>Testnet upgrade</li>
                                    <li>Application Programming Interface</li>
                                    {/* <li>Multi-languages</li> */}
                                    <li>Software Development Toolkit</li>
                                    <li>Mainnet Validator Onboarding</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6}>
                        <div className="roadmapPhase_wrap">
                            <div className='roadmapPhase_title'>
                                <h4>Q4 2023 - Q1 2024</h4>
                            </div>
                            <div className='roadmapPhase_list'>
                                <ul>
                                    <li>Interoperability</li>
                                    <li>Governance System</li>
                                    <li>Cross chain integration Application</li>
                                    <li>Programming Interface</li>
                                    {/* <li>Data Storage upgrade</li> */}
                                    <li>SliceLedger Mainnet Upgrade</li>
                                    <li>SliceLedger Documentation Release</li>
                                    <li>Cross Chain Sustainability Software Development Toolkit</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default RoadmapPhase