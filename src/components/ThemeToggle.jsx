import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary);
  box-shadow: 0 0 10px var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      initial={false}
      animate={{ rotate: isDarkMode ? 180 : 0 }}
    >
      <IconWrapper
        initial={false}
        animate={{ opacity: isDarkMode ? 0 : 1, y: isDarkMode ? -50 : 0 }}
      >
        ☀️
      </IconWrapper>
      <IconWrapper
        initial={false}
        animate={{ opacity: isDarkMode ? 1 : 0, y: isDarkMode ? 0 : 50 }}
      >
        🌙
      </IconWrapper>
    </ToggleButton>
  );
};

export default ThemeToggle;