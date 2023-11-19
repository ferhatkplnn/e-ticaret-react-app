import { Suspense, lazy } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useRoutes } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
// import Basket from "../pages/Basket";
// import Error404 from "../pages/Error404";
// import Admin from "../pages/Admin";
// import Orders from "../pages/Admin/Orders";

const Products = lazy(() => import("../pages/Products"));
const Signin = lazy(() => import("../pages/Auth/Signin"));
const Signup = lazy(() => import("../pages/Auth/Signup"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Profile = lazy(() => import("../pages/Profile"));
const Basket = lazy(() => import("../pages/Basket"));
const Error404 = lazy(() => import("../pages/Error404"));
const Admin = lazy(() => import("../pages/Admin"));
const Orders = lazy(() => import("../pages/Admin/Orders"));
const AdminProducts = lazy(() => import("../pages/Admin/Products"));

function RouterElement() {
  const { loggedIn, user } = useAuth();
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
    { path: "/basket", element: <Basket /> },
    {
      path: "/admin/*",
      element: user?.role === "admin" ? <Admin /> : <Navigate to="/" />,
      children: [
        { path: "orders", element: <Orders /> },
        { path: "products", element: <AdminProducts /> },
      ],
    },
    { path: "*", element: <Error404 /> },
  ];

  const routers = useRoutes(routeConfig);

  return <Suspense fallback={<LoadingSpinner />}>{routers}</Suspense>;
}

export default RouterElement;
