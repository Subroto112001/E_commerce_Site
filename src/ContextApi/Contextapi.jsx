// src/Context/ProductContext.jsx
import { createContext, useContext } from "react";
import { useGetProductQuery } from "../Features/AllSlice/Api/ProductApi";

// Create context
const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const { data, error, isLoading } = useGetProductQuery();

  return (
    <ProductContext.Provider
      value={{
        products: data, 
        error,
      isLoading
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for easy access
export const useProduct = () => useContext(ProductContext);
