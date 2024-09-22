import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styles from "./Form.module.css";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import FormGroup from "./FormGroup";
import Select from "./Select";
import Submit from "./Submit";

const Form = forwardRef(({ children, onSubmit, className = "", style = {}, ...rest }, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form ref={ref} className={`${styles.form} ${className}`} style={style} onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  );
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  style: PropTypes.object
}
Form.Group = FormGroup;
Form.Label = Label;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Select = Select;
Form.Checkbox = Checkbox;
Form.Radio = Radio;
Form.Submit = Submit;
Form.displayName = "Form";

export default Form;
