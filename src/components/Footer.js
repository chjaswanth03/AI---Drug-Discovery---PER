import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#3f51b5',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Drug Discovery Platform |{' '}
        <Link href="/terms" color="inherit" underline="hover">
          Terms of Service
        </Link>{' '}
        |{' '}
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="/contact" color="inherit" underline="hover">
          Contact/Support
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
