import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen  flex gap-5 items-center px-32'>
        <div className="cardcontainer h-[55vh] w-1/2">
            <div className="card relative w-full rounded-xl flex items-center justify-center  h-full bg-[#004D43]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-4 border-2 rounded-full '>&copy;2021-25</button>
            </div>
        </div>
        <div className="cardcontainer  flex gap-5 w-1/2 h-[55vh]">
            <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#0c3631]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-4 border-2 rounded-full '>&copy;RATING 5.0 CLUTCH</button></div>
            <div className="card relative  flex items-center justify-center w-1/2 rounded-xl h-full bg-[#0c3631]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-4 border-2 rounded-full '>&copy;BUSINESS BOOTCAMP ALUMINI</button></div>
        </div>
    </div>
  )
}

export default Cards