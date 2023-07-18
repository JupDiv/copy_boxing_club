import {
  CommentContainer,
  CommentWrapper,
  CommentText,
  CommentAuthor,
  CommentDate,
} from './Comment.styles';
import AvatarImage from '../Avatar/Avatar';

type CommentProp = {
  commentTest: {
    id: number;
    name: string;
    comment: string;
    date: string;
  };
};

export default function Comment({ commentTest }: CommentProp) {
  const { name, comment, date } = commentTest;
  return (
    <CommentWrapper>
      <CommentContainer>
        <CommentAuthor>{name}</CommentAuthor>
        <AvatarImage name={name} />
        <CommentText>{comment}</CommentText>
        <CommentDate>{date}</CommentDate>
      </CommentContainer>
    </CommentWrapper>
  );
}
