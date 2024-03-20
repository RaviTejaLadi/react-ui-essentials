import React, { memo, useEffect, useReducer, useCallback } from "react";
import { Button,PreviewCode ,Dropdown,Box} from "react-ui-essentials";
import styles from "./FlexboxPlayGround.module.css";
import { initialstates, reducer } from "./Reducer";

const FlexboxPlayGround = () => {
  const [state, dispatch] = useReducer(reducer, initialstates);
  const {
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
    flexWrap,
    gap,
    rowGap,
    columnGap,
    alignSelf,
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    divs,
    code,
  } = state;

  let css;
  useEffect(() => {
    css = `
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content:${alignContent};
    flexWrap:${flexWrap};
    gap: ${gap};
    row-gap: ${rowGap};
    column-gap:${columnGap};
    align-self:${alignSelf}
    order:${order};
    flex-grow:${flexGrow};
    flex-basis:${flexBasis};
    flex-shrink:${flexShrink};
    flex:${flex};
    height: 200px;
    width: 100%;
    background-color: #ddd;
`;
    dispatch({ type: "SET_CODE", payload: css });
  }, [
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
    flexWrap,
    gap,
    rowGap,
    columnGap,
    alignSelf,
    order,
    flexGrow,
    flexBasis,
    flexShrink,
    flex,
  ]);
  const colors = ["coral", "lightblue", "lightgreen", "pink", "yellow", "purple", "orange", "cyan", "magenta", "lime"];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(css);
  };

  const addDiv = useCallback(() => {
    dispatch({ type: "SET_DIVS", payload: [...divs, divs.length] });
  }, [divs]);

  const deleteDiv = useCallback(
    (index) => {
      dispatch({ type: "SET_DIVS", payload: divs.filter((_, i) => i !== index) });
    },
    [divs]
  );

  const ClearDivs = useCallback(() => {
    dispatch({ type: "SET_DIVS", payload: Array.from({ length: 0 }, (_, i) => i) });
  }, [divs]);

  const containerStyles = {
    display: "flex",
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    flexWrap: flexWrap,
    gap: gap,
    rowGap: rowGap,
    columnGap: columnGap,
    alignSelf: alignSelf,
    order: order,
    flexGrow: flexGrow,
    flexBasis: flexBasis,
    flexShrink: flexShrink,
    flex: flex,
    height: "auto",
    width: "60%",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    overflow: "auto",
  };

  const itemStyles = {
    padding: "10px",
    margin: "5px",
    border: "1px solid transperent",
    borderRadius: "5px",
  };
  const inputData = [
    { title: "Gap", type: "SET_GAP", value: gap },
    { title: "Order", type: "SET_ORDER", value: order },
    { title: "Flex Grow", type: "SET_FLEX_GROW", value: flexGrow },
    { title: "Flex Shrink", type: "SET_FLEX_SHRINK", value: flexShrink },
    { title: "Flex Basis", type: "SET_FLEX_BASIS", value: flexBasis },
    {
      title: "Flex",
      type: "SET_FLEX",
      value: flex,
      placeholder: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
    },
  ];
  const dropDownData = [
    {
      title: "Flex Direction",
      type: "SET_FLEX_DIRECTION",
      options: ["row", "row-reverse", "column", "column-reverse"],
      value: flexDirection,
    },
    { title: "Flex Wrap", type: "SET_FLEX_WRAP", options: ["nowrap", "wrap", "wrap-reverse"], value: flexWrap },
    {
      title: "Justify Content",
      type: "SET_JUSTIFY_CONTENT",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "start",
        "end",
        "left",
        "right",
      ],
      value: justifyContent,
    },
    {
      title: "Align Items",
      type: "SET_ALIGN_ITEMS",
      options: [
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "first baseline",
        "last baseline",
        "start",
        "end",
        "self-start",
        "self-end",
      ],
      value: alignItems,
    },
    {
      title: "Align Content",
      type: "SET_ALIGN_CONTENT",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "start",
        "end",
        "baseline",
        "first baseline",
        "last baseline",
      ],
      value: alignContent,
    },
    {
      title: "Align Self",
      type: "SET_ALIGN_SELF",
      options: ["auto", "flex-start", "flex-end", "center", "stretch", "baseline"],
      value: alignSelf,
    },
  ];
  return (
    <Box elevation={1} width="100%" height="80vh" rounded className={styles.rue_flex_box_container}>
      <Box elevation={0} width="60%" outlined height="auto" style={containerStyles}>
        {divs.map((_, i) => (
          <Box
            elevation={1}
            rounded
            key={i}
            width="100px"
            height="80px"
            style={{
              color: "#ffff",
              backgroundColor: colors[i % colors.length],
              ...itemStyles,
            }}
          >
            Item:{i + 1}
            <Button size="sm" variant="secondary" onClick={() => deleteDiv(i)}>
              x
            </Button>
          </Box>
        ))}
      </Box>
      <Box elevation={0} outlined width="39%" height="auto" style={{ padding: "10px", overflow: "auto" }}>
        <Box
          elevation={0}
          outlined
          width="100%"
          height="auto"
          style={{ padding: "10px", marginBottom: "5px", display: "flex", justifyContent: "space-between" }}
        >
          <Button size="sm" variant="light" onClick={addDiv}>
            Add Item
          </Button>
          <Button size="sm" variant="light" onClick={ClearDivs}>
            Clear All
          </Button>
          <Button size="sm" variant="light" onClick={copyToClipboard}>
            Copy CSS
          </Button>
        </Box>

        <Box
          elevation={0}
          outlined
          style={{
            padding: "10px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {dropDownData.map((item, index) => (
            <Dropdown
              key={index}
              width="46%"
              title={item.title}
              options={item.options}
              handleSelect={(option) => dispatch({ type: item.type, payload: option })}
              selectedOption={item.value}
            />
          ))}
        </Box>
        <Box
          elevation={0}
          outlined
          style={{
            padding: "10px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {inputData.map((item, index) => (
            <div key={index} className={styles.rue_input_container}>
              <div className={styles.rue_input_Title}>
                <span style={{ fontSize: "0.8125rem", fontWeight: "500" }}> {item.title}: </span>
              </div>

              <input
                className={styles.input_style}
                type="text"
                value={item.value}
                onChange={(e) => dispatch({ type: item.type, payload: e.target.value })}
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </Box>
        <PreviewCode width="100%">{code}</PreviewCode>
      </Box>
    </Box>
  );
};

export default memo(FlexboxPlayGround);
