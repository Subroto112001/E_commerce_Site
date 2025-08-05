import React from "react";
import Banner from "../Component/HomePageComponent/Banner/Index";
import FlashPart from "../Component/HomePageComponent/FlashSection/Index";
import BrowseCategroy from "../Component/HomePageComponent/BrowseCategory/Index";
import BestSellingProduct from "../Component/HomePageComponent/BestSellingProduct/BestSellingProduct";
import Categories from "../Component/HomePageComponent/Ctegories/Categories";
import Newarrival from "../Component/HomePageComponent/NewArrival/Newarrival";
import Delivery from "../Component/HomePageComponent/Delivery/Delivery";
import ExploreProduct from "../Component/HomePageComponent/ExploreProduct";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashPart />
      
      <BrowseCategroy />
  
      <BestSellingProduct />
      <Categories />
      <ExploreProduct/>
      <Newarrival />
      <Delivery/>
    </div>
  );
};

export default HomePage;
