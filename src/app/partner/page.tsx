"use client";

import { useState, type FormEvent } from "react";
import ArrowRightSmallIcon from "@/components/icons/ArrowRightSmallIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    role: "",
    country: "",
    areaOfPartnership: "",
    website: "",
    howDidYouHearAboutUs: "",
    additionalNotes: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thank you for reaching out! We'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        role: "",
        country: "",
        areaOfPartnership: "",
        website: "",
        howDidYouHearAboutUs: "",
        additionalNotes: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen">
      <section
        className="relative pt-[85px] md:pt-[120px] pb-10 md:pb-40"
        style={{
          backgroundImage: "url(/images/about-hero-bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mw">
          <div className="flex flex-col gap-5 md:gap-6 mb-12 md:mb-20">
            <h1 className="font-['Poppins',sans-serif] text-[42px]/[45px] sm:text-[60px]/[72px] md:text-[120px]/[144px] font-normal text-[#151d26]">
              Become a Partner
            </h1>
            <p className="text-[10px]/[14px] md:text-base font-normal text-[#333333] max-w-[1014px]">
              Let’s collaborate on research, infrastructure, and digital
              innovation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1"></div>

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-xs/5 md:text-lg/6 lg:text-xl/[32px] font-normal text-[#333333]">
                Elysium Research partners with institutions and innovators to
                advance the future of digital economies. Through deep research,
                VASP-backed regulatory infrastructure, and hands-on R&D
                execution, we provide a trusted pathway to build and scale
                secure digital solutions. Partnering with Elysium means gaining
                a compliance-driven, research-focused ally committed to
                developing long-term, globally viable blockchain innovation.
              </p>
              <button className="btn-brown text-button w-fit">
                Explore Focus Areas
                <ArrowRightSmallIcon className="w-3 h-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mw">
          <div className="max-w-[1216px] mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="heading-section">
                Let&apos;s Start the Conversation
              </h2>
              <p className="font-['Poppins',sans-serif] text-lg leading-[1.5] text-[var(--color-primary-text)]">
                Collaborate with Elysium to advance research, strengthen
                regulatory innovation, and build the next generation of
                blockchain infrastructure. Share your details below, and our
                partnership team will reach out.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-11">
              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="firstName"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="lastName"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="phoneNumber"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="companyName"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="role"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Role / Position
                  </label>
                  <input
                    type="url"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="areaOfPartnership"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Area of Partnership Interest
                  </label>
                  <input
                    type="text"
                    id="areaOfPartnership"
                    name="areaOfPartnership"
                    value={formData.areaOfPartnership}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="country"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="website"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Website or Portfolio (Optional)
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="howDidYouHearAboutUs"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    How Did You Hear About Us
                  </label>
                  <input
                    type="text"
                    id="howDidYouHearAboutUs"
                    name="howDidYouHearAboutUs"
                    value={formData.howDidYouHearAboutUs}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="additionalNotes"
                  className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                >
                  Tell Us About Your Partnership Goals
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={10}
                  className="w-full px-5 py-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-brown inline-flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-button">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <ArrowRightIcon className="w-3 h-3" />
              </button>

              {/* Form Status Message */}
              {formStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <p className="font-['Poppins',sans-serif] text-base">
                    {formStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
