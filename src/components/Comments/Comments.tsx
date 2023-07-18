import { useEffect, useState, useMemo } from 'react';
import { CommentsContainer } from './Comments.styles';
import Comment from '../Comment/Comment';
import type { CommentType } from '@/data/dataComments';
import { comments } from '@/data/dataComments';

export default function Comments() {
  const [cycle, setCycle] = useState<number>(0);
  const [commentsPerSlide, setcommentsPerSlide] = useState<number>(3);

  const MOBILE_AMOUNT_SLIDES = 1;
  const DESKTOP_AMOUNT_SLIDES = 3;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCycle(
        (prevCycle) =>
          (prevCycle + 1) % Math.ceil(comments.length / commentsPerSlide)
      );
    }, 5000);

    if (
      typeof window !== 'undefined' &&
      window.navigator.userAgent.includes('Mobi')
    ) {
      setcommentsPerSlide(MOBILE_AMOUNT_SLIDES);
    } else {
      setcommentsPerSlide(DESKTOP_AMOUNT_SLIDES);
    }
    return () => clearTimeout(timer);
  }, [cycle, commentsPerSlide]);

  const startCut = cycle * commentsPerSlide;
  const endCut = startCut + commentsPerSlide;
  const displayedComments = comments
    .slice(startCut, endCut)
    .map((comment) => <Comment key={comment.id} commentTest={comment} />);

  return <CommentsContainer>{displayedComments}</CommentsContainer>;
}
