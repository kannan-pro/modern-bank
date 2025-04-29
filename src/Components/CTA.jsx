import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col xl:flex-row lg:flex-row md:flex-col justify-between items-center sm:py-20 py-10 bg-black-gradient rounded-2xl my-26 '>
        <div className='xl:px-[50px] lg:px-3 '>
            <h2 className='text-[24px] xl:text-[50px] lg:text-[34px] md:text-[40px] font-medium my-4 text-center'>Let's try our service now!</h2>
            <p className='text-gray-500 max-w-[300px] sm:max-w-[500px]  text-[16px] sm:text-[18px] leading-7 px-2'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='w-[500px]  flex  justify-center items-center '>
            <Button />
        </div>

    </section>
  )
}

export default CTA