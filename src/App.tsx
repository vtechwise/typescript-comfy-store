import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Button } from "./components/ui/button";

import {
  HomeLayout,
  Products,
  Cart,
  About,
  Login,
  Orders,
  Checkout,
  Register,
  Landing,
  SingleProduct,
  Error,
} from "./pages";
import { ErrorElement } from "./components/global";

import { loader as LandingLoader } from "./pages/Landing";
import { loader as ProductLoader } from "./pages/Products";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductLoader,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader,
      },

      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
