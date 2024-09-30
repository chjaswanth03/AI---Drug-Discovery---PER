import React from 'react';
import { Card, CardContent, Typography, Grid, createTheme, ThemeProvider, CircularProgress } from '@mui/material';
import { Line } from 'react-chartjs-2';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

// Dummy Data for Chart
const predictionData = {
  labels: ['Prediction 1', 'Prediction 2', 'Prediction 3', 'Prediction 4', 'Prediction 5'],
  datasets: [
    {
      label: 'Prediction Confidence (%)',
      data: [80, 72, 90, 85, 95],
      fill: false,
      backgroundColor: 'rgba(63,81,181,0.4)',
      borderColor: '#3f51b5',
    },
  ],
};

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Recent Uploads Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" color="primary">
                Recent Uploads
              </Typography>
              <Typography variant="body1">
                View and manage your recently uploaded datasets.
              </Typography>
              <ul>
                <li>Dataset 1 - Uploaded 2 days ago</li>
                <li>Dataset 2 - Uploaded 5 days ago</li>
                <li>Dataset 3 - Uploaded 1 week ago</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Predictions Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" color="secondary">
                AI Predictions
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                The latest predictions made by the AI system.
              </Typography>
              {/* Loading Indicator */}
              <CircularProgress />
              <Typography variant="body2" sx={{ mt: 2 }}>
                Prediction in progress...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Results Analysis Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" color="primary">
                Results Analysis
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Analyze the effectiveness of your AI predictions.
              </Typography>
              {/* Line Chart for Predictions */}
              <Line data={predictionData} />
            </CardContent>
          </Card>
        </Grid>

        {/* System Notifications Section */}
        <Grid item xs={12} sm={12}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" color="secondary">
                System Notifications
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Recent alerts and notifications related to dataset processing.
              </Typography>
              <ul>
                <li>AI Model Update: Improved prediction accuracy for Dataset 1</li>
                <li>Warning: Dataset 3 processing failed. Please check the file format.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Dashboard;
