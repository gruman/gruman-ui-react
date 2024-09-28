# Gruman UI React

![Screenshot of all components](./assets/screenshot.png)

A lightweight React component library providing customizable UI components with universal theming support, including Buttons, Alerts, Images, and Containers for rapid development. Visit [NPM](https://www.npmjs.com/package/gruman-ui-react) for more info.

## Install

```bash
yarn add gruman-ui-react styled-components

or

npm install gruman-ui-react styled-components
```

## Usage

```bash
import React from 'react';
import GlobalStyle from '@gruman-react/styles/GlobalStyle'; // Import global styles
import { Button, Alert, Image, Container, ThemeProvider, Header } from 'gruman-ui-react'; // Import components

// Define the menu items
const menu = [
  {
    title: "About",
    link: "https://gruman.co/about"
  },
  {
    title: "Profile",
    link: "https://gruman.co/profile"
  },
  {
    title: "Portfolio",
    link: "https://gruman.co/portfolio"
  }
];

// Define the home item
const home = {
  title: "React UI Gruman",
  link: "/"
};

// Main App component
const App: React.FC = () => {
  return (
    <ThemeProvider> {/* Wrap the app in ThemeProvider for theming */}
      <GlobalStyle /> {/* Apply global styles */}
      <Container> {/* Container for layout */}
        <Header menu={menu} home={home} /> {/* Render the header */}
        <main>
          {/* Button with click handler */}
          <Button title="Click Me" onClick={() => alert('Clicked!')} />
          {/* Alert message */}
          <Alert message="This is a success message!" type="success" />
          {/* Image component with width set to 50% */}
          <Image src="https://via.placeholder.com/150" alt="Placeholder Image" width="50%" />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App; // Export the App component

```