import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import sliceWallet from "../../../public/images/sliceWallet.png";
import { BsArrowUpRight } from "react-icons/bs"
import { FaGooglePlay } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
const AboutSlice = () => {
    return (
        <>
            <section className='aboutExtension_wrap'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='aboutExtension_content_wrap'>
                                <div className="aboutExtension_content_title">
                                    <h4>About Product</h4>
                                    <h3>Slice wallet</h3>
                                </div>
                                <article className='aboutExtension_content'>
                                    <p>Sliceledger Wallet is a free, client-side interface helping you interact with Sliceledger Chain. Our easy-to-use, open-source platform allows you to generate wallets and so much more. You can create a new wallet, import an existing wallet, vote for Master nodes, and transfer/receive SLICE Token.</p>
                                    <div className='download_div'>
                                        <a href='https://www.apple.com/in/app-store/' target={'_blank'}>
                                            <div className='icon_div'>
                                                <BsApple />
                                            </div>
                                            <div className='content_div'>
                                                <div className='tag'>Download on the</div>
                                                <div className='text'>App store</div>
                                            </div>
                                        </a>
                                        <a href='https://play.google.com/store/apps/details?id=com.sliceledger.slice&hl=en&gl=US' target={'_blank'}>
                                            <div className='icon_div'>
                                            <FaGooglePlay />
                                            </div>
                                            <div className='content_div'>
                                                <div className='tag'>Download on the</div>
                                                <div className='text'>Play store</div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <figure className='slice_about_img_wrap'>
                                <Image src={sliceWallet.src} alt="slice About" />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutSlice