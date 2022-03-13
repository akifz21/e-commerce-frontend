import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManIcon from '@mui/icons-material/Man';
import GirlIcon from '@mui/icons-material/Girl';
import BoltIcon from '@mui/icons-material/Bolt';
import DiamondIcon from '@mui/icons-material/Diamond';
import ProductsContext from '../context/ProductsContext';

export default function Categories() {
  const [value, setValue] = React.useState(0);
  const {setCategory} = useContext(ProductsContext)

  return (
    <Box sx={{ width: '100%' , marginTop:3}}>
      <BottomNavigation
        showLabels
        
      >
        <BottomNavigationAction onClick={()=>setCategory("men's clothing")} label="Men" icon={<ManIcon />} />
        <BottomNavigationAction  onClick={()=>setCategory("women's clothing")} label="Women" icon={<GirlIcon />} />
        <BottomNavigationAction   onClick={()=>setCategory("electronics")}label="Electronics" icon={<BoltIcon />} />
        <BottomNavigationAction   onClick={()=>setCategory("Jewelery")}label="Jewelery" icon={<DiamondIcon />} />
      </BottomNavigation>
    </Box>
  );
}