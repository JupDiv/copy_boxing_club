import styled from 'styled-components';

export const WorkTimeWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: #293462;
  color: #1cd6ce;
  font-size: 1.5rem;
`;
export const WorkTimeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;
export const WorkTimeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    font-size: 14px;
  }
`;
export const WorkTimeTitle = styled.h2`
  font-size: 2rem;
  color: #fedb39;
`;
export const WorkTimeItem = styled.div`
  @media (max-width: 900px) {
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 5px;
  }
`;
export const WorkTimeItemTitle = styled.h3``;
export const WorkTimeItemContent = styled.div``;
