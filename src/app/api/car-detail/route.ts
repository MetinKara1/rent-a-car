import { NextRequest, NextResponse } from "next/server";
import { cars } from "../../../utils/database";


export const GET = (request: NextRequest, response: NextResponse) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const id = searchParams.get("id");

    const carDetail = cars.find(x => x.searchKey === id);

    return NextResponse.json(carDetail, {
        status: 200
    })
}