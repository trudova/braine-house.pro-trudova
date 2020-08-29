import React, { Component } from 'react'
import Title from './Title'
export default class BH extends Component {
    state={
        services:[
            {title:"О компании",
        info:"Компания “Брейн Хаус” образована 26 мая 2015 года. С самого начала своего существования все усилия наших специалистов направлены на поиск, агрегацию и адаптацию передовых Российских и зарубежных высоких технологий к современным технологическим вызовам, требованиям бизнеса в условиях современного Мира. Наши специалисты имеют многолетний опыт и разносторонние компетенции в части реализации самых амбициозных ITи телекоммуникационных проектов в России и за рубежом."},
        {title:"Наша компания ведёт свою технологическую и коммерческую деятельность в следующих направлениях: ",
    info:"    • Построение современной инфраструктуры сервисов IPTV/OTT, управления и мониторинга трансляциями цифрового контента;Разработка, адаптация и коммерциализация технологий нейронных сетей машинного зрения в рамках задач дорожно-транспортной аналитики, систем ФВФ нарушений ПДД;Многозадачные системы биометрии и ситуационной аналитики уровня предприятие/город;Масштабируемые системы интеллектуального видеонаблюдения;Технологии 3D моделирования, VR обучения, построение систем интерактивного 3D технического учёта инфраструктурных объектов предприятия и объектов городского хозяйства. Наша компания является открытой бизнес средой и технологической площадкой для сотрудничества в области инноваций и совместной с Вами реализации проектов любой сложности."},
    {}
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="О компании"/>
              <div className="services-center">
                  {/* {this.state.services.map((item, index) =>{
                      return <article key={index} className="services">
                          <h6>{item.title}</h6>
                  <p>{item.info}</p>
                      </article>
                  })} */}
                  <article className="services">
                      <h6>Миссия: </h6>
                      <p>Компания “Брейн Хаус” образована 26 мая 2015 года. С самого начала своего существования все усилия наших специалистов направлены на поиск, агрегацию и адаптацию передовых Российских и зарубежных высоких технологий к современным технологическим вызовам, требованиям бизнеса в условиях современного Мира.

Наши специалисты имеют многолетний опыт и разносторонние компетенции в части реализации самых амбициозных ITи телекоммуникационных проектов в России и за рубежом. </p>
<h6>Наша компания ведёт свою технологическую и коммерческую деятельность в следующих направлениях: </h6>
<ul>
    <li>Построение современной инфраструктуры сервисов IPTV/OTT, управления и мониторинга трансляциями цифрового контента;</li>
    <li>Разработка, адаптация и коммерциализация технологий нейронных сетей машинного зрения в рамках задач дорожно-транспортной аналитики, систем ФВФ нарушений ПДД;</li>
    <li>Многозадачные системы биометрии и ситуационной аналитики уровня предприятие/город;</li>
    <li> Масштабируемые системы интеллектуального видеонаблюдения;
    </li>
    <li>Технологии 3D моделирования, VR обучения, построение систем интерактивного 3D технического учёта инфраструктурных объектов предприятия и объектов городского хозяйства.</li>
</ul><br/>
<p>Наша компания является открытой бизнес средой и технологической площадкой для сотрудничества в области инноваций и совместной с Вами реализации проектов любой сложности. 

Мы благодарны Вам за визит на наш сайт! 


С наилучшими пожеланиями,

Совет директоров ООО “Брейн Хаус” 
</p>
                  </article>
              </div>
            </section>
        )
    }
}
