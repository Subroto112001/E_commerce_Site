import React from 'react'
import Heading from '../../../Component/CommonComponent/Heading'
import Shirt from '../../../assets/Bestselling/Shirt.png'
import Soundbox from '../../../assets/Bestselling/SoundBox.png'
import table from "../../../assets/Bestselling/table.png";
import Bag from "../../../assets/Bestselling/Bag.png";
import { FaRegHeart } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
const BestSellingProduct = () => {
     const BestSellingItem = [
       {
         id: 1,
         name: "The north coat",
         price: "$260",
         prevpRICE: "$360",
         rating: "65",
         picture: Shirt,
       },
       {
         id: 2,
         name: "Gucci duffle bag",
         price: "$960",
         prevpRICE: "$1160",
         rating: "65",
         picture: Bag,
       },
       {
         id: 3,
         name: "RGB liquid CPU Cooler",
         price: "$160",
         prevpRICE: "$170",
         rating: "65",
         picture: Soundbox,
       },
       {
         id: 4,
         name: "Small BookSelf",
         price: "$375",
         prevpRICE: "$400",
         rating: "99",
         picture: table,
       },
     ];
    return (
      <div className="container">
        <div className="pt-[70px]">
          <Heading
            HeadingTitle={"This Month"}
            SeconderyHeading={"Best Selling Products"}
            showtimer={false}
            isButton={true}
          />
            </div>
            
            <div className='flex justify-between mt-[60px]'>
                {BestSellingItem.map((item) => (
                       <div key={item.id} >
                                  <div className="w-[270px] h-[270px] bg-secondary_color flex justify-center items-center relative group ">
                                    <picture>
                                      <img src={item.picture} alt={item.name} />
                                    </picture>
                                    
                    
                                    {/* absolute item2 will bw here */}
                                    <div className="flex flex-col absolute top-[12px] right-[12px] text-[16px] gap-[8px]">
                                      <span className="bg-white rounded-full p-[10px] cursor-pointer">
                                        <FaRegHeart />
                                      </span>
                                      <span className="bg-white rounded-full p-[10px] cursor-pointer">
                                        <FiEye />
                                      </span>
                                    </div>
                                    {/* absolute item2 will bw here */}
                                  
                                  </div>
                    
                                  <div className="mt-[16px]">
                                    <h3 className="font-poppins text-[16px] font-medium text-black">
                                      {item.name}
                                    </h3>
                                    <div className="flex gap-[12px]">
                                      <span className="font-poppins text-[16px] font-medium text-Secondary2_color">
                                        {item.price}
                                      </span>
                                    
                                    </div>
                                    <div></div>
                                  </div>
                                </div>
                ))}
            </div>
      </div>
    );
}

export default BestSellingProduct