import React, { useMemo, useReducer } from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BadgePage from "./Pages/BadgePage/BadgePage";
import ButtonPage from "./Pages/ButtonPage/ButtonPage";
import Home from "./Pages/Home/Home";
import ParentContext from "./context/ParentContext";
import reducer from "./Reducer/reducer";
import initialState from "./Reducer/initialstate";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Component from "./Pages/Component/Component";
import LinkButtonPage from "./Pages/LinkButtonPage/LinkButtonPage";
import Introduction from "./Pages/Introduction/Introduction";
import TypographyPage from "./Pages/TypographyPage/TypographyPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ComponentOverView from "./Pages/ComponentOverView/ComponentOverView";
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
            <Route exact={true} path="/getStarted/introduction" element={<Introduction />} />
            <Route exact={true} path="/components" element={<Component />} />
            <Route exact={true} path="/button" element={<ButtonPage />} />
            <Route exact={true} path="/badge" element={<BadgePage />} />
            <Route exact={true} path="/linkButton" element={<LinkButtonPage />} />
            <Route exact={true} path="/typography" element={<TypographyPage />} />
            <Route exact={true} path="/componentsOverview" element={<ComponentOverView />} />
            <Route exact={true} path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ParentContext.Provider>
  );
};
export default App;
