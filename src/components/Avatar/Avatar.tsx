import { deepOrange } from '@mui/material/colors';
import { AvatarContainer, AvatarName, AvatarSport } from './Avatar.styles';
import Avatar from '@mui/material/Avatar';

type AvatarProp = {
  name: string;
};

export default function AvatarImage({ name }: AvatarProp) {
  return (
    <AvatarContainer>
      <Avatar
        src="../../brokenImage"
        alt={name}
        sx={{ bgcolor: deepOrange[500] }}
      />
    </AvatarContainer>
  );
}
