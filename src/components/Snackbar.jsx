import { useContext ,forwardRef} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ProductsContext from '../context/ProductsContext';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 function CustomizedSnackbars() {
 
    const {handleClose,open} = useContext(ProductsContext)
  
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
     
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Product added to cart!
        </Alert>
      </Snackbar>
      
    </Stack>
  );
}

export default CustomizedSnackbars