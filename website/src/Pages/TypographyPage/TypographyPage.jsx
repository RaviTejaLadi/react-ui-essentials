import React from "react";
import { Box, Typography, Table, Divider, View } from "react-ui-essentials";

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
      <Typography variant="h1">{data.title}</Typography>
      <Typography variant="p" italic>
        {data.description}
      </Typography>
      <Divider horizontal />
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Heading Typography :</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="h1">h1</Typography>
              <Typography variant="h2">h2</Typography>
              <Typography variant="h3">h3</Typography>
              <Typography variant="h4">h4</Typography>
              <Typography variant="h5">h5</Typography>
              <Typography variant="h6">h6</Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Heading Typography with underline:</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="h1" underline>
                h1 with underline
              </Typography>
              <Typography variant="h2" underline>
                h2 with underline
              </Typography>
              <Typography variant="h3" underline>
                h3 with underline
              </Typography>
              <Typography variant="h4" underline>
                h4 with underline
              </Typography>
              <Typography variant="h5" underline>
                h5 with underline
              </Typography>
              <Typography variant="h6" underline>
                h6 with underline
              </Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Heading Typography with overline:</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="h1" overline>
                h1 with overline
              </Typography>
              <Typography variant="h2" overline>
                h2 with overline
              </Typography>
              <Typography variant="h3" overline>
                h3 with overline
              </Typography>
              <Typography variant="h4" overline>
                h4 with overline
              </Typography>
              <Typography variant="h5" overline>
                h5 with overline
              </Typography>
              <Typography variant="h6" overline>
                h6 with overline
              </Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Heading Typography with dashed:</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="h1" dashed>
                h1 with dashed
              </Typography>
              <Typography variant="h2" dashed>
                h2 with dashed
              </Typography>
              <Typography variant="h3" dashed>
                h3 with dashed
              </Typography>
              <Typography variant="h4" dashed>
                h4 with dashed
              </Typography>
              <Typography variant="h5" dashed>
                h5 with dashed
              </Typography>
              <Typography variant="h6" dashed>
                h6 with dashed
              </Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Heading Typography with italic, strong, and strikethrough:</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="h1" italic strong strikethrough>
                h1 with italic, strong, and strikethrough
              </Typography>
              <Typography variant="h2" italic strong strikethrough>
                h2 with italic, strong, and strikethrough
              </Typography>
              <Typography variant="h3" italic strong strikethrough>
                h3 with italic, strong, and strikethrough
              </Typography>
              <Typography variant="h4" italic strong strikethrough>
                h4 with italic, strong, and strikethrough
              </Typography>
              <Typography variant="h5" italic strong strikethrough>
                h5 with italic, strong, and strikethrough
              </Typography>
              <Typography variant="h6" italic strong strikethrough>
                h6 with italic, strong, and strikethrough
              </Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Heading Typography with marked text:</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="h1" marked>
                h1 with marked text
              </Typography>
              <Typography variant="h2" marked>
                h2 with marked text
              </Typography>
              <Typography variant="h3" marked>
                h3 with marked text
              </Typography>
              <Typography variant="h4" marked>
                h4 with marked text
              </Typography>
              <Typography variant="h5" marked>
                h5 with marked text
              </Typography>
              <Typography variant="h6" marked>
                h6 with marked text
              </Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Heading Typography with deleted text:</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="h1" deleted>
                h1 with deleted text
              </Typography>
              <Typography variant="h2" deleted>
                h2 with deleted text
              </Typography>
              <Typography variant="h3" deleted>
                h3 with deleted text
              </Typography>
              <Typography variant="h4" deleted>
                h4 with deleted text
              </Typography>
              <Typography variant="h5" deleted>
                h5 with deleted text
              </Typography>
              <Typography variant="h6" deleted>
                h6 with deleted text
              </Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Paragraph Typography with marked,smaller,deleted and inserted text:</Typography>
        <Divider horizontal />
        <View
          elements={
            <div>
              <Typography variant="p" marked>
                Paragraph Typography with Marked text
              </Typography>
              <Typography variant="p" smaller>
                Paragraph Typography withSmaller text
              </Typography>
              <Typography variant="p" deleted>
                Paragraph Typography withDeleted text
              </Typography>
              <Typography variant="p" inserted>
                Paragraph Typography withInserted text
              </Typography>
            </div>
          }
          code={data.code}
        />
      </Box>
      <Box elevation={0} width="90%" margin="10px" height="auto">
        <Typography variant="h2">Props:</Typography>
        <Divider horizontal />
        <Table basic columns={columns} rows={rows} code codeColor="red" CodeColumn={0} />
      </Box>
    </Box>
  );
};

export default TypographyPage;
