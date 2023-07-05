import React, { useState, useEffect } from 'react';
import logo_main from "../../public/images/slice_logo.png"
import { AiOutlineBars } from "react-icons/ai";
import Link from 'next/link';
const IndexHeader = () => {
    const [toggle, setToggle] = useState(false)
    const [BodyState, setBodyState] = useState(false)


    const handleopen = () => {

        setBodyState(!BodyState)


        if (toggle === true) {
            setToggle(false)
            document.getElementById("navbarSupportedContent").style.display = "none"
        } else {
            setToggle(true)
            document.getElementById("navbarSupportedContent").style.display = "flex"
        }
    }

    useEffect(() => {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = BodyState ? 'fixed' : 'relative';
    }, [BodyState])
    
    
    return (
        <>
            <section className='indexheader_wrap'>
                {/* <!-- START HEADER --> */}
                <header className="header_wrap fixed-top nav_bg">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand page-scroll animation" href="/slice_index" data-animation="fadeInDown"
                                data-animation-delay="1s">
                                <img className="logo_light outer_glow" src={logo_main.src} alt="logo" />
                                <img className="logo_dark" src={logo_main.src} alt="logo" />
                            </Link>
                            <button className="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s">
                                <span className="ion-android-menu" onClick={handleopen}><AiOutlineBars /></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.1s"> <Link className="nav-link active" href="/slice_index">Home</Link></li>
                                    <li className="animation" data-animation="fadeInDown" data-animation-delay="1.3s"><a className="nav-link page-scroll nav_item nav_link_clr" href="https://sliceledger.io/sliceledger_whitepaper.pdf" target="_blank" >Whitepaper</a> </li>
                                    <li className="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a className="nav-link page-scroll nav_item nav_link_clr" href="#roadmap">Roadmap</a></li>
                                    <li className="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a className="nav-link page-scroll nav_item nav_link_clr" href="#faq">FAQ</a></li>
                                    <li className="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a className="nav-link page-scroll nav_item nav_link_clr" href="https://etherscan.io/address/0x444b1174196df6b0a557cbe53797159c1a53857d" target="_blank">Contract</a></li>
                                    <li className="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a className="nav-link page-scroll nav_item nav_link_clr" href="#contact">Contact Us</a></li>
                                    <li className="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><Link href="/dashboard/buyToken" className="nav-link page-scroll nav_item nav_link_clr buy_slice_link">Buy Slice</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header >
                {/* //   < !--END HEADER-- > */}
            </section>
        </>
    )
}

export default IndexHeader