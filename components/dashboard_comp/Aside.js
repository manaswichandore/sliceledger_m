import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import Link from 'next/link';
import sliceLogo from "../../public/images/slice_logo.png";
import { useRouter } from "next/router";
const Aside = () => {
    const router = useRouter();
    return (
        <>
            <section className='aside_wrap'>
                <aside className="main-sidebar sidebar-dark-primary elevation-4" id='sidebarid'>
                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                    <img src={sliceLogo.src} className="img-circle " alt="User Image" />
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <input type="hidden" name="metamask_wallet" value="" id="metamask_wallet" />
                                <input type="hidden" name="balanceReciever" value="" id="balanceReciever" />
                                <input type="hidden" name="apy_per" value="" id="apy_per" />
                                <input type="hidden" name="staking_amount" value="" id="staking_amount" />
                                <input type="hidden" name="staking_stakeTime" value="" id="staking_stakeTime" />
                                <input type="hidden" name="staking_staked" value="" id="staking_staked" />
                                <input type="hidden" name="baseStakeTime" value="" id="baseStakeTime" />
                                <input type="hidden" name="staking_reward" value="" id="staking_reward" />
                                <input type="hidden" name="perTokenSeedPrice" value="" id="perTokenSeedPrice" />
                                <input type="hidden" name="perTokenPrivatePrice" value="" id="perTokenPrivatePrice" />
                                <input type="hidden" name="perTokenPublicPrice" value="" id="perTokenPublicPrice" />
                                <input type="hidden" name="staking_contract_address" value="0xCfEf6adD053e0C27c2625Ec9b2fBB053757ae688" id="staking_contract_address" />
                                <li className="nav-item">
                                    <a href="https://etherscan.io/address/0x444b1174196df6b0a557cbe53797159c1a53857d" target="_blank" className="nav-link" >
                                        <p>
                                            View Token on EtherScan
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://etherscan.io/address/0xaaecf06490adc85f5de126f895f411b118b382ca" target="_blank" className="nav-link" >
                                        <p>
                                            View Staking on EtherScan
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item" >
                                    <Link href="/dashboard/buyToken" className={`nav-link ${router.pathname == "/dashboard/buyToken" ? "active" : ""}`}>
                                        <p>
                                            Buy Slice
                                        </p>
                                    </Link>
                                </li>
                                <li  className="nav-item">
                                    <Link href="/dashboard/staking" className={`nav-link ${router.pathname == "/dashboard/staking" ? "active" : ""}`} >
                                        <p>
                                            Staking
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default Aside