import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import BH from '../components/BH'
export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="BRAIN HOUSE" subtitle=" Наши усилия направлены на поиск, агрегацию и адаптацию передовых Российских и зарубежных высоких технологий к современным технологическим вызовам, требованиям бизнеса в условиях современного Мира.">
<Link to ='/solutions' className='btn-primary'>наши решения</Link>
            </Banner>
        </Hero>
        <BH/>
        </>
    )
}
