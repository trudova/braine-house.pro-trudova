import React, { Component } from 'react'

export default class End extends Component {
    state={
        data:[
{info1:'Общество с ограниченной ответственностью «БРЕЙН ХАУС»',
info2:'129226, г. Москва, ул. Сельскохозяйственная, дом 11, корп. 3, эт. 1, помещение 2, офис 194'},
{info1:'E-mail: Partner@brain-house.pro, Телефон: +7-904-01430-03 ',
info2:'ИНН:7717289639  КПП:771701001 ОГРН:1157746472146 '},

        ]
    }

    render() {
        return (
            <section className='data'>
              
               <div className='data-center'>
            {this.state.data.map((item, index)=>{
                return <article key={index} className='patrner'>
                   <h5>{item.info1}</h5>
            <h5>{item.info2}</h5>
                </article>
            })}
               </div>
              
            </section>
        )
    }
}
