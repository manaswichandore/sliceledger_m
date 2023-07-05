import React from 'react'

const IndexKeyfeatures = () => {
  return (
    <>
      <section className='indexKeyfeatures_wrap'>
        <div id="about" className="small_pt">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="text_md_center res_md_mb_30 res_sm_mb_20">
                  <img className="animation" data-animation="zoomIn" data-animation-delay="0.2s" src="https://bharattoken.org/assest/website/images/banner_img_new.png"
                    alt="aboutimg2" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="title_default_light title_border">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Key Features </h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                    NFTs Exchangeable for Real-World Digital Artworks
                    Transactions Settled on the Ethereum Blockchain
                    Selling NFTs Through Direct Sales or Auctions with
                    Flexible Pricing
                    .
                  </p>
                  <ul style={{color: "#fff", marginLeft: "20px", marginBottom: "20px"}}>
                    <li>No Hidden Fees</li>
                    <li>Seamless Use (No Code Required)</li>
                    <li>Verified Artists (Decentralized KYC)</li>
                    <li>Decentralized Autonomous Organization</li>
                  </ul>
                </div>
                <a href="https://bharatnft.store/" className="btn btn-default btn-radius animation"
                  data-animation="fadeInUp" data-animation-delay="1s">Enter Bharat NFT <i
                    className="ion-ios-arrow-thin-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexKeyfeatures