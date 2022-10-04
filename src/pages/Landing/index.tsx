import React from 'react';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import CoverImage from 'assets/images/CoverImage.png';
import Body1 from 'components/atoms/Body1';
import CustomButton from 'components/atoms/Button';
import GradientText from 'components/atoms/GradientText';
import Heading1 from 'components/atoms/Heading1';

import { styles } from './styles';

const Landing = () => {
  const isDesktopView = useMediaQuery('(min-width:900px)');

  const handleButtonClick = () => {};

  return (
    <Box component="div" sx={styles.pageContainer}>
      <Box component="div" sx={styles.sectionContainer}>
        <Box component="section" sx={styles.titleContainer}>
          <Heading1 sx={styles.alignRight}>Imagine If</Heading1>
          <GradientText sx={styles.alignRight}>Snapchat</GradientText>
          <Heading1 sx={styles.alignRight}>had events.</Heading1>

          <Body1 sx={styles.para}>
            Easily host and share events with your friends across any social
            media.
          </Body1>

          {isDesktopView && (
            <CustomButton sx={styles.button} onClick={handleButtonClick}>
              🎉 Create my event
            </CustomButton>
          )}
        </Box>

        <Box component="section" sx={styles.imgContainer}>
          <img
            src={CoverImage}
            alt="Event Page"
            loading="lazy"
            // @ts-ignore
            style={styles.img}
          />

          {!isDesktopView && (
            <CustomButton sx={styles.button} onClick={handleButtonClick}>
              🎉 Create my event
            </CustomButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
