import Image from 'next/image'
import React from 'react'

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-container'>
        <div className='welcome-texts'>
          <div className='welcome-text'>
            <h1>One-stop shop for bulk food items.</h1>
            <p>We connect you to fresh, bulk food and essential items directly from manufacturers, delivered to your doorstep with ease.</p>
          </div>
          <div className='welcome-button'>
            <button className=''>
              <Image src="/app-google-play1.png" alt='app-google-play1' width={100} height={100} className='w-40'/>
            </button>
            <button className=''>
              <Image src="/Group.png" alt='Group' width={100} height={100} className='w-36'/>
            </button>
          </div>
        </div>
        <div className='welcome-image'>
          <Image src="/Group857.png" alt="Group857" width={100} height={100} className='welcome-image'/>
        </div>
      </div>
    </div>
  )
}

export default Welcome