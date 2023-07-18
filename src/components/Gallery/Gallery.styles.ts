import styled from 'styled-components';
import Image from 'next/image';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

export const GalleryContainer = styled.div`
  margin-top: 80px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 63px;
  }
`;

export const GalleryTitle = styled.h2``;

export const GalleryImages = styled.div``;

export const GalleryModal = styled(Modal)`
  position: relative;
  height: auto;
  margin: auto;
  border: none;
  margin-top: 90px;
  overflow-y: scroll;
  max-height: 100vh;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const GalleryImage = styled(Image)`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const GalleryModalCloseButton = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  color: #d61c4e;
`;
