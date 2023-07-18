import {
  WorkTimeWrapper,
  WorkTimeContainer,
  WorkTimeContent,
  WorkTimeItem,
  WorkTimeItemContent,
  WorkTimeItemTitle,
  WorkTimeTitle,
} from './WorkTime.styles';

import type { WorkTimeType } from '@/data/dataWorkTime';
import { workTimeData } from '@/data/dataWorkTime';

export default function WorkTime(): JSX.Element {
  const workTimeArray = workTimeData.map((item: WorkTimeType) => (
    <WorkTimeItem key={item.day}>
      <WorkTimeItemContent>
        <WorkTimeItemTitle>{item.day}</WorkTimeItemTitle>
        <WorkTimeItemTitle>{item.time}</WorkTimeItemTitle>
      </WorkTimeItemContent>
    </WorkTimeItem>
  ));
  return (
    <WorkTimeWrapper>
      <WorkTimeContent>
        <WorkTimeTitle>Графік роботи:</WorkTimeTitle>
        <WorkTimeContainer>{workTimeArray}</WorkTimeContainer>
      </WorkTimeContent>
    </WorkTimeWrapper>
  );
}
