import Loading from "./components/Loading.jsx";
import { CartProvider } from "./providers/CartProvider.jsx";
import { routes } from "./routes.jsx";
import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <CartProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </CartProvider>
  );
};

export default App;
