import axios from "axios";
import { createContext,useState,useEffect } from "react";


const ProductsContext = createContext();


export const ProductsProvider=({children})=>{

    const [products,setProducts]= useState([])
    const [isLoading,setLoading] = useState(true)
    const [cart,setCart]=useState([])
    const [count,setCount] = useState(0)
    const [coust,setCoust]=useState(0)
    const [open, setOpen] = useState(false);  
    const [category,setCategory] = useState("")
   


    useEffect(()=>{
        axios("https://fakestoreapi.com/products")
        .then((res)=>setProducts(res.data))
        .finally(()=>setLoading(false))
    },[])

    useEffect(()=>{
      axios(`https://fakestoreapi.com/products/category/${category}`)
      .then((res)=>setProducts(res.data))
    },[category])




    const addToCart = (product) =>{
        const exist = cart.find(products=>products === product )
        if(!exist){
            setCart([...cart,product])
            setCount(count+1)
            setCoust(coust + parseInt(product.price))
            handleClick()
        }
        
   
    }

    const handleRemove=(product)=>{

      setCart((prev)=>[...prev.filter((i)=>i!==product)])
      setCount(count-1)
      setCoust(coust - parseInt(product.price))


    }


    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    

    


    const values = {
        setCart,
        cart,
        products,
        addToCart,
        count,
        isLoading,
        handleClick,
        handleClose,
        open,
        handleRemove,
        coust,
        category,
        setCategory  
    }



    return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}


export default ProductsContext