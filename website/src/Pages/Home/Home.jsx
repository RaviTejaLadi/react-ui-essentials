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
} from "react-ui-essentials";
import { cardData, footerLinks } from "../../data/homeData";
import SearchBar from "../../components/SearchBar/SearchBar";
import Splitter from "../../components/Splitter/Splitter";
import DynamicTable from "../../components/DynamicTable/DynamicTable";
import { Tab, Tabs } from "../../components/Tab/Tabs/Tabs";
import Transfer from "../../components/Transfer/Transfer";
import MeterGroup from "../../components/MeterGroup/MeterGroup";
import Popover from "../../components/Popover/Popover";
import Ripple from "../../components/Ripple/Ripple";
import { ToastContainer, showToast } from "../../components/Toast/ToastContainer";
import Content from "../../components/Content/Content";
import UseFilteredContent from "../../components/Content/UseFilteredContent";
import SvgPreview from "../../components/SvgPreview/SvgPreview";

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
  return (
    <div>
      <Content margin="10px" rounded padding="10px">
        <Content.Header>Header</Content.Header>
        <Divider />
        <Content.Body
          searchStates={searchStates}
          PaginationStates={PaginationStates}
          cards={cardData.map((item) => (
            <SvgPreview
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
      {/* <SplitButton
        variant="help"
        size="sm"
        onClick={handleShowToast}
        dropdownItems={dropdownItems}
        dropdownIcon="🔻"
      >
        help
        <Ripple />
      </SplitButton> 
      <Button size="sm" variant="primary" onClick={handleShowToast}>
        Show Toast
        <Ripple />
      </Button>
      <ToastContainer toasts={toasts} setToasts={setToasts} position="top-center" showClose startIcon="🎉" />
      <div style={{ margin: "auto 100px" }}>
        <Popover
          content={
            <Popover.Content width="100%" height="100%">
              <Popover.Header height="18%">header</Popover.Header>
              <Popover.Body height="64%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, inventore ad. Et, eius eos libero commodi
                ut molestias at voluptates tempore, maiores quo consequatur ad iure laudantium unde error inventore.
              </Popover.Body>
              <Popover.Footer height="18%">Footer</Popover.Footer>
            </Popover.Content>
          }
          position="bottom"
          size="sm"
        >
          <Button variant="success" size="sm" style={{ display: "block" }}>
            Bottom Popover
            <Ripple />
          </Button>
        </Popover>
      </div> */}
      {/* <MeterGroup title="Languages" values={values} max="100" height="8px" />  */}
      {/* <Transfer/> */}
      {/* <SearchBar setDebouncedSearchTerm={setDebouncedSearchTerm} /> */}
      {/* <Tabs controls>
        <Tab eventKey="tab1" title="Tab1" defaultActiveKey>
          test 1
        </Tab>
        <Tab eventKey="tab2" title="Tab2" disabled>
          test 2
        </Tab>
        <Tab eventKey="tab3" title="Tab3">
          test 3
        </Tab>
        <Tab eventKey="tab4" title="Tab4">
          test 4
        </Tab>
        <Tab eventKey="tab5" title="Tab5">
          test 5
        </Tab>
        <Tab eventKey="tab6" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab7" title="Tab2" disabled>
          test 2
        </Tab>
        <Tab eventKey="tab8" title="Tab3">
          test 3
        </Tab>
        <Tab eventKey="tab9" title="Tab4">
          test 4
        </Tab>
        <Tab eventKey="tab10" title="Tab5">
          test 5
        </Tab>
        <Tab eventKey="tab11" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab13" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab14" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab15" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab16" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab17" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab18" title="Tab6">
          test 6
        </Tab>
        <Tab eventKey="tab19" title="Tab6">
          test 6
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
      {/* <DynamicTable headers={headers} rows={rows} rowColor={rowColors} /> */}
    </div>
    // <div className={styles.home_container}>
    //   <div className={styles.home_cont1}>
    //     <div className={styles.home_cont1_div1}>
    //       <p>React UI Essentials</p>
    //       <span>Best Package For All Your Ui Needs</span>
    //     </div>
    //     <div className={styles.home_cont1_div2}>
    //       <LinkButton path="/getStarted" variant="primary" size="md">
    //         Get Started
    //       </LinkButton>
    //       <LinkButton path="/components" variant="primary" size="md">
    //         Components
    //       </LinkButton>
    //     </div>
    //   </div>
    //   <div className={styles.home_cont2}>
    //     {cardData.map((item) => (
    //       <BasicCard key={item.id} title={item.title} content={item.para} />
    //     ))}
    //   </div>
    //   <div className={styles.home_cont3}>
    //     <div>
    //       {footerLinks.map((item) => (
    //         <Link key={item.id} to={item.path}>
    //           {item.label}
    //         </Link>
    //       ))}
    //     </div>
    //     <p>Copyright © {currentYear} React UI Essentials.</p>
    //   </div>
    // </div>
  );
};

export default Home;
