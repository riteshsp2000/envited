import React from 'react';

import Button, { ButtonProps } from '@mui/material/Button';

import { PartyIcon } from 'assets/icons/Party';

import { styles } from './styles';

export interface CustomButtonProps extends ButtonProps {
  leftColor?: string;
  rightColor?: string;
  showIcon?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  sx,
  showIcon = false,
  startIcon = <PartyIcon />,
  leftColor = '#8456EC',
  rightColor = '#E87BF8',
  ...rest
}) => {
  return (
    <Button
      disableElevation
      startIcon={showIcon ? startIcon : null}
      // @ts-ignore
      sx={{ ...styles.root(leftColor, rightColor), ...sx }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
