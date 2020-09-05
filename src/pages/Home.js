import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import BH from '../components/BH'
import Partners from '../components/Partners'
import End from '../components/End'
export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="BRAIN HOUSE" subtitle=" На службе технологического развития России">
<Link to ='/solutions' className='btn-primary'>наши решения</Link>
            </Banner>
        </Hero>
        <BH/>
        <Partners/>
        <End/>
        </>
    )
}
