import styled from 'styled-components';

type HomeContainerProps = {
  $slide?: string;
  height?: number;
  width?: number;
  $mobi?: boolean;
};

export const HomeContainer = styled.div<HomeContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${({ $slide }) => $slide});
  background-size: ${({ $mobi }) => ($mobi ? 'contain' : 'cover')};
  background-position: center;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin: auto;
  height: ${({ height, $mobi }) => ($mobi ? '100vh' : `${height}px`)};
  width: ${({ width, $mobi }) => ($mobi ? '100vw' : `${width}px`)};
  border-radius: 10px;

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

  animation: slide 2s ease-in-out;
`;

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(300px, 50vw, 600px);
  background-color: #000;
  color: #1cd6ce;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 1rem;
  opacity: 0.8;
  border-radius: 0 10px;
`;

export const HomeContentTitle = styled.h2``;
export const HomeContentText = styled.p``;
