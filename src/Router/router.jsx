import { createBrowserRouter } from "react-router";
import App from "../App";
import ProjectDetails from "../Components/Project/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/project-detail/:id",
    Component: ProjectDetails,
    loader: () => fetch('/projects.json'),
  },
]);
