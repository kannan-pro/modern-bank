import React from 'react'
import { arrowUp } from "../assets";

const GetStarted = () => {
    return (
        <div>
            <div className='border-2 w-[100px] h-[100px] sm:w-[140px] sm:h-[130px] rounded-[50%]  border-cyan-400  flex flex-col justify-center items-center text-[16px] sm:text-xl text-gradient font-semibold py-5 mt-7 cursor-pointer lg:ml-4 xl:ml-0 xl:mr-10'>
                <div className='flex'>
                    <h2 className='mr-1'>
                        Get
                    </h2>
                    <img src={arrowUp} alt="arrow" />
                </div>
                <h2>
                    Started
                </h2>
            </div>
        </div>
    )
}

export default GetStarted