'use client';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {
  GalleryContainer,
  GalleryImage,
  GalleryModal,
  GalleryModalCloseButton,
} from './Gallery.styles';
import type { StaticImageData } from 'next/image';
import { dataImages } from '@/data/dataImages';

type ItemDataType = {
  img: StaticImageData;
  title: string;
};

type ImageSize = {
  width: number;
  height: number;
};
export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(
    dataImages[0].img
  );
  const [amountOfImages, setAmountOfImages] = useState<number>(0);
  const [imageSize, setImageSize] = useState<ImageSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.navigator.userAgent.includes('Mobi')
    ) {
      setAmountOfImages(1);
      setImageSize({
        width: 300,
        height: 330,
      });
    } else {
      setAmountOfImages(3);
      setImageSize({
        width: selectedImage.width,
        height: selectedImage.height,
      });
    }
  }, [selectedImage]);
  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  return (
    <GalleryContainer>
      <ImageList cols={amountOfImages}>
        {dataImages.map(({ img, title }: ItemDataType) => (
          <ImageListItem key={title}>
            <GalleryImage
              priority={true}
              src={img.src}
              alt={title}
              width={350}
              height={450}
              onClick={() => handleImageClick(img)}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <GalleryModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
          },
        }}
        ariaHideApp={false}
      >
        <GalleryImage
          src={selectedImage}
          alt="Selected"
          width={imageSize.width}
          height={imageSize.height}
        />
        <GalleryModalCloseButton onClick={() => setModalIsOpen(false)} />
      </GalleryModal>
    </GalleryContainer>
  );
}
