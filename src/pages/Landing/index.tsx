import React from 'react';

import Body1 from 'components/atoms/Body1';
import CustomButton from 'components/atoms/Button';
import GradientText from 'components/atoms/GradientText';
import Heading1 from 'components/atoms/Heading1';
import Heading2 from 'components/atoms/Heading2';

const Landing = () => {
  return (
    <div>
      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <Body1>Body1</Body1>
      <GradientText>Gradient Text</GradientText>
      <CustomButton>🎉 Custom Button</CustomButton>
    </div>
  );
};

export default Landing;
