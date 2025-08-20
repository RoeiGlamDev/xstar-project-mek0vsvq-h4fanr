import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#000', // black background
    color: '#FFC0CB', // pink text
    padding: '50px 20px',
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#FFC0CB', // pink button
    color: '#000', // black text
    '&:hover': {
      backgroundColor: '#FF69B4', // lighter pink on hover
    },
  },
});

const PricingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2">Luxury Pricing Plans</Typography>
      <Typography variant="h6" paragraph>
        Experience the elegance of HouseIL with our exclusive pricing options.
      </Typography>
      <Button variant="contained" className={classes.button}>
        View Plans
      </Button>
    </Container>
  );
};

export default PricingPage;