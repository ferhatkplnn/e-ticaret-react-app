const { createContext, useState, useContext } = require("react");

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (data) => {
    setBasket((prev) => [...prev, data]);
  };

  const values = { basket, setBasket, addToBasket };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
