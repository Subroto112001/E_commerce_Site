import React from 'react'
import Heading from '../../CommonComponent/Heading';
import FlashSalesProduct from "./FlashSalesProduct";


const FlashPart = () => {
  return (
    <div className="container  ">
      <div className="mt-[140px] flex gap-4 ">
        <Heading
          HeadingTitle={"Today's"}
          SeconderyHeading={"Flash Sales"}
          showtimer={true}
          isButton={false}
        />
      </div>
      <div className="mt-[40px] border-b border-gray-400  pb-[70px]">
        <FlashSalesProduct />
      </div>
    </div>
  );
}

export default FlashPart;