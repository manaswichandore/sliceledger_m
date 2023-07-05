import React from 'react'
import RoadmapDate from '../roadmap/RoadmapDate'
import RoadmapPhase from '../roadmap/RoadmapPhase'

const IndexRoadmap = () => {
    return (
        <>
            <section className='indexRoadmap_wrap' id='roadmap'>
                <div className='roadmap_inner_wrap'>
                    <div className='roadmap_title'>
                        <h3>Roadmap</h3>
                    </div>
                    <RoadmapDate />
                    <RoadmapPhase />
                </div>
            </section>
        </>
    )
}

export default IndexRoadmap