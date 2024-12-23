import Image from 'next/image'
import React from 'react'
import Welcome from '@/components/welcome/Welcome'
import { FaMobileScreenButton } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Link from 'next/link';
import Unique from '@/components/unique/Unique';

const HomePage = () => {
  return (
    <div>
      <Welcome/>
      <Unique/>
      <div className='bizz-contain'>
        <div className='flex items-center justify-center'>
          <div className='bizz-texts'>
            <div className='bizz-texts_h1'><h1>FOR BUSINESS</h1></div>
            <div className='bizz-text'>
              <h1>Tailored Solutions for Business Owners.</h1>
              <p>Focus on your business while we handle the sourcing and delivery of your bulk food and essential items, saving you time and effort on sourcing logistics.</p>
            </div>
          </div>
          <div className='bizz-image'>
            <Image src="/Group43231.png" alt='true' width={100} height={100} className='bizz-image'/>
          </div>
        </div>
        <div className='flex items-center mt-16 justify-between gap-20'>
          <div className='person-image'>
            <Image src="/Group43231-2.png" alt='true' width={100} height={100} className='person-image'/>
          </div>
          <div className='person-texts'>
            <div className='person-texts_h1'><h1>FOR INDIVIDUALS</h1></div>
            <div className='person-text'>
              <h1>Bulk shopping for Individuals made easy</h1>
              <p>Whether you're buying for your family or stocking up for yourself, enjoy the convenience of ordering bulk food and essential items, delivered straight to your door at unbeatable prices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage