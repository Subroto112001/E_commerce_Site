import React from "react";
import Banner from "../Component/HomePageComponent/Banner/Index";
import FlashPart from "../Component/HomePageComponent/FlashSection/Index";
import BrowseCategroy from "../Component/HomePageComponent/BrowseCategory/Index";
import BestSellingProduct from "../Component/HomePageComponent/BestSellingProduct/BestSellingProduct";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashPart />
      
      <BrowseCategroy />
  
      <BestSellingProduct />
    </div>
  );
};

export default HomePage;
