'use client'
import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold , PiCaretRightBold} from 'react-icons/pi';
import React from 'react'

const WorkSliderBtn = ({containerStyles , btnStyles , iconsStyles}:any) => {
    const swiper = useSwiper();
  return (
   <div className='containerStyles'>
        <button className={btnStyles}>
            <PiCaretLeftBold className={iconsStyles}/>
        </button>
        <button className={btnStyles}>
            <PiCaretRightBold className={iconsStyles}/>
        </button>
   </div> 

  )
}

export default WorkSliderBtn