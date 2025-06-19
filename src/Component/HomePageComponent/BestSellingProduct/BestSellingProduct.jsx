import React from 'react'
import Heading from '../../../Component/CommonComponent/Heading'
import Shirt from '../../../assets/Bestselling/Shirt.png'
import Soundbox from '../../../assets/Bestselling/SoundBox.png'
import table from "../../../assets/Bestselling/table.png";
import Bag from "../../../assets/Bestselling/Bag.png";
import { FaRegHeart } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import ItemComponent from '../../CommonComponent/ItemComponent';
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

        <div className="flex justify-between mt-[60px]">
          {BestSellingItem.map((item) => (
            <div key={item.id}>
              <ItemComponent
                itemName={item.name}
                itemPicture={item.picture}
                itemDiscount={item.discount}
                itemPrice={item.price}
                itemPrevpRICE={item.prevpRICE}
                itemRating={item.rating}
                IsDiscount={false}
                isAddcrat={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default BestSellingProduct