import React, { Component } from 'react'
import Title from './Title'
import logo  from "../img/Rubius logo_горизонтальный белый.png";
import logo2 from '../img/logo.jpg'
import logo3 from '../img/LOGO SL 2020.png'
import logo4 from '../img/Elecard_logo.png'
import logo5 from '../img/G LOGO.png'
import logo6 from '../img/gorodit.png'
export default class Partners extends Component {

    state={
        partners:[
{img:logo4},
{img: logo2},
{img: logo3},
{img: logo},
{img:logo5},
{img:logo6}
        ]
    }

    render() {
        return (
            <section className='partners'>
               <Title title='Наши друзья и партеры'/>
               <div className='partners-center'>
            {this.state.partners.map((item, index)=>{
                return <article key={index} className='patrner'>
                   <img src={item.img}/>
                </article>
            })}
               </div>
              
            </section>
        )
    }
}
