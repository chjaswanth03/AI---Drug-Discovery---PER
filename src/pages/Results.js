import React, { useEffect } from 'react';
import { Container, Typography, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const Results = () => {
  // Sample data for the chart and table
  const sampleResults = [
    { drugName: "Aspirin", interaction: "No interaction", confidence: 0.95 },
    { drugName: "Ibuprofen", interaction: "Mild interaction", confidence: 0.80 },
    { drugName: "Paracetamol", interaction: "No interaction", confidence: 0.90 },
  ];

  const data = {
    labels: sampleResults.map(result => result.drugName),
    datasets: [
      {
        label: 'Confidence Score',
        data: sampleResults.map(result => result.confidence),
        backgroundColor: 'rgba(63, 81, 181, 0.6)',
      },
    ],
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI Predictions Results
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Below are the results of the AI predictions based on the uploaded datasets.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Bar data={data} options={{ responsive: true }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Detailed Results
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Drug Name</TableCell>
                  <TableCell>Predicted Interaction</TableCell>
                  <TableCell>Confidence Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleResults.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell>{result.drugName}</TableCell>
                    <TableCell>{result.interaction}</TableCell>
                    <TableCell>{result.confidence}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        Download Results
      </Button>
    </Container>
  );
};

export default Results;
