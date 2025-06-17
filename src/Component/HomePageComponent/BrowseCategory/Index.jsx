import React from "react";
import Heading from "../../CommonComponent/Heading";
import BrowseCategory from "./BrowseCategoryItem";

const BrowseCategroy = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-[80px] flex gap-4 ">
        <Heading
          HeadingTitle={"Categories"}
          SeconderyHeading={"Browse By Category"}
          showtimer={false}
          isButton={false}
        />
      </div>
      <div className="mt-[40px]  ">
        <BrowseCategory />
      </div>
    </div>
  );
};

export default BrowseCategroy;
