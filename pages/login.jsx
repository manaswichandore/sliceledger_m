import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Image, Spinner } from 'react-bootstrap'
import LoginImg from '../public/images/login.jpg'
import Link from 'next/link'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import { GiCheckMark } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import axios from 'axios'
export default function Login() {
    const [EyeState, setEyeState] = useState(false)
    function toggleEye(e) {
        e.preventDefault()
        setEyeState(!EyeState)
    }

    const [LoaderState, setLoaderState] = useState(false)
    const [SuccessState, setSuccessState] = useState(false)
    const [ErrorState, setErrorState] = useState({
        state: false,
        msg: ''
    })

    async function formSubmit(email, password) {
        const data = {
            email: email,
            password: password
        }
        axios({
            method: "post",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response.status);
                if (response.status === 200) {
                    setLoaderState(false)
                    setSuccessState(true)
                    setTimeout(() => {
                        setSuccessState(false)
                    }, 2000);
                    // alert("form submitted successfully")
                }
            })
            .catch(function (response) {
                console.log(response.response.data.msg);
                setLoaderState(false)
                setErrorState({
                    state: true,
                    msg: response.response.data.msg
                })
                setTimeout(() => {
                    setErrorState({
                        state: false,
                        msg: ''
                    })
                }, 2000);
                // alert(response.response.data.message)
            });
    }

    const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = ({ name, email, message, password, confirmPassword }) => {
        // console.log({
        //     email,
        //     password
        // });
        setLoaderState(true)

        formSubmit(email, password)
        reset()
    }
    return (
        <>
            <div className='login_container'>
                <Container>
                    <Row>
                        <div className='head'>
                            <h2>Login</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='login_wrapper'>
                                <Row>

                                    <Col lg={7} md={12}>
                                        <div className='login_image_div'>
                                            <Image src={LoginImg.src} alt="" fluid />
                                        </div>
                                    </Col>
                                    <Col lg={5} md={12}>
                                        <div className='login_div'>
                                        {LoaderState ?
                                                <div className="loader_div">
                                                    <Spinner animation="border" variant="primary" />
                                                </div>
                                                : ''
                                            }
                                            {SuccessState ?
                                                <div className="response_message">
                                                    <div className='message_text'>
                                                        <div className='icon_div'>
                                                            <GiCheckMark />
                                                        </div>
                                                        <div className='text'>Successfully Login !!</div>
                                                    </div>
                                                </div>
                                                : ''
                                            }
                                            {
                                                ErrorState.state ?
                                                    <div className="response_message">
                                                        <div className='message_text'>
                                                            <div className='icon_div error'>
                                                                <FaTimes />
                                                            </div>
                                                            <div className='text'>{ErrorState.msg}</div>
                                                        </div>
                                                    </div>
                                                    : ''
                                            }
                                            <div className='login_form'>
                                                <h2 className='head_text'>Welcome Back !</h2>
                                                <p>Don't have an account? <Link className='create_account_link' href={'/sign_up'}> Create your account </Link>. It takes less than a minute.</p>
                                                <Form onSubmit={handleSubmit(onSubmit)}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <div className='field_wrapper'>
                                                            <Form.Label>Email ID</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email" {...register("email", {
                                                                required: 'Email is Required',
                                                                pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: "invalid email address"
                                                                }
                                                            })} />
                                                        </div>
                                                        <Form.Text className="text-muted">
                                                            We'll never share your email with anyone else.
                                                            <div className='d-flex'>
                                                                {errors.email && (<small style={{ fontSize: "14px" }} className='text-danger contact_form_error'>{errors.email.message}</small>)}
                                                            </div>
                                                        </Form.Text>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <div className='field_wrapper'>
                                                            <Form.Label>Password</Form.Label>
                                                            <div className='d-flex pass_field_div'>
                                                                <Form.Control type={EyeState ? 'text' : 'password'} placeholder="Password" {...register("password", {
                                                                    required: 'Password is Required',
                                                                    minLength: {
                                                                        value: 6,
                                                                        message: "Minimum password length is 6"
                                                                    }
                                                                })} autoComplete="on" />
                                                                <button onClick={toggleEye}>{EyeState ? <FaEyeSlash /> : <FaEye />}</button>
                                                            </div>
                                                        </div>
                                                        {errors.password && (<small className='text-danger contact_form_error'>{errors.password.message}</small>)}
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Text className="text-muted">
                                                            <a className='forget_pass' href="/">Forget Password?</a>
                                                        </Form.Text>
                                                    </Form.Group>
                                                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                            <Form.Check type="checkbox" label="Check me out" />
                                                        </Form.Group> */}
                                                    <div className='login_btn_div'>
                                                        <button variant="primary" type="submit">
                                                            Login
                                                        </button>
                                                    </div>
                                                </Form>

                                                {/* <div className='mt-4'>
                                                    Not a User? <Link href='/sign_up'>SignUp</Link> Instead.
                                                </div> */}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
