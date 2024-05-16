import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TailwindIndicator } from "./components/tailwind-indicator.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { TeamPage } from "./Team.tsx";
import DiscordRedirect from "./discord-redirect.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/dc",
    element: <DiscordRedirect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <TailwindIndicator />
  </React.StrictMode>,
);
