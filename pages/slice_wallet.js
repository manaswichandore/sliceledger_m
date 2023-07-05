import Head from 'next/head'
import React from 'react'
import AboutSlice from '../components/wallet/slice_wallet/AboutSlice'
import Benefits from '../components/wallet/slice_wallet/Benefits'
import Expectation from '../components/wallet/slice_wallet/Expectation'
import Goals from '../components/wallet/slice_wallet/Goals'
import Banner from '../components/wallet/slice_wallet/WalletBanner'

const wallet = () => {
  return (
    <>
    <Head>
      <title>Slice Crypto Wallet & Extension - Sliceledger Wallet</title>
      <meta name='description' content='Slice Crypto Wallet & Extension from Sliceleder Wallet, An open-source platform, which is easy-to-use to create new wallets and many more cool features.'/>
    </Head>
      <div className='wallet_main_wrap'>
        <Banner />
        <AboutSlice />
      </div>
      <Goals/>
      <Expectation/>
      <Benefits/>
    </>
  )
}

export default wallet