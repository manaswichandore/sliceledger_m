import React, { useState } from 'react';
import { FiChevronRight } from "react-icons/fi";
import slice_logos from "../../public/images/logo_main.png"
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from "react-bootstrap"
import Link from 'next/link';
const IndexFooter = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [btnLoader, setBtnLoader] = useState(false)
    const onSubmit = (data) => { 
        setBtnLoader(true)
        const bodyFormData = {
            email: data.email1,
        }
        axios({
            method: "post",
            url: "https://sliceledger.io/backend/api/emailSubscribe",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(function (response) {
                reset();
                setBtnLoader(false)
                toast.success("Thank you for contact us");
            }).catch(function (response) {});
    }
    return (
        <>
            <section className='indexFooter_wrap'>
                <footer id="footer">
                    <div className="top_footer light_blue_dark_bg footer_new_bg pb-2" data-z-index="1" data-parallax="scroll" data-image-src="assest/website/images/footer_bg.png">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 res_md_mt_30 res_sm_mt_20">
                                    <div className="footer_logo mb-3 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                                        <a href="#home_section" className="page-scroll">
                                            <img className="logo_light outer_glow" alt="logo" src={slice_logos.src} />
                                        </a>
                                    </div>
                                    <div className="footer_desc home_footer">
                                        <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                                            SLICE token is specifically developed for Slice Ledger Blockchain Protocol. It is used for on-chain governance, transaction fee payment, and network security for the SliceLedger Chain.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 res_md_mt_30 res_sm_mt_20">
                                    <h4 className="footer_title border_title animation home_footer_title animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Quick
                                        Links</h4>
                                    <ul className="footer_link list_arrow home_footer_link">
                                        <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}><Link href="/"><FiChevronRight /> Home</Link>
                                        </li>
                                        {/* <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}><a href="http://bharatnft.store/" target="_blank"><FiChevronRight /> Bharat NFT
                                        </a>
                                        </li> */}
                                        {/* <!-- <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="https://Bharat NFT.world/"
                                            target="_blank">Bharat NFT
                                            World</a>
                                        </li> --> */}
                                        <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}><a href="https://sliceledger.io/sliceledger_whitepaper.pdf" target="_blank"><FiChevronRight /> Whitepaper</a></li>
                                        {/* <!-- <li className="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a
                                            href="javascript:;">Dextool</a>
                                        </li> --> */}
                                        <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: "0.5s", opacity: "1" }}><a href="#faq"><FiChevronRight /> FAQ</a>
                                        </li>
                                        <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}><a href="#contact"><FiChevronRight /> Contact</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-4 res_md_mt_30 res_sm_mt_20">
                                    <div className="newsletter_form home_footer_frm" id="news">
                                        <h4 className="footer_title border_title animation home_footer_title animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                                            Newsletter</h4>
                                        <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                                            Sign up for early news, details, giveaways, and more.
                                        </p>
                                        <form className="subscribe_form animation home_footer_subfrm animated fadeInUp" style={{ animationDelay: "0.4s", opacity: "1" }} onSubmit={handleSubmit(onSubmit)}>
                                            <input className="input-rounded" type="email" placeholder="Enter Email Address"
                                                {...register("email1", {
                                                    required: 'Email is Required',
                                                    pattern: {
                                                        value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/ym,
                                                        message: "Invalid Email Address"
                                                    }
                                                })} />
                                            {errors.email1 && (<small className='text-danger'>{errors.email1.message}</small>)}
                                            <button type="submit" title="Subscribe" className="btn-info" name="submit" value="Submit">
                                                {
                                                    btnLoader ? <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner> : "Subscribe"
                                                }
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="copyright">Copyright © 2022 All Rights Reserved.</p>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list_none footer_menu">
                                        <li><a href="https://sliceledger.io/static/media/PrivacyPolicysliceledger.c7604fe02954ee90c4b3.pdf">Privacy Policy</a></li>
                                        <li><a href="https://sliceledger.io/term_and_condition/">Terms &amp; Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <ToastContainer position="top-center" />
            </section>
        </>
    )
}

export default IndexFooter