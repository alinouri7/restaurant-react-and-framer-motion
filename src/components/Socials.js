import React from 'react';
// import date
import { socialData } from '../data';


const Socials = () => {
  return <div className='flex gap-x-[10px]'>
    {socialData.map((icon,index)=>{
      return <a className=' flex border rounded-full w-[35px] h-[35px]
       items-center justify-center text-sm 
       hover:text-accent hover:border-accent transition-all ' 
       href={icon.href} key={index}>{icon.icon}</a>
       
    })}
  </div>;
};

export default Socials;
