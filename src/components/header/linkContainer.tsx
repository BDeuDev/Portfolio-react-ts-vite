import React from 'react';
import MobileLink from './mobileLink';
import { links } from '../../gateways/links';
import { texts } from '../../gateways/icons';
interface linkContainerProps {
    click:boolean;
}
const LinkContainer:React.FC<linkContainerProps> = ({click}) => {
  return (
    <div className={`flex flex-col items-center justify-center xl:hidden lg:hidden shadow-2xl z-40 fixed  glassmorphism-xl-menu border-r-[2px] border-[#ffff]  top-0  w-full h-screen transition-transform ease-in-out duration-[1.5s] transform  ${!click ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='w-full h-[40px] bg-white absolute top-[50px] shadow-black'>
        <img src="./wood.jpg" alt="" className='object-cover w-full h-full'/>
      </div>
      <div className='w-full h-[40px] bg-white absolute bottom-0 shadow-black'>
      <img src="./wood.jpg" alt="" className='object-cover w-full h-full'/>
      </div>
      <div className='w-[40px] h-full bg-white absolute right-0 shadow-black'>
      <img src="./wood.jpg" alt="" className='object-cover w-full h-full'/>
      </div>
      <div className='w-[40px] h-full bg-white absolute left-0 shadow-black'>
      <img src="./wood.jpg" alt="" className='object-cover w-full h-full'/>
      </div>
      <MobileLink texts={texts} link={links}/>
    </div>
  );
};

export default LinkContainer;