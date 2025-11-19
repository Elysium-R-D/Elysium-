"use client";

import { useState, type FormEvent } from "react";
import ArrowRightSmallIcon from "@/components/icons/ArrowRightSmallIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Link from "next/link";

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    website: "",
    country: "",
    stageOfVenture: "",
    areaOfFocus: "",
    ventureDescription: "",
    supportSeeking: "",
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
        website: "",
        country: "",
        stageOfVenture: "",
        areaOfFocus: "",
        ventureDescription: "",
        supportSeeking: "",
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

  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    setPitchDeckFile(file);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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
              Application Form
            </h1>
            <p className="text-[10px]/[14px] md:text-base font-normal text-[#333333] max-w-[1014px]">
              Please share your details and a brief overview of your project or
              venture.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1"></div>

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-xs/5 md:text-lg/6 lg:text-xl/[32px] font-normal text-[#333333]">
                At Elysium, we take time to understand each founder&apos;s
                vision, the problem being solved, and the impact you aim to
                create. Our team carefully reviews every submission to assess
                alignment with our research and venture goals. If your
                application fits our criteria, we&apos;ll reach out to schedule
                a discovery call and explore how we can best support your growth
                journey.
              </p>
              <Link href="/focus-area">
                <button className="btn-brown text-button w-fit">
                  Explore Focus Areas
                  <ArrowRightSmallIcon className="w-3 h-[11px]" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="mw">
          <div className="max-w-[1216px] mx-auto space-y-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-11">
              {/* First Row: First Name & Last Name */}
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

              {/* Second Row: Email & Phone Number */}
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

              {/* Third Row: Company & Website */}
              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="companyName"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Company / Project Name
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
                    htmlFor="website"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Website or Portfolio
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              {/* Fourth Row: Country & Stage of Venture */}
              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="country"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Country / Region
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
                <div className="space-y-3">
                  <label
                    htmlFor="stageOfVenture"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Stage of Venture
                  </label>
                  <input
                    type="text"
                    id="stageOfVenture"
                    name="stageOfVenture"
                    value={formData.stageOfVenture}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              {/* Fifth Row: Area of Focus & Venture Description */}
              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="areaOfFocus"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Area of Focus
                  </label>
                  <input
                    type="text"
                    id="areaOfFocus"
                    name="areaOfFocus"
                    value={formData.areaOfFocus}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="ventureDescription"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Brief Description of Your Venture
                  </label>
                  <input
                    type="text"
                    id="ventureDescription"
                    name="ventureDescription"
                    value={formData.ventureDescription}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
              </div>

              {/* Sixth Row: Support Seeking & Upload Pitch Deck */}
              <div className="grid md:grid-cols-2 gap-11">
                <div className="space-y-3">
                  <label
                    htmlFor="supportSeeking"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    What Support Are You Seeking?
                  </label>
                  <input
                    type="text"
                    id="supportSeeking"
                    name="supportSeeking"
                    value={formData.supportSeeking}
                    onChange={handleChange}
                    className="w-full h-20 px-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="pitchDeck"
                    className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                  >
                    Upload Pitch Deck
                  </label>
                  <input
                    type="file"
                    id="pitchDeck"
                    name="pitchDeck"
                    accept="application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                    onChange={handleFileChange}
                    className="w-full h-20 px-5 py-5 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-primary-accent)] file:text-white"
                  />
                  {pitchDeckFile && (
                    <p className="text-sm text-[var(--color-primary-text)]">
                      Selected: {pitchDeckFile.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Notes Textarea */}
              <div className="space-y-3">
                <label
                  htmlFor="additionalNotes"
                  className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                >
                  Additional Notes
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
