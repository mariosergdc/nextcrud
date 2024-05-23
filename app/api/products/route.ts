import { NextRequest, NextResponse } from "next/server"
import connection from "@/lib/db"

export async function POST  (req:NextRequest) {
    const {name,description}=await req.json()

    const query = "INSERT INTO products (name, description, price) VALUES (?, ?, ?) "

    try {
        await connection.query(
          query,
          [name, description, 10]
        );
        console.log('Producto insertado correctamente');
      } catch (error) {
        console.error('Error al insertar el producto:', error);
      }

    console.log("Insertar Producto")
    
    return NextResponse.json({message:"insertar producto"})
}