import React from 'react'
import { Row, Container, Col, Image } from 'react-bootstrap'
import SectionImg from '../../public/images/landing/blockchain-02.png'
// import Image from 'next/image'
export default function Section2() {
    return (
        <>
            <section className='section2'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='content_side_wrapper'>
                                <div className='content'>
                                    <h2>Enterprise Blockchain</h2>
                                    <p>A permissioned blockchain known as a "enterprise blockchain" can be used to scale up commercial procedures like tracking supplies or settling international payments.</p>

                                    <h4>How is an enterprise blockchain different from other types?</h4>
                                    <p>A vast majority of enterprise blockchains are "permissioned blockchains," meaning companies have direct control over them. For instance, they can block transactions that do not comply with their rules, or if law enforcement asks them to do so.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='image_side'>
                                <Image src={SectionImg.src} alt="blockchain" fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
