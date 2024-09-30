import React from 'react';
import { Box, Typography, Container, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Hero Section */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          mb: 4,
          backgroundColor: '#f5f5f5',
          py: 5,
          px: 3,
          borderRadius: 2
        }}
      >
        <Typography variant="h2" gutterBottom color="primary">
          Accelerating Drug Discovery with AI
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Our AI-powered platform helps you quickly analyze molecular data, predict drug interactions, and optimize drug formulations.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/upload">
          Upload Your Data
        </Button>
      </Box>

      {/* Feature Highlights */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" color="primary">
                AI Predictions
              </Typography>
              <Typography variant="body1">
                Get insights on molecular interactions and drug efficacy through our AI-powered algorithms.
              </Typography>
              <Button component={Link} to="/predictions" sx={{ mt: 2 }} variant="outlined" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" color="primary">
                Molecular Data Analysis
              </Typography>
              <Typography variant="body1">
                Upload your molecular data and let the AI find patterns and predict drug interactions.
              </Typography>
              <Button component={Link} to="/upload" sx={{ mt: 2 }} variant="outlined" color="primary">
                Upload Data
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" color="primary">
                Results Analysis
              </Typography>
              <Typography variant="body1">
                Analyze AI-driven results for your uploaded data and optimize drug formulations.
              </Typography>
              <Button component={Link} to="/results" sx={{ mt: 2 }} variant="outlined" color="primary">
                View Results
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: '#e0f7fa',
          py: 4,
          px: 3,
          borderRadius: 2
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Ready to Discover the Future of Medicine?
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          Join our platform to leverage the power of AI in drug discovery.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/dashboard">
          Explore Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
