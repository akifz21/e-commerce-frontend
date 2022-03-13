import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductsContext from '../context/ProductsContext'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Categories from './Categories';


  export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const {count}= useContext(ProductsContext)
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
       
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
        <Link style={{color:"black"}} to={"/cart"}>
              <IconButton size="large"  color="inherit">
                <Badge badgeContent={count} color="error">
                  <ShoppingCartIcon  />
                </Badge>
              </IconButton>
              </Link>
          <p>Cart</p>
        </MenuItem>
        
      </Menu>
    );
  
    return (
      <Box  sx={{ flexGrow: 1 }}>
        <AppBar color="divider"  position="fixed">
      
          <Toolbar>
          <Box sx={{ flexGrow:0.1}} />
          <Link style={{color:"black"}} to={"/"}>
          <Typography 
            
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
           E-COMMERCE
          </Typography>
          </Link>
           
           
           
            <Box sx={{ flexGrow:0.7 }} />
           
           
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          
              <Link style={{color:"black"}} to={"/cart"}>
              <IconButton size="large"  color="inherit">
                <Badge badgeContent={count} color="error">
                  <ShoppingCartIcon  />
                </Badge>
              </IconButton>
              </Link>
             
              
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    );
  }
  