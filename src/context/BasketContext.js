const { createContext, useState, useContext } = require("react");

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const values = { basket, setBasket };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
