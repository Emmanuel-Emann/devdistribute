import Faqs from '@/components/faqfreq/Faqs'
import React from 'react'

const Faqss = () => {
  return (
    <div>
      <Faqs/>
      <div className='flex flex-col items-center justify-center faq'>
        <div className='faqs-text'>
          <h1>Still can't find the answer you're looking for?</h1>
          <p>Reach out to us, and we would be happy to help!</p>
        </div>
        <button>Contact Us</button>
      </div>
      <div className='faq-fm'>
        <div className='faq-form'>
          <h1>Get exclusive updates on deals, discounts & new arrivals straight in your inbox</h1>
          <form action="" className='faq-input'>
            <input type="text" name="" id="" placeholder='Full name'/>
            <input type="email" name="" id="" placeholder='Email'/>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Faqss;