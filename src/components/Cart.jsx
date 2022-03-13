import React, { useContext, useState } from 'react'
import ProductsContext from '../context/ProductsContext';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function Cart() {


  const { cart, count, handleRemove, coust } = useContext(ProductsContext)

  console.log(cart)

  return (




    <div>
      {
        count === 0 ?
          <Typography

            variant="subtitle2"
            fontSize={20}
            
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            Your Cart is Empty
          </Typography>
          :
          <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {cart.map((value) => {
                return (
                  <ListItem
                    key={value.id}
                    secondaryAction={
                      <IconButton onClick={() => handleRemove(value)}>
                        <DeleteIcon />
                      </IconButton>
                    }

                  >

                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          src={value.image}
                        />
                      </ListItemAvatar>
                      <ListItemText id={value.id} primary={value.title} secondary={parseInt(value.price) + "$"} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <hr />
            <br />
            <Typography

              variant="subtitle2"
              fontSize={20}
              fontStyle={'italic'}
              noWrap
              component="div"
              sx={{ display: { xs: 'block', sm: 'block' } }}
            >
              Total : {coust}$
            </Typography>
            <Button>Buy</Button>
          </div>


      }

    </div>
  )



}
export default Cart