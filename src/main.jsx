import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { LoadingOverlay } from "@components/molecules";

import "./globals.css";
import AppRouter from "./AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<LoadingOverlay />} persistor={persistor}>
      <StrictMode>
        <BrowserRouter>
          <AppRouter />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
          />
        </BrowserRouter>
      </StrictMode>
    </PersistGate>
  </Provider>,
);
