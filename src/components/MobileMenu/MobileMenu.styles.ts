import styled, { keyframes } from 'styled-components';

type MobileMenuProps = {
  $isOpen: boolean;
};

export const MobileMenuWrapper = styled.div<MobileMenuProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 63px;
  right: 0;
  margin: auto;
  width: 50%;
  height: 400px;
  background-color: #d61c4e;
  border-radius: 10px;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: opacity 1.5s;

  @keyframes slideOut {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  animation: ${(props) => (props.$isOpen ? 'slideOut' : 'slideIn')} 1s
    ease-in-out;

  @media (min-width: 768px) {
    dispaly: none;
  }
`;
export const MobileMenuInner = styled.div``;
export const MobileMenuContent = styled.div``;
export const MobileMenuClose = styled.div``;
export const MobileMenuOverlay = styled.div``;
export const MobileMenuHamburger = styled.div``;
