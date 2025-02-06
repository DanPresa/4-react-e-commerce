import { Typography } from '@mui/material';

interface TitleProps {
  text: string;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline';
}

const Title: React.FC<TitleProps> = ({ text, variant }) => {
  return (
    <Typography variant={variant} fontWeight="bold" sx={{ mb: 2 }}>
      {text}
    </Typography>
  );
};

export default Title;
