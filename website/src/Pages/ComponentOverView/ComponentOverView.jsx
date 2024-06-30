import React from "react";
import { accordion, tabs } from "./utils/svgs";
import { Box, Divider, Typography } from "react-ui-essentials";

const ComponentOverView = () => {
  let disclosureData = [
    {
      id: Math.random(),
      label: "Accordion",
      icon: accordion,
    },
    {
      id: Math.random(),
      label: "Tabs",
      icon: tabs,
    },
  ];
  return (
    <Box elevation={0} margin="30px">

      <Divider horizontal={true} />
      <Box elevation={0} style={{ display: "flex", flexDirection: "column" }}>
        <Box elevation={0} style={{ display: "flex" }}>
          {disclosureData.map((item) => {
            return (
              <Box key={item.id} elevation={1} width="15rem" height="12rem" rounded margin="15px">
                <Box
                  elevation={0}
                  rounded
                  width="100%"
                  height="85%"
                  style={{ padding: "10px", backgroundColor: "#edf2f7" }}
                >
                  <img src={item.icon} alt="icon" width="100%" height="80%" />
                </Box>
                <Box elevation={0} rounded width="100%" height="15%" style={{ padding: "5px" }}>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentOverView;
