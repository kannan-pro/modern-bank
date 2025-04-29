import React from 'react'
import { card } from '../assets'
import Button from './Button'

const Card = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col xl:flex-row lg:flex-row justify-between items-center gap-18'>
      <div className='max-w-[640px] mt-[-70px] xl:mt-0 lg:mt-0  flex-1'>
        <h2 className='text-[40px] sm:text-[52px] font-medium mb-8'>Find a better card deal in few easy steps.</h2>
        <p className='text-gray-400 xl:text-xl lg:text-[17px] md:text-[16px] leading-7 xl:leading-10 lg:leading-8 md:leading-7 mt-5 xl:mt-0 lg:mt-0 md:mt-[-10px] '>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button />
      </div>

      <div className='max-w-[480px] flex-1'>
        <img
          src={card}
          alt="bill"
          loading="lazy"
          className='w-full h-auto sm:h-[430px] xl:mt-0 lg:mt-0 md:mt-16 mt-16'
        />
      </div>
    </section>
  )
}

export default Card