import React from 'react';
import './style.css'
import { Container, Paper, TextField, Button, Typography, Link, Grid, Box } from '@mui/material';

const languageOptions = [
  { label: 'English (United States)' },
  { label: 'Spanish' },
  { label: 'French' },
  { label: 'German' },
];

const GmailLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='centered-content'>
    <Container maxWidth="xs" component="main">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center',width:"100%" }}>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt="Gmail Logo"
          style={{ width: '92px', height: '32px', marginBottom: '16px' }}
          />
        <Typography variant="h5" component="h2">
          Sign in
        </Typography>
        <Typography variant="body2" color="Secondary" style={{ marginTop: '20px' }}>
          to Continue to Gmail
        </Typography>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email or phone"
            name="email"
            autoComplete="email"
            autoFocus
            color='primary'
          />
          <Grid item xs={12} style={{ textAlign: 'left' }}>
              <Typography variant="body2" color="Secondary">
                <Link href="#" color="primary">
                  Forgot email?
                </Link>
              </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'left',marginTop:'40px' }}>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginTop: '20px' ,justifyContent: "flex-start" }}
              >
              Not your computer? Use{' '}
              <Link href="#" color="textSecondary">
                Guest mode
              </Link>{' '}
              to sign in privately.{' '}
              <Link href="#" color="primary">
                Learn more
              </Link>
            </Typography>
          </Grid>
          <Grid container xs={12} style={{ marginTop: '40px', textAlign: 'left' ,marginBottom:'60px'}}>
           <Grid item xs={6}>
              <Button type='submit' variant='text' style={{ textTransform: 'none' }}>
                Create account
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
        </form>
      </Box>
      </Paper>
      <Grid container style={{ marginTop: '10px', justifyContent:'space-between' }}>
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

export default GmailLogin;
