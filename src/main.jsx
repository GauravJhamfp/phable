import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <StrictMode>
    <AuthProvider>
    <div className="dark:bg-gray-900 dark:text-gray-100">
      <App />
    </div>
    </AuthProvider>
  </StrictMode>
  // </BrowserRouter>
);
