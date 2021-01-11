import React, { Component } from 'react'

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hassError) {
            return <p>Something went wrong.</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary
