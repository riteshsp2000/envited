import React from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

import { styles } from './styles';

const Heading2: React.FC<TypographyProps> = ({ children, sx, ...rest }) => {
  return (
    <Typography variant="h2" sx={{ ...styles.heading2, ...sx }} {...rest}>
      {children}
    </Typography>
  );
};

export default Heading2;
