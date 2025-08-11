import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert" aria-live="polite">
          <div className="error-content">
            <h2>Nešto je pošlo po zlu</h2>
            <p>Izvinjavamo se, dogodila se greška. Molimo osvežite stranicu i pokušajte ponovo.</p>
            <button 
              onClick={() => this.setState({ hasError: false, error: null })}
              className="error-retry-btn"
              type="button"
              aria-label="Pokušaj ponovo"
            >
              Pokušaj ponovo
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;