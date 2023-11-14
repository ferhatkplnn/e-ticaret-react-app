import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box p="20px">
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
