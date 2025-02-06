import { FC } from 'react';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

interface GoBackBtnProps {
  title: string;
  navigate: () => void;
}

const GoBackBtn: FC<GoBackBtnProps> = ({ title, navigate }) => {
  return (
    <Button
      startIcon={<ArrowBack />}
      onClick={navigate}
      sx={{ mb: 3, fontWeight: 'bold' }}
    >
      {title}
    </Button>
  );
};

export default GoBackBtn;
