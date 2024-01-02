import React from "react";
import {RucButton } from "react-ui-essentials";

const ButtonPage = () => {
  return <div>
     <RucButton variant='info' size='sm' disabled={true}>         Jai Sree Ram
       </RucButton>
       <RucButton variant='primary' size='sm'>
         Jai Sree Ram
       </RucButton>{' '}
       <RucButton variant='success' size='sm'>
         Jai Sree Ram
       </RucButton>{' '}
       <RucButton variant='warning' size='sm'>
         Jai Sree Ram
       </RucButton>{' '}
       <RucButton variant='secondary' size='sm'>
         Jai Sree Ram
       </RucButton>
       <RucButton variant='danger' size='sm'>
         Jai Sree Ram
       </RucButton>
       <RucButton variant='light' size='sm'>
         Jai Sree Ram
       </RucButton>
  </div>;
};

export default ButtonPage;
