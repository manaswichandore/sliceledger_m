import React from 'react'
import ExtensionAbout from '../components/wallet/slice_extension/ExtensionAbout'
import ExtensionBenefits from '../components/wallet/slice_extension/ExtensionBenefits'
import ExtensionExpectation from '../components/wallet/slice_extension/ExtensionExpectation'
import ExtensionGoals from '../components/wallet/slice_extension/ExtensionGoals'
import ExtensionBanner from '../components/wallet/slice_extension/ExtensionBanner'
import Head from 'next/head'

export default function slice_extension() {
  return (
    <>
      <Head>
        <title>Slice Crypto Wallet & Extension - Sliceledger Wallet</title>
        <meta name='description' content='Slice Crypto Wallet & Extension from Sliceleder Wallet, An open-source platform, which is easy-to-use to create new wallets and many more cool features.' />
      </Head>
      <div className='wallet_main_wrap'>
        <ExtensionBanner />
        <ExtensionAbout />
      </div>
      <ExtensionGoals />
      <ExtensionExpectation />
      <ExtensionBenefits />
    </>
  )
}
