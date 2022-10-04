export const styles = {
  gradientText: (leftColor = '#8456EC', rightColor = '#E87BF8') => ({
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: '2.25rem',
    lineHeight: 1,
    align: 'center',
    color: 'primary.dark',

    display: 'inline-block',
    backgroundColor: leftColor,
    backgroundImage: `linear-gradient(90deg, ${leftColor} 50%, ${rightColor} 100%)`,

    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    backgroundClip: 'text',

    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent'
  })
};
