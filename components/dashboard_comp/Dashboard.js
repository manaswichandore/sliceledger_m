import React, { useEffect, useState } from 'react'
import Aside from './Aside';
import DashNav from './DashNav';
import { Modal } from "react-bootstrap";
import Web3 from "web3";
import { useCookies } from 'react-cookie';
// import { useLocation, useNavigate } from 'react-router-dom';
const Dashboard = () => {
    useEffect(() => {
      
        const web3_Stake = new Web3(window.ethereum);
    }, [])
    
    const [chain, setChainId] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['walletAdddress']);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }

    // const location = useLocation();
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (location.pathname === "/dashboard") {
    //         navigate("/dashboard/buyToken/")
    //     }
    // }, [])

    async function checkMetamask() {
        const provider = window.ethereum;
        if (provider) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex('0x1') }],
                });
            } catch (switchError) {}
        } else {
            setTimeout(() => {
                setShow(true)
            }, 6000);

        }

        if (provider) {
            window.ethereum.enable().then(async (address) => {
                var loginUserAdd = address[0];
                setCookie('walletAdddress', loginUserAdd)
                var ethBalance = (await web3_Stake.eth.getBalance(loginUserAdd))
                ethBalance = Web3.utils.fromWei(ethBalance, 'ether').slice(0, 6);
                if (ethBalance) {
                    sessionStorage.setItem("ethBalance", ethBalance);
                }
                var chainId = window.ethereum.chainId;
                if (chainId === 0x5) {
                    var chain = "ETH";
                    setChainId(chain)
                }
                if (chainId) {
                    sessionStorage.setItem("chainNetwork", chain);
                }
            });
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setShows(true)
        }, 6000);
    }, [])
    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    return (
        <>
            <section className='dashboard_main_wrap'>
                <DashNav />
                <Aside />
            </section>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>How to Install and Use Metamask</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 1:</b> Go to Chrome Web Store Extensions Section.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 2:</b> Search MetaMask.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 3:</b> Check the number of downloads to make sure that the legitimate MetaMask is being installed, as hackers might try to make clones of it.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 4:</b> Click the Add to Chrome button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 5:</b> Once installation is complete this page will be displayed. Click on the Get Started button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 6:</b> This is the first time creating a wallet, so click the Create a Wallet button. If there is already a wallet then import the already created using the Import Wallet button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 7:</b> Click I Agree button to allow data to be collected to help improve MetaMask or else click the No Thanks button. The wallet can still be created even if the user will click on the No Thanks button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 8:</b> Create a password for your wallet. This password is to be entered every time the browser is launched and wants to use MetaMask. A new password needs to be created if chrome is uninstalled or if there is a switching of browsers. In that case, go through the Import Wallet button. This is because MetaMask stores the keys in the browser. Agree to Terms of Use.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 9:</b> Click on the dark area which says Click here to reveal secret words to get your secret phrase. </p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 10:</b> This is the most important step. Back up your secret phrase properly. Do not store your secret phrase on your computer. Please read everything on this screen until you understand it completely before proceeding. The secret phrase is the only way to access your wallet if you forget your password. Once done click the Next button. </p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 11:</b> Click the buttons respective to the order of the words in your seed phrase. In other words, type the seed phrase using the button on the screen. If done correctly the Confirm button should turn blue.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 12:</b> Click the Confirm button. Please follow the tips mentioned.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 13:</b> One can see the balance and copy the address of the account by clicking on the Account 1 area.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 14:</b> One can access MetaMask in the browser by clicking the Foxface icon on the top right. If the Foxface icon is not visible, then click on the puzzle piece icon right next to it.</p>
                </Modal.Body>
            </Modal>
            <Modal show={shows} animation={true} onHide={handleCloses} centered>
                <div className='dashboard_main_popup'>
                    <Modal.Header >
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Seed Sale will start on <br /> 15th December 2022 for 48 hours from 10:30 AM GST</h2></Modal.Body>
                </div>
            </Modal>
        </>
    )
}

export default Dashboard