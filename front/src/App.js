import React from 'react';
import UserPageContainer from './containers/UserPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <UserPageContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
