import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from "./Components/Home/Home";
import { Footer } from "../src/Components/Footer/Footer";
import { Studio } from "../src/Components/pages/Studio";
import { EcoStore } from "../src/Components/pages/EcoStore";
import { Profile } from "../src/Components/pages/Profile";
import { Trend } from "../src/Components/pages/Trend";
import { Navbarpayment } from "./Components/CartComponents/components/navbarfinal/Paymentnavbar";

import { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const Location = useLocation();
  console.log(Location);

  useEffect(() => {}, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      {Location.pathname === "/bag" ||
      Location.pathname === "/address" ||
      Location.pathname === "/payment" ? (
        <Navbarpayment />
      ) : (
        <Navbar />
      )}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* 
        <Route path="/men" element={<Products data={"menTShirts"} />}></Route>
        <Route
          path="/women"
          element={<Products data={"womensProducts"} />}
        ></Route>
        <Route path="/kids" element={<Products data={"boysData"} />}></Route>
        <Route
          path="/home&living"
          element={<Products data={"homeData"} />}
        ></Route>
        <Route
          path="/Beauty"
          element={<Products data={"beautyData"} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
         <Footer></Footer>
         */}
        <Route path="/Studio" element={<Studio></Studio>}></Route>
        <Route path="/Profile" element={<Profile></Profile>}></Route>
        <Route path="/EcoStore" element={<EcoStore></EcoStore>}></Route>
        <Route path="/Trend" element={<Trend></Trend>}></Route>
      </Routes>
    </div>
  );
}

export default App;
