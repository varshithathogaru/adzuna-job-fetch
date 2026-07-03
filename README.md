# Adzuna Job Fetch (React + Vite)

This project demonstrates how to fetch job listings from the **Adzuna API** using React and Vite.  
It integrates with Adzuna’s REST API using an App ID and App Key, and displays job results with company, location, and a link to the full listing.

---

## 🚀 Features
- Fetches live job listings from Adzuna API
- Displays job title, company, location, and link
- Handles loading, error, and empty states gracefully
- Built with **React + Vite** for fast development

---

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/varshithathogaru/adzuna-job-fetch.git
   cd adzuna-job-fetch
2.Install dependencies
npm install

3.Add your Adzuna credentials  
Create a .env file in the project root:
VITE_ADZUNA_APP_ID=d4d43603
VITE_ADZUNA_APP_KEY=e036d2521e10370cedd23ae7db78b884

4.Run the dev server
npm run dev



📂 Key Files
src/adzuna.jsx → Adzuna job fetch component
src/App.jsx → Example usage of the component








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
