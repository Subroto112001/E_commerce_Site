import { RiHome8Fill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaHomeSolid } from "react-icons/lia";
import { IoGift } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";


export const sizeOfProduct = [
  {
    id: 1,
    size: "XS",
    CSS: "px-[7px] py-[6px]",
  },
  {
    id: 2,
    size: "S",
    CSS: "px-[12px] py-[6px]",
  },
  {
    id: 3,
    size: "M",
    CSS: "px-[10px] py-[6px]",
  },
  {
    id: 4,
    size: "L",
    CSS: "px-[13px] py-[6px]",
  },
  {
    id: 5,
    size: "Xl",
    CSS: "px-[8px] py-[6px]",
  },
];



// about provider
 export const aboutitem = [
   {
     id: 1,
     icon: <LiaHomeSolid />,
     name: "10.5K",
     desc: "Sallers active our site",
   },
   {
     id: 2,
     icon: <RiMoneyDollarCircleLine />,
     name: "33k",
     desc: "Monthly Product Sale",
   },
   {
     id: 3,
     icon: <IoGift />,
     name: "45.5k",
     desc: "Customer active in our site",
   },
   {
     id: 4,
     icon: <GrMoney />,
     name: "25K",
     desc: "Anual gross sale in our site",
   },
];
 
// about delivery
export const deliveryItem = [
    {
      id: 1,
      icon: <CiDeliveryTruck />,
      heading: "FREE ABD FAST DELIVERY",
      subHeading: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <BiSupport />,
      heading: "24/7 CUSTOMER SERVICE",
      subHeading: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <MdOutlineSecurity />,
      heading: "MONEY BACK GUARANTEE",
      subHeading: "We reurn money within 30 days",
    },
  ];