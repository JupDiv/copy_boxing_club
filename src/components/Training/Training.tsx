'use client';
import { useMemo } from 'react';
import {
  TrainingContainer,
  TrainingWrapper,
  TrainingDescription,
  TrainingTitle,
  TrainingYouTubeVideo,
} from './Training.styles';
import type { YouTubeVideosTypes } from '@/data/dataVideos';
import { dataVideos } from '@/data/dataVideos';

export default function Training() {
  const memoizedDataVideos = useMemo(() => {
    return dataVideos.map(
      ({ id, videoId, title, description }: YouTubeVideosTypes) => {
        return (
          <TrainingContainer key={id}>
            <TrainingTitle>{title}</TrainingTitle>
            <TrainingYouTubeVideo
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            ></TrainingYouTubeVideo>
            <TrainingDescription>{description}</TrainingDescription>
          </TrainingContainer>
        );
      }
    );
  }, []);

  return <TrainingWrapper>{memoizedDataVideos}</TrainingWrapper>;
}
