import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section className='w-full'>
      <div className='max-w-7xl mx-auto hidden md:hidden lg:flex flex-wrap justify-center items-center mt-15 mb-20 '>
        {stats.map((stat, index) => (
          <div key={index} className='min-w-[380px] flex flex-wrap flex-row m-3 justify-between items-center '>
            <h4 className='sm:text-4xl text-3xl font-bold'>{stat.value}</h4>
            <p className='sm:text-[20px] text-[16px] text-gradient'>{stat.title}</p>
            {index !== stats.length - 1 && (
              <p className="hidden sm:block sm:text-[20px] text-[16px] mx-6">|</p>
            )}
          </div>
        ))}
      </div>

      <div className='sm:hidden lg:hidden md:grid grid grid-cols-1 place-content-center mt-12 sm:mb-0 mb-[-25px] '>
      {stats.map((stat, index) => (
          <div key={index} className='min-w-[300px] flex flex-row m-3 justify-between items-center bg-gradient-to-b from-black to-gray-900 p-4 rounded-3xl box-shadow'>
            <h4 className='sm:text-4xl text-3xl font-bold'>{stat.value}</h4>
            <p className='sm:text-[20px] text-[16px] text-gradient'>{stat.title}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Stats