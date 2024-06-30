# 🖥️ Welcome to React-ui-essentials 💫

React-ui-essentials is an open-source React component library built with React. It's comprehensive and can be used in production out of the box.

## 📦 Installation

Install the package in your project directory with:

```bash
# Using npm
npm i react-ui-essentials --save

# Using yarn
yarn add react-ui-essentials --save

# Using pnpm
pnpm add react-ui-essentials --save
```
 ## 👉 Getting set up
 To start using the components, please follow these steps:
 
 ```jsx
 // App.jsx
 import React from "react";
 import { Button } from "react-ui-essentials";

const App=()=>{
    return(
        <Button variant="primary" size="sm">
            My first Button component
        </Button>
        <Button variant="secondary" size="md">
            My first Button component
        </Button>
        <Button variant="danger" size="lg">
            My first Button component
        </Button>
        <Button variant="help" size="xl">
            My first Button component
        </Button>
    )
};

export default App;
 
 ```

```bash
// main.js or index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-ui-essentials/dist/index.css"; // once import styles in the main file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
```

## 📃 Documentation
Visit [https://react-ui-essentials.vercel.app/](https://react-ui-essentials.vercel.app/) to view the full documentation.

## 📖 Examples
Our documentation features [a collection of example projects using React-ui-essentials](https://react-ui-essentials.vercel.app/componentsOverview).

## 🪪 License
This project is licensed under the terms of the
[MIT license](/LICENSE).