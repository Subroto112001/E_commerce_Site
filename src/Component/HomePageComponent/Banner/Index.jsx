import React from 'react'
import { TbMathGreater } from 'react-icons/tb';

const Banner = () => {

    const banneritem = [
      {
        id: 1,
        name: "Woman’s Fashion",
      },
      {
        id: 2,
        name: "Men’s Fashion",
      },
      {
        id: 3,
        name: "Electronics",
      },
      {
        id: 4,
        name: "Home & Lifestyle",
      },
      {
        id: 5,
        name: "Medicine",
      },
      {
        id: 6,
        name: "Sports & Outdoor",
      },
      {
        id: 7,
        name: "Baby’s & Toys",
      },
      {
        id: 8,
        name: "Groceries & Pets",
      },
      {
        id: 9,
        name: "Health & Beauty",
      }
    ];

  return (
    <div className="container">
      <div className="flex ">
        <div className="left w-[15%] border-r-[1px] border-gray-500">
          <div>
                      <ul className='flex flex-col gap-[16px] pt-[40px] pr-[16px] '>{banneritem.map((item) => {
                          return (
                            <li key={item.id} className='flex items-center justify-between'>
                              {item.name}
                              <span>
                                <TbMathGreater />
                              </span>
                            </li>
                          );          
            })}</ul>
          </div>
        </div>
              <div className="right w-[85%] pt-[40px] pl-[45px]">
                  

        </div>
      </div>
    </div>
  );
}

export default Banner