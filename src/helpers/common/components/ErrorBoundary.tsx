import React, { Component, ReactNode, ErrorInfo } from 'react';

// Define the props interface
interface IErrorBoundaryProps {
  children: ReactNode; // Child components wrapped by the ErrorBoundary
  fallbackComponent?: ReactNode; // Optional fallback component to display on error
}

// Define the state interface
interface IErrorBoundaryState {
  hasError: boolean; // Tracks whether an error has occurred
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  // Initialize the state
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // Update the state if an error occurs
  public static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  // Log the error details (optional: integrate with a logging service)
  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  // Render the fallback UI or child components
  public render() {
    if (this.state.hasError) {
      // If a fallback component is provided, render it
      if (this.props.fallbackComponent) {
        return <>{this.props.fallbackComponent}</>;
      }
      // Default fallback UI if no component is provided
      return <h1 style={{ color: 'red' }}>Something went wrong.</h1>;
    }

    // Render the children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
