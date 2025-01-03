"use client"
import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  // PrevButton,
  // NextButton,
  // usePrevNextButtons
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { asset } from '../../../public/asset'

const EmblaCarousel = (props) => {
  // const images = [
  //   {id:1,image: Rectangle},
  //   {id:2,image1: "/Rectangle51.png"},
  //   {id:3,image2: "/Rectangle51.png"},
  //   {id:4,image3: "/Rectangle51.png"},
  //   {id:5,image3: "/Rectangle51.png"}
  // ]
  // const { slides, options } = images
  const [emblaRef, emblaApi] = useEmblaCarousel()

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__controls">
        <div className="embla__dots">
            {/* {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))} */}
            <h2 className='text-4xl font-bold w-[70%]'>What existing partners and users are saying about us</h2>
        </div>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {asset.map((data, index) => (
            <div className="embla__slide" key={data.id}>
              <Image src={data.image} width={500} height={500} alt='Rectangle51' className='w-[100%]'/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel