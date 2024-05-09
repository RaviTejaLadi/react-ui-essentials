
        import * as React from 'react';
        
        const BubbleChartRound = (props) => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.0em" viewBox="0 0 24 24" {...props}>
        <circle cx="7.2" cy="14.4" r="3.2" /><circle cx="14.8" cy={18} r={2} /><circle cx="15.2" cy="8.8" r="4.8" /></svg>
      
          );
        };
        
        BubbleChartRound.displayName = 'BubbleChartRound';
        
        export default BubbleChartRound;
  