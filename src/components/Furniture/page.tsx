"use client"
import image from "next/image";
import React ,{useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
const FURNITURE = () => {
  const[product,setProduct]=useState<Product[]>([])
  useEffect(()=> {
    async function fetchproduct(){
      const fetchedProduct :Product[]=await client.fetch(allproducts)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  },[])

  
  return ( 
    <div className="max-w-6xl mx-auto px-4 py-8">
      {product.map((product) => (
        <div key={product._id}> 
        {product.name}
       </div>
      )
       )}

    </div>
  );
};