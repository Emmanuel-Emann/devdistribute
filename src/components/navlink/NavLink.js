"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const link = [
  {href:"/about", name:"ABOUT"},
  {href:"/faq", name:"FAQs"},
  {href:"/contact", name:"CONTACT US"},
  // {href:"/about", name:"About"}
]
const NavLink = () => {
  const pathname = usePathname()
  return (
    <>
    {link.map((link) =>(
      <Link href={link.href} key={link.href} className={`nav-text ${pathname === link.href ? "bg-teal-950 text-white" : "hover:opacity-50"}`}>{link.name}</Link>
    ))}
    </>
  )
}

export default NavLink