import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routesGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
