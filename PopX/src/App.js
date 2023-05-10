import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Landingpage/Landingpage";
import Signin from "./Pages/Signinpage/Signin";
import Createaccount from "./Pages/Createaccountpage/Createaccount";
import Profilepage from "./Pages/Profilepage/Profilepage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/createaccount" element={<Createaccount />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/profile" element={<Profilepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
