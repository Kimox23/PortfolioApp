import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    const response = await fetch('https://dummyjson.com/carts');
    const parseData = await response.json();
    
    return NextResponse.json(parseData);
}