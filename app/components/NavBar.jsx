import { useState } from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { Menu } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Container } from '@mui/material';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Adb as AdbIcon } from '@mui/icons-material';
import { NavLink } from "@remix-run/react"


const pages = [{ title: 'Products', link: '/products' }, { title: 'Custom PC Builder', link: '/pcbuilder' }, { title: 'Pricing', link: '/pricing' }, { title: 'Contact Us', link: '/contact' }]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="false" style={{ padding: 0 }} sx={{ background: "linear-gradient(90deg, rgba(15,15,15,1) 0%, rgba(0,25,50,1) 50%, rgba(15,15,15,1) 100%)" }}>
        <Toolbar style={{ padding: 0 }}>
          <NavLink to="/">
          <Box
            component="img"
            sx={{ display: { xs: 'none', md: 'flex' }, mx: 3, my:1, px: 0, maxWidth: "80px" }}
            alt="Hydrotech Computers"
            src={"/staticassets/logo192.png"}
          /></NavLink>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mx: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            component={NavLink}
            to="/"
          >
            Hydrotech Computers
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink to={page.link} style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: "black",
                      textDecoration: "none"
                    };
                  }}>{page.title}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            sx={{
              mx: 0,
              display: { xs: 'none', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: "center"
            }}
            component={NavLink}
            to="/"
          >
            Hydrotech Computers
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Poppins' }}
                style={{ textTransform: "none" }}
              >
                <NavLink to={page.link} style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: "white",
                    textDecoration: "none"
                  };
                }}>{page.title}</NavLink>
              </Button>
            ))}
          </Box>

          <NavLink>
          <Box
            component="img"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, my:1, maxWidth: "70px" }}
            alt="Hydrotech Computers"
            src={"/staticassets/logo192.png"}
          /></NavLink>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;