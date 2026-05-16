import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, mobile, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ error: "First name, email, and message are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const { error } = await supabase.from("contact_submissions").insert([
    {
      first_name: firstName,
      last_name: lastName || "",
      email,
      mobile: mobile || "",
      message,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return res.status(500).json({ error: "Failed to submit. Please call us at +1-416-299-8383." });
  }

  return res.status(200).json({ success: true });
}
