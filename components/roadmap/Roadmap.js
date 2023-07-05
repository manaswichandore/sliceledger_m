import React from 'react'
import Header from '../../common/DocHeader'
import Footer from '../../common/Footer'
import RoadmapBanner from './RoadmapBanner'
import RoadmapDate from './RoadmapDate'
import RoadmapPhase from './RoadmapPhase'
import { Helmet } from "react-helmet";

const Roadmap = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Roadmap- This roadmap has the comprehensive plan of Slice Ledger from testnet to token launch."
                />
                <link rel="canonical" href="https://sliceledger.io/roadmap"/>
                <title>Research - Slice Ledger Blockchain Protocol</title>
            </Helmet>
            <Header />
            <RoadmapBanner />
            <div className='roadmap_inner_wrap'>
                <RoadmapDate />
                <RoadmapPhase />
            </div>
            <Footer />
        </>
    )
}

export default Roadmap