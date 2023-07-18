import styled from 'styled-components';

export const CommentWrapper = styled.div`
  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  animation: 1s ease-in-out slideInFromRight;
  border: 1px solid yellow;
  border-radius: 10px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 300px;
  color: #1cd6ce;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const CommentAuthor = styled.h3``;
export const CommentText = styled.p`
  text-align: center;
`;
export const CommentDate = styled.p``;
