# OneED - Dashboard

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

## The .env file

For OneED to work it requires a .env file.
The .env file contains values for the following.

- REACT_APP_CLAIMSET_URL
- REACT_APP_SERVICE
- REACT_APP_API_VERSION
- REACT_APP_API_URL

Changes to the .env file do not get plled with git pull origin master because the .env file is listed in the .gitignore file.

## Form Components and their props

A description of what the form components do and the props used in each component.

Most of the form components have a label and an input field. In html the label element is linked to the input element by the "for" attribute of the label matching the "id" attribute of the input element. In React "for" is a keyword so is replaced by "htmlFor". The value for htmlFor must be in camelCase, and they all need to be unique. If you have something that has multiple items like addresses, you'd do htmlFor="addressOne", htmlFor="addressTwo" etc. Avaoid duplicates in the same form.
Note for "htmlFor" numbers, spaces, symbols and hyphens should not be used.

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

- icon = Used to add an SVG icon. e.g. icon ={<SVGNAME/>}.
- onClick = Defines what happens when the button is clicked.
- text = The text within the button.
- type = Defaults to "button" but can also be "submit" and "reset". Submit ties the button to the forms data so all the form data will get submitted. This would probably be a save button. It also helps accessability by telling visually impared users that this is a submit button.

### Checkbox

The checkbox component is a box that can be ticked by the user. It could be part of a set of checkboxes for the same question.

- checked = If this prop is given (or set to true) then the checkbox starts off as ticked.
- onChange = Defines what happens when the checkbox is checked or unchecked.
- under = If this prop is given (or set to true) the flex-direction is set to column which puts the label above the checkbox rather than to the side.
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

- cols = This is a measure of the width of the input box. It is measured as an average sized character Should be equivalent to REM. It cannot accept height or width which si why cols and rows are used.
- htmlFor = This links the label to the input box and sets the name of the field for data submission.
- labelText = This is the title/question for the TextArea field which is visible to the user.
- onChange = The effect of the user entering or removing data in the input box.
- placeholder = Greyed out text in the input box. It is replaced when the user starts to enter data into the TextArea input box
- rows = This is a measure of the height of the input box. It is measured as an average sized character.
- value = This applies data to the input box so the user must delete or add to it. This would get submitted when the form is submitted.
