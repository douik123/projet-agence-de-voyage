import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function FadeMenu({showNavbar}) {
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const regions=[
    {
    name:"Africa",
    link:"Africa"
    },
    {
        name:"America",
        link:"America"
    },
    {
        name: "Asie",
        link:"Asie"
    },
    {
      name:"Europe",
      link:"Europe" 
  },
  {
    name:"Océanie",
    link:"Océanie"
},
  ];
  return (
    <div className='imaages'>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
      >
     <div className='NavHome'><Link >Destinations</Link></div>  
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          regions.map(region=>(
              <div>
           <MenuItem onClick={()=>{handleClose();showNavbar()}}><Link  to={`destination/${region.link}`}>{region.name}</Link></MenuItem>
              </div>
            ))
      }
      </Menu>
    </div>
  );
}
