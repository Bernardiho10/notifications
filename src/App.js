import './App.css';
import { Grid, Typography, createTheme, ThemeProvider, LinearProgress } from '@mui/material';
import PlusJakart from './assets/fonts/PlusJakartaSans-VariableFont_wght.ttf';
import Notifications from './components/Notifications';
import { useState, useEffect, useRef } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans"',
    h5: {
      fontWeight: 800,
      color: "#1e2128"
    }
  }
});

function App() {

  const [notifications, setNotifications] = useState([])

  let activeNotifications = document.querySelectorAll('.notificationContainer')

  useEffect(() => {
    fetch('http://localhost:3000/notifications')
      .then(respone => respone.json())
      .then(notifications => setNotifications(notifications))
  }, [])


  const unreadNotifications = notifications.filter(notification => notification.read == ! true);

  

  return (
    <Grid container spacing={4} sx={{ p: "20px 10px" }}>

      <Grid item xs={12} lg={6}>

        <Grid container sx={{
          alignItems: 'baseline'
        }}>
          <Grid item xs={8} >
            <ThemeProvider theme={theme}>
              <Typography sx={{ fontSize: "1.35rem" }} variant="h5">Notifications <Typography sx={{
                m: "0 5px",
                backgroundColor: "hsl(219, 85%, 26%)",
                color: "hsl(0, 0%, 100%)",
                p: "0 10px",
                borderRadius: "5px",
                fontSize: "1.15rem"
              }} variant="subtitle" >{unreadNotifications.length}</Typography></Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Typography sx={{
              fontSize: ".95rem",
              width: "100%",
              cursor: "pointer",
              fontWeight: 600,
              color: "#99a0a8",
              '&:hover': {
                color: "#3f48cc",
              }
            }} variant='subtitle' onClick={() => readAll()}>Mark all as read</Typography>
          </Grid>
        </Grid>

        { /* Notifications */}

        <Grid item xs={12}>
          <Notifications notifications={notifications}></Notifications>
        </Grid>

      </Grid>

      <Grid sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      }} item xs={12} lg={6} >
        <Typography sx={{ fontSize: "1rem" }} variant='h2'>Notification Design</Typography>
        <LinearProgress color="secondary" />
        <Typography sx={{ fontSize: "1.5rem" }} variant='h3'>Developed by Bernard Oko</Typography>
      </Grid>

    </Grid>
  );
}

export default App;
