import React from "react";
import { useLocation, Link } from "react-router-dom";
const BreadCrumb = () => {
  const { pathname } = useLocation();
  let pathnameArray = pathname.split("/").filter((path) => path);
  console.log(pathnameArray);
  let BreadCrumbPath = "";
  return (
    <div className="container">
      <div className="py-4 flex flex-row gap-2">
        <span className="inline-block">
          <Link to={"/"}>Home</Link>
        </span>
        {pathnameArray?.map((name, index) => {
          BreadCrumbPath += `/${name}`;
          const isLast = index === pathnameArray?.length - 1;
            return isLast ? (
              <div className="flex flex-row gap-1.5">
                <span>/</span>
                <span className="text-gray-500" key={index}>{name}</span>
              </div>
            ) : (
              <div className="flex flex-row gap-1.5">
                <span>/</span>
                <span key={index}>
                  <Link className="" to={BreadCrumbPath}>
                    {name}
                  </Link>
                </span>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default BreadCrumb;
