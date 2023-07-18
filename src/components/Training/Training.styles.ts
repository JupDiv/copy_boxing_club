import styled from 'styled-components';

export const TrainingWrapper = styled.div``;
export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  color: #1cd6ce;
`;
export const TrainingTitle = styled.h2`
  text-align: center;
`;
export const TrainingDescription = styled.p`
  margin: 10px;
`;
export const TrainingYouTubeVideo = styled.iframe`
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 95%;
  }

  @media screen and (min-width: 480px) {
    height: 315px;
  }
`;
