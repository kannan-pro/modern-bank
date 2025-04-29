import React from 'react'
import { quotes,people01,people02,people03 } from "../assets"

const Feedback = () => {
    return (
        <section className='max-w-7xl mx-auto flex sm:flex-row flex-col justify-center items-center relative'>
            <div className="absolute z-[0] w-[60%] h-[80%] -right-[50%] rounded-full blue__gradient bottom-40" />
            <div className='w-[100%] grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-20'>
                <div className='mb-30 p-10 w-full max-w-sm rounded-2xl bg-black-gradient flex-col box-shadow'>
                    <img src={quotes} alt="quote" className='w-[42px] h-[37px] mb-10 ' />
                    <p className='text-[18px] leading-9 mb-10'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                    <div className='flex justify-between w-[230px] mt-20 '>
                        <img src={people01} alt="Herman" className='w-[48px] h-[48px]' />
                        <div >
                        <h3 className='text-xl'>Herman Jensen</h3>
                        <p className='text-gray-400'>Founder & Leader</p>
                        </div>
                    </div>
                </div>

                <div className='mb-30 p-10 w-full max-w-sm  rounded-2xl  mt-[-110px] sm:mt-0 box-shadow'>
                    <img src={quotes} alt="quote" className='w-[42px] h-[37px] mb-10' />
                    <p className='text-[18px] leading-9 mb-10'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                    <div className='flex justify-between w-[250px] p-[10px] mt-10'>
                        <img src={people02} alt="Herman" className='w-[48px] h-[48px]' />
                        <div>
                        <h3 className='text-xl'>Steve Mark</h3>
                        <p className='text-gray-400'>Founder & Leader</p>
                        </div>
                    </div>
                </div>
         
                <div className='mb-30 p-10 w-full max-w-sm  rounded-2xl xl:ml-0 lg:ml-[500px] md:ml-[400px] mt-[-130px] xl:mt-0 lg:mt-[-100px] md:mt-[-90px] box-shadow'>
                    <img src={quotes} alt="quote" className='w-[42px] h-[37px] mb-10 ' />
                    <p className='text-[18px] leading-9 mb-10'>It is usually people in the money business, finance, and international trade that are really rich.</p>
                    <div className='flex justify-between w-[250px] p-[10px]'>
                        <img src={people03} alt="Herman" className='w-[48px] h-[48px]' />
                        <div>
                        <h3 className='text-xl'>Kenn Gallagher</h3>
                        <p className='text-gray-400'>Founder & Leader</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default Feedback


