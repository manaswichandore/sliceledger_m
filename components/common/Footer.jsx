import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Link from 'next/link';
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaTelegramPlane , FaFacebookF, FaLinkedinIn, FaDiscord } from "react-icons/fa"
import { MdDoubleArrow } from 'react-icons/md'

import axios from "axios";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillGithub } from 'react-icons/ai'
import {SiMedium} from 'react-icons/si'
export default function Footer() {
    // ========================= Scroll to Top ===================================
    const [showTopBtn, setShowTopBtn] = useState(false)
    const handleTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, [])
    // ========================= Scroll to Top ===================================

    // ================================= Newsletter ================================
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [btnLoader, setBtnLoader] = useState(false)
    const onSubmit = (data) => {
        setBtnLoader(true)
        const bodyFormData = {
            email: data.email,
        }
        axios({
            method: "post",
            url: "https://sliceledger.io/backend/api/emailSubscribe",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                reset();
                setBtnLoader(false)
                // console.log(response);
                toast.success("Subscribed Successfully!!", {
                    containerId: "sa"
                });
            })
            .catch(function (response) {
                console.log(response);
            });
    }
    // ================================= Newsletter ================================


    return (
        <>
            <footer className='app_footer'>
                <Container>
                    <Row>
                        <Col sm={6} md={3} lg={6} xl={6}>
                            <div className='block_wrapper'>
                                <div className='footer_block'>
                                    <h4 className='h4_title'>Direct Links</h4>
                                    <ul>
                                        <li><Link href="/blog" >Blog</Link></li>
                                        <li><Link href="whitepaper">Whitepaper</Link></li>
                                        <li><Link href="slice_wallet">Slice Wallet</Link></li>
                                        <li><Link href="slice_extension">Slice Extension</Link></li>
                                        <li><Link href="privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="terms-and-conditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        {/* <Col sm={6} md={3} lg={3} xl={3}>
                            <div className='block_wrapper'>
                                <div className='footer_block'>
                                    <h4 className='h4_title'>Direct Links</h4>
                                    <ul>
                                        <li><Link href="slice:;" disabled>Enterprise</Link></li>
                                        <li><Link href="slice:;" disabled>Diamond Industry</Link></li>
                                        <li><Link href="slice:;" disabled>Oil & Gas Industry</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col> */}
                        <Col lg={6} md={12}>
                            <div className='news_letter'>
                                <h4>Newsletter</h4>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    {errors.email && (<p className='text-danger' style={{
                                        margin: '1em',
                                        marginBottom: '-15px'
                                    }}>{errors.email.message}</p>)}
                                    <div className="subscribe_div">
                                        <input type="text" placeholder='Enter your email' {...register("email", {
                                            required: 'Email is Required',
                                            pattern: {
                                                value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/ym,
                                                message: "Invalid Email Address"
                                            }
                                        })} />
                                        <button>Subscribe</button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                    <section className='copyright_section'>
                        <div className="footer_social_links_wrap">
                            <div className='footer_social_links'>
                                <a href="https://github.com/sliceledger-blockchain" target={"_blank"}>
                                    <AiFillGithub />
                                </a>
                            </div>
                            <div className='footer_social_links'>
                                <a href="https://medium.com/@Slice_Ledger" target={"_blank"}>
                                    <SiMedium />
                                </a>
                            </div>
                            <div className='footer_social_links'>
                                <a href="https://t.me/sliceledger" target={"_blank"}>
                                    <FaTelegramPlane />
                                </a>
                            </div>
                            <div className='footer_social_links'>
                                <a href="https://www.facebook.com/SliceLedger" target={"_blank"}>
                                    <FaFacebookF />
                                </a>
                            </div>
                            <div className='footer_social_links'>
                                <a href="https://twitter.com/LedgerSlice" target={"_blank"}>
                                    <BsTwitter />
                                </a>
                            </div>
                            <div className='footer_social_links'>
                                <a href="https://www.instagram.com/slice.ledger/" target={"_blank"}>
                                    <BsInstagram />
                                </a>
                            </div>
                            <div className='footer_social_links'>
                                <a href="https://www.linkedin.com/company/slice-ledger" target={"_blank"}>
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                        <div className='text'>
                            Copyright©2022 | All rights reserved | Sliceledger
                        </div>
                    </section>
                </Container>

                <div className={`scroll_top ${showTopBtn ? '' : 'd-none'}`}>
                    <button onClick={handleTop}><MdDoubleArrow /></button>
                </div>
            </footer>

            <ToastContainer
                enableMultiContainer
                containerId={"sa"}
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                limit={1}
            />
        </>
    )
}
