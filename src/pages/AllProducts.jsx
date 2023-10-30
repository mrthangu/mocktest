import React, { useContext, useEffect } from "react";
import { MyContext } from "../Stocks/MyContext";
import './All.css'
import { useNavigate } from "react-router-dom";
function AllProducts() {
  const { allData, setAllData } = useContext(MyContext);
  const navigation = useNavigate()
  async function GetAllProducts() {
    const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );

    setAllData(products);
  }
  useEffect(() => {
    GetAllProducts();
  }, []);

  return (
    <>
      {allData.map((data) => (
        <>
    <div className="ProductCard">
          <p key={data.id}>{data.title}</p>
          <img
            src={data.image}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />

          <button className="button-card" onClick={()=>{navigation('/SingleView/1')}}>View More</button>
      </div>
        </>
      ))}
    </>
  );
}

export default AllProducts;
