import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(90deg, #00ff88, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.05em;
  transition: transform 0.3s ease;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00ff88, #00a1ff);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00ff88;
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: #00ff88;
    &::after {
      width: 100%;
    }
  }
`;

const ThemeToggle = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #e0e0e0;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    color: #00ff88;
  }
`;

const MobileMenu = styled(motion.button)`
  display: none;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #e0e0e0;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #00ff88;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLinks = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: rgba(26, 26, 46, 0.98);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    z-index: 999;
    padding: 1rem;
    gap: 1rem;
  }
`;

const MobileNavLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #00ff88;
  }

  &.active {
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
  }
`;

const services = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/feedback", label: "Feedback" }
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <Nav style={{ 
      background: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'rgba(26, 26, 46, 0.8)',
      padding: scrolled ? '0.8rem 2rem' : '1rem 2rem'
    }}>
      <NavContainer>
        <Logo to="/">NIR</Logo>
        <NavLinks>
          {services.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </ThemeToggle>
          <MobileMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ☰
          </MobileMenu>
        </div>
      </NavContainer>
      <AnimatePresence>
        {isMenuOpen && (
          <MobileNavLinks
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {services.map((item) => (
              <MobileNavLink
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
                onClick={handleLinkClick}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileNavLinks>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;