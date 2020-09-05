import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Loading from '../components/Loading'
export default function Solutions() {
    return (<>
        <Hero hero="solutionsHero">
            <Banner title="IT и телекоммуникация
" subtitle="Наша компания является открытой бизнес средой и технологической площадкой для сотрудничества в области инноваций и совместной реализации проектов."><Link to='/' className="btn-primary">
вернуться домой</Link></Banner>
        </Hero>
        <Loading/>
        </>
    )
}
