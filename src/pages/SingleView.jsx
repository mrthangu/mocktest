import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../Stocks/MyContext';

function SingleView() {
const {id} = useParams();
const {singleProduct,setSingleProduct} = useContext(MyContext);



async function GetAProduct() {
const oneproduct = await fetch('https://fakestoreapi.com/products/id').then(res=>res.json());
            setSingleProduct(oneproduct)
}

useEffect(() => {
    GetAProduct();
    
  }, []);


  return (
    <div>





    </div>
  )
}

export default SingleView