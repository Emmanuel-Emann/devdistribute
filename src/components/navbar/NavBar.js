import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div>
      <div className="header">
      <header className='flex justify-between items-center p-6 pl-20 pr-20'>
        <div className="image-text_name">
          <Image src="/buylocal2.png" alt width={100} height={100}/>
          <h4 className='text-xl font-bold'>BuyLocalAfrica</h4>
        </div>
        <nav className='flex items-center gap-16'>
          <ul className='flex items-center gap-16'>
            <li className="nav-text"><a href="">ABOUT</a></li>
            <li className="nav-text"><a href="">FAQs</a></li>
            <li className="nav-text"><a href="">CONTACT</a></li>
          </ul>
          <button className='rounded-md bg-teal-950 text-white button-nav'>
            <Link href={"/"}>Get The App</Link>
          </button>
        </nav>
      </header>
    </div>
    </div>
  )
}

export default NavBar