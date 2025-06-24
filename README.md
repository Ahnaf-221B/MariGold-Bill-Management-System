# Marigold - Bill Management Website

## Project Name:
**Marigold - Bill Management Website**

## Purpose:
Marigold is a web application designed to simplify the process of managing and paying different types of bills online. It allows users to easily track, view, and pay bills from various organizations such as electricity, water, and gas companies. The app aims to provide a seamless and user-friendly experience for users to manage their payments in one place.



## Key Features:
- **Pay Different Types of Bills**: Users can view and pay bills for electricity, water, gas, and other services.
- **Bill Tracking**: Track the payment status of each bill.
- **User Authentication**: Users can sign up, sign in, and manage their accounts securely.
- **Payment History**: Users can view their payment history for different bills.
- **Responsive Design**: Fully responsive design for optimal viewing on mobile, tablet, and desktop.
- **Real-time Notifications**: Users get notified about payment statuses and reminders.

## Technologies and npm Packages Used:

### npm Packages:
- **@tailwindcss/vite**: For integrating TailwindCSS with Vite for styling.
- **firebase**: To handle user authentication, database management, and other Firebase services.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: The React package for rendering the UI to the DOM.
- **react-icons**: Provides a set of customizable icons for use in React projects.
- **react-router-dom**: For routing and navigation within the React application.
- **react-toastify**: For adding real-time notifications and alerts.
- **swiper**: A powerful and flexible slider library, used for creating slideshows or carousels in the UI.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.

### Development Tools:
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.


## 🛠 Setup Instructions & Installation

1. Clone the repository:
   ```bash
   git clone 


2. Install dependencies::
    ```bash
    npm install

    ⚠️ Make sure to initialize Tailwind CSS and configure Vite if you haven’t already. For example, after installing, run:
    ```bash
    npx tailwindcss init -p

3. Configure Firebase:
    Create a .env.local file and add your Firebase config:
    ```env
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_sender_id
    VITE_APP_ID=your_app_id

4. Run locally:
    ```bash
    npm run dev

---

## Fix Client-Side Routing (React Router)
    If using React Router, add a _redirects file in your public/ folder:
    ```bash
    /*    /index.html   200

---

## 🚀 Deployment Steps to Firebase

1. Login to Firebase CLI (if not already):
    ```bash
    npm install -g firebase-tools
    firebase login

2. Initialize Firebase in your project:
    ```bash
    firebase init

    Choose Hosting.
    Select your Firebase project.
    Set dist as the public directory.
    Choose Yes for single-page app rewrite (index.html).
    Choose No for GitHub deploys (unless needed).

3. Build your React app:
    ```bash
    npm run build

4. Deploy to Firebase:
    ```bash
    firebase deploy

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
