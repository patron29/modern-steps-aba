import { Component } from 'react';
import { PHONE_DISPLAY, PHONE_HREF } from '../config/site.js';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen flex items-center justify-center bg-[#f5f0e8] px-4 py-16">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Something went wrong</h1>
            <p className="text-slate-700 mb-6">
              We&apos;re sorry - this page didn&apos;t load properly. Please try again, or call us and we&apos;ll help right away.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-[#5a7a6e] hover:bg-[#48645a] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
            >
              Call us: {PHONE_DISPLAY}
            </a>
            <div>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-block border-2 border-[#5a7a6e] text-[#5a7a6e] hover:bg-[#5a7a6e] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                Reload page
              </button>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
