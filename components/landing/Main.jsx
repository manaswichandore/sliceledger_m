import React from 'react'
import Counter from './Counter'
import BoxSection from './BoxSection'
import HeroSection from './HeroSection'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import SiteName from './SiteName'
import Overview from './Overview'
import Ecosystem from './Ecosystem'
import ContactUs from './ContactUs'

export default function Main() {
    return (
        <>
            <HeroSection />
            <Counter />
            <BoxSection/>
            <SiteName/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Overview/>
            <Ecosystem/>
            <ContactUs />
        </>
    )
}
