import React from 'react'
import { star, shield, send } from "../assets";
import Button from './Button';

const Features = () => {
    return (
        <section className='max-w-7xl mx-auto mb-20 sm:mt-36 mt-24 flex sm:flex-row flex-col justify-between items-center  gap-16'>

            <div className='max-w-[645px]  flex-1'>
                <h2 className='text-[37px] xl:text-[54px] lg:text-[40px] md:text-[26px] font-medium  sm:mb-10 '>
                    You do the business, we'll handle the money.
                </h2>
                <p className='text-gray-400 xl:text-xl lg:text-[17px] md:text-[16px] leading-7 xl:leading-10 lg:leading-8 md:leading-7 mt-5 xl:mt-0 lg:mt-0 md:mt-[-10px] '> With the right credit card, you can improve your financial life by
                    building credit, earning rewards and saving money. But with hundreds
                    of credit cards on the market.
                </p>
                <Button />
            </div>


            <div className='max-w-[480px] grid grid-cols-1  sm:mt-0 mt-7 flex-1 xl:ml-0 lg:ml-20 md:ml-16 lg:mt-[-120px] xl:mt-0 gap-y-8 '>

                <div className='flex justify-between items-center  '>

                    <div className='w-[65px] h-[35px] sm:w-[100px] sm:h-[60px] rounded-[50%] bg-gradient-to-b from-black to-gray-900   p-1 my-10 flex justify-center items-center shadow-[0_4px_20px_rgba(0,255,255,0.6)]'>
                        <img src={star} alt="" className='w-[40px] h-[20px]  sm:w-[45px] sm:h-[30px] object-contain drop-shadow-2xl'  />
                    </div>

                    <div className='ml-5'>
                    <h2 className='text-[17px] sm:text-[18px] font-medium mb-3'>Rewards</h2>
                    <p className='text-gray-400 sm:mt-0 mt-[-10px]'>The best credit cards offer some tantalizing combinations of promotions and prizes.</p>
                    </div>
                    
                </div>

                <div className='flex justify-between items-center  bg-black-gradient p-2 rounded-3xl '>
                <div className='w-[70px] h-[35px] sm:w-[100px] sm:h-[60px] rounded-[50%] bg-gradient-to-b from-black to-gray-900   p-1 my-10 flex justify-center items-center shadow-[0_4px_20px_rgba(0,255,255,0.6)]'>
                        <img src={shield} alt="" className='w-[40px] h-[20px]  sm:w-[45px] sm:h-[30px] object-contain drop-shadow-2xl' />
                    </div> 

                    <div className='ml-5'>
                    <h2 className='text-[17px] sm:text-[18px] font-medium mb-3'>100% Secured</h2>
                    <p className='text-gray-400 sm:mt-0 mt-[-10px]'>TheWe take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>

                <div className='flex justify-between items-center '>
                <div className='w-[65px] h-[35px] sm:w-[100px] sm:h-[60px] rounded-[50%] bg-gradient-to-b from-black to-gray-900   p-1 my-10 flex justify-center items-center shadow-[0_4px_20px_rgba(0,255,255,0.6)]'>
                        <img src={send} alt="" className='w-[40px] h-[20px]  sm:w-[45px] sm:h-[30px] object-contain drop-shadow-2xl' />
                    </div>
                    <div className='ml-5'>

                    <h2 className='text-[17px] sm:text-[18px] font-medium mb-3'>Balance Transfer</h2>
                    <p className='text-gray-400 sm:mt-0 mt-[-10px]'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>





        </section>
    )
}

export default Features