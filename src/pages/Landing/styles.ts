export const styles = {
  pageContainer: {
    width: '100vw',
    maxWidth: '100vw',
    height: 'auto',
    minHeight: '100vh',
    background: '#F6F2FF',
    padding: '0px 20px',

    '@media screen and (min-width: 900px)': {
      padding: '0px 50px'
    }
  },
  sectionContainer: {
    maxWidth: '1200px',
    margin: '0px auto',
    minHeight: '100vh',
    height: '100%',

    '@media screen and (min-width: 900px)': {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5rem',

    '@media screen and (min-width: 900px)': {
      width: '40%',
      paddingTop: '0rem',
      alignItems: 'flex-end'
    }
  },
  alignRight: {
    '@media screen and (min-width: 900px)': {
      textAlign: 'right'
    }
  },
  para: {
    textAlign: 'center',
    marginTop: '1rem',
    width: '90%',

    '@media screen and (min-width: 900px)': {
      textAlign: 'right'
    }
  },
  imgContainer: {
    width: '70%',
    height: 'auto',
    margin: '20px auto',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    jusitfyContent: 'center',

    '@media screen and (min-width: 600px)': {
      width: '50%'
    },

    '@media screen and (min-width: 900px)': {
      width: '50%',
      margin: '0px',
      justifyContent: 'flex-start'
    }
  },
  img: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'cover'
  },
  button: {
    width: '100%',
    marginTop: '1rem',

    '@media screen and (min-width: 900px)': {
      width: 'auto',
      marginTop: '3.5rem'
    }
  }
};
