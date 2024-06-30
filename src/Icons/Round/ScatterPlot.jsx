
        import * as React from 'react';
        
        const ScatterPlot = (props) => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.0em" viewBox="0 0 24 24" {...props}>
        <circle cx={7} cy={14} r={3} /><circle cx={11} cy={6} r={3} /><circle cx="16.6" cy="17.6" r={3} /></svg>
      
          );
        };
        
        ScatterPlot.displayName = 'ScatterPlot';
        
        export default ScatterPlot;
  