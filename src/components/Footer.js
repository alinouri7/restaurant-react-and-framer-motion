import React from 'react';
// import components
import Newsletter from "./Newsletter"
import Copyright from './Copyright'
import Socials from './Socials'

// import data
import {footerData} from '../data'
// import motion 
import { motion } from 'framer-motion'
// import variants 
import {fadeIn, staggerContainer} from '../variants'


const Footer = () => {
  // destructure footer data
      const {contact, hours , social } = footerData;
  
  return <footer className='z-20 bg-dark lg:bg-transparent
   lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 
  '>
    <div className="container mx-auto h-full">
      {/* newsletter & info */}
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      className='k-full flex flex-col gap-y-12'>
        {/* newsletter */}
        <motion.div variants={fadeIn("up", "tween" , 0.4, 1.6 )}>
          <Newsletter />
        </motion.div>
        {/* info */}
        <motion.div variants={fadeIn("up", "tween" , 0.6, 1.6 )}
         className='flex flex-col lg:flex-row lg:gap-x-[130px]
        gap-y-12 lg:gap-y-0 lg:mb-12 
        '>
          {/* contact */}
          <div className='flex-1 lg:max-w-[170px]'>
            <div className='capitalize text-[20px] lg:text-[22px] fpnt-normal 
             text-white font-primary mb-[22px] 
            '>
              {contact.title}
              </div>
            <div className='capitalize'>{contact.address}</div>
            <div className='capitalize'>{contact.phone}</div>
          </div>
          {/* program */}
          <div className='flex-1 bg-pink-100/10 '>
          <div className='capitalize text-[20px] lg:text-[22px] fpnt-normal 
             text-white font-primary mb-[22px] 
            '>
              {hours.title}
              </div>
            <div className='flex gap-x-[46px]'>
              {hours.program.map((item,index)=>{
                return <div className='capitalize ' key={index}>
                  <div>
                  <div>{item.days}</div>
                  <div className='text-[20px] text-accent '>{item.hours}</div>
                  </div>
                </div>
              })}
            </div>
          </div>
          {/* social */}
          <div className='flex-1 lg:max-w-[28px] mb-12 '>
          <div className='capitalize text-[20px] lg:text-[22px] fpnt-normal 
             text-white font-primary mb-[22px] 
            '>
              {social.title}
              </div>
            <Socials />
          </div>
        </motion.div>
        {/* copy right */}
        <Copyright />
      </motion.div>


    </div>
  </footer> ;
};

export default Footer;
