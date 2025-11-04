"use client";

import { useState, type FormEvent } from "react";
import ArrowRightSmallIcon from "@/components/icons/ArrowRightSmallIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    subject: "",
    message: "",
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
        companyName: "",
        subject: "",
        message: "",
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
            <h1 className="font-['Poppins',sans-serif] text-[60px]/[72px] md:text-[120px]/[144px] font-normal text-[#151d26]">
              Get In Touch
            </h1>
            <p className="text-base md:text-base font-normal text-[#333333] max-w-[1014px]">
              Let&apos;s create the future of digital economies together.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1"></div>

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-lg md:text-xl/[32px] font-normal text-[#333333]">
                Whether you&apos;re a startup founder, enterprise, or research
                partner, we&apos;re here to collaborate, advise, and build with
                you. Reach out to explore partnerships, incubation, or research
                opportunities with Elysium Research.
              </p>
              <button className="btn-brown text-button w-fit">
                Explore Focus Areas
                <ArrowRightSmallIcon className="w-3 h-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="mw">
          <div className="max-w-[1216px] mx-auto space-y-12">
            {/* Form Header */}
            <div className="space-y-6">
              <h2 className="heading-section">
                Let&apos;s Start the Conversation
              </h2>
              <p className="font-['Poppins',sans-serif] text-lg leading-[1.5] text-[var(--color-primary-text)]">
                Have a question, idea, or collaboration in mind?
                <br />
                Fill out the form below and our team will connect with you to
                explore how we can work together
              </p>
            </div>

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

              {/* Second Row: Email & Company Name */}
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
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-3">
                <label
                  htmlFor="subject"
                  className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-20 px-5 pr-12 rounded-lg border border-[var(--color-primary-accent)] bg-[#fbfdfe] font-['Poppins',sans-serif] text-base text-[var(--color-primary-text)] appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)] focus:ring-opacity-50 cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="incubation">Incubation Program</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDownIcon className="w-3 h-2" />
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="block font-['Poppins',sans-serif] text-lg text-[var(--color-primary-text)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
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
