import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Task Management System Application 
          </Typography>
          <Link to="/login">
          <Button sx={{color:"white" , fontSize:"1.2rem",minHeight:"10vh" }}>LogOut</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}