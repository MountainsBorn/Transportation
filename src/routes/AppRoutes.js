import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import './styles/global.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <AppRoutes />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;