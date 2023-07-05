import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import blogImg5 from '../../public/images/blog5.jpg'
import blogImg4 from '../../public/images/blog4.png'
import blogImg3 from '../../public/images/blog3.png'
import BlogMainImg from '../../public/images/blog1.png'
import Link from 'next/link'
import Head from 'next/head'

export default function blog1() {
  return (
    <>
      <Head>
        <title> Best Blockchain Protocol | Gitex Global North Star Event 2022 Dubai </title>
        <meta name='description' content='SliceLedger - An advanced blockchain protocol is going to launch at the biggest tech event of the year in Dubai - Gitex Global 2022. To know more, meet us, schedule your meetings right away.' />
      </Head>
      <section className='blog_page1'>
        <div className="head">
          <Container>
            <Row>
              <Col lg={12}>
                <div className='head_box'>
                  <h2>SliceLedger At GITEX North Star Event 2022 Dubai: What To Expect?</h2>
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
                  <p>One of the most futuristic cities in the world is Dubai. It has established itself as an epicenter for significant global developments. GITEX, or the Gulf Information Technology Exhibition, is a conference and exhibition held in the Dubai World Trade Center. Numerous participants from all around the world have been drawn to it.</p>

                  <p>Since its inception, GITEX has provided businesses with incredible chances to grow their operations. The purpose of this event is for brilliant minds to showcase their technical prowess and innovation.</p>

                  <h4>Slice Ledger at GITEX North Star 2022</h4>
                  <p>Slice Ledger is the next generation EVM compatible blockchain running on Proof of stake and Proof of Play consensus mechanism. It is a public blockchain network providing world-class security to all the participants.</p>

                  <h4>What are we trying to achieve?</h4>
                  <p><b>High Throughput</b> : Many of the prominent blockchain networks face issues of low throughput. We have aimed for a high number of transactions without sacrificing security.</p>
                  <p><b>Low gas fees</b> : Whereas some networks have charged 20$ gas fees to process the transaction, we are providing all the necessary exciting features with negligible gas fees.</p>
                  <p><b>Low power consumption</b> : Some of the networks still use the old PoW mechanism which results in high computational power. We have adopted a Proof of Stake consensus mechanism to address this issue.</p>
                  <p><b>Block Size</b> : The transaction can be confirmed in 1.5 seconds using Sliceledger's 620B block size. The block size is greater than other blockchains, however it has no impact on the network's performance or scalability.</p>
                  <p><b>No Network Congestion</b> : Transactions depend on network congestion. As more nodes join the network, the network’s speed of processing the transactions becomes slow. We have tried to address this issue by making our network more scalable.</p>

                  <h4>Be a Part of the Slice Ledger Community</h4>
                  <p>This thriving international community is supported by SliceledgerChain. Sliceledger gives community members the tools they need to collaborate and build a worthwhile SliceledgerHub.</p>

                  <h4>Develop a decentralized future with us</h4>
                  <p>Behind every new technological innovation, there is a developer. Give developers the right resources and they can do wonders. Our objective is to empower developers so that they can create user-friendly Dapps, Defi platforms, NFT Marketplaces, Cryptocurrency Exchanges, Smart Contracts, Tokens and Launchpads using SliceLedger.</p>
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
