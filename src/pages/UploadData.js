import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Snackbar,
  Alert,
  LinearProgress,
} from '@mui/material';

const UploadData = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const validTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];

    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setSnackbarSeverity('success');
      setSnackbarMessage('File selected successfully!');
    } else {
      setFile(null);
      setFileName('');
      setSnackbarSeverity('error');
      setSnackbarMessage('Please upload a valid file (CSV or Excel).');
    }
    setOpenSnackbar(true);
  };

  const handleUpload = () => {
    if (!file) {
      setSnackbarSeverity('error');
      setSnackbarMessage('No file selected for upload.');
      setOpenSnackbar(true);
      return;
    }

    // Simulate file upload process
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSnackbarSeverity('success');
      setSnackbarMessage('File uploaded successfully!');
      setFile(null);
      setFileName('');
    }, 2000); // Simulate a delay of 2 seconds
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Upload Your Dataset
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Upload molecular data or drug interactions for AI predictions.
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Dataset Name"
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {fileName && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            Selected file: {fileName}
          </Typography>
        )}
        {uploading && <LinearProgress sx={{ mt: 2 }} />}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, ml: 2 }}
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </Button>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UploadData;
