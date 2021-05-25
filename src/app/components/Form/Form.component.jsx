// Import: Packages
import React, {
  // useContext,
  createContext,
} from "react";

// Import: Elements
import { Container, StyledForm } from "./Form.elements";

// Import: Components
import {
  Anchor,
  AutoSuggest,
  Button,
  Checkbox,
  Display,
  Dropdown,
  Indicator,
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

// Compound Component: Anchor
function FormAnchor({
  color,
  colorOnHover,
  fontSize,
  href,
  heading,
  subheading,
  text,
  ...props
}) {
  return (
    <Anchor
      color={color}
      colorOnHover={colorOnHover}
      fontSize={fontSize}
      href={href}
      heading={heading}
      subheading={subheading}
      text={text}
      {...props}
    >
      {props.children}
    </Anchor>
  );
}

// Compound Component: FormAutoSuggest
const FormAutoSuggest = React.forwardRef((props, ref) => {
  return (
    <AutoSuggest
      labelText={props.labelText}
      htmlFor={props.htmlFor}
      left={props.left}
      options={props.options}
      onChange={props.onChange}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
});

// Compound Component: FormButton
function FormButton({
  borderColor,
  fontSize,
  icon,
  onClick,
  margin,
  padding,
  text,
  type,
}) {
  return (
    <Button
      borderColor={borderColor}
      fontSize={fontSize}
      icon={icon}
      margin={margin}
      padding={padding}
      onClick={onClick}
      text={text}
      type={type}
    />
  );
}

// Compound Component: FormCheckbox
export const FormCheckbox = React.forwardRef((props, ref) => {
  return (
    <Checkbox
      checked={props.checked}
      onChange={props.onChange}
      under={props.under}
      ref={ref}
      text={props.text}
      htmlFor={props.htmlFor}
      value={props.value}
    />
  );
});

// Compound Component: FormDisplay
function FormDisplay({
  heading,
  htmlFor,
  labelText,
  left,
  subheading,
  text,
  ...props
}) {
  return (
    <Display
      heading={heading}
      htmlFor={htmlFor}
      labelText={labelText}
      left={left}
      subheading={subheading}
      text={text}
      {...props}
    />
  );
}

// Compound Component: FormDropdown
const FormDropdown = React.forwardRef((props, ref) => {
  return (
    <Dropdown
      htmlFor={props.htmlFor}
      labelText={props.labelText}
      onChange={props.onChange}
      options={props.options}
      left={props.left}
      ref={ref}
      value={props.value}
      width={props.width}
    />
  );
});

// Compound Component: Indicator
function FormIndicator({ amber, green, message, red, title }) {
  return (
    <Indicator
      amber={amber}
      green={green}
      message={message}
      red={red}
      title={title}
    />
  );
}

// Compound Component: FormInput
const FormInput = React.forwardRef((props, ref) => {
  return (
    <Input
      center={props.center}
      defaultValue={props.defaultValue}
      htmlFor={props.htmlFor}
      labelText={props.labelText}
      left={props.left}
      margin={props.margin}
      onChange={props.onChange}
      onClick={props.onClick}
      placeholder={props.placeholder}
      ref={ref}
      type={props.type}
      value={props.value}
      width={props.width}
    />
  );
});

// Compound Component: FormRadio
const FormRadio = React.forwardRef((props, ref) => {
  return (
    <Radio
      checked={props.checked}
      margin={props.margin}
      name={props.name}
      onChange={props.onChange}
      ref={ref}
      text={props.text}
      value={props.value}
    />
  );
});

// Compound Component: FormText
function FormText({ bold, heading, subheading, text, ...props }) {
  return (
    <Text
      bold={bold}
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
const FormTextArea = React.forwardRef((props, ref) => {
  return (
    <TextArea
      cols={props.cols}
      htmlFor={props.htmlFor}
      labelText={props.labelText}
      onChange={props.onChange}
      placeholder={props.placeholder}
      ref={ref}
      rows={props.rows}
      value={props.value}
    />
  );
});

// Component: Form
export default function Form(props) {
  return (
    <FormGroupContext.Provider value={props}>
      <Container data-testid={"form"}>
        <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>
      </Container>
    </FormGroupContext.Provider>
  );
}

// Export: Anchor, AutoSuggest, Button, Checkbox, Display, Dropdown, Input, Radio, Text, TextArea
Form.Anchor = FormAnchor;
Form.AutoSuggest = FormAutoSuggest;
Form.Button = FormButton;
Form.Checkbox = FormCheckbox;
Form.Display = FormDisplay;
Form.Dropdown = FormDropdown;
Form.Indicator = FormIndicator;
Form.Input = FormInput;
Form.Radio = FormRadio;
Form.Text = FormText;
Form.TextArea = FormTextArea;
