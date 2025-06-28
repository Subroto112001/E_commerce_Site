import React from "react";
import ItemComponent from "../Component/CommonComponent/ItemComponent";
import Picture1 from "../assets/Wishlist/Bag.png";
import Picture2 from "../assets/Wishlist/Jacket.png";
import Picture3 from "../assets/Wishlist/Joistik.png";
import Picture4 from "../assets/Wishlist/Soundbox.png";
import Heading from "../Component/CommonComponent/Heading";
const Wishlist = () => {
  const wishListitem = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: "$960",
      prevpRICE: "$1160",
      rating: "35",
      picture: Picture1,
      discount: "-35%",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: "$1960",
      prevpRICE: "$1160",
      rating: "35",
      picture: Picture2,
      discount: "-35%",
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: "$550",
      prevpRICE: "$1160",
      rating: "35",
      picture: Picture3,
      discount: "-35%",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: "$750",
      prevpRICE: "$1160",
      rating: "35",
      picture: Picture4,
      discount: "-35%",
    },
  ];

  return (
    <div className="container">
      <div className="mt-[95px]">
        <div className="flex  justify-between items-center">
          <div>
            <h3 className="text-[20px] font-poppins font-normal text-black">
              Wishlist{" "}
            </h3>
          </div>
          <div>
            <button className="font-poppins font-medium text-[16px] text-black py-4 px-12 border rounded ">
              Move All To Bag
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {wishListitem.map((item) => (
            <div className="mt-[60px]">
              <ItemComponent
                itemName={item.name}
                itemPicture={item.picture}
                itemDiscount={item.discount}
                itemPrice={item.price}
                itemPrevpRICE={item.prevpRICE}
                itemRating={item.rating}
                IsDiscount={true}
                isAddcrat={true}
              />
            </div>
          ))}
        </div>

        <div className="mt-[80px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-[16px] flex-row items-center">
              <div className="w-[20px] h-[40px] bg-Secondary2_color rounded "></div>
              <h3 className="font-normal font-poppins text-[20px] text-black">
                Just For You
              </h3>
                      </div>
                   <button className="text-[16px] font-medium font-poppins text-black py-[16px] px-[48px] rounded border bg-white cursor-pointer">See All</button>   
          </div>

          <div className="flex justify-between items-center">
            {wishListitem.map((item) => (
              <div className="mt-[60px]">
                <ItemComponent
                  itemName={item.name}
                  itemPicture={item.picture}
                  itemDiscount={item.discount}
                  itemPrice={item.price}
                  itemPrevpRICE={item.prevpRICE}
                  itemRating={item.rating}
                  IsDiscount={true}
                  isAddcrat={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
