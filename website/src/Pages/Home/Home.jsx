import React, { useContext, useEffect } from "react";
import ParentContext from "../../context/ParentContext";
import styles from "./Home.module.css";
import { Seo } from "react-ui-essentials";

const Home = () => {
  const { dispatch } = useContext(ParentContext);
  useEffect(() => {
    dispatch({ type: "SET_PAGE_TYPE", payload: "home" });
  }, []);

  return (
    <div>
      <Seo>
        <title>HomePage</title>
      </Seo>
      {/* <MeterGroup title="Languages" values={values} max="100" height="8px" />  */}
      {/* <Transfer/> */}
    </div>
  );
};

export default Home;
