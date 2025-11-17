import React from 'react'
import { motion } from "motion/react"
const Marquee = () => {
    motion
  return (
    <div className='w-full  h-[550px] py-10 bg-[#004D43] rounded-t-3xl flex items-center'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden ">
            <h1 className='text-[18vw] leading-[15vw] font-["Founders Grotesk"] font-extrabold uppercase '>We are ochi</h1>
            <h1 className='text-[18vw] leading-[15vw] font-["Founders Grotesk"] font-extrabold uppercase '>We are ochi</h1>
            
        </div>
    </div>
  )
}

export default Marquee