import React, { useContext, useEffect } from "react";
import ParentContext from "../../context/ParentContext";
import {
  TextHighlighter,
  Tag,
  Banner,
  Alert,
  FullScreenToggle,
  GridBackground,
  GridLines,
  Button,
  Avatar,
  ContentScrollable,
  Divider,
  Fieldset,
  Figure,
  ListGroups,
  Modal,
  Table,
  LinkBar,
  TreeView,
  Box,
  View,
  Accordion,
  Heading,
} from "react-ui-essentials";
// import ScrollSpyContainer from "../../components/ScrollSpyContainer/ScrollSpyContainer";
import { Container, Row, Col, Hidden, Visible } from "../../components/Grid";
import FlexboxController from "../../components/FlexboxController/FlexboxPlayGround";
import GlassmorphismGenerator from "../../components/GlassmorphismGenerator/GlassmorphismGenerator";
import BorderRadiusGenerator from "../../components/BorderRadiusGenerator/BorderRadiusGenerator";
import Slider from "../../components/Slider/Slider";

const GetStarted = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleCanvas = () => {
    setIsOpen(!isOpen);
  };
  const { dispatch } = useContext(ParentContext);

  useEffect(() => {
    dispatch({ type: "SET_PAGE_TYPE", payload: "getStarted" });
  }, []);

  const handleisModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleisModalClose = () => {
    setIsModalOpen(false);
  };

  const columns = ["Name", "Age", "Location"];
  const rows = [
    ["John Doe", 25, "New York"],
    ["Jane Smith", 30, "Los Angeles"],
    ["Alice Johnson", 28, "Chicago"],
  ];

  let Branches = [
    { id: 4, branch: "Computer Science and Engineering", linkid: "#C1" },
    { id: 2, branch: "Mechanical Engineering", linkid: "#C2" },
    { id: 1, branch: "Civil Engineering", linkid: "#C3" },
    { id: 3, branch: "Electrical Engineering", linkid: "#C4" },
    { id: 5, branch: "Chemical Engineering", linkid: "#C5" },
  ];

  const codeSnippet = `
  <Stack
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"
  alignContent="flex-start"
  flexWrap="wrap"
  spacing={4}
>
  <Stack.Item>
    <Box elevation={2} rounded>
      item 1
    </Box>
  </Stack.Item>
  <Stack.Item>
    <Box elevation={2} rounded>
      item 2
    </Box>
  </Stack.Item>
  <Stack.Item>
    <Box elevation={2} rounded>
      item 3
    </Box>
  </Stack.Item>
</Stack>
  `;

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

  let links = [
    { name: "Link 1", url: "/", icon: "📑" },
    { name: "Link 2", url: "" },
    { name: "Link 3", url: "" },
    { name: "Link 4", url: "" },
    { name: "Link 5", url: "" },
    { name: "Link 6", url: "" },
    { name: "Link 7", url: "" },
    { name: "Link 8", url: "" },
    { name: "Link 9", url: "" },
    { name: "Link 10", url: "" },
    { name: "Link 11", url: "" },
    { name: "Link 12", url: "" },
    { name: "Link 13", url: "" },
    { name: "Link 14", url: "" },
    { name: "Link 15", url: "" },
    { name: "Link 16", url: "" },
    { name: "Link 17", url: "" },
    { name: "Link 18", url: "" },
    { name: "Link 19", url: "" },
    { name: "Link 20", url: "" },
    { name: "Link 21", url: "" },
    { name: "Link 22", url: "" },
    { name: "Link 23", url: "" },
    { name: "Link 24", url: "" },
  ];
  const acc = [
    {
      id: 1,
      header: "How do I sign up for CourseSimplified?",
      text: `Signing up is easy! Just click the 'Sign Up' button on the homepage and follow the instructions.`,
    },
    {
      id: 2,
      header: "Can I access courses on CourseSimplified for free?",
      text: "Yes, we offer a selection of free courses. However, some courses may require payment.",
    },
    {
      id: 3,
      header: "How can I reset my password?",
      text: "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
  ];
  return (
    <div style={{ padding: "18px" }}>
      <Heading type="h6" variant="secondary" copy>
        Heading tag
      </Heading>
      <Heading type="h6" variant="info" marked>
        Heading tag
      </Heading>
      <Container fluid>
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
      </Container>
      {acc.map((list, { id }) => {
        return <Accordion width="50%" variant="help" outlined key={id} content={list} />;
      })}
      <BorderRadiusGenerator />
      {/* <GlassmorphismGenerator/> */}
      <FlexboxController />
      <LinkBar links={links} showControls padding="4px" height="39px" elevation={0} outlined />
      <TreeView data={folder} showCheckBox={false} />
      {/* <EmojiListRenderer
        list={[
          { id: 4, content: "Computer Science and Engineering" },
          { id: 2, content: "Mechanical Engineering" },
          { id: 1, content: "Civil Engineering" },
          { id: 3, content: "Electrical Engineering" },
          { id: 5, content: "Chemical Engineering" },
        ]}
        width="260px"
        elevation={2}
        rounded
        customEmoji="🟢"
      /> */}
      {/* <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        alignContent="flex-start"
        flexWrap="wrap"
        spacing={4}
      >
        <Stack.Item>
            item 1
        </Stack.Item>
        <Stack.Item>
            item 2
        </Stack.Item>
        <Stack.Item>
            item 3
        </Stack.Item>
      </Stack> */}
      <Box elevation={2} padding="10px" width="300px" height="150px" rounded>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt aliquam repellendus voluptatem at numquam
        inventore molestiae, nobis quidem obcaecati cum beatae suscipit perspiciatis culpa, quae consequuntur molestias
        ut illum.
      </Box>
      <Box elevation={2} padding="10px" width="300px" height="150px" outlined>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt aliquam repellendus voluptatem at numquam
        inventore molestiae, nobis quidem obcaecati cum beatae suscipit perspiciatis culpa, quae consequuntur molestias
        ut illum.
      </Box>
      <Box elevation={3} padding="10px" width="300px" height="150px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt aliquam repellendus voluptatem at
        numquam inventore molestiae, nobis quidem obcaecati cum beatae suscipit perspiciatis culpa, quae consequuntur
        molestias ut illum.
      </Box>
      <Slider
        width="600px"
        height="500px"
        borderRadius="10px"
        border="1px solid #ccc"
        showDots={false}
        showAutoPlay={true}
        autoPlaySize="sm"
        autoPlayVarient="primary"
      />
      {/* <View width="60%" /> */}
      {/* <TextArea width="100%" height="300px" value={codeSnippet.trim("")} /> */}
      <Button onClick={handleisModalOpen} variant="light" size="sm">
        modal show
      </Button>
      {isModalOpen && (
        <Modal isOpen={handleisModalOpen} variant="primary" size="sm" placement="top">
          <Modal.Header>
            <h3 className="modal-title">Warning</h3>
            <Button size="sm" variant="light" onClick={handleisModalClose}>
              &#x2715;
            </Button>
          </Modal.Header>
          <Modal.Body>
            description="Something went wrong.Please click on the below button to go back to Home."
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" variant="primary" onClick={handleisModalClose}>
              yes
            </Button>
            <Button size="sm" variant="light" onClick={handleisModalClose}>
              close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Fieldset height="350px" title="test" variant="info">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi repudiandae doloremque placeat in, omnis
        quo impedit laboriosam, neque, accusamus qui harum. Provident et placeat dolores porro officia, voluptas
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt ad! Deleniti repellendus
        ullam sequi facere ipsum! Asperiores iste eius dolorum cupiditate sit sunt? Quibusdam officiis quas saepe
        dolorem deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus, fuga voluptate
        doloribus officia officiis dolor dolorem ducimus odit ea hic quod deserunt ut esse alias sequi, saepe, ratione
        eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi maxime vel minus esse animi vero
        rerum ullam dolore! Animi doloribus natus voluptatem inventore voluptas amet. Quaerat dicta sequi veritatis.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dolore, corporis enim quaerat voluptate nulla
        aspernatur facilis rem veritatis sint dolorum eligendi atque! Fugit, sint voluptates. Atque distinctio deserunt
        nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium deleniti fugit ipsum cumque
        iusto quam nisi nostrum rem deserunt incidunt animi quisquam iste ullam quae, atque ipsam. Eveniet, consequatur?
      </Fieldset>

      <ContentScrollable width="100%" height="200px" variant="dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus autem aperiam amet at, consequuntur
        similique! Sit corrupti dolores aperiam quo adipisci similique, eligendi, alias vero laudantium est voluptatem
        necessitatibus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat minus ipsam voluptas ullam?
        Nihil eos asperiores odio ea harum repellat eum laboriosam adipisci rerum quo quidem magni, quas corrupti
        possimus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maxime sapiente repellendus ipsam
        rerum molestias, libero mollitia ducimus amet officia eveniet vero, laboriosam consequuntur velit magnam fugit
        adipisci earum exercitationem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod soluta iusto et
        eos optio ab deleniti quam voluptatibus vero dolores consectetur, corrupti dignissimos magni dolor sapiente
        accusamus odit maiores. Iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repellat dicta
        rerum distinctio illo voluptates. Repellat qui magnam itaque sed maxime assumenda corrupti, hic culpa fuga ad
        delectus provident non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum a tempore vitae, at
        numquam pariatur voluptates voluptatibus saepe incidunt eius maiores ut minus non laborum cupiditate, inventore
        itaque reprehenderit!
      </ContentScrollable>
      <Table columns={columns} rows={rows} basic={false} />
      <ListGroups
        width="200px"
        items={["item1", "item2", "item3", "item4", "item5", "item6"]}
        size="sm"
        variant="light"
      />
      <div style={{ padding: "30px" }}>
        {/* <Figure src={d} alt="pic" width="100px" height="100px" caption="demo pic" /> */}
      </div>
      <Divider
        horizontal={true}
        color="#ccc"
        content={
          <Tag variant="primary" size="sm">
            Tag
          </Tag>
        }
        contentPlacement="start"
      />
      {/* <Avatar src={d} alt="profilePic" width="100px" height="100px" fluid={true} curvedBorder={false} circle={true} /> */}
      <FullScreenToggle variant="secondary" size="sm" text="Full Screen" />
      <Banner Title="Test" subTitle="subTitle" variant="danger" size="sm" />
      <Tag variant="primary" size="sm">
        Tag
      </Tag>
      <Tag variant="secondary" size="sm">
        Tag
      </Tag>
      <Tag variant="warning" size="sm">
        Tag
      </Tag>
      <Tag variant="danger" size="sm">
        Tag
      </Tag>
      <Tag variant="success" size="sm">
        Tag
      </Tag>
      <Tag variant="info" size="sm">
        Tag
      </Tag>
      <Tag variant="light" size="sm">
        Tag
      </Tag>
      <Tag variant="dark" size="sm">
        Tag
      </Tag>
      <Tag variant="primary" size="md">
        Tag
      </Tag>
      <Tag variant="secondary" size="md">
        Tag
      </Tag>
      <Tag variant="warning" size="md">
        Tag
      </Tag>
      <Tag variant="danger" size="md">
        Tag
      </Tag>
      <Tag variant="success" size="md">
        Tag
      </Tag>
      <Tag variant="info" size="md">
        Tag
      </Tag>
      <Tag variant="primary" size="lg">
        Tag
      </Tag>
      <Tag variant="secondary" size="lg">
        Tag
      </Tag>
      <Tag variant="warning" size="lg">
        Tag
      </Tag>
      <Tag variant="danger" size="lg">
        Tag
      </Tag>
      <Tag variant="success" size="lg">
        Tag
      </Tag>
      <Tag variant="info" size="lg">
        Tag
      </Tag>
      <Tag variant="primary" size="xl">
        Tag
      </Tag>
      <Tag variant="secondary" size="xl">
        Tag
      </Tag>
      <Tag variant="warning" size="xl">
        Tag
      </Tag>
      <Tag variant="danger" size="xl">
        Tag
      </Tag>
      <Tag variant="success" size="xl">
        Tag
      </Tag>
      <Tag variant="info" size="xl">
        Tag
      </Tag>
      <Tag variant="primary" size="xxl">
        Tag
      </Tag>
      <Tag variant="secondary" size="xxl">
        Tag
      </Tag>
      <Tag variant="warning" size="xxl">
        Tag
      </Tag>
      <Tag variant="danger" size="xxl">
        Tag
      </Tag>
      <Tag variant="success" size="xxl">
        Tag
      </Tag>
      <Tag variant="info" size="xxl" disabled={true}>
        Tag
      </Tag>
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
      <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={12}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, hic deserunt eius ducimus autem tenetur est
        illum dolorem harum molestiae, asperiores veniam ab maiores cum tempora eos provident aliquid quisquam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque assumenda ratione placeat, tenetur nam
        nihil temporibus consequuntur amet quos fuga. Quisquam aspernatur perspiciatis facilis illo ipsa itaque, magni
        quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus molestias saepe, mollitia ut
        dignissimos amet minus libero quia autem in rem. Repellendus a repellat inventore repudiandae. Placeat,
        consequatur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, commodi inventore blanditiis ipsam
        laudantium perferendis beatae nemo. Asperiores neque, accusantium sit amet dolorum provident nostrum itaque
        quam? Sit, inventore ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet voluptates
        harum qui ullam sunt a laborum omnis blanditiis molestiae natus distinctio nesciunt, id officiis eveniet. Iusto
        aliquid excepturi similique?
      </GridLines>
      <Alert variant="primary">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
      <Alert variant="secondary">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
      <Alert variant="success">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
      <Alert variant="warning">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
      <Alert variant="danger">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
      <Alert variant="info">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
      <Alert variant="light">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
      <Alert variant="dark">
        <Alert.Header>Header</Alert.Header>
        <Alert.Body>Body</Alert.Body>
        <Alert.Footer>Footer</Alert.Footer>
      </Alert>
    </div>
  );
};

export default GetStarted;
