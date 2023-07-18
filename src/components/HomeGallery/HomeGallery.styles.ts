import styled from 'styled-components';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const HomeGalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #293462;
`;

export const HomeGalleryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const HomeGalleryViewAll = styled(Button)`
  color: #1cd6ce;
`;
export const HomeGalleryLink = styled(Link)``;
export const HomeGalleryTitle = styled.p`
  font-size: 2rem;
  color: #fedb39;
  text-align: center;
  margin-bottom: 10px;
`;
export const HomeGalleryContainerPhotos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3px 0;
  color: white;
  height: 100%;
  width: 100%;
`;

export const HomeGalleryPhoto = styled(Image)`
  width: 320px;
  height: 420px;

  @media (max-width: 426px) {
    width: 150px;
    height: 200px;
  }
`;

export const HomeGalleryButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
`;

export const HomeButton = styled(Button)`
  width: 100px;
  height: 30px;
  color: #1cd6ce;
`;
