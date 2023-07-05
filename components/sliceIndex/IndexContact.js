import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { Spinner } from "react-bootstrap"
const IndexContact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [btnLoader, setBtnLoader] = useState(false)
    const onSubmit = (data) => {
        setBtnLoader(true)
        const bodyFormData = {
            email: data.email,
            message: data.message,
            name: data.name,
            subject: data.subject,
        }
        axios({
            method: "post",
            url: "https://sliceledger.io/backend/api/equireMail",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                reset();
                setBtnLoader(false)
                toast.success("Thank you for contact us");

            })
            .catch(function (response) {});
    }
    return (
        <>
            <section className='indexContact_wrap'>
                <div id="contact" className="contact_section small_pt" style={{ padding: "100px 0 35px 0 !important" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 pr-0 res_md_pr_15">
                                <div className="light_blue_dark_bg contact_box animation animated fadeInLeft" data-animation="fadeInLeft" data-animation-delay="0.1s" style={{ animationDelay: "0.1s", opacity: "1" }}>
                                    <div className="title_default_light title_border">
                                        <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Contact Us</h4>
                                    </div>
                                    <ul className="list_none contact_info mt-margin">
                                        <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                                            <i><AiOutlineMail /></i>
                                            <div className="contact_detail"> <span>Email-id</span>
                                                <p>info@sliceledger.io</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="contct_follow large_space">
                                        <span className="text-uppercase animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Follow
                                            Us</span>
                                        <ul className="list_none social_icon">
                                            <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}><a target="_blank" href="https://www.facebook.com/SliceLedger"><i><FaFacebookF /></i></a></li>
                                            <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: "0.5s", opacity: "1" }}><a href="https://twitter.com/LedgerSlice" target="_blank"><i><AiOutlineTwitter /></i></a>
                                            </li>
                                            <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}><a href="https://www.instagram.com/slice.ledger/" target="_blank"><i><AiOutlineInstagram /></i></a>
                                            </li>
                                            <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: "0.7s", opacity: "1" }}><a href="https://t.me/sliceledger" target="_blank"><i><FaTelegramPlane /></i></a>
                                            </li>
                                            <li className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: "0.8s", opacity: "1" }}><a href="https://www.linkedin.com/company/slice-ledger" target="_blank"><i><AiFillLinkedin /></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 pl-0 res_md_pl_15">
                                <div className="blue_lightdark_bg contact_box animation animated fadeInRight" data-animation="fadeInRight" data-animation-delay="0.1s" style={{ animationDelay: "0.1s", opacity: "1" }}>
                                    <div className="title_default_light title_border">
                                        <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Leave a Message</h4>
                                    </div>
                                    <form className="form_field" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                                                <input type="text" placeholder="Enter Name *" id="first-name" className="form-control" {...register("name", {
                                                    required: 'Name is Required',
                                                    minLength: {
                                                        value: 3,
                                                        message: "The minimum length for this field is 3 characters"
                                                    },
                                                    pattern: {
                                                        value: /\S\S+/g,
                                                        message: "field cannot be empty"
                                                    }
                                                })} />
                                                {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}
                                            </div>
                                            <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                                                <input type="email" placeholder="Enter Email *" id="email" className="form-control" {...register("email", {
                                                    required: 'Email is Required',
                                                    pattern: {
                                                        value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/ym,
                                                        message: "Invalid Email Address"
                                                    }
                                                })} />
                                                {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
                                            </div>
                                            <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: "0.8s", opacity: "1" }}>
                                                <input type="text" placeholder="Enter Subject" id="subject" className="form-control" {...register("subject", {
                                                    required: 'Subject is Required',
                                                    pattern: {
                                                        value: /\S\S+/g,
                                                        message: "field cannot be empty"
                                                    }
                                                    // maxLength: {
                                                    //     value: 20,
                                                    //     message: "The Maximum length for this field is 12 characters"

                                                    // }
                                                })} />
                                                {errors.subject && (<small className='text-danger'>{errors.subject.message}</small>)}
                                            </div>
                                            <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: "1s", opacity: "1" }}>
                                                <textarea placeholder="Message *" id="description" className="form-control" name="message" rows="2"
                                                    {...register("message", {
                                                        required: 'Message is Required',
                                                        maxLength: {
                                                            value: 100,
                                                            message: "The Maximum length for this field is 100 characters"
                                                        },
                                                        pattern: {
                                                            value: /\S\S+/g,
                                                            message: "field cannot be empty"
                                                        }
                                                    })}></textarea>
                                                {errors.message && (<small className='text-danger'>{errors.message.message}</small>)}
                                            </div>
                                            <div className="col-md-12 text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.2s" style={{ animationDelay: "1.2s", opacity: "1" }}>
                                                <button type="submit" title="Submit Your Message!" className="btn btn-default btn-radius" name="submit" value="Submit">
                                                    {
                                                        btnLoader ? <Spinner animation="border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner> : "Submit"
                                                    }
                                                </button>
                                            </div>
                                            <div className="col-md-12">
                                                <div id="alert-msg" className="alert-msg text-center"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer position="top-center" />
            </section>
        </>
    )
}

export default IndexContact