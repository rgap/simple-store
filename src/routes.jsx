import Loading from "./components/Loading.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import React, { Suspense, lazy } from "react";

const Catalog = lazy(() => import("./catalog/CatalogPage.jsx"));
const Cart = lazy(() => import("./cart/CartPage.jsx"));
const Checkout = lazy(() => import("./checkout/CheckoutPage.jsx"));

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog/*",
        element: (
          <Suspense fallback={<Loading message="Loading catalog..." />}>
            <Catalog />
          </Suspense>
        ),
      },
      {
        path: "cart/*",
        element: (
          <Suspense fallback={<Loading message="Loading cart..." />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout/*",
        element: (
          <Suspense fallback={<Loading message="Loading checkout..." />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
];
