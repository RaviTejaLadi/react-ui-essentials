import React from "react";
import { RueButton } from "react-ui-essentials";

const ButtonPage = () => {
  return (
    <div>
      <RueButton variant="info" size="sm" disabled={true}>
        {" "}
        Jai Sree Ram
      </RueButton>
      <RueButton variant="primary" size="sm">
        Jai Sree Ram
      </RueButton>{" "}
      <RueButton variant="success" size="sm">
        Jai Sree Ram
      </RueButton>{" "}
      <RueButton variant="warning" size="sm">
        Jai Sree Ram
      </RueButton>{" "}
      <RueButton variant="secondary" size="sm">
        Jai Sree Ram
      </RueButton>
      <RueButton variant="danger" size="sm">
        Jai Sree Ram
      </RueButton>
      <RueButton variant="light" size="sm">
        Jai Sree Ram
      </RueButton>
    </div>
  );
};

export default ButtonPage;
