import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import sliceExtention from "../../../public/images/sliceExtention.png";
import { BsArrowUpRight } from "react-icons/bs" 

const ExtensionAbout = () => {
    return (
        <>
            <section className='aboutExtension_wrap'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='aboutExtension_content_wrap'>
                                <div className="aboutExtension_content_title">
                                    <h4>About Product</h4>
                                    <h3>Slice wallet <br/>Extension</h3>
                                </div>
                                <article className='aboutExtension_content'>
                                    <p>Sliceledger Wallet Extension is a free, client-side interface helping you interact with Sliceledger Chain. Our easy-to-use, open-source platform allows you to generate wallets and so much more.You can create a new wallet, import an existing wallet, vote for Master nodes, and transfer/receive SLICE Token.</p>
                                    <a href='https://chrome.google.com/webstore/detail/slice/ngkboaddmfaodpbcmhnehklfbkpajbdp' target={'_blank'} className='btn' type='button'>Add Extension <BsArrowUpRight /></a>
                                </article>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <figure className='slice_about_img_wrap'>
                                <Image src={sliceExtention.src} alt="slice About" />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ExtensionAbout