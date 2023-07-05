import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import SectionImg from '../../public/images/landing/blockchain-03.png'
// import Image from 'next/image'

export default function Section3() {
    return (
        <>
            <section className='section3'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='image_side'>
                                <Image src={SectionImg.src} alt="blockchain" fluid/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='content_side_wrapper'>
                                <div className='content'>
                                    <h4>Some of the main characteristics of enterprise blockchains include:</h4>
                                    <ul>
                                        <li><b>Accountability:</b> Each node in the network – which each holds a copy of the transaction history – is known and can be held accountable for its actions. For example, often enterprise blockchains are shared by a few companies or financial entities in a cooperative format.</li>
                                        <li><b>Permissioned:</b> Only users who have permission can use the blockchain. The network owner(s) can choose who's allowed to use it and who's not. </li>    
                                        <li><b>Mutable:</b>  If all entities managing the network agree, the data can be changed.</li>
                                        <li><b>Scalability:</b> Because enterprise blockchains are typically not as decentralized as Bitcoin, they can easily support more transactions at the base layer.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
