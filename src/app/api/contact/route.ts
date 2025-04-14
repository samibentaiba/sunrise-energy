// api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { recaptchaToken, ...formData } = body;

    // Ensure token is present
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: "No reCAPTCHA token provided" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: "Missing reCAPTCHA secret key" },
        { status: 500 }
      );
    }

    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const captchaRes = await fetch(verifyURL, { method: "POST" });
    const captchaData = await captchaRes.json();

    // Check if reCAPTCHA verification failed or score is too low
    if (!captchaData.success || captchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, message: "Failed reCAPTCHA verification or score is too low" },
        { status: 403 }
      );
    }

    // ✅ Token is valid, continue with form processing
    console.log("Form data:", formData); // This is where you handle form data (e.g., save it to DB or send email)

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
