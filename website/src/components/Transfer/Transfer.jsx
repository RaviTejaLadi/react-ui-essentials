import React, { useState } from "react";
import styles from "./Transfer.module.css";
import { Box, Button, Divider, Heading, Paragraph } from "react-ui-essentials";

const Transfer = () => {
  const [leftItems, setLeftItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ]);
  const [rightItems, setRightItems] = useState([
    { id: 1, name: "Item 6" },
    { id: 2, name: "Item 7" },
    { id: 3, name: "Item 8" },
    { id: 4, name: "Item 9" },
    { id: 5, name: "Item 10" },
  ]);
  const [selectedLeftItems, setSelectedLeftItems] = useState([]);
  const [selectedRightItems, setSelectedRightItems] = useState([]);

  const handleCheckboxChange = (event, item, container) => {
    if (container === "left") {
      if (event.target.checked) {
        setSelectedLeftItems([...selectedLeftItems, item]);
      } else {
        setSelectedLeftItems(selectedLeftItems.filter((i) => i.id !== item.id));
      }
    } else {
      if (event.target.checked) {
        setSelectedRightItems([...selectedRightItems, item]);
      } else {
        setSelectedRightItems(selectedRightItems.filter((i) => i.id !== item.id));
      }
    }
  };

  const moveItemsRight = () => {
    setRightItems([...rightItems, ...selectedLeftItems]);
    setLeftItems(leftItems.filter((item) => !selectedLeftItems.some((i) => i.id === item.id)));
    setSelectedLeftItems([]);
  };

  const moveItemsLeft = () => {
    setLeftItems([...leftItems, ...selectedRightItems]);
    setRightItems(rightItems.filter((item) => !selectedRightItems.some((i) => i.id === item.id)));
    setSelectedRightItems([]);
  };

  const selectAllLeft = () => {
    if (selectedLeftItems.length === leftItems.length) {
      setSelectedLeftItems([]);
    } else {
      setSelectedLeftItems(leftItems.slice());
    }
  };

  const selectAllRight = () => {
    if (selectedRightItems.length === rightItems.length) {
      setSelectedRightItems([]);
    } else {
      setSelectedRightItems(rightItems.slice());
    }
  };

  const handleSubmit = () => {
    console.log("Left Container Items:", leftItems);
    console.log("Right Container Items:", rightItems);
  };

  return (
    <Box margin="10px" padding="10px" outlined width="90%" height="auto" className={styles.rue_transfer_container}>
      <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>
        <Box padding="10px" width="300px" height="100%" outlined>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Heading type="h4">Left Container</Heading>
            <div className={styles.rue_item}>
              <input
                type="checkbox"
                onChange={selectAllLeft}
                checked={selectedLeftItems.length === leftItems.length && leftItems.length > 0}
              />
              <Paragraph>Select All</Paragraph>
            </div>
          </Box>
          <Divider horizontal />
          <ul className={styles.rue_item_list}>
            {leftItems.map((item) => (
              <li key={item.id} className={styles.rue_item}>
                <input
                  type="checkbox"
                  checked={selectedLeftItems.some((i) => i.id === item.id)}
                  onChange={(event) => handleCheckboxChange(event, item, "left")}
                />
                <Paragraph>{item.name}</Paragraph>
              </li>
            ))}
          </ul>
        </Box>
        <Box
          outlined
          padding="10px"
          width="auto"
          height="100%"
          style={{ display: "flex", flexDirection: "column", justifyContent: "spaceBetween" }}
        >
          <Button onClick={moveItemsRight} style={{ marginBottom: "8px" }} disabled={selectedLeftItems.length === 0}>
            Move Right
          </Button>
          <Button onClick={moveItemsLeft} disabled={selectedRightItems.length === 0}>
            Move Left
          </Button>
        </Box>
        <Box padding="10px" width="300px" height="100%" outlined>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Heading type="h4">Right Container</Heading>
            <div className={styles.rue_item}>
              <input
                type="checkbox"
                onChange={selectAllRight}
                checked={selectedRightItems.length === rightItems.length && rightItems.length > 0}
              />
              <Paragraph>Select All</Paragraph>
            </div>
          </Box>
          <Divider horizontal />
          <ul className={styles.rue_item_list}>
            {rightItems.map((item) => (
              <li key={item.id} className={styles.rue_item}>
                <input
                  type="checkbox"
                  checked={selectedRightItems.some((i) => i.id === item.id)}
                  onChange={(event) => handleCheckboxChange(event, item, "right")}
                />
                <Paragraph>{item.name}</Paragraph>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
      <Divider horizontal />
      <Box padding="2px" style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Transfer;
