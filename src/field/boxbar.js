import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';

export default function BoxBar(props) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Map" icon={<MapIcon />} onClick={()=> {
            props.setBoxBar(true);
        }}/>
        <BottomNavigationAction label="Search" icon={<SearchIcon />} onClick={()=> {
            props.setBoxBar (false);
        }} />
      </BottomNavigation>
    </Box>
  );
}
