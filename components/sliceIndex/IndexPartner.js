import React from 'react';
import pancakes from "../../public/images/sliceIndex/partners/pancakeswap.png";
import dex from "../../public/images/sliceIndex/partners/dex_guru.png";
import coinMarket from "../../public/images/sliceIndex/partners/coin_market.png";
import coinBase from "../../public/images/sliceIndex/partners/coinbases.png";
import dext from "../../public/images/sliceIndex/partners/dext.png";
import binance from "../../public/images/sliceIndex/partners/binance.png";
import coindcx from "../../public/images/sliceIndex/partners/coindcx.png";
import huobi from "../../public/images/sliceIndex/partners/huobi.png";
import gemini from "../../public/images/sliceIndex/partners/gemini.png";
const IndexPartner = () => {
    return (
        <>
            <section className='indexPartner_wrap'>
                <div className=" small_pt small_pb light_blue_dark_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title_default_light title_border text-center">
                                    <h4 className="animation partnerHead animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ marginBottom: "-4px", animationDelay: "0.2s", opacity: "1" }}>Partners / Listings</h4>
                                    <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1", fontSize: "12px", letterSpacing: "1.2px", lineHeight: "16px" }}>Coming Soon</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center text-center overflow_hide small_space">
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.3s" style={{ animationDelay: "0.3s", opacity: "1" }}>
                                    <img className="img-fluid" src={pancakes.src} alt="client_logo_gray1" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                                    <img className="img-fluid" src={dex.src} alt="client_logo_gray2" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border right_line">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: "0.5s", opacity: "1" }}>
                                    <img className="img-fluid" src={coinMarket.src} alt="client_logo_gray3" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                                    <img className="img-fluid" src={coinBase.src} alt="client_logo_gray4" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: "0.7s", opacity: "1" }}>
                                    <img className="img-fluid" src={dext.src} alt="client_logo_gray5" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border right_line">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: "0.8s", opacity: "1" }}>
                                    <img className="img-fluid" src={binance.src} alt="client_logo_gray6" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border bottom_line">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.9s" style={{ animationDelay: "0.9s", opacity: "1" }}>
                                    <img className="img-fluid" src={coindcx.src} alt="client_logo_gray7" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border bottom_line">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: "1s", opacity: "1" }}>
                                    <img className="img-fluid" src={huobi.src} alt="client_logo_gray8" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-4 col-md-4  logo_border bottom_line right_line">
                                <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: "1s", opacity: "1" }}>
                                    <img className="img-fluid" src={gemini.src} alt="client_logo_gray8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndexPartner