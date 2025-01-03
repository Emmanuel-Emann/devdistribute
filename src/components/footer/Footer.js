import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return(
    <div className="footer-container">
      <div className="flex items-center justify-between send-foot pb-16">
        <div className="foot-side">
          <h1>We listen to you.</h1>
          <p>Help us improve, share your feedback</p>
          <div className="foot-input">
            <input type="text" placeholder="example@gmail.com"/>
            <button>Submit</button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">Get the App</h1>
          <div className='flex flex-col gap-3'>
            <button className=''>
              <Image src="/AppStore-2.png" alt='AppStore2' width={100} height={100} className='w-40'/>
            </button>
            <button className=''>
              <Image src="/AppStore.png" alt='AppStore' width={100} height={100} className='w-36'/>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center w-[100%] send-foot pb-16">
        <div className="foot-image">
          <div className="flex items-center gap-3">
            <Image src="/buylocal2.png" alt width={100} height={100}/>
            <h1 className="text-xl font-bold">BuyLocalAfrica</h1>
          </div>
          <p className="foot-tx">We empower smallholder investors across Africa by linking them to finance, data-driven best practices, and access to local & global markets for their commodities.</p>
        </div>
        <div className="foot-nav">
          <h2><Link href="/about" >About</Link></h2>
          <h2><Link href="/faqs" >FAQs</Link></h2>
          <h2><Link href="/contact" >Contact Us</Link></h2>
        </div>
        <div className="foot-fllw">
          <h2>Follow US</h2>
          <div className="flex items-center gap-3">
            <FaInstagram size={24}/>
            <FaXTwitter size={24}/>
            <MdOutlineFacebook size={24}/>
            <CiLinkedin size={24}/>
          </div>
        </div>
      </div>
      <div>
        <h2>2024 Buylocalafrica. All rights reserved <span className="text-amber-400">By Emmanuel Dolapo</span></h2>
      </div>
    </div>
  )
}

export default Footer