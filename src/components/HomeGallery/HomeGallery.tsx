import { useEffect, useState, useMemo } from 'react';
import {
  HomeGalleryContainer,
  HomeGalleryTextContainer,
  HomeGalleryTitle,
  HomeGalleryContainerPhotos,
  HomeGalleryButtonContainer,
  HomeButton,
  HomeGalleryViewAll,
  HomeGalleryPhoto,
  HomeGalleryLink,
} from './HomeGallery.styles';
import { dataImages } from '@/data/dataImages';
import type { ItemDataType } from '@/data/dataImages';

export default function HomeGallery(): JSX.Element {
  const [activeButtonLeft, setActiveButtonLeft] = useState<boolean>(false);
  const [activeButtonRight, setActiveButtonRight] = useState<boolean>(false);
  const [amountSlides, setAmountSlides] = useState<number>(4);
  const [minSlide, setMinSlides] = useState<number>(0);

  const DESKTOP_AMOUNT_SLIDES = 4;
  const MOBILE_AMOUNT_SLIDES = 2;
  const minSlideNumb = minSlide * amountSlides;
  const maxSlideNumb = minSlideNumb + amountSlides;

  const slice = dataImages.slice(minSlideNumb, maxSlideNumb);

  useEffect(() => {
    if (minSlideNumb < 1) {
      setActiveButtonLeft(true);
    } else {
      setActiveButtonLeft(false);
    }
    if (maxSlideNumb > dataImages.length - 1) {
      setActiveButtonRight(true);
    } else {
      setActiveButtonRight(false);
    }
    if (
      typeof window !== 'undefined' &&
      window.navigator.userAgent.includes('Mobi')
    ) {
      setAmountSlides(MOBILE_AMOUNT_SLIDES);
    } else {
      setAmountSlides(DESKTOP_AMOUNT_SLIDES);
    }
  }, [minSlideNumb, maxSlideNumb, amountSlides, minSlide]);

  const handleLeftClick = () => {
    if (minSlide > 0) {
      setMinSlides(minSlide - 1);
    }
  };

  const handleRightClick = () => {
    if (maxSlideNumb < dataImages.length) {
      setMinSlides(minSlide + 1);
    }
  };

  const memoizedImages = useMemo(() => {
    return slice.map(({ img, title }: ItemDataType) => (
      <HomeGalleryPhoto
        priority={true}
        key={title}
        src={img.src}
        width={100}
        height={100}
        alt="Gallery`s photo"
      />
    ));
  }, [slice]);

  return (
    <HomeGalleryContainer>
      <HomeGalleryTextContainer>
        <HomeGalleryTitle>Галерея</HomeGalleryTitle>
        <HomeGalleryLink href="/gallery">
          <HomeGalleryViewAll variant="contained">
            Подивитися усі
          </HomeGalleryViewAll>
        </HomeGalleryLink>
      </HomeGalleryTextContainer>
      <HomeGalleryContainerPhotos>{memoizedImages}</HomeGalleryContainerPhotos>
      <HomeGalleryButtonContainer>
        <HomeButton
          disabled={activeButtonLeft}
          onClick={handleLeftClick}
          variant="contained"
        >
          Назад
        </HomeButton>
        <HomeButton
          disabled={activeButtonRight}
          onClick={handleRightClick}
          variant="contained"
        >
          Вперед
        </HomeButton>
      </HomeGalleryButtonContainer>
    </HomeGalleryContainer>
  );
}
