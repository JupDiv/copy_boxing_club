import styled from 'styled-components';

export const IconFormOnlineContainer = styled.div`
  cursor: pointer;
  @keyframes call {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  animation: call 2s infinite;
`;
