import { mailOptions, transporter } from "@/lib/config/nodemailer"
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
    await transporter
      .sendMail({
        ...mailOptions(email),
        subject: "New message from Synera website",
        from: email,
        sender: email,
        html: `
      <main>
        <h1>Hola Synera team, soy ${name}</h1>
        <h3>${message}</h3>
        <div><h4>Este es mi email: ${email}</h4></div>
        <div><h4>Este es mi telefono: ${phone}</h4></div>
      </main>`,
      })
      .then((response) => {
        console.log(response)
        return NextResponse.json(
          { message: "Message sent successfully" },
          { status: 200 }
        )
      })
      .catch((error) => {
        console.log(error)
        return NextResponse.json(
          { message: "An error occurred, please try again later" },
          { status: 500 }
        )
      })

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
