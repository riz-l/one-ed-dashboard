# OneED - Dashboard

## Updating the ReadMe

Link to a markup guide for a ReadMe file https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md

When adding Code examples surround the examples with backticks for a single line or 3 backticks for multi line code.

`code`

```
multi
line
code
```

## Get started

- To start using this app, open your chosen Text Editor, navigate to your specified folder directory, open a new Terminal and run:

  ```
  $ git clone https://github.com/riz-l/one-ed-dashboard.git
  ```

- After this, make sure you `cd` into the newly cloned folder directory e.g. `cd one-ed-dashboard`, and then run:

  ```
  $ npm install
  ```

- When this is complete, check the Terminal log to make sure no fixes are required. If a fix is required, you will be prompted to run:

  ```
  $ npm audit fix
  ```

- Lastly, after the above fix is complete (or not needed), run:

  ```
  $ npm start
  ```

## Please note:

If an installed dependency (see below) is added, removed or altered, you will need to repeat the above steps, starting with

```
$ npm install
```

If faced with an error run “npm install react-scripts”.
This ensures that the react scripts are up to date which will allow for npm install to work.
Alternatively, it may suggest running “npm audit fix”.

## Installed dependencies

- `create-react-app`

  - Used to initialise the React application

- `react-router-dom`

  - Used to enable page navigation

- `styled-components`

  - Used to allow css-in-js styling for components

- `axios`

  - Used to facilitate API usage

- `dexie`

  - Used to utilise IndexedDB with developer-friendly code

- `react-detect-offline`

  - Used to detect online/offline state of React application

- `react-modal`

  - Used to create modal pop-outs

- `react-autosuggest`

  - Used to create auto suggest search inputs

- `@reduxjs/toolkit`

  - Used for state management

- `react-redux`

  - Used for state management

- `moment`

  - Used for date/time formatting

- `react-detect-offline`

  - Used for detecting connectivity status

- `react-icons`

  - Used for access to icon library

### ToDo Tree

ToDo Tree is an extension in VS Code.
Once installed the tree icon appears on the VS Code side bar.
When writing comments in your code start the comment with the key words "TODO" or "FIXME" the ToDo tree extension will pick out these comments and put them in a list allowing developers to quickly jump to parts of the code marked up as needing to be worked on.

## The .env file

For OneED to work it requires an .env file. The .env file contains values for the following:

- `REACT_APP_CLAIMSET_URL`
- `REACT_APP_SERVICE`
- `REACT_APP_API_VERSION`
- `REACT_APP_API_URL`
- `REACT_APP_INCOMING_PATIENTS`
- `REACT_APP_INTEGRATION_REPORT`

Changes to the .env file are not included with the repository files because the .env file is purposefully excluded.

The latest copy of the .env file can be found by contacting a member of the OD&amp;T development team.

## Standard layout of components

Please ensure that the following section titles and orders are used for all components to keep things neat and consistent.

- `// Import: Packages`

  - `import React from "react"` is imported first (in a component file), followed by the order in which any other required packages are used.
    <br />

- `// Import: Utils`

  - Used for any utility files (e.g. `capitalizeFirstLetter.js`).
    <br />

- `// Import: Assets`

  - Used for any fonts, icons or images - all imported alphabetically.
    <br />

- `// Import: Elements`

  - Used for any styling files (`.js` or `.css`, etc.) in which elements should be imported alphabetically.
    <br />

- `// Import: Components, Pages, SubPages`

  - Components, pages and subPages should be imported in this order, and imported alphabetically.
    <br />

- `// Component: ExampleComponent` _or_ `// Page: ExamplePage` _or_ `// SubPage: ExampleSubPage`

  - Components, pages and subPages are declared as above for easy comprehension of files and project searching.
    <br />

- (Inside the Component, Page or SubPage)

  - Redux

    - Redux hooks should be called with `useSelector()` first, and `useDispatch()` second.

  - State:

    - Any/all local state should be listed alphabetically.

  - React hooks

    - React hooks should be called with `useEffect()` first, and `useState()` second.

  - Any other functionality

## Responsiveness

Responsiveness is the changing the styling of the app to suit different screen sizes.

The main way this is done is by creating media queries which change the styling at a specific screen width.

There is a breakPoints.js file in the definitions folder (src/app/definitions/breakPoints.js). This file is used to provide named variables for the screen widths of different devices. For consistency these variables should be used when creating media queries to keep things consistent and allow for any future changes to these values to cascade through the app.

### How to use breakPoints.js file

1. Import the breakPoints.js file into the elements file of the component that will using the breakpoints. See below (filepath will need to be edited):

```
// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";
```

2. Write a media query using the breakpoint as shown below in the example where the tabletL breakpoint has been used and the margin-right will be 0 below that width.

```
@media ${deviceMaxWidth.tabletL} {
margin-right: 0;
}
```

### Theme Provider

A theme provider is where the colours used in the app (for backgrounds, borders and text or anywhere else) are defined in a file as variables. The names given to these colour variables are then used throughout the app in place of hard coded colours.
The benefit of a theme provider is that it makes it easy and consistent to change a colour once in the theme provider and have it change throughout the app wherever it is used.
Implementing a theme provider also enables the creation of a Light Mode Dark Mode feature. This si done by defining 2 sets of colours in 2 theme files.

#### Step 1 - Create the theme/s folder and the theme.js file/s

The Theme/s folder is normally located within the app folder.

Example of a lightTheme.js file:

```
// Theme: lightTheme
export const lightTheme = {
  colors: {
    global: {
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f7f8fa",
      borderPrimary: "#edeff2",
      borderSecondary: "#dcdfe5",
      textPrimary: "#4d5e80",
      textSecondary: "#6b7a99",
      icon: "#c3cad9",
      iconActive: "#6b7a99",
    },
    formComponents: {
      inputBoxHover: "#7cf0f4",
      inputBoxFocus: "#a1f4f7",
      inputBoxBorderFocus: "#bfbfc5",
      tickBoxBorder: "#6b7a99",
      tickBoxChecked: "#008ba3",
      tickBoxCheckedHover: "#00687a",
      tickBoxUnchecked: "#edeff2",
      tickBoxUncheckedHover: "#c3cad9",
      tickBoxSVG: "#f1f1f1",
      indicatorGreen: "#74e660",
      indicatorAmber: "#f3af4a",
      indicatorRed: "#ee482a",
    },
    patientList: {
      header: "#4d5e80",
      whiteText: "#ffffff",
      rowEven: "#e6e9ef",
      rowHover: "#6a7ca0",
    },
    incomingPatientsList: {
      header: "#008ba3",
      blackText: "#000000",
      rowEven: "#deedf2",
      rowHover: "#509fb9",
    },
    reportEntry: {
      alerts: "#ff6347",
      allergies: "#ffaf85",
      complaint: "#5398be",
      complications: "#9bc53d",
      diagnosis: "#ba2c73",
      findings: "#1b998b",
      procedures: "#585481",
      symptoms: "#2978a0",
      noThemeEntered: "#3a3a40",
    },
  },
};
```

#### Step 2 - Import the Theme Provider hook to the app.js file

Import the ThemeProvider hook when importing styled from styled-components package.

```
// Import: Packages
import styled, { ThemeProvider } from "styled-components/macro";
```

#### Step 3 - Import the theme form the theme file/s into the app.js file

```
// Import: Themes
import { darkTheme } from "./app/themes/darkTheme";
import { lightTheme } from "./app/themes/lightTheme";
```

#### Step 4 - Wrap the return code for App.js in the theme provider

This step allows all components within the app to access the theme provider.

```
return (
<ThemeProvider theme={isGlobalThemeDark ? darkTheme : lightTheme}>
//Other Code
</ThemeProvider >
);
```

#### Step 5 – Use the theme provider colours in the elements.js files.

To use the colours in the theme provider in a component open the component’s elements.js file and use the code shown below.

Example 1:

`background-color: ${(props) => props.theme.colors.global.backgroundSecondary};`

In this example the last 2 navigation locations `global.backgroundSecondary` need to be changed to get to the specific colour you need.

Example 2: Using the theme provider colours within a ternary operator.

`background: ${({ checked }) => checked ? (props) => props.theme.colors.global.tickBoxChecked : (props) => props.theme.colors.global.tickBoxUnchecked};`

Note how the ${} (which shows the codes inside is JavaScript and not CSS) is not needed again because the theme provider code is already inside one.

Note: There seem to be issues using the theme provider path inside of a string in a ternary operator. Workaround is to split the attributes out so it ends up beiang like example 2 above as the example below won't work.
e.g
`border: ${(propName) => propName ? "1px solid green" : "1px solid ${(props) => props.theme.colors.global.borderPrimary}"};`

Replacing the Arrow function `=>` with the traditional JavaScript function as shown below will allow the theme provider to be used.

```
background-color: ${({ patient, patientID, patientList }) =>
patientList &&
patient === patientID &&
function (props) {
return props.theme.colors.formComponents.tickBoxCheckedHover;
}};
```

CSS files cannot accept JavaScript. To use a theme provider the colours must be defined in the elements files.
To do this:

1. Add `import ReactModal from "react-modal";` to the elements file of the modal
2. Add this (or similar) to the elements file

```
// Element: StyledModal
export const StyledModal = styled(ReactModal)`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  transition: all 100ms linear;
`;
```

3. In the component.jsx file change `<ReactModal>` to `<StyledModal>`.
   The modal now takes its css from the elements file instead of the css file.

#### Step 6

Update the test.js file.
The test.js file must:

<ul>
<li>`import { ThemeProvider } from "styled-components/macro";`</li>
<li>// Import: Themes
`import { darkTheme } from "../../../../themes/darkTheme";`
Note that the file path will be specific for each file.</li>
<li> Wrap the component in the teheme provider. e.g.
``` 
      <Router>
      <ThemeProvider theme={darkTheme}>
        <Chart /> 
        </ThemeProvider>
      </Router>   
    ```</li>
</ul>

#### The Light/Dark mode toggle

Example:

```
<ThemeToggle isOn={isGlobalThemeDark} handleToggle={() =>
dispatch(setIsGlobalThemeDark())} onColor="#e6e9ef" />
```

The toggle works in a similar way to the checkbox component.
“isOn” determines the appearance of the toggle.
“handleToggle” is used in Global State.

When implementing an Light/Dark mode it is useful to also add a transition attribute to all components that use colours so that when the Light/Dark mode is changed it doesn't look jerky.

Use the code below in the elements files to achieve this.
`transition: all 100ms linear;`

## Reference

_Under construction..._

<!-- TODO: Explain how Reference works. -->

## Redux

Redux is a module of React. Is is used to create and manage Global State which overcomes a limitation of React by allowing a state to be accessed and updated from anywhere in the app and not just in a component and its children which is the case for local state.

To view Global State download the Redux Development tool for your brower and then select the state tab.

Global state is organised into Slices. The data is populated by APIs.

<!-- TODO add info about how using redux in a component required the test.js file to be updated to enable to test to pass.  -->

### useSelector

"useSelector" is used to select a piece of data from global state.

In the below example note the following things:

1. A constant is declared.
2. Then useSelector accesses the Global State
3. The "if" check in needed to allow the component to pass testing. This is because it caters for a scenario where there isn't a value for the file path.
4. The "if" check cannot work if there is an array e.g. [0] in the file path.

```
// Redux: Extracts username from global state
const currentUser = useSelector((state) => {
if (state.userDetails.details.ControlActEvent) {
return state.userDetails.details.ControlActEvent.Subject.Value[0]
.UserRoleProfile[0].UserID.identifierName;
}
});
```

### UseEffect

_Under construction..._

<!-- TODO: Explain how UseEffect works. -->

## Form Components and their props

A description of what the form components do and the props used in each component.

Most of the form components have a label and an input field. In html the label element is linked to the input element by the "for" attribute of the label matching the "id" attribute of the input element. In React "for" is a keyword so is replaced by "htmlFor". The value for htmlFor must be in camelCase, and they all need to be unique. If you have something that has multiple items like addresses, you'd do htmlFor="addressOne", htmlFor="addressTwo" etc. Avoid duplicates in the same form.
Note for "htmlFor" numbers, spaces, symbols and hyphens should not be used. If the value starts with an accronym such as NHS Number the htmlFor would be "nhsNumber" where the accronym is kept in lower case.

### Anchor

Used to create a hyperlink in the app to an external website.

- href= The destination website address.
- heading = Styles the link as a heading.
- subheading = Styles the link as a subheading.
- text = Styles the link as text (the default).
- ...props = Allows the component to accept props that have not been deconstructed e.g. props.enterpropnamehere. This could be used to set up specific styling and behaviours.
- target = Hard coded to "\_blank" which opens the link in a new browser tab.
- props.children = Allows the component to contain other components. This could be used to make an image into a link.

### AutoSuggest

The user begins typing and the component will display matching results in real time.
QUESTION: Another property will ened adding to received the data. Add a section on how this component works.

- htmlFor = this links the label of the autosuggest box with the box itself.
- labelText = the text shown to the user to identify what the autosuggest box is.
- left = the elements file needs updating but this will move the label text to the side of the box rather than above it.
- placeholder = fills in some text in the background of the input area. This text is not data and does not get submitted. It is removed as soon as the user selects the box and begins typing.

### Button

A button, its effect is defined by the onClick prop.

- borderColor = Used to specify a border colour.
- fontSize = Determines the font size.
- icon = Used to add an SVG icon. e.g. icon ={<SVGNAME/>}.
- onClick = Defines what happens when the button is clicked.
- margin = Determines the margin.
- padding = Determines the padding.
- text = The text within the button.
- type = Defaults to "button" but can also be "submit" and "reset". Submit ties the button to the forms data so all the form data will get submitted. This would probably be a save button. It also helps accessability by telling visually impared users that this is a submit button.

### Checkbox

The checkbox component is a box that can be ticked by the user. It could be part of a set of checkboxes for the same question.

- checked = If this prop is given (or set to true) then the checkbox starts off as ticked.
- onChange = Defines what happens when the checkbox is checked or unchecked.
- left = If this prop is given (or set to true) the flex-direction is set to row which puts the checkbox to the left of its label rather than above it. This is useful where there is just a single checkbox rather than a group of them.
- text = This is the label for the checkbox visible to the user.
- htmlFor = This links the label to the checkbox via the id attribute. htmlFor also sets the name attribute of the checkbox which gets submitted along with the value.
- value = this is the value the checkbox represents which would be used in the onClick event. By default the values are false or true. Potentially we may add a third value of null.

### Display

Display component consists of a heading and then a displayed value or values below it.

- heading = If this prop is given (or set to true) the <Text> component will be displayed as a heading. The label text remains the same.
- htmlFor = This is used to link the label text to the Text component's id attribute.
- labelText = The text appearing to the user above the displayed value.
- left = If this prop is given (or set to true) then the label text moves to the left of the displayed value rather than the default of being above the displayed value.
- subheading = If this prop is given (or set to true) the <Text> component will be displayed as a subheading. The label text remains the same.
- text = If this prop is given (or set to true) the <Text> component will be displayed as a normal text. The label text remains the same.
- ...props = Allows the component to accept props that have not been deconstructed e.g. props.enterpropnamehere. This could be used to set up specific styling and behaviours.

### Dropdown

This component creates a dropdown list in which a single value may be selected. The Select component reproduces the select element from html. The Select component contains the Option components.
QUESTION: Will need more info on how dropdown lists link to the reference data.

- htmlFor = This is used to link the label text to the Select component's id attribute.
- labelText = This is the title/question for the dropdown list which is visible to the user.
- onChange = Determines what happens when the user makes a selection.
- options = This is the array of data that forms the options within the dropdown list.
- left = If this prop is given (or set to true) then the label text moves to the left of the displayed value rather than the default of being above the displayed value.
- value = The form field. e.g If there was a dropdown list called blood type then the value would be set to Bloodtype. (follow the rules for htmlFor)
- width = Give width a value (either px, % or rem enclosed in quotes) and this determines the width of the dropdown list (the Select component). It does not affect the label width.

- key = QUESTION
- option = QUESTION
- index = QUESTION

### Indicator

The indicator component is an alert box that appears if certain conditions are met. It can be given a colour.

- amber = If this prop is given (or set to true) then the background of the box is amber.
- green = If this prop is given (or set to true) then the background of the box is green.
- message = This is the text of the alert visible to the user.
- red = If this prop is given (or set to true) then the background of the box is red.
- title = This is the title of the alert visible to the user. Does a similar Job to LabelText.

### Input

The Input component is used for free text fields. It can be contain additional validation by specifiying the type property.
Types = Text (the default), number, email, date, time & tel.

- props = Allows the component to accept props. Note that when giving the props to the component only the word after the "props." needs to be given.
- ref = ref is used ties something to something else. (See it used in Login.component) Normally only usable at the same level but we use forwardRef in the input component to allow it to be used across levels.

- props.center = If this prop is given (or set to true) then the input box is centered horizontally. Does not affect the label.
- props.htmlFor = Links the label to the input box's id attribute.
- props.left = If this prop is given (or set to true) then the label text moves to the left of the displayed value rather than the default of being above the displayed value.
- props.labelText = This is the title/question for the Input field which is visible to the user.
- props.margin = A number and units (px, % or rem) enclosed in quotes which determines the margins of the component. Note there is a hard coded lower margin.
- props.onClick = The action that takes place when the user clicks into the field
- props.onChange = The action that takes place when the user has inputted some data into the field.
- props.value = Similar to props.placeholder except that the value is actually entered into the field and doesn't dissappear unless the user deletes it.

### Radio

This is used where there are several linked checkboxes and only 1 may be selected from the group.

- checked = If this prop is given (or set to true) then the box starts off as ticked.
- name = Links together all the related radio buttons. (follow rules for htmlFor)
- onChange = The effect of ticketing and unticking the box.
- text = This is the label for the radio checkbox which is visible to the user.
- value = Defines the value associated with the input = this is also the value that is sent on submit. will be similar to text (follows htmlFor rules)

### Text

This is not an input field but is used for headings or paragrpahs within the form.

- as = Use "h1", "h2" or "p" to allow search engines to identify the content of the website. This will be imporyant for passing the progressive web app criteria. This has no visual effect but is good practice helping people using screen readers.
- bold = If this prop is given (or set to true) then the text will be bold.
- heading = If this prop is given (or set to true) then the content will be styled as a heading.
- subheading = If this prop is given (or set to true) then the content will be styled as a subheading.
- text = If this prop is given (or set to true) then the content will be styled as a paragraph.
- ...props = Allows the component to accept props that have not been deconstructed e.g. props.enterpropnamehere. This could be used to set up specific styling and behaviours.

### TextArea

This is used for multi-line free text boxes.

- cols = This is a measure of the width of the input box. It is measured as an average sized character Should be equivalent to REM. It cannot accept height or width which is why cols and rows are used.
- htmlFor = This links the label to the input box and sets the name of the field for data submission.
- labelText = This is the title/question for the TextArea field which is visible to the user.
- onChange = The effect of the user entering or removing data in the input box.
- placeholder = Greyed out text in the input box. It is replaced when the user starts to enter data into the TextArea input box
- rows = This is a measure of the height of the input box. It is measured as an average sized character.
- value = This applies data to the input box so the user must delete or add to it. This would get submitted when the form is submitted.

## React Modals

OneED used Modals in several locations. Modals are popup windows that open in front of the current screen and get the focus.
Link to modal documentation website: https://reactcommunity.org/react-modal/

### Prerequisites

Install the reactModal to the project by opening the terminal and entering:
`npm install react-modal`

### Step 1

Inside the component folder for the modal create the following files:

<ul>
<li>name.component.jsx</li>
<li>name.elements.js</li>
<li>name.test.js</li>
<li>name.styles.css</li>
</ul>
Note that Modals have a CSS file in addition to the usual name.component.jsx, name.elements.js and name.test.js files.

### Step 2

In the component file import the react modal package as shown below:
`import ReactModal from "react-modal";`

### Step 3

As well as importing the elements file also import the css file
`import "./name.styles.css";`

Note: the values in the CSS file don't have an effect unless they are marked as "!important" which overwrites the default values for the modal.

### Step 4

In the return{} section of the component start with the content the closed modal should show (usually a button) and then place the content to be shown in the open modal inside the <ReactModal> content</ReactModal>

The <ReactModal> usually contains the following props:
<ReactModal
          isOpen={isModalOpen}
          contentLabel="AddAlert"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >

### Step 5

OneED uses a theme provider package for managing the colours in the app.
This is not compatible with the styles.css files used in the ReactModals package. This is because javascript cannot be used inside a css file and the references to the theme provider are coded in javascript.

To get round this the colours for the modal need to be managed in the elements file.

#### Step 1

Import the React Modal into the elements file

#### Step 2

In the elements file create a "StyledModal" styled component as shown below:

// Element: StyledModal
export const StyledModal = styled(ReactModal)` background-color: ${(props) => props.theme.colors.global.backgroundPrimary}; border: 1px solid ${(props) => props.theme.colors.global.borderPrimary}; transition: all 100ms linear;`;

#### Step 3

Import the "StyledModal" into the component and replace "ReactModal" with "StyledModal" as shown below:
<StyledModal
          isOpen={isModalOpen}
          contentLabel="AddAlert"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
