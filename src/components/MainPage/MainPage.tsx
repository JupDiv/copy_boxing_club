'use client';
import { HomeWrapper } from './MainPage.styles';

import Comments from '../Comments/Comments';
import HomeGallery from '../HomeGallery/HomeGallery';
import HomeContent from '../HomeContent/HomeContent';
import WorkTime from '../WorkTime/WorkTime';
import MotivationText from '../MotivationText/MotivationText';
import BriefAbout from '../BriefAbout/BriefAbout';
import Form from '../Form/Form';

export default function MainPage() {
  return (
    <HomeWrapper>
      <HomeContent />
      <BriefAbout />
      <WorkTime />
      <Form />
      <HomeGallery />
      <MotivationText />
      <Comments />
    </HomeWrapper>
  );
}
