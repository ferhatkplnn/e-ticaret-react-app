import { createContext, useState, useContext, useEffect } from "react";

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(defaultBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const removeFromBasket = (product) => {
    const newBasket = basket.filter((p) => !(p._id === product._id));

    setBasket([...newBasket]);
  };

  const contextValues = { basket, setBasket, addToBasket, removeFromBasket };

  return (
    <BasketContext.Provider value={contextValues}>
      {children}
    </BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
