import "./App.css";
import { Box } from "@mui/material";
import HeaderSearchAppBar from "./Header/Index";
import BodyCard from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Box>
        <BrowserRouter>
          <HeaderSearchAppBar />
          <Routes>
            <Route path="/" element={<BodyCard />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
