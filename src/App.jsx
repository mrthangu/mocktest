

import { useState } from "react"

import { MyContext } from "./Stocks/MyContext";
import AllProducts from "./pages/AllProducts";
import { Route, Routes } from "react-router-dom";
import SingleView from "./pages/SingleView";



function App() {

const [allData, setAllData] = useState([]);
const [singleProduct, setSingleProduct] = useState([]);
  return (
    <>
<MyContext.Provider value={{allData,setAllData,singleProduct,setSingleProduct}}>
<Routes>

<Route path="/" element={<AllProducts/>}></Route>
<Route path="SingleView/:id" element={<SingleView/>}></Route>




</Routes>
</MyContext.Provider>





    </>
  )
}

export default App
