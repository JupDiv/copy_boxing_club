import { IconFormOnlineContainer } from './IconFormOnline.styles';
import SendSharpIcon from '@mui/icons-material/SendSharp';

type IconFormOnlineProps = {
  isOpenModal: (bool: boolean) => void;
};

export default function IconFormOnline({ isOpenModal }: IconFormOnlineProps) {
  return (
    <IconFormOnlineContainer onClick={() => isOpenModal(true)}>
      <SendSharpIcon
        style={{ height: '50px', width: '50px', color: '#1cd6ce' }}
      />
    </IconFormOnlineContainer>
  );
}
