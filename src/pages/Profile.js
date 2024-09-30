import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Button,
  Box,
  TextField,
  Grid,
  Paper,
  Switch,
  FormControlLabel,
} from '@mui/material';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: 'Dr. Jane Doe',
    email: 'jane.doe@example.com',
    uploadedData: ['Dataset 1', 'Dataset 2', 'Dataset 3'],
    profilePicture: '/static/images/avatar/1.jpg',
    password: '',
    notificationEnabled: true,
    activityLog: [
      'Uploaded Dataset 1 on 2024-09-30',
      'Logged in on 2024-09-29',
      'Updated profile on 2024-09-28',
    ],
  });

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Logic for logging out the user
    alert('Logged out successfully!');
  };

  const handlePasswordChange = () => {
    // Logic for changing the password
    alert('Password changed successfully!');
  };

  const toggleNotification = () => {
    setUser({ ...user, notificationEnabled: !user.notificationEnabled });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Avatar
              alt={user.name}
              src={user.profilePicture}
              sx={{ width: 100, height: 100 }}
            />
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="profile-pic-upload"
              type="file"
              onChange={handleProfilePictureChange}
            />
            <label htmlFor="profile-pic-upload">
              <Button variant="contained" component="span" sx={{ mt: 1 }}>
                Upload Picture
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Button variant="outlined" onClick={handleEditToggle}>
              {editMode ? 'Cancel' : 'Edit Profile'}
            </Button>
          </Grid>
        </Grid>

        {editMode && (
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handlePasswordChange}>
              Change Password
            </Button>
          </Box>
        )}
      </Paper>

      <Typography variant="h5" gutterBottom>
        Notification Preferences
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, mb: 4 }}>
        <FormControlLabel
          control={
            <Switch
              checked={user.notificationEnabled}
              onChange={toggleNotification}
              name="notificationEnabled"
            />
          }
          label="Enable Notifications"
        />
        <Typography variant="body2" sx={{ mt: 1 }}>
          You will receive updates and alerts via email.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Uploaded Data
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        {user.uploadedData.length > 0 ? (
          user.uploadedData.map((data, index) => (
            <Typography key={index} variant="body1">
              {data}
            </Typography>
          ))
        ) : (
          <Typography variant="body1">No data uploaded yet.</Typography>
        )}
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Activity Log
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        {user.activityLog.length > 0 ? (
          user.activityLog.map((activity, index) => (
            <Typography key={index} variant="body1">
              {activity}
            </Typography>
          ))
        ) : (
          <Typography variant="body1">No activity recorded.</Typography>
        )}
      </Paper>

      <Button variant="outlined" color="error" onClick={handleLogout} sx={{ mt: 3 }}>
        Logout
      </Button>
    </Container>
  );
};

export default Profile;
