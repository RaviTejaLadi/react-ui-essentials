import React from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BadgePage from "./Pages/BadgePage/BadgePage";
import ButtonPage from "./Pages/ButtonPage/ButtonPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact={true} path='/button' element={<ButtonPage />} />
          <Route exact={true} path='/badge' element={<BadgePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
