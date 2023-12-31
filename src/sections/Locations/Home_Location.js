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
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import axios from 'axios';




// const MyStyledComponent = styled('div')({
    // styles here
// });

const MapComponent = () => {
    const center = {
        lat: 17.4283,
        lng: 78.4429,
    };
    //  const [gsmData, setGsmData] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [markerPosition, setMarkerPosition] = React.useState(center);
    const [draggableMarkerPosition, setDraggableMarkerPosition] = React.useState({
        lat: 37.7749,
        lng: -122.4194,
    });

    const handleMarkerDragEnd = (e) => {
        // Update the marker position when it's dragged
        setMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        });
    };

    const dummyMarkerData = [
        { lat: 37.7749, lng: -122.4194 },
        { lat: 37.774, lng: -122.42 },
        {lat:55.774,lng:-110.99},
    ];

    
    const theme = useTheme();

    // React.useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //          const response = await axios.post('http://your-backend-server.com/gsm-data');
        //          setGsmData(response.data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //         // Handle error, e.g., show a notification to the user
        //     }
        // };

    //     fetchData();
    // }, []); // Empty dependency array ensures the effect runs once on mount

    
    const mapContainerStyle = {
        width: '100%',
        height: '800px',
        marginLeft: '100px',
    };
    
    const drawerWidth = 240;

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
            '@media (max-width: 600px)': {
                // Adjust styles for smaller screens
                padding: theme.spacing(2),
            },
            '@media (max-width: 400px)': {
                // Further adjust styles for very small screens (e.g., phones)
                padding: theme.spacing(1),
            },
        }),
    );

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
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

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const handleDragEnd = (e) => {
        setDraggableMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        });
    };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
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
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        fontStyle: 'italic',
                        fontFamily: 'cursive',
                        color: 'black',
                        backgroundColor: 'green',
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
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    Lorem
                </Typography>
                <Typography paragraph>
                    Cons
                </Typography>
                
                <LoadScript googleMapsApiKey="AIzaSyBarx0gDWi8LVdncgj1UxRGvudgptwWHfk">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={25}
                    >
                         {/* Movable Marker */}
                <Marker
                    position={markerPosition}
                    draggable={true}
                    onDragEnd={handleMarkerDragEnd}
                />
                        {dummyMarkerData.map((marker, index) => (
                            <Marker key={index} position={marker} />
                        ))}
                        {}
                        {/* Marker with draggable option */}
                        <Marker position={draggableMarkerPosition} draggable={true} onDragEnd={handleDragEnd} />
                    </GoogleMap>
                </LoadScript>
            </Main>
        </Box>
    );
};

export default MapComponent;
