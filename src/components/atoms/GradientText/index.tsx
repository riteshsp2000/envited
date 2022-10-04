import React from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

import { styles } from './styles';

export interface GradientTextProps extends TypographyProps {
  leftColor?: string;
  rightColor?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  sx,
  leftColor = '#8456EC',
  rightColor = '#E87BF8',
  ...rest
}) => {
  return (
    <Typography
      variant="h1"
      sx={{ ...styles.gradientText(leftColor, rightColor), ...sx }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default GradientText;
