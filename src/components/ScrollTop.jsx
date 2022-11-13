import React, {useState} from 'react'
import { animateScroll as scroll } from 'react-scroll'

import '../css/scrollTop.css'

const ScrollTop = () => {
    const [scrolHandler, setScrolHandler] = useState('-100px')

    const handlerScroll = () => {
        window.scrollY >= 500 ? setScrolHandler('50px') : setScrolHandler('-100px')
    }


    window.addEventListener('scroll', handlerScroll)
    
  return (
    <div className='scrollTop' style={{bottom: scrolHandler}}>
        <a onClick={() => {
            scroll.scrollToTop({
              duration: 500,
              smooth: true,
              offset: 50
            })
        }}><i className='bx bx-chevron-up'></i></a>
    </div>
  )
}


export default ScrollTop
