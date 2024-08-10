import React from 'react';
import './styles/App.css';  // Assuming you have global styles here
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
};

export default App;