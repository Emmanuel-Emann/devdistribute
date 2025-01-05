import Image from 'next/image'
import React from 'react'

const Current = () => {
  return (
          <div className=''>
        <div>
          <Image src="/Rectangle51.png" width={500} height={500} alt='Rectangle51' className='w-[100%]'/>
        </div>
        <div className='current-location'>
          <div className='current-locate_absolute'>
            <h1>We currently serve only Lagos</h1>
            <p>Which of these cities would you want us to serve next?</p>
            <form className='current-input'>
              {/* <input type="text"/> */}
              <select name="dropdown" id="dropdown">
                <option value="pickacity" className='master-option'>Pick a city</option>
                <option value="abia">Abia</option>
                <option value="adamawa">Adamawa</option>
                <option value="buachi">Buachi</option>
                <option value="benue">Benue</option>
                <option value="borno">Borno</option>
                <option value="cross river">Cross River</option>
                <option value="ebonyi">Ebonyi</option>
                <option value="edo">Edo</option>
                <option value="enugu">Enugu</option>
                <option value="gombe">Gombe</option>
                <option value="imo">Imo</option>
                <option value="jigawa">Jigawa</option>
                <option value="kaduna">Kaduna</option>
                <option value="kano">Kano</option>
                <option value="katsina">Katsina</option>
                <option value="kebbi">Kebbi</option>
                <option value="kogi">Kogi</option>
                <option value="kwara">Kwara</option>
                <option value="lagos">Lagos</option>
                <option value="nasarawa">Nasarawa</option>
                <option value="niger">Niger</option>
                <option value="ogun">Ogun</option>
                <option value="ondo">Ondo</option>
                <option value="osun">Osun</option>
                <option value="oyo">Oyo</option>
                <option value="plateau">Plateau</option>
                <option value="rivers">Rivers</option>
                <option value="sokoto">Sokoto</option>
                <option value="taraba">Taraba</option>
                <option value="yobe">Yobe</option>
                <option value="zamfara">Zamfara</option>
                <option value="abuja">Abuja</option>
              </select>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div className='location-container'>
          <div className='locate-text'>
            <h2 className=''>Your favorite brands are already on board</h2>
          </div>
          <Image src="/Frame1983.png" width={500} height={500} alt='Frame1983' className='w-[100%]'/>
        </div>
      </div>
  )
}

export default Current