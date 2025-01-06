import Image from 'next/image'
import React from 'react'

const GetApp = () => {
  return (
        <div className='mb-20 mt-20'>
          <div className='get-container'>
            <h1>Get The App</h1>
            <p>We would love to have you on board. Download the app today and receive free delivery on your first order.</p>
            <div className='get-button'>
              <button className=''>
                <Image src="/app-google-play1.png" alt='app-google-play1' width={100} height={100} className='w-40'/>
              </button>
              <button className=''>
                <Image src="/Group.png" alt='Group' width={100} height={100} className='w-36'/>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-center mt-14'>
            <Image src="/Frame434831.png" width={800} height={800} className='w-[60%]' alt='Frame434831'/>
          </div>
        </div>
  )
}

export default GetApp