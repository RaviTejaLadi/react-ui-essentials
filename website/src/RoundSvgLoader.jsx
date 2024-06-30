import React, { memo } from "react";
// import * as svgs from "./Icons/Sharp";
import SvgPreview from "./components/SvgPreview/SvgPreview";

const RoundSvgLoader = () => {
  const roundSvgList = Object.entries(svgs).map(([key, SvgComponent], index) => ({
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

  console.log(roundSvgList);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {roundSvgList.map(({ id, svg, label, code }) => (
        <SvgPreview key={id} svg={svg} title={label} />
        // <div
        //   key={id}
        //   style={{
        //     border: '1px solid #ccc',
        //     borderRadius: '4px',
        //     width: '135px',
        //     height: 'auto',
        //     margin: '10px',
        //     padding: '10px'
        //   }}
        // >
        //   <h6>{label}</h6>
        //   {svg}
        //    <pre>
        //     <code>{code}</code>
        //   </pre>
        // </div>
      ))}
    </div>
  );
};

export default memo(RoundSvgLoader);
