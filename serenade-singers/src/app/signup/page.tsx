"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function convertToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("Submitting registration...");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const photo = formData.get("profilePhoto") as File;

      let photoBase64 = "";

      if (photo && photo.size > 0) {
        photoBase64 = (await convertToBase64(photo)) as string;
      }

      const payload = {
        fullName: formData.get("fullName"),
        gmail: formData.get("gmail"),
        phone: formData.get("phone"),
        viberPhone: formData.get("viberPhone"),
        telegramContact: formData.get("telegramContact"),
        age: formData.get("age"),
        gender: formData.get("gender"),
        nrcOrPassport: formData.get("nrcOrPassport"),
        address: formData.get("address"),
        voiceType: formData.get("voiceType"),
        experience: formData.get("experience"),
        program: formData.get("program"),
        acceptTerms: formData.get("acceptTerms"),
        profilePhoto: photoBase64,
        profilePhotoName: photo?.name || "",
      };

      const response = await fetch(site.appsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setMessage(
          `Registration successful. Your Member ID is ${result.memberId}. Please check your Gmail.`
        );
        form.reset();
      } else {
        setMessage(result.message || "Registration failed. Please try again.");
      }
    } catch {
      setMessage("Connection error. Please contact Serenade Singers admin.");
    }

    setLoading(false);
  }

  return (
    <main className="signup-page">
      <section className="signup-form-wrap">
        <p className="eyebrow">Serenade Singers Registration</p>

        <h1>Member Signup</h1>

        <p className="signup-intro">
          Please complete the registration form carefully. Required fields are
          marked with <span className="required-star">*</span>.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Full Name <span className="required-star">*</span>
              <input name="fullName" type="text" required />
            </label>

            <label>
              Gmail Address <span className="required-star">*</span>
              <input name="gmail" type="email" placeholder="example@gmail.com" required />
            </label>

            <label>
              Phone Number <span className="required-star">*</span>
              <input name="phone" type="tel" required />
            </label>

            <label>
              Viber Phone Number
              <input name="viberPhone" type="tel" />
            </label>

            <label>
              Telegram Username or Phone
              <input name="telegramContact" type="text" placeholder="@username or phone number" />
            </label>

            <label>
              Age <span className="required-star">*</span>
              <input name="age" type="number" min="5" required />
            </label>

            <label>
              Gender <span className="required-star">*</span>
              <select name="gender" required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </label>

            <label>
              NRC or Passport Number <span className="required-star">*</span>
              <input name="nrcOrPassport" type="text" required />
            </label>

            <label>
              Voice Type <span className="required-star">*</span>
              <select name="voiceType" required>
                <option value="">Select</option>
                <option value="Unknown">I do not know yet</option>
                <option>Soprano</option>
                <option>Alto</option>
                <option>Tenor</option>
                <option>Bass</option>
              </select>
            </label>

            <label>
              Music Experience <span className="required-star">*</span>
              <select name="experience" required>
                <option value="">Select</option>
                <option>No experience</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>

            <label>
              Interested Program <span className="required-star">*</span>
              <select name="program" required>
                <option value="">Select</option>
                <option>Choir / A Cappella Member</option>
                <option>Vocal Training</option>
                <option>Piano Class</option>
                <option>Music Theory</option>
                <option>Performance Program</option>
                <option>Workshop / Webinar</option>
                <option>Volunteer / Event Support</option>
                <option>Not Sure Yet</option>
              </select>
            </label>

            <label>
              Profile Photo <span className="required-star">*</span>

              <input
                name="profilePhoto"
                type="file"
                accept="image/png,image/jpeg"
                required
              />

              <p className="upload-rules">
                Upload a clear passport-style profile photo with a visible face.
                White or blue background is recommended. Square 1:1 image preferred.
                JPG or PNG only. Maximum file size: 5MB.
              </p>
            </label>

            <label className="full-width">
              Address <span className="required-star">*</span>
              <textarea name="address" rows={3} required />
            </label>

            <div className="terms-agreement full-width">
              <label className="checkbox-label">
                <input name="acceptTerms" type="checkbox" value="Accepted" required />
                <span>
                  စည်းမျဉ်းစည်းကမ်းများနှင့် အချက်အလက်အသုံးပြုမှုကို သဘောတူလက်ခံပါသည်။
                  <span className="required-star"> *</span>
                </span>
              </label>

              <p className="terms-text-mm">
                Serenade Singers ၏ registration form တွင် ဖြည့်သွင်းထားသော
                အချက်အလက်များနှင့် profile photo ကို organization management,
                member identification, ID card creation, rehearsals, performances,
                attendance system နှင့် internal administration အတွက်သာ
                အသုံးပြုမည်ဖြစ်ပါသည်။
                <br /><br />
                လူကြီးမင်း၏ personal information နှင့် profile photo များကို
                Serenade Singers database system အတွင်းတွင်သာ သိမ်းဆည်းအသုံးပြုမည်ဖြစ်ပြီး
                ခွင့်ပြုချက်မရှိဘဲ public သို့မဟုတ် third-party ထံ မျှဝေမည်မဟုတ်ပါ။
                <br /><br />
                Serenade Singers ၏ activities, rehearsals, performances နှင့်
                community guidelines များကို လေးစားလိုက်နာရန် သဘောတူပါသည်။
              </p>
            </div>
          </div>

          <button className="btn-primary submit-btn" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

          {message && <p className="form-status">{message}</p>}
        </form>
      </section>
    </main>
  );
}
