export const styles = {
  root: (leftColor = '#8456EC', rightColor = '#E87BF8') => ({
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: '700',
    fontFamily: 'Helvetica',
    textTransform: 'none',

    backgroundColor: leftColor,
    backgroundImage: `linear-gradient(90deg, ${leftColor} 45%, ${rightColor} 100%)`,

    '@media screen and (min-width: 600px)': {
      fontSize: '1.25rem'
    }
  })
};
