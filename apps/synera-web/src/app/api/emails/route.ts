import { Resend } from "resend"
import { NextResponse } from "next/server"
import { EmailTemplate } from "@/components/email-template"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed", status: 405 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await req.json()

    if (!data) {
      return NextResponse.json({
        message: "No data provided",
        status: 400,
      })
    }

    const { name, email, phone, message } = data

    console.log(data)

    const res = await resend.emails.send({
      from: "Synera Team <synera@synera.com.ar>",
      to: [
        "valentin@synera.com.ar",
        "tomas@synera.com.ar",
        "bruno@synera.com.ar",
        "facundo@synera.com.ar",
        "nicolas@synera.com.ar",
        "synera@synera.com.ar",
      ],
      subject: "New message from Synera's website",
      react: EmailTemplate({
        name: name,
        message: message,
        phone: phone,
        email: email,
      }),
      text: "",
    })

    if (res) {
      console.log(res)
    }

    return NextResponse.json({
      message: "The email was sent successfully.",
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: "The email could not be sent. Please try again later.",
      status: 500,
    })
  }
}
