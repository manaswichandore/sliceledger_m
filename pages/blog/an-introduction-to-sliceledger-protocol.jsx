import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import blogImg5 from '../../public/images/blog5.jpg'
import blogImg4 from '../../public/images/blog4.png'
import blogImg3 from '../../public/images/blog3.png'
import BlogMainImg from '../../public/images/blog2.png'
import Link from 'next/link'
import Head from 'next/head'

export default function blog2() {
  return (
    <>
      <Head>
        <title>SliceLedger|An Introduction </title>
        <meta name='description' content='SliceLedger is a blockchain protocol that promotes the idea of pure decentralization and trustless economy.' />
      </Head>
      <section className='blog_page1'>
        <div className="head">
          <Container>
            <Row>
              <Col lg={12}>
                <div className='head_box'>
                  <h2>An Introduction to Slice Ledger Protocol</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='content_wrapper'>
          <Container>
            <Row>
              <Col lg={8}>
                <div className="blog_details">
                  <Image src={BlogMainImg.src} fluid alt='blog_image' />
                  <p>Slice Ledger is a blockchain protocol for developing, testing and launching financial products and applications. It promotes the ideology of decentralization and a trustworthy economy. It also offers decentralized solutions to various on-chain partners, including small businesses, big-tech companies, and investment management funds.</p>


                  <h4>Features of Slice Ledger</h4>
                  <p><b>Fast Transaction Speed</b> : Slice Ledger performs almost 100000 transactions per second. The transactions get completed in no time.</p>
                  <p><b>Transaction Fees</b> : Developers and Users will find Slice Ledger inexpensive. All the necessary features are accessible with negligible transaction costs.</p>
                  <p><b>Low power consumption</b> : Some of the networks still use the old PoW mechanism which results in high computational power. We have adopted a Proof of Stake consensus mechanism to address this issue.</p>
                  <p><b>Interoperability</b> : Transferring data and assets from one blockchain to another is very easy on Slice Ledger.</p>
                  <p><b>EVM Compatible</b> :  Slice Ledger is EVM compatible blockchain protocol. It uses Proof of Play and Proof of Stake consensus mechanisms to process transactions in the network.</p>
                  <p><b>Security</b> :  Slice Ledger has multiple security layers that prevent fraudsters and unauthorized entities from entering the network.</p>

                  <h4>Get Familiar with Slice Ledger Ecosystem</h4>
                  <p><b>Slice Wallet</b> : Slice Wallet is used to receive and exchange cryptocurrencies. Users can also store NFTs in this wallet to trade them into NFT Marketplaces.</p>
                  <p><b>Slice Wallet Extension</b> : Slice Wallet Extension is specifically for users who prefer to use a Desktop to access their wallet.</p>
                  <p><b>Slice Token</b> : SLICE is the native token of Slice Ledger. It is used for on-chain governance, transactions and securing the network.</p>
                  <p><b>Slice Scan</b> :  Scan is available for Testnet and Mainnet both. Slice Scan store all transaction information and other information like Blocks, Address,Token Info, Contracts etc</p>
                  <p><b>Slice Faucet</b> :  Developers can use the slice faucet for the testnet and perform transactions.</p>


                </div>
              </Col>
              <Col lg={4}>
                <div className="recent_blogs_list">
                  <h4>Recent Blogs</h4>
                  <div className="blog_item">
                    <Image src={blogImg5.src} fluid />
                    <Link href={'/blog/layer1-vs-layer2-blockchain-network-protocols'}>Layer 1 vs Layer 2 Blockchain Network Protocols: Key Differences</Link>
                  </div>
                  <div className="blog_item">
                    <Image src={blogImg4.src} fluid />
                    <Link href={'/blog/blockchain-as-a-service'}>Blockchain Trends: Blockchain-as-a-Service</Link>
                  </div>
                  <div className="blog_item">
                    <Image src={blogImg3.src} fluid />
                    <Link href={'/blog/blockchain-the-missing-component-in-supply-chain'}>Blockchain-The missing component in Supply Chain!</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}
