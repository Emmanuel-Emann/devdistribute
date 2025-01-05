"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavLink from '../navlink/NavLink'

const NavBar = () => {
  return (
    <nav>
      <div className="header">
      <header className='flex justify-between items-center p-6 pl-20 pr-20'>
        <Link href="/home" className="image-text_name">
          <Image src="/buylocal2.png" alt width={100} height={100}/>
          <h4 className='text-xl font-bold'>BuyLocalAfrica</h4>
        </Link>
        <nav className='flex items-center gap-16'>
          <ul className='flex items-center gap-16'>
            <NavLink/>
          </ul>
          <button className='rounded-md bg-teal-950 text-white button-nav'>
            <Link href={"/"}>Get The App</Link>
          </button>
        </nav>
      </header>
    </div>
    </nav>
  )
}

export default NavBar