import React, { useContext, useEffect } from "react";
import ParentContext from "../../context/ParentContext";
import { TextHighlighter, GridBackground, TreeView } from "react-ui-essentials";
// import ScrollSpyContainer from "../../components/ScrollSpyContainer/ScrollSpyContainer";
// import { Container, Row, Col, Hidden, Visible } from "../../components/Grid";
// import FlexboxController from "../../components/FlexboxController/FlexboxPlayGround";
// import GlassmorphismGenerator from "../../components/GlassmorphismGenerator/GlassmorphismGenerator";
// import BorderRadiusGenerator from "../../components/BorderRadiusGenerator/BorderRadiusGenerator";

const GetStarted = () => {
  const { dispatch } = useContext(ParentContext);

  useEffect(() => {
    dispatch({ type: "SET_PAGE_TYPE", payload: "getStarted" });
  }, []);

  const folder = {
    name: "services",
    children: [
      { name: "Extraction", children: [{ name: "claud" }, { name: "gpt3" }] },
      {
        name: "Gen Ai",
        children: [{ name: "claud" }, { name: "gpt" }, { name: "misterl" }],
      },
      { name: "Vegetables", children: [{ name: "Beets" }, { name: "Carrots" }, { name: "Celery" }] },
    ],
  };

  return (
    <div style={{ padding: "18px" }}>
      {/* <Container fluid>
        <Row align="start" style={{ height: "75px" }} debug>
          <Col debug>1 of 3</Col>
          <Col debug>2 of 3</Col>
          <Col debug>3 of 3</Col>
        </Row>
        <br />
        <Row align="center" style={{ height: "75px" }} debug>
          <Col debug>1 of 3</Col>
          <Col debug>2 of 3</Col>
          <Col debug>3 of 3</Col>
        </Row>
        <br />
        <Row align="end" style={{ height: "75px" }} debug>
          <Col debug>1 of 3</Col>
          <Col debug>2 of 3</Col>
          <Col debug>3 of 3</Col>
        </Row>
        <br />
        <Row align="stretch" style={{ height: "75px" }} debug>
          <Col debug>1 of 3</Col>
          <Col debug>2 of 3</Col>
          <Col debug>3 of 3</Col>
        </Row>
      </Container> */}
      {/* <BorderRadiusGenerator /> */}
      {/* <GlassmorphismGenerator/> */}
      {/* <FlexboxController /> */}
      <TreeView data={folder} showCheckBox={false} />

      <div>
        <GridBackground width="50%" height="400px" borderColor="#ccc">
          <TextHighlighter highlightText={["large", "highlighted", "is"]} colorsList={["#9b5de5"]}>
            This is a large pilelarge large of paragraphs. is Some of them will be highlighted.This is a large pilelarge
            large of paragraphs. is Some of them will be highlighted.This is a large pilelarge large of paragraphs. is
            Some of them will be highlighted.This is a large pilelarge large of paragraphs. is Some of them will be
            highlighted.This is a large pilelarge large of paragraphs. is Some of them will be highlighted.This is a
            large pilelarge large of paragraphs. is Some of them will be highlighted.
          </TextHighlighter>
        </GridBackground>
      </div>
    </div>
  );
};

export default GetStarted;
