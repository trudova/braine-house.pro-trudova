import React,{useState} from 'react'
import ImgComp from './ImgComp'
import i1 from '../img/leter1.png';
import i2 from '../img/leter2.png';
import i3 from '../img/leter3.png';
import i4 from '../img/leter4.png';
import i5 from '../img/leter5.jpg';
import i6 from '../img/leter6.png';
import {FaAngleDoubleLeft} from 'react-icons/fa'
import {FaAngleDoubleRight} from 'react-icons/fa'
export default function Slider() {
    let sliderArr = [<ImgComp src={i1}/>,<ImgComp src={i2}/>,<ImgComp src={i3}/>,<ImgComp src={i4}/>,<ImgComp src={i5}/>,<ImgComp src={i6}/>];
    const [x,setX] = useState(0);
    const goLeft =()=>{
        x=== 0? setX(-100*(sliderArr.length -1)): setX(x+100);
    };

    const goRight =()=>{
        (x=== -100*(sliderArr.length -1))?setX(0): setX(x-100);
    }
    return (
        <div className='slider'>
          {sliderArr.map((item, index)=>{

              return(
                <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
                    {item}
                    </div>

              )
          })}
          <button id="goLeft"onClick={goLeft}>
          < FaAngleDoubleLeft/>
          </button>
          <button id="goRight"onClick={goRight}><FaAngleDoubleRight/></button>
        </div>
    )
}
