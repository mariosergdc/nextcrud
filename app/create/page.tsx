import React from 'react'

const Create = () => {
  return (
    <div className='w-1/2 mx-auto flex flex-col items-center justify-center p-2'>
        <h1>Create</h1>
    <form className="flex flex-col gap-2 border-gray-500 border p-1 rounded-lg">
        <label htmlFor="name" className=" p-1 px-2">Nombre</label>
        <input className="text-gray-700 rounded-lg m-2 p-2 outline-none" type="text" name="name" placeholder="Nombre" autoFocus/>
        <label htmlFor="description" className=" p-1 px-2">Descripción</label>
        <input className="text-gray-700 rounded-lg m-2 p-2 outline-none" type="text" name="description" placeholder="Descripción" />
        <button className="bg-blue-500 hover:bg-blue-900 rounded-lg m-2 p-2">Insertar</button>
      </form>
      </div>
  )
}

export default Create
