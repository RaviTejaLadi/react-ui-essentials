import React from "react";
import { Box, Heading, Paragraph, Table, Divider, View } from "react-ui-essentials";

let data = {
  title: "Typography",
  description: `Use React UI Essentials Typography to present your website/web app as clearly and efficiently as possible.`,
  code: `
import React from "react";
import { Typography } from "react-ui-essentials";

const Component = () => {
  return (
    <>
      <Typography variant="h1">{data.title}</Typography>
      <Typography variant="p" italic>
        {data.description}
      </Typography>
    </>
  );
};

export default Component;
`,
};

const TypographyPage = () => {
  const columns = ["Name", "Type", "Default", "Description"];
  const rows = [
    [
      "variant",
      "string",
      "p",
      "This prop determines the HTML element used for the text. It can be one of 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', or 'span'. The default value is 'p'.",
    ],
    ["underline", "bool", "null", "If true, the text will be underlined."],
    ["overline", "bool", "null", "If true, the text will be overlined."],
    ["dashed", "bool", "null", "If true, the text will have a line through it."],
    ["italic", "bool", "null", "If true, the text will be italicized."],
    ["strong", "bool", "null", "If true, the text will be bolded."],
    ["strikethrough", "bool", "null", "If true, the text will have a line through it."],
    ["marked", "bool", "null", "If true, the text will have a yellow background."],
    ["smaller", "bool", "null", "If true, the text will be smaller (0.8em)."],
    ["deleted", "bool", "null", "If true, the text will have a line through it."],
    ["inserted", "bool", "null", "If true, the text will be underlined."],
  ];

  return (
    <Box elevation={0} width="80%" margin="30px" height="auto" outlined>
      <Heading type="h1">{data.title}</Heading>
    </Box>
  );
};

export default TypographyPage;
