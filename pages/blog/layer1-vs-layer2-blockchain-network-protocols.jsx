import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import blogImg5 from '../../public/images/blog5.jpg'
import blogImg4 from '../../public/images/blog4.png'
import blogImg3 from '../../public/images/blog3.png'
import BlogMainImg from '../../public/images/blog5.jpg'
import Link from 'next/link'
import Head from 'next/head'

export default function blog4() {
    return (
        <>
        <Head>
            <title>1 vs Layer 2 Blockchain Network Protocols | SliceLedger</title>
            <meta name='description' content='Layer  1 and Layer 2 blockchain protocols have their own ways to enhance scalability. Read this blog to find out more.'/>
        </Head>
            <section className='blog_page1'>
                <div className="head">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='head_box'>
                                    <h2>Layer 1 vs Layer 2 Blockchain Network Protocols: Key Differences</h2>
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
                                    <p>Let's first study blockchain scalability and its function to make it simpler for you to understand what layer-1 and layer-2 are. Blockchain scalability refers to the platform's capacity to handle both a growth in the number of transactions and network nodes.</p>

                                    <h4>Layer 1-What is it?</h4>
                                    <p>Generally, we refer to a blockchain as a Layer-1 network in the decentralized ecosystem. Scalability increases by incorporating layer-1 scaling solutions within the blockchain protocol's foundation layer. Several approaches that directly increase the scalability of blockchain networks are currently being researched and put into use.</p>

                                    <p>Layer 1 solutions can validate, confirm, and complete trades without relying on a different network. These lowest gas fees crypto have native cryptocurrency coins that assist in covering the transaction costs. Layer-1 scaling solutions aim to strengthen the technical underpinnings of the blockchain protocol to increase scalability.</p>

                                    <h4>Layer 1 blockchain protocol issue that everyone needs to know</h4>
                                    <p>The most evident issue of Layer 1 is scalability. As the number of users increases, Layer 1 starts crumbling. Slow processing speed, slow confirmation and transaction time and slow throughput are all the shortcomings of Layer 1 Blockchain protocols.</p>

                                    <h4>Introducing Layer 2 - How will it scale blockchain networks?</h4>
                                    <p>The fundamental logic behind developing a Layer 2 protocol is that the blockchain industry is experiencing enormous growth and promise. Layer-2 solutions are secondary frameworks built on top of an existing blockchain ecosystem. Their main objectives are to improve transaction execution speed and lessen scaling challenges that the blockchain industry is currently facing.</p>

                                    <h4>Advantages of Layer 2 solutions</h4>
                                    <ol>
                                        <li>Increased transactions per second (TPS) can lower network congestion on the mainnet and enhance user experience.</li>
                                        <li>Before being recorded onto the mainnet, transactions are combined into a single package to reduce gas fees.</li>
                                        <li>Any upgrades do not affect the underlying blockchain, enhancing network security as Layer 2 solutions are built upon existing blockchains.</li>
                                    </ol>
                                    <h4>Common Layer 2 Solutions</h4>
                                    <p><b> RollUps </b>- Rollups are of two types. They are ZK-Rollups and Optimistic Rollups.</p>

                                    <p>ZK-Rollups, also known as zero-knowledge rollups, are collections of data that are moved off-chain for processing and computation while being collateralized by a smart contract on the main chain. With the capacity to handle 2,000 TPS, they can produce a block in about a minute. Without actually disclosing the information, all verifiers can be certain they have it. This is known as zero-knowledge.</p>

                                    <p>Optimistic rollups are implemented so that a large number of smart contracts can be executed without overwhelming the network. They continue to enjoy the same high-security levels as the Ethereum main chain. Merkle roots will be computed by data aggregators to boost transaction speeds. They provide less throughput than ZK Rollups and Plasma, though.</p>

                                    <p><b> SideChains </b>- Blockchain sidechains are separate networks with their validators. The main chain and sidechain connect through smart contracts, which also operate as a way to validate the sidechain network. You need to make sure the sidechain is working properly because it can control the assets on the main chain.</p>

                                    <p><b> State Channels </b>- A state channel serves as a line of communication between the participants of the transaction in both directions. The parties link a sealed-off portion of the underlying blockchain to an off-chain transaction channel. This can typically be accomplished through a multi-signature or pre-negotiated smart contract. The parties then conduct a transaction or series of transactions off-chain without immediately uploading transaction data to the underlying distributed ledger (i.e., the main chain). Once each transaction in the set is finished, the final "state" of the channel is broadcast to the blockchain for verification. With this technique, transactions process more quickly, increasing the network's overall capacity.</p>

                                    <p><b> Nested Blockchains </b>- A nested blockchain is essentially a blockchain that is stacked on top of or inside another blockchain. The executions occur on a web of subsidiary chains interconnected in the layered blockchain architecture, which typically consists of a core blockchain that provides the rules for a broader network. The underlying base blockchain does not take part in the network operations of subsidiary chains unless it becomes necessary for dispute resolution.</p>

                                    <h4>Summing Up</h4>
                                    <p>The blockchain's layers are concerned with increasing scalability. The original blockchain technology is modified to make Layer 1 more scalable. The Layer 2 scaling of the blockchain depends on other technologies, networks, or protocols to boost its scalability. With the assistance of off-chain solutions that share the weight of the blockchain network, scalability is easier to achieve.</p>


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
