import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/db"

export async function GET(request: NextRequest) {
    console.log(request.method)
    try {
        const rows = await connection.query('SELECT NOW()');
        const res=rows[0];
        console.log("rows",res[0]['NOW()'])
        return NextResponse.json(res[0]['NOW()'])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
}



