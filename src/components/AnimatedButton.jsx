import styled from "styled-components";

const NeonButton = styled.button`
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 0 8px var(--accent), 0 2px 8px var(--shadow);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 0 24px var(--accent), 0 4px 16px var(--shadow);
  }
`;

export default NeonButton;
