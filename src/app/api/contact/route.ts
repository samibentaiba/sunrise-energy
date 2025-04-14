import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token, ...formData } = body;

    if (!token) {
      return NextResponse.json({ success: false, message: "No reCAPTCHA token provided" }, { status: 400 });
    }

    // Verify reCAPTCHA with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const captchaRes = await fetch(verifyURL, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success || captchaData.score < 0.5) {
      return NextResponse.json({ success: false, message: "Failed reCAPTCHA verification" }, { status: 403 });
    }

    // ✅ Token is valid, continue with form processing
    console.log("Form data:", formData); // Do whatever you want here: email, DB, etc.

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
