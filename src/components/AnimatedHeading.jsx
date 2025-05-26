import styled from "styled-components";

const GradientHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 2s linear infinite alternate;
  @keyframes gradientMove {
    0% { background-position: 0% }
    100% { background-position: 100% }
  }
`;

export default GradientHeading;
