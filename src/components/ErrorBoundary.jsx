import React from "react";
import Button from "./Button.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in component:", error);
    console.error("Error details:", errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <p>{this.props.fallbackMessage || "No se pudo cargar el componente. Por favor, intenta más tarde."}</p>
          <Button variant="primary" onClick={this.resetError}>
            {this.props.retryText || "Reintentar"}
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
