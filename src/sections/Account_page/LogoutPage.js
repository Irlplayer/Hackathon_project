import React, { useState } from "react";
import * as Components from './Components';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link, useNavigate } from "react-router-dom";


function LogoutPage() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (darkTheme) { 
            navigate("/HomeDev");
        } else {
          alert("/Home");
        }
      };
const handleToggleTheme = () => {
  setDarkTheme(!darkTheme);
};

const ToggleButton = styled(Components.Button)`
  background-color: ${props => (props.darkMode ? '#333' : '#333')};
  border-color: ${props => (props.darkMode ? '#333' : '#333')};
`;

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                  '#fff',
                )}" d="M10 1.667c-4.406 0-8 3.594-8 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8zm0 14.583A6.92 6.92 0 013.417 10 6.92 6.92 0 0110 3.417 6.92 6.92 0 0116.583 10 6.92 6.92 0 0110 16.583zm0-12.5a5.834 5.834 0 00-5.833 5.834c0 1.883.728 3.647 2.05 4.978a.834.834 0 00.588.244.833.833 0 00.588-.244c1.322-1.33 2.05-3.094 2.05-4.978a5.834 5.834 0 00-5.834-5.833zm0 10.417a4.584 4.584 0 01-4.583-4.584c0-2.534 2.05-4.584 4.583-4.584a4.584 4.584 0 014.584 4.584c0 2.533-2.05 4.584-4.584 4.584z"/></svg>')`,
              },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M10 1.667c-4.406 0-8 3.594-8 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8zm0 14.583A6.92 6.92 0 013.417 10 6.92 6.92 0 0110 3.417 6.92 6.92 0 0116.583 10 6.92 6.92 0 0110 16.583zm0-12.5a5.834 5.834 0 00-5.833 5.834c0 1.883.728 3.647 2.05 4.978a.834.834 0 00.588.244.833.833 0 00.588-.244c1.322-1.33 2.05-3.094 2.05-4.978a5.834 5.834 0 00-5.834-5.833zm0 10.417a4.584 4.584 0 01-4.583-4.584c0-2.534 2.05-4.584 4.583-4.584a4.584 4.584 0 014.584 4.584c0 2.533-2.05 4.584-4.584 4.584z"/></svg>')`,
          },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? 'blue' : 'blue',
          borderRadius: 20 / 2,
        },
      }));
  const [signIn, toggle] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#1E003C',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));
  };

  return (
    <Components.Container darkMode={darkTheme}>
    <Components.Container style={{ backgroundColor: darkTheme ? 'black' : 'white' }}>
      <Components.SignUpContainer signinIn={signIn} style={{ backgroundColor: darkTheme ? 'green' : 'green' }}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type='text' placeholder='Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Link to={darkTheme ? "/HomeDev" : "/Home"}>
            <Components.Button style={{ backgroundColor: darkTheme ? 'black' : '#ff4b2b', color: darkTheme ? 'white' : 'black' }}>
              Sign Up
            </Components.Button>
          </Link>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn} style={{ backgroundColor: darkTheme ? 'limegreen' : '#00ff00' }}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Link to={darkTheme ? "/HomeDev" : "/Home"}>
          <Components.Button style={{ backgroundColor: darkTheme ? 'black' : '#ff4b2b', color: darkTheme ? 'white' : 'black' }}>
            Sign In
          </Components.Button>
          </Link>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}
        style={{ backgroundColor: darkTheme ? 'limegreen' : '#4c00b4',color: darkTheme?'brown':'gray' }}
        >

          <Components.LeftOverlayPanel signinIn={signIn} 
          style={{ backgroundColor: darkTheme ? 'limegreen' : '#4c00b4',color: darkTheme ? 'brown':'brown' }}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us, please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}  style={{ backgroundColor: darkTheme ? 'limegreen' : '#00ff00',color: darkTheme?'brown':'gray'  }}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn} style={{ backgroundColor: darkTheme ? 'limegreen' : '#00ff00' }}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start the journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)} style={{ backgroundColor: darkTheme ? 'black' : '#ff4b2b', color: darkTheme ? 'white' : 'black' }}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>

      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1000' }}>
      <Alert variant="filled" severity="info">
  <AlertTitle><b>Info</b></AlertTitle>
  <strong> This is an info alert — </strong>
  <FormGroup>
  <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={darkTheme}
        checked={darkTheme}
                onChange={handleToggleTheme}
                inputProps={{ 'aria-label': 'Toggle dark theme' }}/>}
        label="MUI switch"
    />
     </FormGroup>
</Alert>
        
        </div> 
    </Components.Container>
    </Components.Container>
  );
}

export default LogoutPage;


