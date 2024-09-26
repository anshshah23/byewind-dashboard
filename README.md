# Company Dashboard Frontend

https://github.com/user-attachments/assets/ec0cbe9a-219c-4f03-87dd-284e6f3f3400

This project is a modern, fully responsive dashboard interface built with React, Vite, Tailwind CSS, and Framer Motion. It was created in collaboration with Ashish48Maurya and is designed for optimal performance and smooth user interactions, including light/dark mode support, animations, and easy navigation.

## Features
Dashboard Interface: A clean and minimalistic dashboard layout, providing a great user experience. </br>
Sidebar and Navbar Integration: The dashboard features a responsive sidebar that integrates seamlessly with the top navbar for easy access to different sections. </br>
Interactive Charts and Tables:Includes dynamic charts, tables, and plots to visualize data in a user-friendly manner. </br>
Dark/Light Mode Toggle: Users can switch between light and dark modes, offering a customized appearance. </br>
Routing: Built-in routing to navigate between dashboard pages smoothly. </br>
Sophisticated Animations: Leverages Framer Motion for smooth and modern animations throughout the UI. </br>

## Tech Stack
React: A JavaScript library for building user interfaces. </br>
Vite: A build tool that provides a faster and leaner development experience for modern web projects. </br>
Tailwind CSS: A utility-first CSS framework for designing highly responsive layouts with minimal effort. </br>
Framer Motion: A library for animations, adding smooth transitions and visual effects to the interface. </br>

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
