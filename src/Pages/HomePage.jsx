import React from "react";
import Banner from "../Component/HomePageComponent/Banner/Index";
import FlashPart from "../Component/HomePageComponent/FlashSection/Index";
import BrowseCategroy from "../Component/HomePageComponent/BrowseCategory/Index";
import BestSellingProduct from "../Component/HomePageComponent/BestSellingProduct/BestSellingProduct";
import Categories from "../Component/HomePageComponent/Ctegories/Categories";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashPart />
      
      <BrowseCategroy />
  
      <BestSellingProduct />
      <Categories/>
    </div>
  );
};

export default HomePage;
