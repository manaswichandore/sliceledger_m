import React, { useState } from 'react'
import { Col, Container, Image, Row, Modal, Button } from 'react-bootstrap'
import BgImg from '../../public/images/video_bg.jpg'
import { FaPlay } from 'react-icons/fa'
export default function Overview() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className='overview'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h2>Overview</h2>
                                <p>SliceLedger chain is powering the decentralized Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="image_wrapper">
                                <Image src={BgImg.src} alt='sliceLedger' fluid />
                                <div className='play_button_div'>
                                    <button className='play_button' onClick={handleShow}>
                                        <FaPlay />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Modal show={show} onHide={handleClose} centered className='overview_modal'>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className='overview_video'>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/XouvjkroYas" title="Slice Ledger Blockchain Network - An Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
