import { lazy, Suspense, useEffect } from "react";

import "./App.css";
const AppLayout = lazy(() => import("./Layout/AppLayout"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Project = lazy(() => import("./Pages/Project"));
const Skills = lazy(() => import("./Pages/Skills"));
const Contact = lazy(() => import("./Pages/Contact"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    // Aos.refresh();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="my-container">
        <Suspense fallback={<h1>loading</h1>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
