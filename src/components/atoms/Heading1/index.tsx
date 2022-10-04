import React from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

import { styles } from './styles';

const Heading1: React.FC<TypographyProps> = ({ children, sx, ...rest }) => {
  return (
    <Typography variant="h1" sx={{ ...styles.heading1, ...sx }} {...rest}>
      {children}
    </Typography>
  );
};

export default Heading1;
