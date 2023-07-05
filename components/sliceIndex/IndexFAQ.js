import React from 'react';
import { Col, Container, Nav, Row, Tab, Accordion } from 'react-bootstrap';

const IndexFAQ = () => {
    return (
        <>
            <section className='indexFAQ_wrap' id='faq'>
                <Container>
                    <div className='indexFAQ_title'>
                        <h3>Frequently Asked Questions (FAQ)</h3>
                    </div>
                    <Tab.Container id="left-tabs-examples" defaultActiveKey="general">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="general">General</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="listing">Listing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="token">SLICE Token</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="general">
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Q. What is cryptocurrency?</Accordion.Header>
                                                <Accordion.Body>
                                                    A.  A digital currency secured by cryptography is typically used as a medium of exchange within a peer-to-peer (P2P) digital economic system. The use of cryptographic techniques is what ensures that these systems are entirely immune to fraud and counterfeiting. Most cryptocurrency systems work through a decentralized framework that is collectively maintained by a distributed network of computers.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Q. What is ERC20?</Accordion.Header>
                                                <Accordion.Body>
                                                    A.    ERC-20 is the technical standard for fungible tokens created using the Ethereum blockchain. A fungible token is one that is interchangeable with another token—where the well-known non-fungible tokens (NFTs) are not interchangeable. ERC-20 allows different smart-contract enabled tokens a way to be exchanged. Tokens, in this regard, are a representation of an asset, right, ownership, access, cryptocurrency, or anything else that is not unique in and of itself but can be transferred. The standard allows tokens representing one of these factors—along with smart contracts—to be exchanged for a token that represents another. Smart contracts are conditions written into the coding that execute different aspects of a transaction between parties.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Q. What is the SLICE Token ?</Accordion.Header>
                                                <Accordion.Body>
                                                    A.SLICE token is specifically developed for Slice Ledger Blockchain Protocol. It is used for on-chain governance, transaction fee payment, and network security for the SliceLedger Chain. 
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Q. Which wallets are supported?</Accordion.Header>
                                                <Accordion.Body>
                                                    A.  We support metamask wallet.<br />
                                                    Metamask Wallet: <a className="faq_link" target="_blank" href="https://metamask.io">https://metamask.io</a>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="listing">
                                        <Accordion>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Q. Private Sale</Accordion.Header>
                                                <Accordion.Body>
                                                    A. Private sale will start with the price of 0.000008 SLICE per token.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Q. Public Sale</Accordion.Header>
                                                <Accordion.Body>
                                                    A. Public sale will start with the price of 0.000016 SLICE per token.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="token">
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Q. Staking</Accordion.Header>
                                                <Accordion.Body>
                                                    A. User can stake SLICE token for minimum one month to get rewards. Below is the url for staking/unstaking. <br />
                                                    <a href="https://sliceledger.io/dashboard/buyToken/">https://sliceledger.io/dashboard/buyToken/</a>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Q. Rewards and Loyalty</Accordion.Header>
                                                <Accordion.Body>
                                                    A. User will get 20% APY on staking SLICE token for minimum one month and maximum as per your requirements.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section >
        </>
    )
}

export default IndexFAQ