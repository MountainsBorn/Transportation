import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButtonContainer = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    left: 1.5rem;
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    bottom: 1rem;
    left: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <BackButtonContainer
      onClick={() => navigate(-1)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowLeft /> Back
    </BackButtonContainer>
  );
};

export default BackButton; 