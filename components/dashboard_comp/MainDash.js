import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import { ImSpinner7 } from "react-icons/im"
import { useCookies } from 'react-cookie';


import { SLICETOKEN_CONTACT_ADDRESS, SLICETOKEN_Abi } from './contract/sliceToken'
import { STAKINGUNSTAKING_CONTACT_ADDRESS, STAKINGUNSTAKING_Abi } from './contract/stakingUnstaking'

const MainDash = () => {
    const [walletAddress, setwalletAddress] = useState(" ");
    const [apy, setApy] = useState(20);
    const [cookies, setCookie, removeCookie] = useCookies(['walletAdddress']);
    const [weiSliceTokenBalance, setWeiSliceTokenBalance] = useState(0);
    const [ethSliceTokenBalance, setETHSliceTokenBalance] = useState(0);
    const [stakeToken, setStakeToken] = useState(1);
    const [weiRewardToken, setWeiRewardToken] = useState(0);
    const [ethRewardToken, setETHRewardToken] = useState(0);
    const [totalStakeToken, setTotalStakeToken] = useState(0);
    const [ethtotalStakeToken, setETHTotalStakeToken] = useState(0);
    const [totalStakeTime, setTotalStakeTime] = useState(0);
    const [baseStakeTime, setBaseStakeTime] = useState(0);
    const [startDateTime, setStartDateTime] = useState(0);
    const [finishDateTime, setFinishDateTime] = useState(0);
    const [stakeDateTime, setStakeDateTime] = useState(0);
    const [unStakeDateTime, setUnStakeDateTime] = useState(0);

    var web3_Stake;
    var SliceTokenABiWthiCONTRACT;
    var StakingUnstakingABiWthiCONTRACT;

    useEffect(() => {
        web3_Stake = new Web3(window.ethereum);
        SliceTokenABiWthiCONTRACT = new web3_Stake.eth.Contract(SLICETOKEN_Abi, SLICETOKEN_CONTACT_ADDRESS);
        StakingUnstakingABiWthiCONTRACT = new web3_Stake.eth.Contract(STAKINGUNSTAKING_Abi, STAKINGUNSTAKING_CONTACT_ADDRESS);
    })
    
    useEffect(() => {
        $(".validate").focus(function () {
            $("#stakeTokenCheck").hide();
            $("#checkSliceTokenBalance").hide();
            $('#checkStakeTokenBalance').hide();
        })
        StakingUnstakingABiWthiCONTRACT.methods.rate()
            .call()
            .then(async function (apy) {
                setApy(apy)
            }).catch((err) => { })

        StakingUnstakingABiWthiCONTRACT.methods.baseStakeTime()
            .call()
            .then(async function (baseStakeTime) {
                setBaseStakeTime(baseStakeTime)
            }).catch((err) => { })
        StakingUnstakingABiWthiCONTRACT.methods.baseStakeTime()
            .call()
            .then(async function (baseStakeTime) {
                setBaseStakeTime(baseStakeTime)
            }).catch((err) => { })
    }, [])

    const staking = async () => {
        if (parseFloat(stakeToken) > parseFloat(ethSliceTokenBalance)) {
            $("#checkSliceTokenBalance").show();
            return;
        }
        if (!stakeToken) {
            $("#stakeTokenCheck").show();
        }
        if (parseFloat(totalStakeToken) != 0) {
            $('#checkStakeTokenBalance').show();
            return;
        }
        var stakeToken_wei = Web3.utils.toWei(stakeToken.toString(), 'ether')
        var stakeToken_eth = Web3.utils.toBN(stakeToken_wei);
        document.getElementById("overlay").style.display = "block"
        SliceTokenABiWthiCONTRACT.methods.approve(STAKINGUNSTAKING_CONTACT_ADDRESS, stakeToken_wei)
            .send({
                from: walletAddress,
            }).on('error', function (error) {
                document.getElementById("overlay").style.display = "none"
                toast.error('Stake token failed !', {
                    position: "top-center",
                    theme: "colored",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).then(async function (info) {
                StakingUnstakingABiWthiCONTRACT.methods.stakeTokens(stakeToken)
                    .send({
                        from: walletAddress,
                    }).on('error', function (error) {
                        toast.error('Stake token failed !', {
                            position: "top-center",
                            theme: "colored",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        document.getElementById("overlay").style.display = "none";
                    }).then(async function (info) {
                        toast.success('You stake token successfully !', {
                            position: "top-center",
                            theme: "colored",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        document.getElementById("overlay").style.display = "none";

                    })
            })
    }
    const unStaking = async () => {
        if (parseFloat(ethRewardToken) === 0) {
            $('#checkUnstakeTokenBalance').show();
            return;
        } else {
            $('#checkUnstakeTokenBalance').hide();
        }
        document.getElementById("overlay").style.display = "block";
        StakingUnstakingABiWthiCONTRACT.methods.unstakeTokens()
            .send({
                from: walletAddress,
            }).on('error', function (error) {
                toast.error('Stake token failed !', {
                    position: "top-center",
                    theme: "colored",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                document.getElementById("overlay").style.display = "none";
            }).then(async function (info) {
                document.getElementById("overlay").style.display = "none";
                toast.success('You unstake token successfully !', {
                    position: "top-center",
                    theme: "colored",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
    const checkStakeToken = (e) => {
        if (e.target.value > 0) { } else { }
        $("#stakeTokenCheck").hide();
        if (parseFloat(stakeToken) > parseFloat(ethSliceTokenBalance)) {
            $("#checkSliceTokenBalance").show();
            return;
        }
        $("#checkSliceTokenBalance").hide();
    }
    var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var demo;
    useEffect(() => {
        if (walletAddress !== " " && walletAddress !== "undefined" && walletAddress !== undefined && walletAddress !== "") {
            SliceTokenABiWthiCONTRACT.methods.balanceOf(walletAddress)
                .call()
                .then(async function (token_balance) {
                    setWeiSliceTokenBalance(token_balance)
                    var ethtoken_balance = Web3.utils.fromWei(token_balance.toString(), 'ether')
                    setETHSliceTokenBalance(ethtoken_balance)
                }).catch((err) => { })
            demo = setInterval(function () {
                StakingUnstakingABiWthiCONTRACT.methods.rewardOf(walletAddress)
                    .call()
                    .then(async function (rewardOf) {
                        setWeiRewardToken(rewardOf)
                        var eth_rewardToken = Web3.utils.fromWei(rewardOf.toString(), 'ether')
                        setETHRewardToken(eth_rewardToken)
                    }).catch((err) => { })
            }, 5000);
        } else {
            if (wallet_address !== undefined) {
                setETHRewardToken(0)
                setETHSliceTokenBalance(0)
                setETHTotalStakeToken(0)
            }
        }
        return () => clearInterval(demo)
    }, [walletAddress, wallet_address])
    const [DisconnectCheck, setDisconnectCheck] = useState(null)
    const [StakingDates, setStakingDates] = useState(false)
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (e) => {
                if (e.length < 1) {
                    setDisconnectCheck(e.length)
                } else { }
            });
        }
    }, []);

    useEffect(() => {
        if (cookies.walletAdddress === undefined) {
            setStakingDates(false)
        } else {
            setStakingDates(true)
            StakingUnstakingABiWthiCONTRACT.methods.stakes(wallet_address)
                .call()
                .then(async function (stakes_data) {
                    var wei_totakStakeToken = stakes_data.amount
                    setTotalStakeToken(wei_totakStakeToken)
                    setTotalStakeTime(stakes_data.stakeTime)
                    var eth_totalStakeToken = Web3.utils.fromWei(wei_totakStakeToken.toString(), 'ether')
                    setETHTotalStakeToken(eth_totalStakeToken)
                    if (stakes_data.stakeTime == 0) {
                        var s_date = new Date();
                        var s_year = s_date.getFullYear();
                        var s_month = months_arr[s_date.getMonth()];
                        var s_day = s_date.getDate();
                        var s_hours = ((s_date.getHours() % 12 || 12) < 10 ? '0' : '') + (s_date.getHours() % 12 || 12);
                        var s_minutes = (s_date.getMinutes() < 10 ? '0' : '') + s_date.getMinutes();
                        var s_meridiem = (s_date.getHours() >= 12) ? 'PM' : 'AM';
                        var startDateTime = s_day + ' ' + s_month + ',' + s_year + ' ' + s_hours + ':' + s_minutes + ' ' + s_meridiem;
                        setStartDateTime(startDateTime)
                        setStakeDateTime(startDateTime)
                        var currentDate = new Date();
                        var futureDate = new Date(currentDate.getTime() + baseStakeTime * 1000);
                        var f_year = futureDate.getFullYear();
                        var f_month = months_arr[futureDate.getMonth()];
                        var f_day = futureDate.getDate();
                        var f_hours = ((futureDate.getHours() % 12 || 12) < 10 ? '0' : '') + (futureDate.getHours() % 12 || 12);
                        var f_minutes = (futureDate.getMinutes() < 10 ? '0' : '') + futureDate.getMinutes();
                        var f_meridiem = (futureDate.getHours() >= 12) ? 'PM' : 'AM';
                        var finishDateTime = f_day + ' ' + f_month + ',' + f_year + ' ' + f_hours + ':' + f_minutes + ' ' + f_meridiem;
                        setFinishDateTime(finishDateTime)
                        setUnStakeDateTime(finishDateTime)
                    } else {
                        var s_date = new Date();
                        var s_year = s_date.getFullYear();
                        var s_month = months_arr[s_date.getMonth()];
                        var s_day = s_date.getDate();
                        var s_hours = ((s_date.getHours() % 12 || 12) < 10 ? '0' : '') + (s_date.getHours() % 12 || 12);
                        var s_minutes = (s_date.getMinutes() < 10 ? '0' : '') + s_date.getMinutes();
                        var s_meridiem = (s_date.getHours() >= 12) ? 'PM' : 'AM';
                        var startDateTime = s_day + ' ' + s_month + ',' + s_year + ' ' + s_hours + ':' + s_minutes + ' ' + s_meridiem;
                        setStartDateTime(startDateTime)
                        var currentDate = new Date();
                        var futureDate = new Date(currentDate.getTime() + baseStakeTime * 1000);
                        var f_year = futureDate.getFullYear();
                        var f_month = months_arr[futureDate.getMonth()];
                        var f_day = futureDate.getDate();
                        var f_hours = ((futureDate.getHours() % 12 || 12) < 10 ? '0' : '') + (futureDate.getHours() % 12 || 12);
                        var f_minutes = (futureDate.getMinutes() < 10 ? '0' : '') + futureDate.getMinutes();
                        var f_meridiem = (futureDate.getHours() >= 12) ? 'PM' : 'AM';
                        var finishDateTime = f_day + ' ' + f_month + ',' + f_year + ' ' + f_hours + ':' + f_minutes + ' ' + f_meridiem;
                        setFinishDateTime(finishDateTime)
                        var s_date = new Date(totalStakeTime * 1000);
                        var s_year = s_date.getFullYear();
                        var s_month = months_arr[s_date.getMonth()];
                        var s_day = s_date.getDate();
                        var s_hours = ((s_date.getHours() % 12 || 12) < 10 ? '0' : '') + (s_date.getHours() % 12 || 12);
                        var s_minutes = (s_date.getMinutes() < 10 ? '0' : '') + s_date.getMinutes();
                        var s_meridiem = (s_date.getHours() >= 12) ? 'PM' : 'AM';
                        var stakeDateTime = s_day + ' ' + s_month + ',' + s_year + ' ' + s_hours + ':' + s_minutes + ' ' + s_meridiem;
                        setStakeDateTime(stakeDateTime)
                        var stakeDateTime_status = stakeDateTime;
                        const event = new Date(stakeDateTime_status);
                        var getStakeTime = event.setSeconds(baseStakeTime);
                        var uf_date = new Date(event);
                        var uf_year = uf_date.getFullYear();
                        var uf_month = months_arr[uf_date.getMonth()];
                        var uf_day = uf_date.getDate();
                        var uf_hours = ((uf_date.getHours() % 12 || 12) < 10 ? '0' : '') + (uf_date.getHours() % 12 || 12);
                        var uf_minutes = (uf_date.getMinutes() < 10 ? '0' : '') + uf_date.getMinutes();
                        var uf_meridiem = (uf_date.getHours() >= 12) ? 'PM' : 'AM';
                        var unStakeDateTime = uf_day + ' ' + uf_month + ',' + uf_year + ' ' + uf_hours + ':' + uf_minutes + ' ' + uf_meridiem;
                        setUnStakeDateTime(unStakeDateTime)

                    }
                }).catch((err) => { })
        }

    })
    var wallet_address = cookies.walletAdddress;
    var s_date1 = new Date();
    var s_year1 = s_date1.getFullYear();
    var s_month1 = months_arr[s_date1.getMonth()];
    var s_day1 = s_date1.getDate();
    var s_hours1 = ((s_date1.getHours() % 12 || 12) < 10 ? '0' : '') + (s_date1.getHours() % 12 || 12);
    var s_minutes1 = (s_date1.getMinutes() < 10 ? '0' : '') + s_date1.getMinutes();
    var s_meridiem1 = (s_date1.getHours() >= 12) ? 'PM' : 'AM';
    var startDateTime_now1 = s_day1 + ' ' + s_month1 + ',' + s_year1 + ' ' + s_hours1 + ':' + s_minutes1 + ' ' + s_meridiem1;
    var currentDate = new Date();
    var futureDate1 = new Date(currentDate.getTime() + baseStakeTime * 1000);
    var f_year1 = futureDate1.getFullYear();
    var f_month1 = months_arr[futureDate1.getMonth()];
    var f_day1 = futureDate1.getDate();
    var f_hours1 = ((futureDate1.getHours() % 12 || 12) < 10 ? '0' : '') + (futureDate1.getHours() % 12 || 12);
    var f_minutes1 = (futureDate1.getMinutes() < 10 ? '0' : '') + futureDate1.getMinutes();
    var f_meridiem1 = (futureDate1.getHours() >= 12) ? 'PM' : 'AM';
    var finishDateTime2 = f_day1 + ' ' + f_month1 + ',' + f_year1 + ' ' + f_hours1 + ':' + f_minutes1 + ' ' + f_meridiem1;
    useEffect(() => {
        $("#stakeTokenCheck").hide();
        $("#checkSliceTokenBalance").hide();
        $('#checkStakeTokenBalance').hide();
        setwalletAddress(wallet_address === undefined ? "" : wallet_address)

        setStartDateTime(startDateTime_now1)
        setStakeDateTime(startDateTime_now1)
        setFinishDateTime(finishDateTime2)
        setUnStakeDateTime(finishDateTime2)
    }, [wallet_address]);
    useEffect(() => {
        if (walletAddress === undefined || walletAddress === "") {
            setETHTotalStakeToken(0)
            setETHRewardToken(0)
            setETHSliceTokenBalance(0)
        }
    }, [walletAddress])
    return (
        <>
            <section className='mainDash_wrap'>
                <div className="content-wrapper farm-pg-ctnt " style={{ minHeight: "461px" }}>
                    <div className="container">
                        <div className="row hm-main-cnt">
                            <div className="col-md-12 m-5">
                                <p style={{ fontSize: "18px", textAlign: "center", color: "#f74c15" }}><b>Note</b> : You have to stake for minimum one month to get rewards</p>
                            </div>
                            <div className="col-sm-5">
                                <div className="home-box aos-init aos-animate" data-aos="zoom-in">
                                    <div className="card-body">
                                        <h2 className="card-title text-center"> Staking</h2>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="title">
                                                    <b>Slice</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stack-box">
                                            <div className="row">
                                                <div className="col-5  col-md-5">
                                                    <label>APY</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="fr apy">{apy}%</span>
                                                </div>
                                                <div className="col-5  col-md-5">
                                                    <label>Start</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="start_time fr">{StakingDates ? startDateTime : "DD:MM:YYYY HH:MM"}</span>
                                                </div>
                                                <div className="col-5  col-md-5">
                                                    <label>Finish (Min.)</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="finish_time fr">{StakingDates ? finishDateTime : "DD:MM:YYYY HH:MM"}</span>
                                                </div>
                                                <div className="col-5  col-md-5">
                                                    <label>Total Token</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="fr total_bharat_token">{ethSliceTokenBalance} Slice</span>
                                                </div>
                                                <div className="col-12 col-md-12 mt-2">
                                                    <input id="numberOfstakeTokens" className="form-control input-lg" min={1} placeholder="Enter token" type="number" name="number" onKeyUp={checkStakeToken} value={stakeToken} onChange={(e) => setStakeToken(e.target.value)} />
                                                    <p className='text-danger' id="stakeTokenCheck">Please Enter Number of stake token </p>
                                                    <p className='text-danger' id="checkSliceTokenBalance">Not enough BHARAT tokens in your wallet, please try lesser amount</p>
                                                    <p className='text-danger' id="checkStakeTokenBalance">You cann't stake token.First unstake token</p>
                                                </div>
                                                <div className="col-12 col-md-12 mt-2">
                                                    <button type="button" className="btn connect btn-block" onClick={staking}>Stake</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="home-box aos-init aos-animate" data-aos="zoom-in">
                                    <div className="card-body">
                                        <h2 className="card-title text-center"> Withdraw Staking</h2>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="title">
                                                    <b>Slice</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stack-box">
                                            <div className="row">
                                                <div className="col-5  col-md-5">
                                                    <label>Stake Time</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="stake_time fr">{StakingDates ? stakeDateTime : "DD:MM:YYYY HH:MM"}</span>
                                                </div>
                                                <div className="col-5  col-md-5">
                                                    <label>UnStake Time (Min.)</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="unstake_time fr">{StakingDates ? unStakeDateTime : "DD:MM:YYYY HH:MM"}</span>
                                                </div>
                                                <div className="col-5  col-md-5">
                                                    <label>Your Stake Token</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="your_stake fr">{ethtotalStakeToken} Slice</span>
                                                </div>

                                                <div className="col-5  col-md-5">
                                                    <label>Your Reward</label>
                                                </div>
                                                <div className="col-7  col-md-7">
                                                    <span className="your_reward fr">{ethRewardToken} Slice</span>
                                                    <input type="hidden" name="stakeReward" value="" className="stakeReward" />
                                                </div>
                                                <div className="col-12 col-md-12 mt-2">
                                                    <input id="numberOfunstakeTokens" className="form-control input-lg stakeReward" type="number" name="number" readOnly value={ethRewardToken} />
                                                    <p className='text-danger' id="checkUnstakeTokenBalance">No token stacked, please first stake the token</p>
                                                </div>
                                                <div className="col-12 col-md-12 mt-2">
                                                    <button type="submit" className="btn connect btn-block unstakingBtn" onClick={unStaking}>Unstake</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
                <div id="overlay">
                    <div className='loader_spiner'>
                        <ImSpinner7 />
                        <div className="loader_text">
                            <strong>Please wait while complete your processing...</strong>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainDash