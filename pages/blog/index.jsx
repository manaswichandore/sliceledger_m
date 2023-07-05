import Link from 'next/link'
import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import BlogImg1 from '../../public/images/blog1.png'
import BlogImg2 from '../../public/images/blog2.png'
import BlogImg3 from '../../public/images/blog3.png'
import BlogImg4 from '../../public/images/blog4.png'
import BlogImg5 from '../../public/images/blog5.jpg'
import BlogImg6 from '../../public/images/blog6.png'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'
import Head from 'next/head'

export default function index() {
    const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"]
    function pageFunc(value) {
        const end = 5 * value;
        const Start = end - 5
        const filteredArray = array.slice(Start.toString() == 'NaN' ? 0 : Start, end.toString() == 'NaN' ? 5 : end)
        console.log(filteredArray);
    }

    useEffect(() => {
        pageFunc()
    }, [])

    return (
        <>
            <Head>
                <title>Blogs | Latest Insights By Blockchain Experts - SliceLedger</title>
                <meta name='description' content='Discover the most recent blogs covering all the latest trends and technologies for Blockchain by SliceLedger.' />
            </Head>
            <section className='blogs'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h2>Blogs</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='all_blogs'>
                                <div className='img_part'>
                                    <Image src={BlogImg1.src} fluid loading="lazy" />
                                </div>
                                <div className='content_part'>
                                    <h4>Slice Ledger at GITEX North Star 2022</h4>
                                    <p>One of the most futuristic cities in the world is Dubai. It has established itself as an epicentre for significant global developments GITEX.</p>
                                    <Link href={'/blog/sliceledger-at-GITEX-north-star-event-2022-dubai'} className="read_more">Read More...</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='all_blogs'>
                                <div className='img_part'>
                                    <Image src={BlogImg2.src} fluid loading="lazy" />
                                </div>
                                <div className='content_part'>
                                    <h4>An Introduction to Slice Ledger Protocol</h4>
                                    <p>Slice Ledger is a blockchain protocol for developing, testing and launching financial products and applications.</p>
                                    <Link href={'/blog/an-introduction-to-sliceledger-protocol'} className="read_more">Read More...</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='all_blogs'>
                                <div className='img_part'>
                                    <Image src={BlogImg3.src} fluid loading="lazy" />
                                </div>
                                <div className='content_part'>
                                    <h4>Blockchain-The missing component in Supply Chain!</h4>
                                    <p>Blockchain technology has completely changed the way we do business. The majority, if not all, of organizations might see their.</p>
                                    <Link href={'/blog/blockchain-the-missing-component-in-supply-chain'} className="read_more">Read More...</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='all_blogs'>
                                <div className='img_part'>
                                    <Image src={BlogImg4.src} fluid loading="lazy" />
                                </div>
                                <div className='content_part'>
                                    <h4>Blockchain Trends: Blockchain-as-a-Service</h4>
                                    <p>Blockchain-as-a-service (BaaS) is the formation and management of cloud-based networks by a third party for.</p>
                                    <Link href={'/blog/blockchain-as-a-service'} className="read_more">Read More...</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='all_blogs'>
                                <div className='img_part'>
                                    <Image src={BlogImg5.src} fluid loading="lazy" />
                                </div>
                                <div className='content_part'>
                                    <h4>Layer 1 vs Layer 2 Blockchain Network Protocols: Key Differences</h4>
                                    <p>Let's first study blockchain scalability and its function to make it simpler for you to understand what layer-1 and layer-2 are.</p>
                                    <Link href={'/blog/layer1-vs-layer2-blockchain-network-protocols'} className="read_more">Read More...</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='all_blogs'>
                                <div className='img_part'>
                                    <Image src={BlogImg6.src} fluid loading="lazy" />
                                </div>
                                <div className='content_part'>
                                    <h4>The List of Best Blockchain Protocols in Dubai</h4>
                                    <p>The popularity and growth witnessed in the blockchain sector resulted in the development of several blockchain protocols. Every protocol is unique. While one can handle the issue of network congestion, others can offer interoperability and scalability.</p>
                                    <Link href={'/blog/best-blockchain-protocols-in-dubai'} className="read_more">Read More...</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='pagination_div'>
                                <Stack spacing={2}>
                                    <Pagination count={Math.ceil(array.length / 5)} shape="rounded" onChange={pageFunc} />
                                </Stack>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
