import React from 'react'
import { apple, bill, google } from "../assets";

const Billing = () => {
    return (
        <section className='max-w-7xl mx-auto flex flex-1 flex-col xl:flex-row lg:flex-row md:flex-col justify-between items-center xl:mt-36 lg:mt-36 md:mt-30 mt-20 mb-37 gap-18'>
            <div className='max-w-[640px] flex-1 justify-center items-center relative z-[5]'>
                <img src={bill} alt="" className='w-[400px] h-[370px]  sm:w-[550px] sm:h-[455px]' />
                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </div>

            <div className='max-w-[480px] xl:mt-0 lg:mt-0 md:mt-12 mt-8 flex-1'>
                <h2 className='text-[40px] sm:text-[52px] font-medium mb-8'>Easily control your billing & invoicing.</h2>
                <p className='text-gray-400 xl:text-xl lg:text-[17px] md:text-[16px] leading-7 xl:leading-10 lg:leading-8 md:leading-7 mt-5 xl:mt-0 lg:mt-0 md:mt-[-10px] '>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

                <div className='max-w-[300px] flex justify-between mt-10'>
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Billing