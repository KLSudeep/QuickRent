# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


QuickRent
Project Overview
QuickRent is a modern, user-friendly application for renting gadgets and electronics, built using React, Vite, Tailwind CSS, React Router DOM, and React Icons. This app provides users with the ability to browse available gadgets, view details, compare features, and rent gadgets with ease. It also allows users to list their own gadgets for rent.

Tech Stack
React: JavaScript library for building user interfaces.
Vite: Fast and optimized development tool for modern web applications.
Tailwind CSS: Utility-first CSS framework for styling.
React Router DOM: For navigation between pages within the app.
React Icons: A library to include customizable icons.
Instructions to Set Up and Run the Project
1. Clone the Repository
Start by cloning the project repository to your local machine. Open a terminal and run the following command:

bash
Copy code
git clone https://github.com/yourusername/quickrent.git
Make sure to replace yourusername with your actual GitHub username if you're working with your personal repository.

2. Navigate to the Project Directory
Once the repository is cloned, navigate into the project directory using the command:

bash
Copy code
cd quickrent
3. Install Dependencies
The project uses npm as the package manager. Install all the required dependencies by running:

bash
Copy code
npm install
This command will install all the dependencies listed in the package.json file, including:

React and React DOM
Vite as the build tool
Tailwind CSS for styling
React Router DOM for routing
React Icons for icons
4. Set Up Tailwind CSS (If not already set up)
If Tailwind CSS isn’t automatically set up or you want to verify, follow these steps to configure it manually:

Install Tailwind CSS and its peer dependencies:

bash
Copy code
npm install -D tailwindcss postcss autoprefixer
Create the configuration files for Tailwind CSS:

bash
Copy code
npx tailwindcss init
In the tailwind.config.js file, add the following content:

js
Copy code
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
In the src/index.css (or create a new file if not available), add the following Tailwind imports:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
This will ensure Tailwind CSS is working throughout your project.

5. Install React Router DOM
To handle routing within the app, make sure React Router DOM is installed:

bash
Copy code
npm install react-router-dom
6. Install React Icons
To include customizable icons, install React Icons:

bash
Copy code
npm install react-icons
7. Run the Development Server
After successfully installing the dependencies, you can start the development server using the following command:

bash
Copy code
npm run dev
Vite will launch the application and provide a local development URL, typically:


bash

  Local:   http://localhost:5173/
  Network: use --host to expose
Visit http://localhost:5173 (or the provided URL) in your browser to see the application running locally.




