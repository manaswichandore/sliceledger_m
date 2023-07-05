import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Image, Spinner } from 'react-bootstrap'
import LoginImg from '../public/images/signup.jpg'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { GiCheckMark } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

import axios from 'axios'
export default function SignUp() {
    const [EyeState, setEyeState] = useState(false)
    const [EyeStateOne, setEyeStateOne] = useState(false)
    function toggleEye(e) {
        e.preventDefault()
        setEyeState(!EyeState)
    }

    function toggleConfEye(e) {
        e.preventDefault()
        setEyeStateOne(!EyeStateOne)
    }
    // function password(e) {
    //     console.log(e.target.value);
    //     const confirmPassword = document.getElementById('confirm_pass').value
    //     console.log(confirmPassword);
    //     if (confirmPassword !== '') {
    //         if (e.target.value === confirmPassword) {
    //             console.log('matched');
    //         } else {
    //             console.log('not matched');
    //         }
    //     }
    // }
    // function confirmPassword(e) {
    //     console.log(e.target.value);
    // }

    // function signUp_submit(e) {
    //     e.preventDefault()
    //     const emailInput = document.getElementById('email').value
    //     const passwordInput = document.getElementById('pass').value
    //     const confirmPasswordInput = document.getElementById('confirm_pass').value
    //     if (emailInput) {

    //     }

    // }
    const [LoaderState, setLoaderState] = useState(false)
    const [SuccessState, setSuccessState] = useState(false)
    const [ErrorState, setErrorState] = useState({
        state: false,
        msg: ''
    })

    async function formSubmit(username, email, password, cpassword) {
        const data = {
            username: username,
            email: email,
            password: password,
            cpassword: cpassword
        }
        axios({
            method: "post",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response.status);
                if (response.status === 201) {
                    setLoaderState(false)
                    setSuccessState(true)
                    setTimeout(() => {
                        setSuccessState(false)
                    }, 2000);
                    // alert("form submitted successfully")
                }
            })
            .catch(function (response) {
                console.log(response.response.data.message);
                setLoaderState(false)
                setErrorState({
                    state: true,
                    msg: response.response.data.message
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

    // console.log("ENV", process.env.REACT_APP_BASE_URL);
    // console.log("process.env.NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL);

    // ==================================================================
    const [PassMatchState, setPassMatchState] = useState(true)
    const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = ({ username, email, message, password, confirmPassword }) => {
        setLoaderState(true)
        console.log({
            username,
            email,
            password,
            confirmPassword
        });

        if (confirmPassword !== '') {
            if (password === confirmPassword) {
                console.log('matched');
                setPassMatchState(true)
                // alert('Submitted')
                formSubmit(username, email, password, confirmPassword)
                reset()
            } else {
                setPassMatchState(false)
                console.log('not matched');
                setTimeout(() => {
                    setPassMatchState(true)
                }, 2000);
            }
        }

    }
    return (
        <>
            <div className='login_container'>
                <div className='signup_title'>
                    <h2>Sign Up</h2>
                </div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='signup_wrapper'>

                                <Row>
                                    <Col sm={12} md={7} lg={7} xl={7}>
                                        <div className='login_image_div'>
                                            <Image src={LoginImg.src} alt="" fluid />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={5} lg={5} xl={5}>
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
                                                        <div className='text'>Successfully Created !!</div>
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
                                                <div className="login_form_heading">
                                                    <h3>Create an account</h3>
                                                    <p>Please fill your infomation bellow</p>
                                                </div>
                                                <Form onSubmit={handleSubmit(onSubmit)}>
                                                    <Form.Group controlId="formBasicUsername">
                                                        <div className="field_wrapper">
                                                            <Form.Label>Username</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter username" {...register("username", {
                                                                required: 'Username is Required'
                                                            })} />
                                                        </div>
                                                        {errors.username && (<small className='text-danger contact_form_error'>{errors.username.message}</small>)}
                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicEmail">
                                                        <div className="field_wrapper">
                                                            <Form.Label>Email Id</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email" {...register("email", {
                                                                required: 'Email is Required',
                                                                pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: "invalid email address"
                                                                }
                                                            })} />
                                                        </div>
                                                        {errors.email && (<small className='text-danger contact_form_error'>{errors.email.message}</small>)}
                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicPassword">
                                                        <div className="field_wrapper">
                                                            <Form.Label>Password</Form.Label>
                                                            <Form.Control type={EyeState ? 'text' : 'password'} placeholder="Password" {...register("password", {
                                                                required: 'Password is Required',
                                                                minLength: {
                                                                    value: 6,
                                                                    message: "Minimum password length is 6"
                                                                }
                                                            })} autoComplete="on" />
                                                            <div className='eye_btn' onClick={toggleEye}>{EyeState ? <FaEyeSlash /> : <FaEye />}</div>
                                                        </div>
                                                        {errors.password && (<small className='text-danger contact_form_error'>{errors.password.message}</small>)}

                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicConfirmPassword">
                                                        <div className="field_wrapper">

                                                            <Form.Label>Confirm Password</Form.Label>
                                                            <Form.Control type={EyeStateOne ? 'text' : 'password'} placeholder="Confirm Password" {...register("confirmPassword", {
                                                                required: 'Confirm Password is Required',
                                                                minLength: {
                                                                    value: 6,
                                                                    message: "Minimum password length is 6"
                                                                }
                                                            })} autoComplete="on" />

                                                            <div className='eye_btn' onClick={toggleConfEye}>{EyeStateOne ? <FaEyeSlash /> : <FaEye />}</div>
                                                        </div>

                                                        {errors.confirmPassword && (<small className='text-danger contact_form_error'>{errors.confirmPassword.message}</small>)}

                                                        {PassMatchState ? '' :
                                                            <small className='text-danger contact_form_error'>Password not Matched</small>
                                                        }
                                                    </Form.Group>
                                                    {/* <Form.Group  controlId="formBasicCheckbox">
                                                            <Form.Check type="checkbox" label="Check me out" />
                                                        </Form.Group> */}
                                                    {/* <div key="radiosCheck" className="mb-3">
                                                        <Form.Check
                                                            type="radio"
                                                            id="radiosCheck"
                                                            label="I Accept terms and conditions & privacy policy"
                                                        />
                                                    </div> */}
                                                    <div className='mt-4'>
                                                        Already a User? <Link href='/login'>Login</Link> Instead.
                                                    </div>
                                                    <div className='signup_btn_div'>
                                                        <button variant="primary" type="submit">SignUp</button>
                                                    </div>
                                                </Form>
                                            </div>
                                            {/* <div className="signup_social_btns_main">
                                                <p>Login with social media</p>
                                                <div className="signup_social_btns_wrap">
                                                    <div className="signup_social_btns">
                                                        <ImFacebook />
                                                    </div>
                                                    <div className="signup_social_btns">
                                                        <AiOutlineTwitter />
                                                    </div>
                                                    <div className="signup_social_btns">
                                                        <FaYoutube />
                                                    </div>
                                                    <div className="signup_social_btns">
                                                        <GrLinkedinOption />
                                                    </div>
                                                </div>
                                            </div> */}
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
