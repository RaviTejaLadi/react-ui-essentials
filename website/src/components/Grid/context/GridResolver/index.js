// import React from 'react';
// import PropTypes from 'prop-types';
// import GridProvider, { GridContext, NO_PROVIDER_FLAG } from '../GridProvider';

// const ScreenClassResolver  = ({ children }) => (
//   <GridContext.Consumer>
//     {(screenClassCheck) => {
//       if (screenClassCheck === NO_PROVIDER_FLAG) {
//         return (
//           <GridProvider>
//             <GridContext.Consumer>
//               {(screenClassResolved) => children(screenClassResolved)}
//             </GridContext.Consumer>
//           </GridProvider>
//         );
//       }
//       return children(screenClassCheck);
//     }}
//   </GridContext.Consumer>
// );

// ScreenClassResolver .propTypes = {
//   children: PropTypes.func.isRequired,
// };

// export default ScreenClassResolver ;

import React from "react";
import PropTypes from "prop-types";
import GridProvider, { GridContext, NO_PROVIDER_FLAG } from "../GridProvider";

const GridResolver = ({ children }) => (
  <GridContext.Consumer>
    {(screenClassCheck) =>
      screenClassCheck === NO_PROVIDER_FLAG ? (
        <GridProvider>
          <GridContext.Consumer>{(GridResolver) => children(GridResolver)}</GridContext.Consumer>
        </GridProvider>
      ) : (
        children(screenClassCheck)
      )
    }
  </GridContext.Consumer>
);

GridResolver.propTypes = {
  children: PropTypes.func.isRequired,
};

export default GridResolver;
