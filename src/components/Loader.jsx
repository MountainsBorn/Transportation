import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Outer ring rotation
const rotateOuter = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Inner ring rotation (opposite direction)
const rotateInner = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

// Floating animation
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

// Glow pulse
const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5)); }
  50% { filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8)); }
`;

// Text reveal
const textReveal = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const LoaderWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const OuterRing = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid #e94560;
  border-right: 4px solid #533483;
  animation: ${rotateOuter} 3s linear infinite;
  box-shadow: 0 0 20px rgba(233, 69, 96, 0.3);

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

const InnerRing = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-bottom: 4px solid #e94560;
  border-left: 4px solid #533483;
  animation: ${rotateInner} 2s linear infinite;
  box-shadow: 0 0 20px rgba(83, 52, 131, 0.3);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const TruckContainer = styled.div`
  position: absolute;
  font-size: 3.5rem;
  animation: ${float} 3s ease-in-out infinite, ${glow} 2s ease-in-out infinite;
  transform-style: preserve-3d;
  z-index: 2;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 25px;
  }
`;

const LoaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 3;
  animation: ${textReveal} 1s ease-out forwards;
  opacity: 0;
  background: linear-gradient(90deg, #e94560, #533483);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  white-space: nowrap;
  text-align: center;
  width: auto;
  min-width: 240px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
    min-width: 200px;
    letter-spacing: 0.05em;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.3rem 0.6rem;
    min-width: 180px;
    letter-spacing: 0.03em;
  }
`;

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <LoaderWrapper>
      <LoaderContainer>
        <OuterRing />
        <InnerRing />
        <TruckContainer>🚚</TruckContainer>
        <LoaderText>National India Roadways</LoaderText>
      </LoaderContainer>
    </LoaderWrapper>
  );
};

export default Loader;