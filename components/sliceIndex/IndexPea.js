import React from 'react';
import pea from "../../public/images/sliceIndex/chart.png"

const IndexPea = () => {
    return (
        <>
            <section className='indexPea_wrap'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg- col-md-12 col-sm-12 res_md_mb_40">
                            <div className="title_default_light title_border text-center">
                                <h4 className="animation Bharat NFT_allocation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>1 Trillion
                                    SLICE Token Allocation</h4>
                            </div>
                            <div className="lg_pt_20 res_sm_pt_0 text-center animation animated fadeInRight" data-animation="fadeInRight" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                                <img src={pea.src} alt="sale-proceeds3" className="chart_img" />
                            </div>
                            <div className="divider small_divider"></div>
                            <ul className="list_none list_chart text-center">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndexPea