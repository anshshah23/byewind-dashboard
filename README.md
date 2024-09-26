#Company Dashboard Frontend


https://github.com/user-attachments/assets/2f3b8f76-af9e-40f8-b148-adf349bc05b2

![image](https://github.com/user-attachments/assets/861fa40c-a3d9-4f89-9ebd-309fc5ae390f)
![image](https://github.com/user-attachments/assets/dbf061ae-50b1-4be0-bc81-0b2033c60663)
![image](https://github.com/user-attachments/assets/220fc5a5-e8b9-4b26-a5c8-1c384fdd74cb)
![image](https://github.com/user-attachments/assets/87d762c0-e81b-4583-b637-9661f7da7025)

This project is a modern, fully responsive dashboard interface built with React, Vite, Tailwind CSS, and Framer Motion. It was created in collaboration with Ashish48Maurya and is designed for optimal performance and smooth user interactions, including light/dark mode support, animations, and easy navigation.

##Features
###Dashboard Interface: A clean and minimalistic dashboard layout, providing a great user experience.
###Sidebar and Navbar Integration: The dashboard features a responsive sidebar that integrates seamlessly with the top navbar for easy access to different sections.
###Interactive Charts and Tables: Includes dynamic charts, tables, and plots to visualize data in a user-friendly manner.
###Dark/Light Mode Toggle: Users can switch between light and dark modes, offering a customized appearance.
###Routing: Built-in routing to navigate between dashboard pages smoothly.
###Sophisticated Animations: Leverages Framer Motion for smooth and modern animations throughout the UI.

##Tech Stack
###React: A JavaScript library for building user interfaces.
###Vite: A build tool that provides a faster and leaner development experience for modern web projects.
###Tailwind CSS: A utility-first CSS framework for designing highly responsive layouts with minimal effort.
###Framer Motion: A library for animations, adding smooth transitions and visual effects to the interface.

# Project Setup: React + Vite + Tailwind + Framer Motion

This guide will help you install and run a React project using Vite, with additional packages including Tailwind CSS, Framer Motion, and ESLint configuration.

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
Run the following command to install all necessary packages:
```bash
npm install
```

Alternatively, you can use Yarn:
```bash
yarn install
```

### 3. Run the Development Server
To start the Vite development server with hot module replacement (HMR), use the following command:
```bash
npm run dev
```

or with Yarn:
```bash
yarn dev
```

The development server should start at `http://localhost:5173`.

### 4. Build the Project
To build the project for production, run:
```bash
npm run build
```

or with Yarn:
```bash
yarn build
```

### 5. Preview the Production Build
To preview the production build, you can use:
```bash
npm run preview
```

or with Yarn:
```bash
yarn preview
```

## Tailwind CSS Integration
This project includes [Tailwind CSS](https://tailwindcss.com/) for styling. It is already configured with `postcss` and `autoprefixer`. To make changes to the design, modify the `tailwind.config.js` file.

Tailwind is applied to all components using utility-first CSS, allowing for rapid UI development.

## Framer Motion
Framer Motion is used for animations. You can easily add animations to your components by importing `motion` from `framer-motion` and wrapping your components.

Example:
```jsx
import { motion } from 'framer-motion';

const Component = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Hello, World!
  </motion.div>
);
```

## ESLint Configuration
The project includes [ESLint](https://eslint.org/) with the following plugins:
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

The ESLint configuration is located in `.eslintrc` and helps maintain code quality. Ensure to run the linter before pushing changes:
```bash
npm run lint
```

or with Yarn:
```bash
yarn lint
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase with ESLint.

## Additional Configuration
- **Vite Plugin React**: For fast refresh and optimized builds using Vite.
- **PostCSS and Autoprefixer**: Configured for cross-browser compatibility.
