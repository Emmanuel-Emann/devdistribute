import React from 'react'
import { FaMobileScreenButton } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Link from 'next/link';

const Unique = () => {
  return (
      <div className="home-words">
        <div className='home-green'>
          <div className='home-green_text'>
            <h1>Simplifying your food item orders with our <span className='span'>Tailored Solutions</span></h1>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-16'>
              <div className='simplify'>
                <FaMobileScreenButton size={24} color='#EC9F01' className='icon'/>
                <div className='simplify-view'>
                  <h2>Effortless Ordering</h2>
                  <p>Place orders directly with manufacturers and manage your shipment through our seamless platform.</p>
                </div>
              </div>
              <div className='simplify'>
                <FaMoneyCheckDollar size={40} color='#EC9F01' className='icon'/>
                <div className='simplify-view'>
                  <h2>Competitive pricing</h2>
                  <p>We offer competitive pricing for all our bulk produce, ensuring you get the best value for your money</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-16'>
              <div className='simplify'>
                <FiBox size={40} color='#EC9F01' className='icon'/>
                <div className='simplify-view'>
                  <h2>Inventory & Analytics Support</h2>
                  <p>We provide businesses with tools to efficiently manage inventory and track sales, helping you make informed decisions</p>
                </div>
              </div>
              <div className='simplify'>
                <FaTruckArrowRight size={40} color='#EC9F01' className='icon'/>
                <div className='simplify-view'>
                  <h2>Dependable delivery</h2>
                  <p>Place orders directly with manufacturers and manage your shipment through our seamless platform.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className='rounded-md text-white home-button'>
              <Link href={"/"}>Get The App</Link>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Unique