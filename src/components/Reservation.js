import React, {useState}from 'react';
//import data
import { reservationData} from '../data'
// import datepicker 
import DatePicker from 'react-datepicker';
// import datePicker css
import 'react-datepicker/dist/react-datepicker.css'
//  import timepicker 
import TimePicker  from 'react-time-picker'
// import timepicker css

// import icons
import {FaUsers, FaCalendar, FaClock} from 'react-icons/fa'
// import motion 
import { motion, stagger } from "framer-motion"
// import variants
import {fadeIn, staggerContainer} from '../variants'


const Reservation = () => {
// destructure reservetion date
const {title, subtitle, modelImg ,  placeholder ,btnText} = reservationData
// date state
const [startDate, setStartDate] = useState(new Date());
// clock state
const [value, setValue] =  useState('10:00');  

  return <section className='mt-[450px] 
   z-30 pb-20 lg:py-[100px]
  '>
    <div className="container mx-auto">
   {/* text */}
   <motion.div 
   variants={staggerContainer}
   initial="hidden"
   whileInView={"show"}
   className='text-center '>
    {/* title  */}
       <motion.h2 
         variants={fadeIn('up', 'tween' , 0.2 , 1.6)}
       className='h2 capitalize '>{title}</motion.h2>
       {/* subtitle  */}
    <motion.p 
      variants={fadeIn('up', 'tween' , 0.4 , 1.6)}
    className='mb-8 text-dark ' >
      {subtitle}
      </motion.p>
       {/* model  */}
       <motion.div 
          variants={fadeIn('up', 'tween' , 0.6 , 1.6)}
       className='flex justify-center mb-8  '>
        <img src={modelImg} alt="" />
       </motion.div>
   </motion.div>
   {/* form */}
   <motion.form 
       variants={fadeIn('up', 'tween' , 0.7 , 1.6)}
       initial="hidden"
       whileInView={"show"}
   >
    <div className='flex flex-col lg:flex-row gap-y-4 items-center 
   justify-between mb-8'>
    {/* datepicker */}
    <div >
    <div className='flex items-center gap-x-[10px] 
    font-semibold text-dark text-base mb-3 
    '>
      <FaCalendar />
      <div>Choose Date</div>
    </div>
      
      <DatePicker className='input' selected={startDate} 
      onChange={(date ) => setStartDate(date)} />
    </div>
    {/* timepicker */}
    <div className='text-start '>
    <div className='flex items-center gap-x-[10px] 
   
    font-semibold text-dark text-base mb-3 
    '>
      <FaClock />
      <div>Choose Time </div>
      </div>
     <div className=''>
     <TimePicker  
      className='input bg-white pl-[10px] pt-[14px] '
      clearIcon={false} 
      clockIcon={false} 
      onChange={setValue}
      value={value}
      />
     </div>
    </div>
    {/* person number */}
    <div>
    <div className='flex items-center gap-x-[10px] 
    font-semibold text-dark text-base mb-3 
    '>
      <FaUsers />
      <div>Hoe many people? </div>
    </div>
       <input className='input'  type="text"   />
    </div>
    </div>
    {/* button */}
    <div className='max-w-[316px] mx-auto flex justify-center '>
      <button  className='btn capitalize w-full lg:w-auto '>  {btnText} </button>
    </div>
    </motion.form>
    </div>
  </section>;
};

export default Reservation;
