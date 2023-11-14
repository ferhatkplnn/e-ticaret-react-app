import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import { Box } from "@chakra-ui/react";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box p="20px">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
