import Head from 'next/head'
import React from 'react'
import SliceIndex from '../components/sliceIndex/SliceIndex'

export default function slice_index() {
    return (
        <>
            <Head>
                <title>The Most Anticipated Blockchain Network - SliceLedger</title>
                <link rel="canonical" href="https://sliceledger.io/"></link>
                <meta name="description" content="SliceLedger is one of the best blockchain networks addresses typical blockchain issues by providing the lowest gas fees and high speeds without compromising privacy."></meta>
            </Head>
            <SliceIndex />
        </>
    )
}
