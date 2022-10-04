import React from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

import { styles } from './styles';

const Body1: React.FC<TypographyProps> = ({ children, sx, ...rest }) => {
  return (
    <Typography variant="body1" sx={{ ...styles.body1, ...sx }} {...rest}>
      {children}
    </Typography>
  );
};

export default Body1;
