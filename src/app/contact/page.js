import Frequent from '@/components/frequent/Frequent'
import TimeBox from '@/components/time/TimeBox'
import Image from 'next/image'
import React from 'react'
import { FaLocationDot, FaMailchimp } from 'react-icons/fa6'
import { contact } from '../../../public/asset'

const Contact = () => {
  return (
    <div>
      <div className='contact-image'>
        <Image src="/Frame20.png" alt='Frame' width={500} height={500} className='w-[100%]'/>
        <div className='contact-form'>
          <div className='contact-form-contain'>
            <div className='contact-text'>
              <h1>Get in touch with us</h1>
              <p>Do you want to sign up or ask a question or make enquiry? Please drop a message for us and we will be in touch with you</p>
            </div>

            <div className='w-[100%]'>
              <form action="" className='cont-form'>
                <input type="text" placeholder='Full name'/>
                <input type="text" placeholder='Email address'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
                <button type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Frequent/>
      <div className='support'>
        <div className='our-text'>
          <h1>Our Support Hours</h1>
          <p>Our business hours are Monday-Friday, 9AM-5PM ET — we will respond to all inquiries as soon as possible</p>
        </div>
        <div className='flex items-center gap-5'>
          {contact.map((contact) =>(
            <TimeBox name={contact.name} text={contact.text} icon={contact.icon}/>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Contact