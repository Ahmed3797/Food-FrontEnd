# 🥗 Aam – Customer Website

![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-API-yellow?logo=axios)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-success?logo=vercel)

Aam is a modern and responsive food ordering web app. This is the customer-facing frontend that allows users to browse food items, manage their cart, and place orders with ease.

---

## ✨ Features

- ✅ Browse products by category
- 🛒 Add items to cart and place orders
- 📍 Location selection for delivery
- 🔐 Secure authentication (Login/Register)
- 📱 Mobile-friendly & responsive layout
- 🔔 Real-time toast notifications (React Toastify)

---

## 🛠️ Tech Stack

- ⚛️ React (with Vite)
- 🌐 React Router DOM
- 💨 Tailwind CSS
- 🔄 Axios for API requests
- 📦 Context API for global state
- 🌩️ Cloudinary (for image assets via backend)
- 🔔 React Toastify for alerts

---

## 📁 Project Structure

Food-FrontEnd/ │ ├── public/ # Static assets ├── src/ │ ├── components/ # Reusable UI components │ ├── context/ # Global state (cart, auth, location) │ ├── pages/ # Main route views (Home, Cart, Login, etc.) │ ├── utils/ # Axios config, API calls │ └── App.jsx # Root app logic │ ├── .env # Environment variables └── vite.config.js # Vite configuration


---

## 🚀 Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Ahmed3797/Food-FrontEnd.git

# Navigate into the project directory
cd Food-FrontEnd

# Install dependencies
npm install

# Run the development server
npm run dev

🌐 Live Demo
Access the deployed website here:
🔗 https://food-front-end-one.vercel.app

🔌 Environment Variables
If you're connecting to a custom backend, you can create a .env file:

env
Copy
Edit
VITE_API_BASE_URL=https://food-mern-api.vercel.app/


