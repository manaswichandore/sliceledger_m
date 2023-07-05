import Head from 'next/head'
import React from 'react'
import Section1 from '../components/research/Section1'

export default function research() {
  return (
    <>
      <Head>
        <title>Whitepaper - Slice Ledger Blockchain Protocol</title>
        <meta name='description' content='Whitepaper- This in-depth whitepaper will explain everything about Slice Ledger Blockchain Protocol and how it will evolve shortly.'/>
      </Head>
      <Section1 />
    </>
  )
}
