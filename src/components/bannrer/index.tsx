import React from 'react'

import {Carousel} from 'react-responsive-carousel'

const Banner:React.FC = () => {
  return (
    <div className='relative max-h-[98vh]'>

      <div className='absolute w-full h-40 bg-gradient-to-t from-gray-300 to-transparent bottom-0 z-20' />

      <Carousel 
        autoPlay
        infiniteLoop
        showArrows
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}

      >
        <div>
          <img src="https://links.papareact.com/gi1" loading='lazy' alt="" />
        </div>

        <div>
          <img src="https://links.papareact.com/6ff" loading='lazy' alt="" />
        </div>

        <div>
          <img src="https://links.papareact.com/7ma" loading='lazy' alt="" />
        </div>

      </Carousel>
    </div>
  )
}

export default Banner
