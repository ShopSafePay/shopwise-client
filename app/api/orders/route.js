import { NextResponse } from 'next/server';
import db from '@libs/db';
import ProductSell from '@models/ProductSell';
import axios from 'axios';

export const GET = async (req) => {

    try {

        await db();
        const data = await ProductSell.find({ status: "0" });

        console.log(data);

        return new NextResponse(JSON.stringify(data), {status: 201});
        
        
    } catch (err) {
        console.log(err);
        return new NextResponse("Database error", { status: 500});
    }

}

export const POST = async (req) => {
    const { recieverAccount, Total } = await req.json();

    const account = "7798540337";
    const key = "x3oPm5NDDAIWojVn";

    const rs = await axios.post(`http://localhost:3001/api/payment`, {
        account,
        key,
        Total,
        recieverAccount,
    });

    console.log(rs);


    if (rs.status === 201) {
        return new NextResponse(JSON.stringify(rs.data), { status: 201 });
    }

}
