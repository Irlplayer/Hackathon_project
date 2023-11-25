import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Button } from '@mui/material';


const MENU_OPTIONS = [
    {
      label: 'Home',
      icon: 'eva:home-fill',
    },
    {
      label: 'Profile',
      icon: 'eva:person-fill',
    },
    {
      label: 'Settings',
      icon: 'eva:settings-2-fill',
    },
  ];
  
 
  
  export default function AccountPopover() {
    const [open, setOpen] = useState(null);
  
    const handleOpen = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleClose = () => {
      setOpen(null);
    };
  
    return (
      <>
        <IconButton
          onClick={handleOpen}
          sx={{
            width: 40,
            height: 40,
            background: (theme) => alpha(theme.palette.grey[500], 0.08),
            ...(open && {
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            }),
          }}
        >
          <Avatar
            src={"data:image/png;base64,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"}
            alt={"account"}
            sx={{
              width: 36,
              height: 36,
              border: (theme) => `solid 2px ${theme.palette.background.default}`,
            }}
          >
            
          </Avatar>
        </IconButton>
  
        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1,
              ml: 0.75,
              width: 200,
            },
          }}
        >
         
  
          <Divider sx={{ borderStyle: 'dashed' }} />
  
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
  
          <Divider sx={{ borderStyle: 'dashed', m: 0 }} />
          <Link to="/" style={{ textDecoration: 'none', color: 'Highlight' }}>
          <MenuItem
            disableRipple
            disableTouchRipple
            onClick={handleClose}
            sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
          >
           
            LogoutPage
          
          </MenuItem>
          </Link>
        </Popover>
      </>
    );
  }