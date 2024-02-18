import { validateUser } from "@/lib/validateUser";
import { NextRequest, NextResponse } from "next/server";




export async function GET(request:NextRequest){

    try {
        const token = request.cookies.get("user_id")?.value;
        const user_id =  token && (await validateUser(token).catch((err) => {
            console.log(err);
          }));
          return NextResponse.json(user_id)
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}
