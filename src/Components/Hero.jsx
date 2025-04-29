import React from 'react'
import { discount, robot } from "../assets";
import GetStarted from './GetStarted';

const Hero = () => {
    return (
        <section className='max-w-7xl mx-auto flex flex-col x sm:flex-row  md:flex-col lg:flex-row '>

            <div className='flex flex-col flex-1 '>
                <div className='flex sm:text-[16px] text-[14px] items-center max-w-[350px] p-1  rounded-xl bg-gradient-to-l from-black to-gray-900'>
                    <img src={discount} alt="dis" className="object-contain w-[32px] h-[32px] " />
                    <h2>
                        20% <span className='text-gray-500'>DISCOUNT FOR</span> 1 MONTH <span className='text-gray-500'>ACCOUNT</span>
                    </h2>
                </div>

                <div className='sm:py-9 py-6 flex sm:flex-row flex-col max-w-[700px]'>
                    <div>
                        <h1 className='text-[55px] xl:text-7xl lg:text-[55px] leading-20   lg:leading-20  xl:leading-24 font-medium'>
                            The Next <span className='text-gradient font-medium'>Generation</span>
                        </h1>
                    </div>

                    <div className='hidden sm:flex'>
                        <GetStarted />
                    </div>
                </div>

                <div>
                    <h1 className='text-6xl lg:text-[50px] xl:text-7xl font-medium  leading-20 lg:leading-18 xl:leading-24 mt-[-30px]'>Payment Method.</h1>
                </div>

                <div className='max-w-[580px] text-gray-600 mt-10 sm:mt-12 text-[16px] sm:text-[20px] leading-8 sm:leading-9'>
                    <p>
                        Our team of experts uses a methodology to identify the credit cards
                        most likely to fit your needs. We examine annual percentage rates,
                        annual fees.
                    </p>
                </div>
            </div>

            <div className='flex-1 flex justify-center items-center relative '>
                <img src={robot} alt="" className='w-[100%] h-[100%] relative md:my-0 md:mt-10 lg:mt-0 my-10 z-[5] drop-shadow-2xl' />
                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            <div className='sm:hidden flex flex-1 justify-center items-center mr-32 mt-[-35px] '>
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero