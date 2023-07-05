import React from 'react'
import { Row, Container, Col, Image } from 'react-bootstrap'
import SiteImg from '../../public/images/landing/site_name.png'

export default function SiteName() {
    return (
        <>
            <section className='siteName_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='image_wrapper'>
                                <Image src={SiteImg.src} fluid alt="brand-image"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
