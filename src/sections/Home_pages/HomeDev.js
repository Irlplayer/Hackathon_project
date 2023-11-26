import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AccountPopover from './Accountpopover';
import { textFieldClasses } from '@mui/material';
import Stack from '@mui/material/Stack';
import Spacer from './Spacer'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;

  
const theme = createTheme({
    palette: {
      primary: {
        main: '#333', 
      },
    },
  });

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    color: 'blue',
    fontWeight:"800",
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));



const DrawerContainer = styled('div')(({ theme }) => ({
    
  }));

  const StyledListItemButton = styled(ListItemButton)({
    border: '1px solid white', 
    borderRadius: '4px', 
    '&:hover': {
      
    },
  });

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const themeContext = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 

  return (
    <ThemeProvider theme={theme}>
    
    <Box sx={{ display: 'flex' }}>
        
      <CssBaseline />
      
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <p className='p1'><i>Doctor Health POV</i></p>
          </Typography>
          <Spacer/>
          <Stack direction="row" alignItems="center" spacing={1}>
        <AccountPopover/>
        
        
      </Stack>
        </Toolbar> 
      </AppBar>
      <DrawerContainer>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            fontStyle:"italic",
            fontFamily:"cursive",
            color: 'black',
            backgroundColor:"brown"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon/> 
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>  
                  <MonitorHeartIcon/>
                </ListItemIcon>
                <ListItemText primary="Health" />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <MyLocationIcon/>
                </ListItemIcon>
                <ListItemText primary="Location" />
              </ListItemButton>
            </ListItem>
          
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 3 === 0 ? <InboxIcon /> : <MailIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      </DrawerContainer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          L
        </Typography>
        <Typography paragraph>
          C
        </Typography>
      </Main>
      
    </Box>
    </ThemeProvider>
  );
}