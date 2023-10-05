import React from 'react';
import './style.css';
import { Container, Paper, TextField, Button, Typography, Link, Grid, Box, FormControlLabel, Checkbox, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const GmailLoginPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='centered-content'>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
            alt="Gmail Logo"
            style={{ width: '92px', height: '32px', marginBottom: '16px' }}
          />
          <Typography variant="h5" component="h2">
            Welcome
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
            bibhash88lenka@gmail.com
          </Typography>
          <Box
            sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align items to the left
            }}
            >
            <TextField
                variant="outlined"
                margin="normal"
                placeholder='Enter your password'
                fullWidth
                id="password"
                label="Enter your Password"
                name="password"
                type="password"
                autoComplete="current-password"
            />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Show password"
                />
            <Grid container xs={12} style={{ marginTop: '50px', textAlign: 'left' ,marginBottom:'60px'}}>
                <Grid item xs={6}>
                <Button type='submit' variant='text' style={{ textTransform: 'none' }}>
                    Try another way
                </Button>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Next
                </Button>
                </Grid>
            </Grid>
        </Box>
        </Paper>
        <Grid container style={{ marginTop: '10px', justifyContent: 'space-between' }}>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-start" spacing={2}>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  English (United States)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  <Link href="#" color="textSecondary">
                    Help
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  <Link href="#" color="textSecondary">
                    Privacy
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  <Link href="#" color="textSecondary">
                    Terms
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GmailLoginPassword;
