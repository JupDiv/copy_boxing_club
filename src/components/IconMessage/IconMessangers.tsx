import { useMemo } from 'react';
import {
  IconMessangerLogo,
  IconMessangerItem,
  IconMessangerContainer,
} from './IconMessangers.styles';
import type { IconMessangerItemType } from '@/data/dataIconMessangers';
import { dataIconMessangers } from '@/data/dataIconMessangers';

type IconMessangerProps = {
  place?: string;
};

export default function IconMessanger({ place }: IconMessangerProps) {
  const memoizedDataIconMessangers = useMemo(() => {
    return dataIconMessangers.map(
      ({ id, href, srcImg, alt, width, height }: IconMessangerItemType) => (
        <IconMessangerItem key={id}>
          <a href={href}>
            <IconMessangerLogo
              $place={place}
              width={width}
              height={height}
              src={srcImg}
              alt={alt}
            />
          </a>
        </IconMessangerItem>
      )
    );
  }, [place]);

  return (
    <IconMessangerContainer $place={place}>
      {memoizedDataIconMessangers}
    </IconMessangerContainer>
  );
}
