# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


QuickRent
Project Overview
The QuickRent landing page project is a responsive and visually engaging website designed for a fictional startup that specializes in renting gadgets, such as laptops, cameras, and gaming consoles. The purpose of this project is to showcase proficiency in modern web design and development by creating a user-friendly platform with the following key features:

1.Responsive Design: Ensures seamless usability across devices, including desktops, tablets, and mobile phones.

2.Modern UI: Incorporates clean layouts, animations, and an intuitive navigation system for a delightful user experience.

3.Interactive Elements: Highlights key features and services through engaging components like hero banners, testimonial sections, and vibrant call-to-action buttons.

4.Functional Pages: Includes a structured layout with separate pages for Home, Features, Gadgets, and Contact, ensuring easy navigation and interaction.

This project demonstrates an ability to blend creativity, technical expertise, and a focus on user experience to deliver a polished and professional web solution.



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
git clone https://github.com/KLSudeep/QuickRent.git


2. Navigate to the Project Directory
Once the repository is cloned, navigate into the project directory using the command:

bash
Copy code
cd QuickRent

3. Install Dependencies
The project uses npm as the package manager. Install all the required dependencies by running:

bash
Copy code
npm install
This command will install all the dependencies listed in the package.json file, including:

4. React and React DOM
Vite as the build tool
Tailwind CSS for styling
React Router DOM for routing
React Icons for icons

5. Set Up Tailwind CSS (If not already set up)
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

6. Install React Router DOM
To handle routing within the app, make sure React Router DOM is installed:

bash
Copy code
npm install react-router-dom

7. Install React Icons
To include customizable icons, install React Icons:

bash
Copy code
npm install react-icons

8. Run the Development Server
After successfully installing the dependencies, you can start the development server using the following command:

bash
Copy code
npm run dev
Vite will launch the application and provide a local development URL, typically:


bash

  Local:   http://localhost:5173/
  Network: use --host to expose
Visit http://localhost:5173 (or the provided URL) in your browser to see the application running locally.




