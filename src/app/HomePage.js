import Image from 'next/image'
import React from 'react'
import Welcome from '@/components/welcome/Welcome'
import { FaMobileScreenButton } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Link from 'next/link';
import Unique from '@/components/unique/Unique';
import Business from '@/components/business/Business';
import Pproduct from '@/components/pproduct/Pproduct';
import GetApp from '@/components/getapp/GetApp';
import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import Advert from '@/components/ads/Advert';

const HomePage = () => {

  return (
    <div>
      <Welcome/>
      <Unique/>
      <Business/>
      <Pproduct/>
      <GetApp/>
      <div className="">
        <div className='question-contain'>
          <h1>Frequently Asked Questions.</h1>
        </div>
      </div>
      <div className=''>
        <div>
          <Image src="/Rectangle51.png" width={500} height={500} alt='Rectangle51' className='w-[100%]'/>
        </div>
        <div className='current-location'>
          <div className='current-locate_absolute'>
            <h1>We currently serve only Lagos</h1>
            <p>Which of these cities would you want us to serve next?</p>
            <div className='current-input'>
              <input type="text"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className='location-container'>
          <div className='locate-text'>
            <h2 className=''>Your favorite brands are already on board</h2>
          </div>
          <Image src="/Frame1983.png" width={500} height={500} alt='Frame1983' className='w-[100%]'/>
        </div>
      </div>
      <EmblaCarousel/>
      <Advert/>
    </div>
  )
}

export default HomePage