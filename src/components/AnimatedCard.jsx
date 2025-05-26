import styled from "styled-components";
import { motion } from "framer-motion";

const AnimatedCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: 16px;
  box-shadow: 0 4px 24px var(--shadow);
  padding: 2rem;
  margin: 1rem 0;
`;

export const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
};

export default AnimatedCard;
