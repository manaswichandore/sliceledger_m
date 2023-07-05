import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
// import RobotImg from '../../assets/images/robo2.0.png'
//MUI Stepper
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import axios from 'axios';

//Steps Naming
const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7', 'Step 8', 'Step 9', 'Step 10', 'Finish'];

export default function FindMySolution() {

    //For Toggle Welcome Section
    const [WelcomeState, setWelcomeState] = useState(false)

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Form Question 1
    const [Ans1, setAns1] = useState('')
    const [Ans2, setAns2] = useState('')
    const [Ans3, setAns3] = useState('')
    const [Ans4, setAns4] = useState('')
    const [Ans5, setAns5] = useState('')
    const [Ans6, setAns6] = useState('')
    const [Ans7, setAns7] = useState('')
    const [Ans8, setAns8] = useState('')
    const [Ans9, setAns9] = useState('')
    // const [Ans10, setAns10] = useState(second)

    const [ConfirmBtn1, setConfirmBtn1] = useState(false)
    const [ConfirmBtn2, setConfirmBtn2] = useState(false)
    const [ConfirmBtn4, setConfirmBtn4] = useState(false)
    const [ConfirmBtn5, setConfirmBtn5] = useState(false)

    function Que1(val) {
        console.log("Form Answer 1", val.target.innerText);
        setAns1(val.target.innerText)
        val.target.classList.toggle("active")
        const BtnActive = val.target.classList.value.includes("active")
        // console.log("BtnActive", BtnActive);
        setConfirmBtn1(BtnActive)
    }

    function Que1Ok() {
        document.getElementsByClassName('nextBtn')[0].click()
    }

    //Form Question 2
    function Que2(val) {
        console.log("Form Answer 2", val.target.innerText);
        setAns2(val.target.innerText)
        // console.log("BtnActive", BtnActive);
        const getAllClass = document.getElementsByClassName('que2Cate')
        for (let i = 0; i < getAllClass.length; i++) {
            if (getAllClass[i].classList.value.includes("active")) {
                getAllClass[i].classList.toggle("active")
            }
        }

        val.target.classList.toggle("active")
        const BtnActive = val.target.classList.value.includes("active")
        // console.log("BtnActiveBtnActiveBtnActive", BtnActive);
        setConfirmBtn2(BtnActive)
    }

    function Que2OK() {
        Que1Ok()
    }

    //Form Question 3
    function Que3() {
        const inputVal = document.getElementsByClassName('Que3Input')[0].value
        console.log("Form Answer 3", inputVal);
        if (inputVal === '') {

        } else {
            Que1Ok()
        }
        setAns3(inputVal)
    }

    //Form Question 4
    function Que4(val) {
        console.log("Form Answer 4", val.target.innerText);
        setAns4(val.target.innerText)
        const getAllClass = document.getElementsByClassName('que4Cate')
        for (let i = 0; i < getAllClass.length; i++) {
            if (getAllClass[i].classList.value.includes("active")) {
                getAllClass[i].classList.toggle("active")
            }
        }

        val.target.classList.toggle("active")
        const BtnActive = val.target.classList.value.includes("active")
        setConfirmBtn4(BtnActive)
    }

    function Que4OK() {
        Que1Ok()
    }

    //Form Question 5
    function Que5(val) {
        console.log("Form Answer 5", val.target.innerText);
        setAns5(val.target.innerText)
        const getAllClass = document.getElementsByClassName('que5Cate')
        for (let i = 0; i < getAllClass.length; i++) {
            if (getAllClass[i].classList.value.includes("active")) {
                getAllClass[i].classList.toggle("active")
            }
        }

        val.target.classList.toggle("active")
        const BtnActive = val.target.classList.value.includes("active")
        setConfirmBtn5(BtnActive)
    }

    function Que5OK() {
        Que1Ok()
    }

    //Form Question 6
    function Que6() {
        const inputVal = document.getElementsByClassName('Que6Input')[0].value
        console.log("Form Answer 6", inputVal);

        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

        const check = emailRegex.test(inputVal)
        console.log("check", check)

        if (inputVal !== '' && check === true) {
            Que1Ok()
        }
        setAns6(inputVal)
        // document.getElementsByClassName('nextBtn')[0].click()
    }

    //Form Question 7
    function Que7() {
        const inputVal = document.getElementsByClassName('Que7Input')[0].value
        console.log("Form Answer 7", inputVal);
        if (inputVal !== '' && inputVal.length > 2) {
            Que1Ok()
        }
        setAns7(inputVal)
        // document.getElementsByClassName('nextBtn')[0].click()
    }

    //Form Question 8
    function Que8() {
        let inputVal = document.getElementsByClassName('Que8Input')[0].value
        console.log("Form Answer 8", inputVal);
        if (inputVal !== '' && inputVal.length > 3) {
            Que1Ok()
        }
        setAns8(inputVal)
        inputVal = ''
        // document.getElementsByClassName('nextBtn')[0].click()
    }
    //Form Question 9
    function Que9() {
        const inputVal = document.getElementsByClassName('Que9Input')[0].value
        console.log("Form Answer 9", inputVal);
        if (inputVal !== '' && inputVal.length > 3) {
            Que1Ok()
        }
        setAns9(inputVal)
        // document.getElementsByClassName('nextBtn')[0].click()
    }
    //Form Submitting Btn 
    function submitStepper() {
        const inputVal = document.getElementsByClassName('Que10Input')[0].value
        console.log("Form Answer 10", inputVal);
        // document.getElementsByClassName('nextBtn')[0].click()
        if (inputVal !== '' && inputVal.length > 3) {
            Que1Ok()
        }
        const formObjectVal = {
            que1: Ans1,
            que2: Ans2,
            que3: Ans3,
            que4: Ans4,
            que5: Ans5,
            email: Ans6,
            que7: Ans7,
            que8: Ans8,
            que9: Ans9,
            que10: inputVal
        }

        console.log(formObjectVal);
        stepper(formObjectVal)
    }

    async function stepper(userData) {
        // https://form-sliceledger-api.onrender.com/visitor?
        console.log(userData);
        const data = {
            answer01: userData.que1,
            answer02: userData.que2,
            answer03: userData.que3,
            answer04: userData.que4,
            answer05: userData.que5,
            email: userData.email,
            answer06: userData.que7,
            answer07: userData.que8,
            answer08: userData.que9,
            answer09: userData.que10
        }
        axios({
            method: "post",
            url: `https://form-sliceledger-api.onrender.com/visitor`,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    // setLoaderState(false)
                    // setSuccessState(true)
                    // setTimeout(() => {
                    //     setSuccessState(false)
                    // }, 2000);
                    // alert("form submitted successfully")
                }
            })
            .catch(function (response) {
                console.log(response.response);
                // setLoaderState(false)
                // setErrorState({
                //     state: true,
                //     msg: response.response.data.msg
                // })
                // setTimeout(() => {
                //     setErrorState({
                //         state: false,
                //         msg: ''
                //     })
                // }, 2000);
                // alert(response.response.data.message)
            });
    }
    return (
        <>
            <div className='findMySolution_wrapper'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='stepper_container'>

                                {!WelcomeState ?
                                    <Container>
                                        <Row>
                                            <Col lg={6}>
                                                <div className='welcome_image'>
                                                    {/* <Image src={RobotImg} fluid /> */}
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className='welcome_content'>
                                                    <div className='welcome_section'>
                                                        <h2>Hi, my name is Avatar and I'm here to help you find the right solution for your needs! </h2>
                                                        <h2>I'll ask a few questions to make sure I understand you and your goals.</h2>
                                                        <button onClick={() => { setWelcomeState(true) }}>Get Started</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    :
                                    <Box sx={{ width: '100%' }}>
                                        <Stepper activeStep={activeStep}>
                                            {steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                // if (isStepOptional(index)) {
                                                //     labelProps.optional = (
                                                //         <Typography variant="caption">Optional</Typography>
                                                //     );
                                                // }
                                                if (isStepSkipped(index)) {
                                                    stepProps.completed = false;
                                                }
                                                return (
                                                    <Step key={label} {...stepProps}>

                                                        <StepLabel {...labelProps}>{label} </StepLabel>
                                                    </Step>
                                                );
                                            })}
                                        </Stepper>
                                        {activeStep + 1 === steps.length ? (
                                            <React.Fragment>
                                                <Typography sx={{ mt: 2, mb: 1 }}>
                                                    <>
                                                        <Container>
                                                            <Row>
                                                                <Col lg={6}>
                                                                    <img src="" alt="" />
                                                                </Col>
                                                                <Col lg={6}>
                                                                    <div className='question_box_name'>
                                                                        <h4>Thanks for your interest in the Sliceledger Platform.</h4>
                                                                        <h4>I've passed your details to an Slicelegend who is going to set up a time to connect with you.</h4>
                                                                        <div>
                                                                            <Link href={'/'} className='btn stp_inner_btn'>Back to Sliceledger</Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </>
                                                </Typography>
                                                {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                        <Box sx={{ flex: '1 1 auto' }} />
                                                        <Button className='stp_btn' onClick={handleReset}>Reset</Button>
                                                    </Box> */}
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <Typography sx={{ mt: 2, mb: 1 }}>
                                                    {activeStep + 1 === 2 ?
                                                        <>
                                                            <div className='question_box_name'>
                                                                <h4>2. How would you best describe your role in the diamond industry? *</h4>
                                                                <p>If more than one applies, please select the primary industry</p>
                                                                <div>
                                                                    <button className='btn stp_inner_btn que2Cate' onClick={(e) => Que2(e)}>Miner</button>
                                                                    <button className='btn stp_inner_btn mx-3 que2Cate' onClick={(e) => Que2(e)}>Manufacturer</button>
                                                                    <button className='btn stp_inner_btn que2Cate' onClick={(e) => Que2(e)}>Trader</button>
                                                                    <button className='btn stp_inner_btn mx-3 que2Cate' onClick={(e) => Que2(e)}>Retailer</button>
                                                                    <button className='btn stp_inner_btn que2Cate' onClick={(e) => Que2(e)}>Grader</button>
                                                                    <button className='btn stp_inner_btn mx-3 que2Cate' onClick={(e) => Que2(e)}>Collector / End Customer</button>
                                                                    <button className='btn stp_inner_btn que2Cate' onClick={(e) => Que2(e)}>Other</button>
                                                                    <button className={`btn stp_inner_btn mx-3 ${ConfirmBtn2 ? '' : 'd-none'}`} onClick={Que2OK}>OK</button>
                                                                </div>
                                                            </div>
                                                        </>
                                                        : activeStep + 1 === 3 ?
                                                            <>
                                                                <div className='question_box_name'>
                                                                    <h4>3. "The most important outcomes for me in using the sliiceledger Platform are..." *</h4>
                                                                    <p>Complete this sentence</p>
                                                                    <div className='d-flex inputDiv'>
                                                                        <input type="text" placeholder='Type your answer here...' className='form-control Que3Input' />
                                                                        <button className='btn stp_inner_btn my-2' onClick={Que3}>Ok</button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                            : activeStep + 1 === 4 ?
                                                                <>
                                                                    <div className='question_box_name'>
                                                                        <h4>4. Do you agree with the following sentence?:
                                                                            "I'm not really looking to find new suppliers, I just want to display diamonds with provenance on my own website" *</h4>
                                                                        <div>
                                                                            <button className='btn stp_inner_btn que4Cate' onClick={(e) => Que4(e)}>Yes</button>
                                                                            <button className='btn stp_inner_btn mx-3 que4Cate' onClick={(e) => Que4(e)}>No</button>
                                                                            <button className={`btn stp_inner_btn ${ConfirmBtn4 ? '' : 'd-none'}`} onClick={Que4OK}>Ok</button>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                                : activeStep + 1 === 5 ?
                                                                    <>
                                                                        <Container>
                                                                            <Row>
                                                                                <Col lg={6}>
                                                                                    <img src="" alt="" />
                                                                                </Col>
                                                                                <Col lg={6}>
                                                                                    <div className='question_box_name'>
                                                                                        <h4>5. I've got something great for you.
                                                                                            Amplify allows you to connect live inventory to your website so you can offer provenance to your market</h4>
                                                                                        <div className='d-flex flex-column'>
                                                                                            <button className='btn stp_inner_btn my-2 que5Cate' onClick={(e) => Que5(e)}>Amplify sounds perfect for me</button>
                                                                                            <button className='btn stp_inner_btn my-2 que5Cate' onClick={(e) => Que5(e)}>I need to speak with someone to discuss my needs</button>
                                                                                            <button className={`btn stp_inner_btn my-2 ${ConfirmBtn5 ? '' : 'd-none'}`} onClick={Que5OK}>Ok</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </Container>
                                                                    </>
                                                                    : activeStep + 1 === 6 ?
                                                                        <>
                                                                            <div className='question_box_name'>
                                                                                <h4>6. What's your business email address?. </h4>
                                                                                <p>We use this to register your account and from time to time, we would also like to contact you about our products and services, as well as other content that may be of interest to you.</p>
                                                                                <p>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</p>
                                                                                <input type="email" className='form-control Que6Input' placeholder='name@example.com' />
                                                                                <div>
                                                                                    <button className='btn stp_inner_btn my-2' onClick={Que6}>Ok</button>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                        : activeStep + 1 === 7 ?
                                                                            <>
                                                                                <div className='question_box_name'>
                                                                                    <h4>7. What country are you (or your company) based in? </h4>
                                                                                    <p>e.g. Australia, USA, Israel, Indonesia</p>
                                                                                    <input type="text" className='form-control Que7Input' placeholder='Type your answer here...' />
                                                                                    <div>
                                                                                        <button className='btn stp_inner_btn my-2' onClick={Que7}>Ok</button>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                            : activeStep + 1 === 8 ?
                                                                                <>
                                                                                    <div className='question_box_name'>
                                                                                        <h4>8. Please provide your first name </h4>
                                                                                        <input type="text" className='form-control Que8Input' placeholder='Type your answer here...' />
                                                                                        <div>
                                                                                            <button className='btn stp_inner_btn my-2' onClick={Que8}>Ok</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                                : activeStep + 1 === 9 ?
                                                                                    <>
                                                                                        <div className='question_box_name'>
                                                                                            <h4>9. And your last name? </h4>
                                                                                            <p></p>
                                                                                            <input type="text" className='form-control Que9Input' placeholder='Type your answer here...' />
                                                                                            <div>
                                                                                                <button className='btn stp_inner_btn my-2' onClick={Que9}>Ok</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </>
                                                                                    : activeStep + 1 === 10 ?
                                                                                        <>
                                                                                            <div className='question_box_name'>
                                                                                                <h4>10. And lastly, what's the name of your company?* </h4>
                                                                                                <input type="text" className='form-control Que10Input' placeholder='Type your answer here...' />
                                                                                                <div>
                                                                                                    <button className='btn stp_inner_btn my-2' onClick={submitStepper}>Submit</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            <div className='question_box_name'>
                                                                                                <h4>1. What industry do you operate in? *</h4>
                                                                                                <p>If more than one applies, please select the primary industry</p>
                                                                                                <div>
                                                                                                    <button className='btn stp_inner_btn mx-2' onClick={(e) => Que1(e)}>Diamond</button>
                                                                                                    <button className={`btn stp_inner_btn mx-2 ${ConfirmBtn1 ? '' : 'd-none'}`} onClick={Que1Ok}>OK</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>

                                                    }
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Button className='stp_btn'
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Box sx={{ flex: '1 1 auto' }} />
                                                    {/* {isStepOptional(activeStep) && (
                                                            <Button className='stp_btn' color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                                                Skip
                                                            </Button>
                                                        )} */}

                                                    <Button className='stp_btn nextBtn d-none' onClick={handleNext}>
                                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                    </Button>
                                                </Box>
                                            </React.Fragment>
                                        )}
                                    </Box>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
