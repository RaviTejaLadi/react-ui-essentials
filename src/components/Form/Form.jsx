import PropTypes from "prop-types";
import React, { createContext, useContext, useState, forwardRef } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";

const FormContext = createContext();

const Form = forwardRef(({ children, onSubmit, ...rest }, ref) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      <form ref={ref} className={styles.form} onSubmit={handleSubmit} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  );
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const useFormContext = () => {
  const context = useContext(FormContext);
  return context;
};

const getSizeClass = (size) => {
  switch (size) {
    case "sm":
      return styles.small;
    case "lg":
      return styles.large;
    default:
      return styles.medium;
  }
};

const BaseInput = ({ label, name, type = "text", size = "md", value, onChange, ...props }) => {
  const sizeClass = getSizeClass(size);
  return (
    <div className={`${styles.formGroup} ${sizeClass}`}>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${sizeClass}`}
        {...props}
      />
    </div>
  );
};

BaseInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
  value: PropTypes.string,
};

const BaseTextarea = ({ label, name, size = "md", value, onChange, ...props }) => {
  const sizeClass = getSizeClass(size);
  return (
    <div className={`${styles.formGroup} ${sizeClass}`}>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.textarea} ${sizeClass}`}
        {...props}
      />
    </div>
  );
};

BaseTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  value: PropTypes.string,
};

const BaseSelect = ({ label, name, options, size = "md", value, onChange, ...props }) => {
  const sizeClass = getSizeClass(size);
  return (
    <div className={`${styles.formGroup} ${sizeClass}`}>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.select} ${sizeClass}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

BaseSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  value: PropTypes.string,
};

const BaseCheckbox = ({ label, name, size = "md", checked, onChange, ...props }) => {
  const sizeClass = getSizeClass(size);
  return (
    <div className={`${styles.formGroup} ${sizeClass}`}>
      <Label className={`${styles.checkboxLabel} ${sizeClass}`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className={`${styles.checkbox} ${sizeClass}`}
          {...props}
        />
        {label}
      </Label>
    </div>
  );
};

BaseCheckbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const BaseRadio = ({ label, name, options, size = "md", value, onChange, ...props }) => {
  const sizeClass = getSizeClass(size);
  return (
    <div className={`${styles.formGroup} ${sizeClass}`}>
      <fieldset className={styles.radioGroup}>
        <legend>{label}</legend>
        {options.map((option) => (
          <Label key={option.value} className={`${styles.radioLabel} ${sizeClass}`}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className={`${styles.radio} ${sizeClass}`}
              {...props}
            />
            {option.label}
          </Label>
        ))}
      </fieldset>
    </div>
  );
};

BaseRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  value: PropTypes.string,
};

const Input = (props) => {
  const context = useFormContext();
  if (context) {
    const { formData, updateFormData } = context;
    return (
      <BaseInput
        {...props}
        value={formData[props.name] || ""}
        onChange={(e) => updateFormData(props.name, e.target.value)}
      />
    );
  }
  return <BaseInput {...props} />;
};

Input.propTypes = {
  name: PropTypes.string,
};

const Label = ({ htmlFor, children, size = "md" }) => {
  const sizeClass = getSizeClass(size);
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${sizeClass}`}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const Textarea = (props) => {
  const context = useFormContext();
  if (context) {
    const { formData, updateFormData } = context;
    return (
      <BaseTextarea
        {...props}
        value={formData[props.name] || ""}
        onChange={(e) => updateFormData(props.name, e.target.value)}
      />
    );
  }
  return <BaseTextarea {...props} />;
};

Textarea.propTypes = {
  name: PropTypes.string,
};

const Select = (props) => {
  const context = useFormContext();
  if (context) {
    const { formData, updateFormData } = context;
    return (
      <BaseSelect
        {...props}
        value={formData[props.name] || ""}
        onChange={(e) => updateFormData(props.name, e.target.value)}
      />
    );
  }
  return <BaseSelect {...props} />;
};

Select.propTypes = {
  name: PropTypes.string,
};

const Checkbox = (props) => {
  const context = useFormContext();
  if (context) {
    const { formData, updateFormData } = context;
    return (
      <BaseCheckbox
        {...props}
        checked={formData[props.name] || false}
        onChange={(e) => updateFormData(props.name, e.target.checked)}
      />
    );
  }
  return <BaseCheckbox {...props} />;
};

Checkbox.propTypes = {
  name: PropTypes.string,
};

const Radio = (props) => {
  const context = useFormContext();
  if (context) {
    const { formData, updateFormData } = context;
    return (
      <BaseRadio
        {...props}
        value={formData[props.name] || ""}
        onChange={(e) => updateFormData(props.name, e.target.value)}
      />
    );
  }
  return <BaseRadio {...props} />;
};

Radio.propTypes = {
  name: PropTypes.string,
};

const Submit = ({ children, size = "md", ...rest }) => {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
};

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};
Form.Input = Input;
Form.Label = Label;
Form.Textarea = Textarea;
Form.Select = Select;
Form.Checkbox = Checkbox;
Form.Radio = Radio;
Form.Submit = Submit;
Form.displayName = "Form";
export default Form;
