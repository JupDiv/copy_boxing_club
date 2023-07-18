import styled, { keyframes } from 'styled-components';

const rainbow = keyframes`
  0%{color: red;}
  14%{color: orange;}
  28%{color: yellow;}
  42%{color: lime;}
  57%{color: blue;}
  71%{color: indigo;}
  85%{color: violet;}
  100%{color: red;}
`;

export const RainbowText = styled.div`
  color: #45eba5;
  animation: ${rainbow} 4s linear infinite;
  white-space: pre;
`;
