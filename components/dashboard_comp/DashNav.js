import React, { useState, useEffect } from 'react';
import { AiOutlineBars } from "react-icons/ai"
import Web3 from "web3";
import { useCookies } from 'react-cookie';

const DashNav = () => {
  const [sideToggle, setSideToggle] = useState(true);
  const [chain, setChainId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['walletAdddress']);
  // useEffect(() => {
  //   var wrap = document.getElementsByClassName("content-wrapper");
  //   var header = document.getElementsByClassName("main-header");
  //   for (let j = 0; j < header.length; j++) { var headerData = header[j] }
  //   for (let i = 0; i < wrap.length; i++) { var allWrap = wrap[i] }
  // }, [])

  async function openMetamask() {
    if (WalletText === 'Connected') return;
    const web3_Stake = new Web3(window.ethereum);
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: Web3.utils.toHex('0x1') }],
    });
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

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (e) => {
        if (e.length < 1) {
          removeCookie('walletAdddress')
        } else {
          window.ethereum.request({ method: 'eth_accounts' }).then(openMetamask).catch(console.error);
        }
      });
    }
  }, []);


  const handlehide = () => {
    var wrap = document.getElementsByClassName("content-wrapper");
    var header = document.getElementsByClassName("main-header");
    for (let j = 0; j < header.length; j++) { var headerData = header[j] }
    for (let i = 0; i < wrap.length; i++) { var allWrap = wrap[i] }
    var sidebar = document.getElementById("sidebarid");
    if (sideToggle === true) {
      setSideToggle(false)
      sidebar.style.marginLeft = "-270px"
      headerData.style.marginLeft = "0px"
    } else {
      setSideToggle(true)
      sidebar.style.marginLeft = "0px"
      headerData.style.marginLeft = "270px"
    }
  }

  // ==============================================================================================================
  const [WalletText, setWalletText] = useState('Connect to Wallet')
  const [WalletAddText, setWalletAddText] = useState('')

  useEffect(() => {
    if (cookies.walletAdddress) {
      setWalletText('Connected')
      const startStr = cookies.walletAdddress.slice(0, 4);
      const endStr = cookies.walletAdddress.slice(-4, cookies.walletAdddress.length)
      const trimmedVal = `${startStr}...${endStr}`;
      setWalletAddText(trimmedVal)
    } else {
      setWalletText('Connect to Wallet')
      setWalletAddText('')
    }
  })


  return (
    <>
      <section className='dashNav_wrap'>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">

          <ul className="navbar-nav">
            <li className="nav-item bar" onClick={handlehide}>
              <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                <AiOutlineBars />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-2  mt-1 showAddress" id="walletAddressShow" style={{ marginRight: "20px" }}>
              <div><span>{WalletAddText}</span></div>
              {/* {cookies.walletAdddress ? <div> <span> {cookies.walletAdddress.slice(0, 4)}...{cookies.walletAdddress.slice(-4, cookies.walletAdddress.length)}</span></div>
                : ''
                // <div></div>
              } */}
            </li>
            <li className="nav-item mr-2">
              <button className="btn connect btn-block buy_Btn nav_item enableEthereumButton" id="connectWallet" onClick={openMetamask} >{WalletText}</button>
              {/* {cookies.walletAdddress ?
                <button className="btn connect btn-block buy_Btn nav_item enableEthereumButton" id="connectWallet" >Connected</button>
                :
                <button className="btn connect btn-block buy_Btn nav_item enableEthereumButton" id="connectWallet" onClick={openMetamask} >Connect to Wallet</button>
              } */}
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default DashNav