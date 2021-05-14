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

### ToDo Tree

ToDo Tree is an extension in VS Code.
Once installed the tree icon appears on the VS Code side bar.
When writing comments in your code start the comment with the key words "TODO" or "FIXME" the ToDo tree extension picks out these commenst and pust them in a list allowing developers to quickly jump to parts of the code marked up as needing to be worked on.
