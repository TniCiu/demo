// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter'; // Adjust the path as necessary
import Appbar from './Components/AppBar'; // Import your Appbar component

const App = () => {
  return (
    <Router>
      <Appbar /> {/* Include your Appbar */}
      <AppRouter /> {/* Your routing logic */}
    </Router>
  );
};

export default App;
