"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Create = () => {
  const initialState={
    name:"",
    description:""
  }
  const [product, setProduct] = useState(initialState)

  const handleChange=(e)=>{
    setProduct(
      {
        ...product,
        [e.target.name]:e.target.value
      }
    )

  }

  const handleInsert= async (e:React.MouseEvent)=>{
    e.preventDefault()
    axios.post("/api/products",product)
    .then((res)=>res.data)
    .then((data)=>console.log(data))
    setProduct(initialState)
    
  }

  return (
    <div className='w-1/2 mx-auto flex flex-col items-center justify-center p-2'>
        <h1 className="text-2xl">Create</h1>
    <form className="flex flex-col gap-2 border-gray-500 border p-1 rounded-lg">
        <label htmlFor="name" className=" p-1 px-2">Nombre</label>
        <input className="text-gray-700 rounded-lg m-2 p-2 outline-none" type="text" id="name" name="name" placeholder="Nombre" value={product.name} onChange={(e)=>handleChange(e)} autoFocus/>
        <label htmlFor="description" className=" p-1 px-2">Descripción</label>
        <textarea name="description" className="text-gray-700 rounded-lg m-2 p-2 outline-none" id="description" placeholder="Descripción" value={product.description} onChange={(e)=>handleChange(e)} ></textarea>
        <button className="bg-blue-500 hover:bg-blue-900 rounded-lg m-2 p-2" onClick={(e)=>handleInsert(e)}>Insertar</button>
      </form>
      </div>
  )
}

export default Create
