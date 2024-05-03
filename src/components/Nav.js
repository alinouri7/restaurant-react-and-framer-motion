import React, {useRef} from 'react';
import { Link } from 'react-scroll';

// import data
import { navData } from '../data';
// import 


const Nav = () => {
  
 


  return <nav className='w-full h-full '>
     {/* <ul className=' h-full flex flex-col justify-center
     items-center gap-y-6'>
      {navData.map((item,index) => {
       const handleClick = (e) => {
        e.preventDefault();
        window.location.href = `${item.href}`;
       };
       
        return <li key={index}>
          <Link className='text-xl capitalize font-primary italic 
          hover:text-dark transition-all duration-300' 
          onClick={ handleClick }      
          to='about'
          >          
          {item.name}
          </Link>
        </li>
      })}
    </ul>  */}
     <ul className=' h-full flex flex-col justify-center
     items-center gap-y-6'>
          <li className='text-xl capitalize font-primary italic 
          hover:text-dark transition-all duration-300'  >
                
                 
             <Link  to='home'>home</Link>
        </li>

             <Link to='about'>about</Link>
             <Link to='menu'>menu</Link>
             <Link to='team'>team</Link>
             <Link to='testmonials'>testmonials</Link>
             <Link to='reserve'>reserve</Link>
             <Link to='contact' smooth={true} duration={500}>contact</Link>
          
       

     </ul>
  </nav> 
};

export default Nav;
