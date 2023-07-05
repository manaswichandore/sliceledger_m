import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    // const [NameEmpty, setNameEmpty] = useState(false)
    // const [NameField, setNameField] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [btnLoader, setBtnLoader] = useState(false)
    const onSubmit = (data) => {

        // if (NameField) return;

        // console.log("data", data);
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
                console.log(response);
                toast.success("Thank you for contact us",{
                    containerId: "contact-toast"
                });

            })
            .catch(function (response) { });
    }
    return (
        <>
            <section className='contactUs_wrap'>
                <div className="contactUs_title">
                    <h3>get in touch</h3>
                    <h2>Contact Us</h2>
                </div>
                <div className="contactUs_content_wrap">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <div className='contect_form_wrap'>
                                    <div className='contect_form_title'>
                                        <h3>Send us a message</h3>
                                    </div>
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name"  {...register("name", {
                                                required: 'Name is Required',
                                                minLength: {
                                                    value: 3,
                                                    message: "The minimum length for this field is 3 characters"
                                                },
                                                pattern: {
                                                    value: /\S\S+/g,
                                                    message: "field cannot be empty"
                                                }
                                            })}
                                            // onChange={
                                            //     (e) => {
                                            //         const reg = /\s\s+/g;
                                            //         const demo = reg.test(e.target.value)
                                            //         console.log(demo);
                                            //         setNameField(demo)
                                            //         if (e.target.value === " ") {
                                            //             setNameEmpty(true)
                                            //         } else {
                                            //             setNameEmpty(false)
                                            //         }
                                            //     }
                                            // }
                                            />
                                            {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}
                                            {/* {NameField ? <small className='text-danger contact_form_error'> Remove Extra Spaces</small> : ""} */}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" {...register("email", {
                                                required: 'Email is Required',
                                                pattern: {
                                                    // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/ym,
                                                    message: "Invalid Email Address"
                                                },
                                                // pattern: {
                                                //     value: /[^.!@#$%^&*()_+]/sy,
                                                //     message: "email start with (a-z) or (0-9)"
                                                // }
                                            })} />
                                            {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicSubject">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Subject"
                                                {...register("subject", {
                                                    required: 'Subject is Required',
                                                    // maxLength: {
                                                    //     value: 20,
                                                    //     message: "The Maximum length for this field is 12 characters"

                                                    // },
                                                    pattern: {
                                                        value: /\S\S+/g,
                                                        message: "field cannot be empty"
                                                    }
                                                })}
                                            />
                                            {errors.subject && (<small className='text-danger'>{errors.subject.message}</small>)}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" placeholder='Enter message' rows={3} {...register("message", {
                                                required: 'Message is Required',
                                                maxLength: {
                                                    value: 100,
                                                    message: "The Maximum length for this field is 100 characters"
                                                },
                                                pattern: {
                                                    value: /\S\S+/g,
                                                    message: "field cannot be empty"
                                                }
                                            })} />
                                            {errors.message && (<small className='text-danger'>{errors.message.message}</small>)}
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className='form_btn'>
                                            {
                                                btnLoader ? <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner> : "Submit"
                                            }
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <div className='company_info_wrap_div'>
                                    <div className="company_info_wrap">
                                        <h3>Company Information</h3>
                                        <div>Address :</div>
                                        <address>FDRK3822 Compass Building
                                            Al Shohada Road Al Hamra
                                            Industrial Zone - FZ - Ras al
                                            Khaimah, UAE</address>
                                        <div>Contact No:</div>
                                        <div className='contact_no'> <a href='tel:+971585596272'> +971 585596272</a></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <ToastContainer
                enableMultiContainer
                containerId={"contact-toast"}
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default ContactUs