import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { Image } from 'react-bootstrap'
import SiteLogo from '../../public/images/logo_main.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useRouter } from 'next/router';
import { GoArrowSmallRight } from 'react-icons/go'
import { useCookies } from 'react-cookie'
// import Router from 'next/router'
export default function Header() {
    const router = useRouter();
    useEffect(() => {
        if (router.asPath === "/dashboard") {
            router.push("/dashboard/buyToken")
        }
    }, [])

    // ======================== Mobile Menu Animation Start===============================
    const [BodyState, setBodyState] = useState(false)
    function toggleMenu() {
        
        setBodyState(!BodyState)

        document.getElementsByClassName('mobile')[0].classList.toggle("active")
        document.getElementsByClassName('bars')[0].classList.toggle("one")
        document.getElementsByClassName('bars')[1].classList.toggle("two")
        document.getElementsByClassName('bars')[2].classList.toggle("three")
        document.getElementsByClassName('menu_toggle_box')[0].classList.toggle("fix")
        document.getElementById('main_header').classList.toggle("bg_color")
    }

    useEffect(() => {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = BodyState ? 'fixed' : 'relative';
    }, [BodyState])
    

    function close() {
        document.getElementsByClassName("menu_toggle_box")[0].click()
    }
    // ======================== Mobile Menu Animation End===============================

    // =========================================== Cookies For Logged User Start===================================
    // const [cookies, setCookie, removeCookie] = useCookies(['site-cookie']);
    // const [UserState, setUserState] = useState(false)
    // useEffect(() => {
    //     setCookie('logged_user', 12)
    //     console.log("test cookie", cookies.logged_user);
    //     if (cookies.logged_user) {
    //         console.log('true');
    //         setUserState(true)
    //     } else {
    //         console.log('false');
    //         setUserState(false)
    //     }
    // }, [])
    // =========================================== Cookies For Logged User End===================================


    return (
        <>
            <div className="main_navigation" id='main_header'>
                <div className='main_site_logo'>
                    <Link href="/" className='navbar-brand site_logo'>
                        <Image src={SiteLogo.src} fluid alt="site-logo"/>
                    </Link>
                </div>
                <ul className='navigation_all_links'>
                    {/* <li ><Link href={"/request_a_demo"} className='main_li'>Request a Demo</Link></li> */}
                    <li ><a className='main_li'>Research <RiArrowDropDownLine /></a>
                        <ul className="dropdown">
                            <li><Link href={'/whitepaper'}>White Paper</Link></li>
                            <li><Link href={'/roadmap'}>Roadmap</Link></li>
                        </ul>
                    </li>
                    <li ><a className='main_li'>Enterprise <RiArrowDropDownLine /></a>
                        <ul className="dropdown">
                            <li><Link href="/diamond-industry">Diamond Industry</Link></li>
                            <li><Link href="/oil-and-gas-industry">Oil & Gas Industry</Link></li>
                        </ul>
                    </li>
                    <li ><a className='main_li' href="https://slice-ledger.gitbook.io/sliceledger/api" target={"_blank"}>Developers</a></li>
                    {/* <li ><Link className='main_li' href={"/wallet"}>Wallet</Link></li> */}
                    <li ><a className='main_li'>Wallet <RiArrowDropDownLine /></a>
                        <ul className="dropdown">
                            <li><Link href="/slice_wallet">Slice Wallet</Link></li>
                            <li><Link href="/slice_extension">Slice Extension</Link></li>
                        </ul>
                    </li>
                    <li ><a className='main_li' href="https://slice-ledger.gitbook.io/sliceledger/" target={"_blank"}>Docs</a></li>
                    <li ><Link className='main_li' href="/blog">Blog</Link></li>
                    {/* <li className='main_buy_slice'> <Link className='headerbutton' href="/slice_index" target={"_blank"}>Buy Slice</Link> </li> */}
                    {/* <li className='main_buy_slice'> <Link className='headerbutton' href="/login">Login</Link> </li> */}
                    {/* <li className='main_buy_slice'> <Link className='headerbutton' href="/sign_up">SignUp</Link> </li> */}
                    {/* <li className='main_buy_slice' style={UserState ? { display: 'block' } : { display: 'none' }}> <Link className='headerbutton' href="/my_account">My Account</Link> </li> */}
                </ul>

                <button className='menu_toggle_box' onClick={toggleMenu}>
                    <div className='bars'></div>
                    <div className='bars'></div>
                    <div className='bars'></div>
                </button>
            </div>

            {/* =================================== Mobile ===================================== */}
            <div className='mobile'>
                <ul className=''>
                    {/* <li className='main_li'><Link href={"/request_a_demo"} onClick={close}>Request a Demo</Link></li> */}
                    <li className='main_li'><a>Research <RiArrowDropDownLine /></a>
                        <ul className="dropdown">
                            <li><Link href={'/whitepaper'} onClick={close}> <GoArrowSmallRight /> White Paper</Link></li>
                            <li><Link href={'/roadmap'} onClick={close}> <GoArrowSmallRight /> Roadmap</Link></li>
                        </ul>
                    </li>
                    <li className='main_li'><a>Enterprise <RiArrowDropDownLine /></a>
                        <ul className="dropdown">
                            <li><Link href="/diamond-industry" onClick={close}> <GoArrowSmallRight /> Diamond Industry</Link></li>
                            <li><Link href="/oil-and-gas-industry" onClick={close}><GoArrowSmallRight /> Oil & Gas Industry</Link></li>
                        </ul>
                    </li>
                    <li className='main_li'><a href="https://slice-ledger.gitbook.io/sliceledger/api" target={"_blank"}>Developers</a></li>
                    {/* <li className='main_li'><Link href={"/wallet"}>Wallet</Link></li> */}
                    <li ><a className='main_li'>Wallet <RiArrowDropDownLine /></a>
                        <ul className="dropdown">
                            <li><Link href="/slice_wallet" onClick={close}><GoArrowSmallRight /> Slice Wallet</Link></li>
                            <li><Link href="/slice_extension" onClick={close}><GoArrowSmallRight /> Slice Extension</Link></li>
                        </ul>
                    </li>
                    <li className='main_li'><a href="https://slice-ledger.gitbook.io/sliceledger/" target={"_blank"}>Docs</a></li>
                    <li className='main_li'><Link href="/blog" onClick={close}>Blogs</Link></li>
                    {/* <li className='main_buy_slice'> <Link className='headerbutton' href="/slice_index" target={"_blank"}>Buy Slice</Link> </li> */}
                    {/* <li className='main_buy_slice'> <Link className='headerbutton' href="/login">Login</Link> </li> */}
                    {/* <li className='main_buy_slice'> <Link className='headerbutton' href="/sign_up">SignUp</Link> </li> */}
                </ul>
            </div>
        </>
    )
}
