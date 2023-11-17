import { Suspense, lazy } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useRoutes } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Products = lazy(() => import("../pages/Products"));
const Signin = lazy(() => import("../pages/Auth/Signin"));
const Signup = lazy(() => import("../pages/Auth/Signup"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Profile = lazy(() => import("../pages/Profile"));

function RouterElement() {
  const { loggedIn } = useAuth();
  const routeConfig = [
    {
      path: "/",
      element: <Products />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/product/:product_id",
      element: <ProductDetail />,
    },
    {
      path: "/profile",
      element: loggedIn ? <Profile /> : <Navigate to="/" />,
    },
  ];

  const routers = useRoutes(routeConfig);

  return <Suspense fallback={<LoadingSpinner />}>{routers}</Suspense>;
}

export default RouterElement;