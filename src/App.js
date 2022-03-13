import './App.css';
import { ProductsProvider } from './context/ProductsContext';
import RouterManager from './routers/RouterManager';
import Header from './components/Header';
import CustomizedSnackbars from './components/Snackbar';



function App() {
  return (
  
   <ProductsProvider>
     <Header/>
     <div className='container'>
     <RouterManager/>
     </div>
     <CustomizedSnackbars/>    
   </ProductsProvider>
  );
}

export default App;
