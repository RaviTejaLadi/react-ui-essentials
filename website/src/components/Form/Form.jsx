import PropTypes from "prop-types";
import React from "react";
import { DetailList, Fieldset, Group, Input, Label, Select, Textarea } from "./index";

const Form = (props, { children, onSubmit, action, method, className }) => {
  return (
    <form className={className} onSubmit={onSubmit} action={action} method={method} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  action: "",
  method: "",
  onSubmit: () => {},
  className: "",
};

Form.Input = Input;
Form.Label = Label;
Form.DetailList = DetailList;
Form.Fieldset = Fieldset;
Form.Group = Group;
Form.Select = Select;
Form.Textarea = Textarea;

export default Form;
