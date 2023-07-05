import React from 'react'
import IndexBanner from './IndexBanner'
import IndexContact from './IndexContact'
import IndexFAQ from './IndexFAQ'
import IndexFooter from './IndexFooter'
import IndexHeader from './IndexHeader'
import IndexKeyfeatures from './IndexKeyfeatures'
import IndexPartner from './IndexPartner'
import IndexPea from './IndexPea'
import IndexRoadmap from './IndexRoadmap'
import IndexService from './IndexService'

const SliceIndex = () => {
  return (
    <>
   
      <section className='sliceIndex_wrap'>
        <IndexHeader />
        <IndexBanner />
        <IndexService />
        <IndexPea />
        <IndexRoadmap />
        <IndexFAQ />
        <IndexPartner />
        <IndexContact />
        <IndexFooter />
      </section>
    </>
  )
}

export default SliceIndex