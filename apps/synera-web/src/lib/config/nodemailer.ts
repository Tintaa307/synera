import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export const mailOptions = (email: string) => {
  return {
    from: email,
    to: process.env.EMAIL_USER,
  }
}
