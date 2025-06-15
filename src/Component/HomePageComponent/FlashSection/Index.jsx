import React from 'react'
import Heading from '../../CommonComponent/Heading';
import FlashSalesProduct from '../FlashSalesProduct/Index';


const FlashPart = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-[140px] flex gap-4 ">
        <Heading HeadingTitle={"Today's"} SeconderyHeading={"Flash Sales"} />
      </div>
      <div className='mt-[40px]  '>
        <FlashSalesProduct />
      </div>
    </div>
  );
}

export default FlashPart;