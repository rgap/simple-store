import ErrorBoundary from "../components/ErrorBoundary.jsx";
import CartWidget from "../cart/CartWidget.jsx";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const CartWidgetContainer = () => (
  <ErrorBoundary fallbackMessage="No se pudo cargar el carrito. Por favor, intenta más tarde.">
    <CartWidget />
  </ErrorBoundary>
);

const RootLayout = () => {
  const location = useLocation();
  const isCheckoutPage = location.pathname.startsWith("/checkout");

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/catalog" className="nav-link">
              Catálogo
            </Link>
            <Link to="/checkout" className="nav-link">
              Pagar
            </Link>
          </div>
        </div>
      </nav>

      <div className="main-container">
        <main className={`main-content ${isCheckoutPage ? "full-width" : "with-sidebar"}`}>
          <Outlet />
        </main>

        {!isCheckoutPage && (
          <aside className="sidebar">
            <CartWidgetContainer />
          </aside>
        )}
      </div>
    </div>
  );
};

export default RootLayout;
