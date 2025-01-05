import Image from 'next/image'
import React from 'react'

const Advert = () => {
  return (
      <div className='right-place_container'>
        <div className='right-place'>
          <div className='right-place_text'>
            <h1>Right place to get your favorite products.</h1>
            <p>Ranging from food items to other essentials you need. Download our app to get started.</p>
            <div className='welcome-button'>
              <button className=''>
                <Image src="/app-google-play1.png" alt='app-google-play1' width={100} height={100} className='w-40'/>
              </button>
              <button className=''>
                <Image src="/Group.png" alt='Group' width={100} height={100} className='w-36'/>
              </button>
            </div>
          </div>
          <div className='w-[100%] ads-image'>
            <Image src="/chowdeck-app.png" width={500} height={500} className='w-[45%] ads-images' alt='chowdeck-app'/>
          </div>
        </div>
      </div>
  )
}

export default Advert