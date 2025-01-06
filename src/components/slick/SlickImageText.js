import Image from 'next/image'
import React from 'react'
import { slickasset } from '../../../public/asset'

const SlickImageText = ({name, image}) => {
  return (
    <div className='w-[75%]'>
      <Image src={image} width={500} height={500} className="w-[100%]"/>
      <div className='sli-text'>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default SlickImageText