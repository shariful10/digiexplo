import { validateUser } from "@/lib/validateUser";
import { NextRequest, NextResponse } from "next/server";

<<<<<<< HEAD



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

=======
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("user_id")?.value;
    const user_id =
      token &&
      (await validateUser(token).catch((err) => {
        console.log(err);
      }));
    return NextResponse.json(user_id);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
>>>>>>> 64f9254333460ee7c10ca9097e9316671bd45769
}
