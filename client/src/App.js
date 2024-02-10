import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";
import Home from "./components/siteComponents/Home";
import Profile from "./pages/Profile/Profile";
import Explore from "./pages/Explore/Explore";
import Signin from "./pages/Signin/Signin";
import Navbar from "./components/siteComponents/Navbar";
import Error from "./pages/Error/Error";
import Ayurveda from './components/siteComponents/Ayurveda';
import Expert from './components/siteComponents/Expert';
import Community from './components/siteComponents/Community';
import Contact from './components/siteComponents/Contact';
import Footer from './components/siteComponents/Footer'
import ComLanding from "./pages/ComLanding/ComLanding";


const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signout",
        element: <Signin />,
      },
      {
        path:"/ayurveda",
        element:<Ayurveda />
      },
      {
        path:"/community",
        element:<Community />
      },
      {
        path:"/experts",
        element:<Expert />
      },
      {
        path:"/contact",
        element:<Contact />
      },{
        path:"/comlanding",
        element:<ComLanding />
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
