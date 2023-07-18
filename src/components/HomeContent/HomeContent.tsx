import { useState, useEffect } from 'react';
import {
  HomeContainer,
  HomeContentContainer,
  HomeContentTitle,
  HomeContentText,
} from './HomeContent.styles';
import { dataImages } from '@/data/dataImages';
import { dataText } from '@/data/dataText';
import type { ItemDataType } from '@/data/dataImages';
import type { dataTextType } from '@/data/dataText';

export default function HomeContent(): JSX.Element {
  const newSlide: ItemDataType[] = dataImages.slice(-5);
  const [slide, setSlides] = useState<ItemDataType>(newSlide[0]);
  const [text, setText] = useState<dataTextType>(dataText[0]);
  const [MobiDevice, setMobiDevice] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobiDevice(window.navigator.userAgent.includes('Mobi'));
    }

    function changeSlide() {
      const index = newSlide.indexOf(slide);
      if (index === newSlide.length - 1) {
        setSlides(newSlide[0]);
      } else {
        setSlides(newSlide[index + 1]);
      }
    }
    function changeText() {
      const index = dataText.indexOf(text);
      if (index === dataText.length - 1) {
        setText(dataText[0]);
      } else {
        setText(dataText[index + 1]);
      }
    }
    const timer = setTimeout(() => {
      changeSlide();
      changeText();
    }, 25000);

    return () => clearTimeout(timer);
  }, [slide, newSlide, text]);

  const { img } = slide;

  return (
    <HomeContainer
      height={img.height}
      width={img.width}
      key={img.src}
      $slide={img.src}
      $mobi={MobiDevice}
    >
      <HomeContentContainer>
        <HomeContentTitle>{text.name}</HomeContentTitle>
        <HomeContentText>{text.text}</HomeContentText>
      </HomeContentContainer>
    </HomeContainer>
  );
}
