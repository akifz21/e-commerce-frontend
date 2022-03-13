import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import ProductsContext from '../context/ProductsContext'
import { AddShoppingCart } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageSection from '../components/ImageSection';
import Categories from '../components/Categories';







function Products() {

  const { products, addToCart, isLoading, handleClick } = useContext(ProductsContext)

  return (

    <div >

     

        {isLoading ? <Box sx={{ display: 'flex' }}>

          <CircularProgress />  <Typography
            color={'black'}
            variant="overline"
            fontSize={16}
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            Loading...
          </Typography>
        </Box>
          :
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       <ImageSection/>
       <Categories/>
       {
         products.map((product) => {
           return (
             <Grid item xs={2} sm={4} md={3} >
               <Card key={product.id} sx={{ maxWidth: 250, height: 400 }}  >
              
                   <CardActionArea >
                     <CardMedia
                       component="img"
                       height="250"
                       image={product.image}
                     />
                     <CardContent sx={{ height: 50 }} >
                       <Typography
                         color={'black'}
                         variant="overline"
                         fontSize={16}
                         noWrap
                         component="div"
                         sx={{ display: { xs: 'block', sm: 'block' } }}
                       >
                         {product.title}

                       </Typography>
                       <Typography
                         color={'black'}
                         variant="overline"
                         fontSize={16}

                         noWrap
                         component="div"
                         sx={{ display: { xs: 'block', sm: 'block' } }}
                       >
                         {parseInt(product.price)}$

                       </Typography>
                     </CardContent>
                   </CardActionArea>
                

                 <CardActions sx={{ height: 70 }} >
                   <Button onClick={() => {
                     return addToCart(product)
                   }} size="small" variant='contained' color="divider" startIcon={<AddShoppingCart />}>
                     Add to Cart
                   </Button>
                 </CardActions>
               </Card>
             </Grid>

           )
         }
         )
       }
        </Grid>   
        }
       
     
    </div>



  )
}

export default Products