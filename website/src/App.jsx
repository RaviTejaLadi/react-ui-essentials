import React, { useMemo, useReducer } from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ParentContext from "./context/ParentContext";
import reducer from "./Reducer/reducer";
import initialState from "./Reducer/initialstate";
import GetStarted from "./Pages/GetStarted/GetStarted";

import PageNotFound from "./Pages/PageNotFound/PageNotFound";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValues = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);

  return (
    <ParentContext.Provider value={contextValues}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route exact={true} path="/getStarted" element={<GetStarted />} />
            <Route exact={true} path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ParentContext.Provider>
  );
};
export default App;
