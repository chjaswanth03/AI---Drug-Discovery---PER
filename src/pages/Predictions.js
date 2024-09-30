import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  CircularProgress,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { Chart } from 'react-chartjs-2';

const Predictions = () => {
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState(null);

  const handlePredict = () => {
    setLoading(true);
    // Simulate API call for predictions
    setTimeout(() => {
      setPredictions({
        efficacy: '85%',
        toxicity: 'Low',
        interactionScore: '0.92',
        chartData: {
          labels: ['Efficacy', 'Toxicity', 'Interaction Score'],
          datasets: [
            {
              label: 'AI Prediction Results',
              data: [85, 10, 92],
              backgroundColor: ['#3f51b5', '#f50057', '#4caf50'],
            },
          ],
        },
      });
      setLoading(false);
    }, 2000); // Simulate a 2-second delay for API call
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI Predictions
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Enter the required parameters to generate AI-based drug predictions.
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Drug Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Dosage (mg)"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Molecular Structure (Optional)"
          variant="outlined"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handlePredict}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Prediction'}
        </Button>
      </Box>

      {loading && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1">Generating predictions...</Typography>
        </Box>
      )}

      {!loading && predictions && (
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Prediction Results
                </Typography>
                <Typography variant="body2">
                  <strong>Efficacy:</strong> {predictions.efficacy}
                </Typography>
                <Typography variant="body2">
                  <strong>Toxicity:</strong> {predictions.toxicity}
                </Typography>
                <Typography variant="body2">
                  <strong>Interaction Score:</strong> {predictions.interactionScore}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Visualization
                </Typography>
                <Chart
                  type="bar"
                  data={predictions.chartData}
                  options={{
                    responsive: true,
                    scales: {
                      y: { beginAtZero: true },
                    },
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Predictions;
