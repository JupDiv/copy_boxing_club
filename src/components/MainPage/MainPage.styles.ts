import styled from 'styled-components';
import Button from '@mui/material/Button';

type HomeContainerProps = {
  slide?: string;
};

export const HomeWrapper = styled.main`
  position: relative;
  background-color: #293462;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 63px;
  }
`;

export const HomeContainer = styled.div<HomeContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${({ slide }) => slide});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin: 0 10px;
  height: 100%;

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  animation: slide 3s ease-in-out;
`;

export const HomeButton = styled(Button)`
  margin: 10px 0px;
  width: 100px;
  height: 50px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(300px, 50vw, 600px);
  background-color: #000;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 1rem;
  opacity: 0.8;
  border-radius: 0 10px;
`;
