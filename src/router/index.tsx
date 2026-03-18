import { createBrowserRouter } from "react-router-dom";
import { DownloadApp, LandingPage } from "../pages";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/download", element: <DownloadApp /> },
]);