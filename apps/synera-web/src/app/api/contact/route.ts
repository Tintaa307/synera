import { NextResponse } from "next/server"

export async function POST(req: Request) {
  if (req.method !== "POST")
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 })

  try {
    const response = await req.json()

    if (Object.values(response).some((value) => value === "")) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      )
    }

    const { name, email, phone, message } = response

    //nodemailer

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "An error occurred, please try again later" },
      { status: 500 }
    )
  }
}
