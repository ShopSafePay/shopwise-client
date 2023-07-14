import { NextResponse } from "next/server";
import axios from "axios";
import ProductSell from "@models/ProductSell";
import db from "@libs/db";

export const POST = async (req) => {
  try {
    await db();

    const { account, key, Total, data, buyerId, buyerName } = await req.json();

    console.log(account, key, Total, data);
    const recieverAccount = "7798540337";

    console.log(key);
    const tranId = generateSecretKey(6);
    console.log(tranId);
    const rs = await axios.post(`http://localhost:3001/api/payment`, {
      account,
      key,
      Total,
      recieverAccount,
      tranId,
    });

    console.log(rs);

    if (rs.status === 201) {
      data.forEach(async (item) => {
        const newProductSell = new ProductSell({
          productId: item.id,
          count: item.count,
          buyerId: buyerId,
          buyerName: buyerName,
          status: "0",
          transactionId: tranId.toString(),
          buyerAccount: account,
        });

        console.log(newProductSell);

        await newProductSell.save();
      });
    }

    return new NextResponse(JSON.stringify(rs.data), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Server error", { status: 500 });
  }
};

function generateSecretKey(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let secretKey = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    secretKey += charset[randomIndex];
  }

  return secretKey;
}
