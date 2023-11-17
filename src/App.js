import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import { Box } from "@chakra-ui/react";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Box p="20px">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
