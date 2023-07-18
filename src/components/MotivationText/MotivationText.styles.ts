import styled from 'styled-components';

export const MotivationTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #1cd6ce;
  border-top: 1px solid #1cd6ce;
  border-bottom: 1px solid #1cd6ce;
  border-radius: 10px;
  margin: 0 10px 10px 10px;
`;
export const MotivationTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 66%;
  padding: 10px 0;

  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 100%;
    width: 80%;
  }
`;
export const MotivationTextTitle = styled.h2`
  font-size: 2rem;
  color: #fedb39;
`;
export const MotivationTexts = styled.p``;
