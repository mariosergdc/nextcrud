import { NextRequest, NextResponse } from "next/server"

export function POST() {
    console.log("Insertar Producto")
    return NextResponse.json({message:"insertar producto"})
}