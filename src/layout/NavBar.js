import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Stack } from '@mui/system';
import {Link} from 'react-router-dom'
import DestButt from './comp/destbutt.js'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Nav() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <AppBar position='static'  color='secondary'>
      <Toolbar>
       <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
        <AirplanemodeActiveIcon/>
       </IconButton>
       <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
        AirDouik
       </Typography>
       <nav ref={navRef}>
       <Stack direction='row' spacing={{ xs: 0, sm: 0, md: 4 }} className="nav">
       <div className='NavHome'><Button color='inherit' 	onClick={showNavbar}><Link  to='/'>Home</Link></Button></div>
       <DestButt showNavbar={showNavbar}/>
       <div className='NavHome'><Button color='inherit' onClick={showNavbar}>Contacts</Button></div>
       <div className='NavHome'><Button color='inherit'onClick={showNavbar} >About Us</Button></div>
       <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
       </Stack>
       </nav>
       <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
