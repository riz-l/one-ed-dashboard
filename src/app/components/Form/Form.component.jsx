// Import: Packages
import React, {
  // useContext,
  createContext,
} from "react";

// Import: Elements
import { Container } from "./Form.elements";

// Import: Components
import {
  AutoSuggest,
  Button,
  Checkbox,
  Dropdown,
  Input,
  Radio,
  Text,
  TextArea,
} from "../index";

// Context: FormGroupContext
const FormGroupContext = createContext();
// const useFormGroupContext = () => {
//   const context = useContext(FormGroupContext);
//   if (!context) {
//     throw new Error(
//       `Form compound components cannot be rendered outside of the Form component`
//     );
//   }

//   return context;
// };

// Compound Component: FormAutoSuggest
function FormAutoSuggest({ labelText }) {
  return <AutoSuggest labelText={labelText} />;
}

// Compound Component: FormButton
function FormButton({ onClick, text, type }) {
  return <Button onClick={onClick} text={text} type={type} />;
}

// Compound Component: FormCheckbox
function FormCheckbox({ checked, onChange, under, text, htmlFor, value }) {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      under={under}
      text={text}
      htmlFor={htmlFor}
      value={value}
    />
  );
}

// Compound Component: FormDropdown
function FormDropdown({
  htmlFor,
  labelText,
  onChange,
  options,
  left,
  value,
  width,
}) {
  return (
    <Dropdown
      htmlFor={htmlFor}
      labelText={labelText}
      onChange={onChange}
      options={options}
      left={left}
      value={value}
      width={width}
    />
  );
}

// Compound Component: FormInput
function FormInput({
  center,
  htmlFor,
  labelText,
  left,
  margin,
  onChange,
  onClick,
  placeholder,
  type,
  value,
  width,
}) {
  return (
    <Input
      center={center}
      htmlFor={htmlFor}
      labelText={labelText}
      left={left}
      margin={margin}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      type={type}
      value={value}
      width={width}
    />
  );
}

// Compound Component: FormRadio
function FormRadio({ checked, name, onChange, text, value }) {
  return (
    <Radio
      checked={checked}
      name={name}
      onChange={onChange}
      text={text}
      value={value}
    />
  );
}

// Compound Component: FormText
function FormText({ as, heading, subheading, text, ...props }) {
  return (
    <Text
      as={as}
      heading={heading}
      subheading={subheading}
      text={text}
      {...props}
    >
      {props.children}
    </Text>
  );
}

// Compound Component: FormTextArea
function FormTextArea({
  cols,
  htmlFor,
  id,
  labelText,
  onChange,
  placeholder,
  rows,
  value,
}) {
  return (
    <TextArea
      cols={cols}
      htmlFor={htmlFor}
      id={id}
      labelText={labelText}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      value={value}
    />
  );
}

// Component: Form
export default function Form(props) {
  return (
    <FormGroupContext.Provider value={props}>
      <Container data-testid={"form"}>{props.children}</Container>
    </FormGroupContext.Provider>
  );
}

// Export: AutoSuggest, Button, Checkbox, Dropdown, Input, Radio, Text, TextArea
Form.AutoSuggest = FormAutoSuggest;
Form.Button = FormButton;
Form.Checkbox = FormCheckbox;
Form.Dropdown = FormDropdown;
Form.Input = FormInput;
Form.Radio = FormRadio;
Form.Text = FormText;
Form.TextArea = FormTextArea;
