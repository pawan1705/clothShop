import { createContext } from "react";

export const ShopContext = createContext();
import { products } from "../assets/frontend_assets/assets";
const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fees = 20;
  const value = {
    products,
    currency,
    delivery_fees,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
