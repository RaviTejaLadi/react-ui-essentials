import React, { useContext, useEffect, useMemo, useState } from "react";
import ParentContext from "../../context/ParentContext";
import styles from "./Home.module.css";
import {
  BasicCard,
  Button,
  LinkButton,
  Modal,
  JsonViewer,
  SplitButton,
  Divider,
  RoundedIcons,
  EditableTable,
  MiniCard,
  Content,
  UseFilteredContent,
  Ripple,
  ToastContainer,
  showToast,
  Popover,
  // Tab,
  // Tabs,
  TabList,
} from "react-ui-essentials";
import { cardData, footerLinks } from "../../data/homeData";
import Splitter from "../../components/Splitter/Splitter";
import Transfer from "../../components/Transfer/Transfer";
// import MeterGroup from "../../components/MeterGroup/MeterGroup";
// import TabList from "../../components/TabList/TabList";
const {Abc}=RoundedIcons

const Home = () => {
  const [open, setOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const { dispatch } = useContext(ParentContext);
  const data = [];
  useEffect(() => {
    dispatch({ type: "SET_PAGE_TYPE", payload: "home" });
  }, []);

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      Object?.values(item ?? "")?.some((val) =>
        val?.toString()?.toLowerCase()?.includes(debouncedSearchTerm?.toLowerCase())
      )
    );
  }, [data, debouncedSearchTerm]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  const currentYear = new Date().getFullYear();
  const firstHalfRef = React.useRef();
  const secondHalfRef = React.useRef();
  const headers = [];
  const rows = [];
  const rowColors = [];

  for (let i = 0; i < 10; i++) {
    headers.push(`Column ${i + 1}`);
  }

  for (let i = 0; i < 7; i++) {
    const rowData = [];
    const randomColor = Math.random() < 0.5 ? "lightred" : "lightgreen";
    rowColors.push(randomColor);
    rowData.push(`Person ${i + 1}`);
    rowData.push(Math.floor(Math.random() * 50) + 18);
    rowData.push(`person${i + 1}@example.com`);
    for (let j = 0; j < 7; j++) {
      rowData.push(`Data ${j + 1}`);
    }
    rows.push(rowData);
  }
  const values = [
    { label: "Javascript", color: "#34d399", value: 16 },
    { label: "Css", color: "#fbbf24", value: 8 },
    { label: "Html", color: "#60a5fa", value: 24 },
    { label: "Python", color: "#c084fc", value: 10 },
  ];

  const handleShowToast = () => {
    showToast("help", "This is a success message!", {
      setToasts: setToasts,
      autoClose: 10000,
    });
  };
  const dropdownItems = [
    {
      label: "Option 1",
      value: "option1",
      onClick: () =>
        showToast("primary", "This is a success message!", {
          setToasts: setToasts,
          autoClose: 5000,
        }),
    },
    {
      label: "Option 2",
      value: "option2",
      onClick: () =>
        showToast("secondary", "This is a success message!", {
          setToasts: setToasts,
          autoClose: 5000,
        }),
    },
    {
      label: "Option 3",
      value: "option3",
      onClick: () =>
        showToast("success", "This is a success message!", {
          setToasts: setToasts,
          autoClose: 5000,
        }),
    },
  ];

  const roundSvgList = Object.entries(RoundedIcons).map(([key, SvgComponent], index) => ({
    id: index + 1,
    svg: <SvgComponent width="35px" height="35px" fill="#5f6368" />,
    label: SvgComponent.displayName,
    code: `import ${SvgComponent.displayName} from './Icons/Round/index.jsx';
    
    const App=()=>{
      return(
        <${SvgComponent.displayName}/>
      )
    }
    `,
    import: `import ${SvgComponent.displayName} from "./${SvgComponent.displayName}"`,
  }));
  // console.log(roundSvgList);
  const CardsPerPage = 40;
  const { searchStates, PaginationStates, cardData } = UseFilteredContent(roundSvgList, CardsPerPage);
  // console.log(cardData);
  let tabs = [
    {
      label: "Tab 1",
      active: true,
      disabled: false,
      content: "Content for Tab 1",
      icon: "⬇️",
    },
    {
      label: "Tab 2",
      // active: true,
      disabled: false,
      content: "Content for Tab 2",
      icon: "⬆️",
    },
    {
      label: "Tab 3",
      // active: false,
      disabled: false,
      content: "Content for Tab 3 (disabled)",
      icon: "👉🏻",
    },
    {
      label: "Tab 4",
      // active: false,
      disabled: false,
      content: "Content for Tab 4",
      icon: <Abc width="15px" height="15px" style={{marginTop:"5px"}}/>,
    },
  ];

  return (
    <div>
      <TabList tabs={tabs} orientation="horizontal" width="fit-content" margin="5px" />
      <Content margin="10px" rounded padding="10px">
        <Content.Header>Header</Content.Header>
        <Divider />
        <Content.Body
          searchStates={searchStates}
          PaginationStates={PaginationStates}
          cards={cardData.map((item) => (
            <MiniCard
              key={item.id}
              svg={item.svg}
              title={searchStates.highlightSearchTerm(item.label, searchStates.debouncedSearchTerm)}
            />
          ))}
        ></Content.Body>
        <Divider />
        <Content.Footer>Footer</Content.Footer>
      </Content>
      {/* <RoundSvgLoader/> */}
      {/* <MeterGroup title="Languages" values={values} max="100" height="8px" />  */}
      {/* <Transfer/> */}
      {/* <Tabs controls>
        <Tab eventKey="Preview" title="Preview" size="sm" variant="primary" defaultActiveKey>
          test 1
        </Tab>
        <Tab eventKey="Code" size="sm" title="Code">
          test 2
        </Tab>
      </Tabs> */}
      {/* 
      <Splitter
        firstHalfRef={firstHalfRef}
        orientation="vertical"
        secondHalfRef={secondHalfRef}
        width="90%"
        height="400px"
        margin="10px"
      >
        <Splitter.LeftContainer padding="10px" firstHalfRef={firstHalfRef} size="50%" minSize="5%">
          Lorem ipsum dolor sit,
        </Splitter.LeftContainer>
        <Splitter.RightContainer padding="10px" secondHalfRef={secondHalfRef} size="50%" minSize="5%">
          Lorem ipsum dolor sit,
        </Splitter.RightContainer>
      </Splitter> */}
      {/* <EditableTable headers={headers} rows={rows} rowColor={rowColors} /> */}
    </div>
  );
};

export default Home;
