import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';
import MenuIcon from '@mui/icons-material/Menu';

const App: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <FlightIcon fontSize="large" />
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            TALKER
          </Link>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: { xs: 'column', md: 'row' },
            width: '70%',
          }}
        >
          {/* Affichage des noms de page uniquement sur les écrans non mobiles */}
          <Typography variant="h6" sx={{paddingRight: '20px', display: { xs: 'none', sm: 'flex' }}}>
            <Link to="/camera" style={{ textDecoration: 'none', color: 'inherit' }}>
              Camera
            </Link>
          </Typography>
          <Typography variant="h6" sx={{paddingRight: '20px', display: { xs: 'none', sm: 'block' } }}>
            <Link to="/pictures" style={{ textDecoration: 'none', color: 'inherit' }}>
              Photos
            </Link>
          </Typography>
          <Typography variant="h6" sx={{paddingRight: '20px', display: { xs: 'none', sm: 'block' } }}>
            <Link to="/map" style={{ textDecoration: 'none', color: 'inherit' }}>
              Map
            </Link>
          </Typography>
          <Typography variant="h6" sx={{paddingRight: '20px', display: { xs: 'none', sm: 'block' } }}>
            <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
              Chat
            </Link>
          </Typography>
        </Box>
        {/* Menu déroulant pour les petits écrans */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/camera" style={{ textDecoration: 'none', color: 'inherit' }}>
              Camera
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/pictures" style={{ textDecoration: 'none', color: 'inherit' }}>
              Photos
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/map" style={{ textDecoration: 'none', color: 'inherit' }}>
              Map
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
              Chat
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default App;
