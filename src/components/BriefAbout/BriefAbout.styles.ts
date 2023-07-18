import styled from 'styled-components';

export const BriefAboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #1cd6ce;
  border-top: 1px solid #1cd6ce;
  border-bottom: 1px solid #1cd6ce;
  border-radius: 10px;
  margin: 5px 10px 10px 10px;
`;
export const BriefAboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 66%;
  padding: 10px 0;
  @media (max-width: 900px) {
    height: 100%;
    width: 80%;
  }
`;
export const BriefAboutTitle = styled.h2`
  font-size: 2rem;
  color: #fedb39;
`;
export const BriefAboutText = styled.p``;
