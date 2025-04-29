import React from 'react'

const Feed = () => {
  return (
    <section className='max-w-7xl mx-auto mt-36 flex sm:flex-row flex-col justify-between items-center mb-24 gap-20'>
        <div className='max-w-[640px] flex-1'>
            <h2 className='text-[30px] sm:text-[54px] font-medium '>What people are saying about us</h2>
        </div>
        <div className='max-w-[480px] mt-[-70px] sm:mt-0'>
            <p className='text-gray-400 text-[17px] leading-8 xl:mt-0 lg:mt-0 md:mt-0 mt-10'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
    </section>
  )
}

export default Feed