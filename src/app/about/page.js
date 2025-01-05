import Image from "next/image"
import React from "react"

const About = () => {

  return(
    <div>
      <div>
        <div>
          <Image src="/Rectangle66.png" width={500} height={500} className="w-[100%]"/>
        </div>
        <div className="text-about_contain">
          <div className="text-about">
            <h2>We Are</h2>
            <h1>BuyLocalAfrica.</h1>
            <p>We simplify your food item orders and connect you to fresh, bulk food and essential items directly from manufacturers, delivered to your doorstep with ease.</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-10 abt-ptn_contain">
            <h1 className="abt-text">Our Partners</h1>
            <div className="flex justify-center items-center w-[100%]">
              <Image src="/Frame212.png" width={500} height={500} alt='Frame1983' className='w-[70%]'/>
            </div>
          </div>
          <div className="w-[100%] flex items-center gap-5 mission">
            <Image src="/Rectangle27.png" width={500} height={500} className="w-[40%]"/>
            <div className="w-[50%] miss-text">
              <h1>Our Mission</h1>
              <p>Our mission is to provide more than just a place to work; we aim to create a vibrant community that supports personal growth, fosters professional development, and encourages sustainable practices.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] flex items-center gap-5 story">
            <div className="w-[50%] story-text">
              <h1>Our Story</h1>
              <p>Our mission is to provide more than just a place to work; we aim to create a vibrant community that supports personal growth, fosters professional development, and encourages sustainable practices.</p>
            </div>
            <Image src="/Rectangle69.png" width={500} height={500} className="w-[40%]"/>
        </div>
        <div className="meet-our">
          <h1>Meet Our Team</h1>
          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-5">
              <div>
                <Image src="/Rectangle63.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Daniel Asefon</h1>
                  <p>Product Designer</p>
                </div>
              </div>
              <div>
                <Image src="/Rectangle57.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Heritage John</h1>
                  <p>Product Manager</p>
                </div>
              </div>
              <div>
                <Image src="/Rectangle37.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Jessica Williams</h1>
                  <p>Data Analyst</p>
                </div>
              </div>
              <div>
                <Image src="/Rectangle7-3.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Victoria Janet</h1>
                  <p>Junior Analyst</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Image src="/Rectangle53.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Tobi Williams</h1>
                  <p>Frontend Developer</p>
                </div>
              </div>
              <div>
                <Image src="/Rectangle5-4.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Miracle George</h1>
                  <p>Backend Developer</p>
                </div>
              </div>
              <div>
                <Image src="/Rectangle6-5.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Shina Franklin</h1>
                  <p>QA Analyst</p>
                </div>
              </div>
              <div>
                <Image src="/Rectangle6-6.png" width={500} height={500} className=""/>
                <div className="team-text">
                  <h1>Joy Akpan</h1>
                  <p>Digital Marketer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5 p-[5rem] view-text">
        <h1>Want to join our dynamic team? check out our available roles.</h1>
        <button>View Open Roles</button>
      </div>
    </div>
  )

}

export default About