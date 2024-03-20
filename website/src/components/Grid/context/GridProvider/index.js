// import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useScreenClass } from '../../utils/utils';
// import { getConfiguration } from '../../utils/config';
// import { Div } from '../../primitives'

// export const NO_PROVIDER_FLAG = 'NO_PROVIDER_FLAG';

// export const GridContext = React.createContext(NO_PROVIDER_FLAG);

// const GridProvider = ({ useOwnWidth, children, fallbackScreenClass }) => {
//   const screenClassRef = useRef();
//   const [mounted, setMounted] = useState(false);
//   const detectedScreenClass = useScreenClass(screenClassRef, fallbackScreenClass);
//   const { defaultScreenClass } = getConfiguration();

//   const screenClass = mounted ? detectedScreenClass : (fallbackScreenClass || defaultScreenClass);

//   useEffect(() => setMounted(true), []);

//   return (
//     <GridContext.Provider value={screenClass}>
//       {useOwnWidth
//         ? <Div ref={useOwnWidth ? screenClassRef : null}>{children}</Div>
//         : <>{children}</>}
//     </GridContext.Provider>
//   );
// };

// GridProvider.propTypes = {
//   children: PropTypes.node.isRequired,
//   useOwnWidth: PropTypes.bool,
//   fallbackScreenClass: PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' , 'xxxl']),
// };

// GridProvider.defaultProps = {
//   useOwnWidth: false,
//   fallbackScreenClass: null,
// };

// export default GridProvider;

import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useScreenClass } from "../../utils/utils";
import { getConfiguration } from "../../utils/config";
import { Div } from "../../primitives";

export const NO_PROVIDER_FLAG = "NO_PROVIDER_FLAG";

export const GridContext = React.createContext(NO_PROVIDER_FLAG);

const GridProvider = ({ useOwnWidth, children, fallbackScreenClass }) => {
  const screenClassRef = useRef();
  const detectedScreenClass = useScreenClass(screenClassRef, fallbackScreenClass);
  const { defaultScreenClass } = getConfiguration();
  const [mounted, setMounted] = useState(false);
  const screenClass = mounted ? detectedScreenClass : fallbackScreenClass || defaultScreenClass;

  useEffect(() => setMounted(true), []);

  return (
    <GridContext.Provider value={screenClass}>
      {useOwnWidth ? <Div ref={screenClassRef}>{children}</Div> : <>{children}</>}
    </GridContext.Provider>
  );
};

GridProvider.propTypes = {
  children: PropTypes.node.isRequired,
  useOwnWidth: PropTypes.bool,
  fallbackScreenClass: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"]),
};

GridProvider.defaultProps = {
  useOwnWidth: false,
  fallbackScreenClass: null,
};

export default GridProvider;
