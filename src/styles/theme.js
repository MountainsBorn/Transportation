export const theme = {
  colors: {
    primary: '#FF6B6B', // Coral red
    secondary: '#4ECDC4', // Turquoise
    background: 'rgba(45, 45, 65, 0.95)', // Darker blue-gray
    text: '#F7F7F7', // Off-white
    textLight: 'rgba(247, 247, 247, 0.7)', // Semi-transparent off-white
    border: 'rgba(255, 255, 255, 0.15)', // Brighter border
    hover: 'rgba(255, 107, 107, 0.1)', // Coral red with opacity
    shadow: 'rgba(0, 0, 0, 0.15)', // Darker shadow
    gradient: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)', // Coral to turquoise
  },
  effects: {
    blur: 'blur(10px)',
    shadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.15)',
    transition: 'all 0.3s ease',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: '800',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '700',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    body: {
      fontSize: '1rem',
      fontWeight: '400',
    },
  },
};