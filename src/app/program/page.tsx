import ArrowRightSmallIcon from "@/components/icons/ArrowRightSmallIcon";
import Cta from "@/components/layout/cta";
import Image from "next/image";

const testimonials = [
  {
    name: "Maxin Will",
    title: "Product Manager",
    avatarUrl: "/images/testimonial-img.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
  },
  {
    name: "Maxin Will",
    title: "Product Manager",
    avatarUrl: "/images/testimonial-img.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
  },
  {
    name: "Maxin Will",
    title: "Product Manager",
    avatarUrl: "/images/testimonial-img.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
  },
];

export default function page() {
  return (
    <main className="min-h-screen flex flex-col gap-[50px] bg-[#F9F5EC]">
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
              Program
            </h1>
            <p className="text-base md:text-base font-normal text-[#333333] max-w-[1014px]">
              Empowering Founders with Structure, Insight, and Support
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1"></div>

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-lg md:text-xl/[32px] font-normal text-[#333333]">
                Our incubation and venture program is built to help innovators
                grow responsibly — from early research to market launch. We
                combine academic rigor, regulatory clarity, and venture-building
                expertise to turn bold ideas into sustainable, compliant
                businesses.
              </p>
              <button className="btn-brown text-button w-fit">
                Apply now
                <ArrowRightSmallIcon className="w-3 h-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-16">
        <div className="mw flex flex-col gap-[50px]">
          <div className="max-w-[869px]">
            <p className="text-[var(--color-primary-accent)] text-sm/5 md:text-lg/[28px] font-semibold">
              What we Offer
            </p>
            <h2 className="text-[var(--color-primary-dark)] heading-section">
              Turning Research-Driven Ideas into Market-Ready Ventures
            </h2>
          </div>
          <div className="offer-grid-layout [&>div]:bg-[#A77B5A] [&>div]:rounded-[10px]">
            <div className="item-1 pb-8 md:pb-12 lg:pb-0 max-lg:pb-[70px] pt-8 md:pt-12 lg:pt-[70px] px-4 md:px-8 space-y-4">
              <h5 className="text-2xl/8 md:text-[32px]/[42px] font-medium text-white">
                Regulatory Guidance
              </h5>
              <p className="text-xs/5 md:text-lg/[28px] text-[#F9F5EC]">
                Innovation needs structure. Through our VASP-backed framework,
                ventures get the compliance confidence and operational support
                to scale securely across regions and regulatory systems.
              </p>
            </div>
            <div className="item-2 pb-8 md:pb-12 lg:pb-0 max-lg:pb-[70px] pt-8 md:pt-12 lg:pt-[70px] px-4 md:px-8 space-y-4">
              <h5 className="text-2xl/8 md:text-[32px]/[42px] font-medium text-white">
                Network & Partnerships
              </h5>
              <p className="text-xs/5 md:text-lg/[28px] text-[#F9F5EC]">
                Gain direct connections to investors, enterprises, and partners
                who share your vision for innovation. We open doors to global
                opportunities that drive lasting impact.{" "}
              </p>
            </div>
            <div className="item-3 pb-8 md:pb-12 lg:pb-0 max-lg:pb-[70px] pt-8 md:pt-12 lg:pt-[70px] px-4 md:px-8 space-y-4">
              <h5 className="text-2xl/8 md:text-[32px]/[42px] font-medium text-white">
                Funding Support
              </h5>
              <p className="text-xs/5 md:text-lg/[28px] text-[#F9F5EC]">
                We go beyond investment we build with you. From early-stage
                funding to hands-on R&D execution, founders get access to the
                tools, technical expertise, and capital needed to bring ideas to
                life.{" "}
              </p>
            </div>
            <div className="item-4 pb-8 md:pb-12 lg:pb-0 max-lg:pb-[70px] pt-8 md:pt-12 lg:pt-[70px] px-4 md:px-8 space-y-4">
              <h5 className="text-2xl/8 md:text-[32px]/[42px] font-medium text-white">
                Mentorship & Growth
              </h5>
              <p className="text-xs/5 md:text-lg/[28px] text-[#F9F5EC]">
                Learn directly from experienced researchers, builders, and
                business leaders who provide tailored guidance to strengthen
                your strategy and execution.
              </p>
            </div>
            <div className="item-5 relative max-lg:hidden overflow-hidden">
              <Image
                src={"/images/what-we-offer.jpg"}
                aria-label="What we offer illustration"
                alt="What we offer illustraion"
                width={350}
                height={700}
                quality={100}
                className="absolute size-full object-cover object-center"
              />
            </div>
            <div className="item-6 pb-8 md:pb-12 lg:pb-0 max-lg:pb-[70px] pt-8 md:pt-12 lg:pt-[70px] px-4 md:px-8 space-y-4">
              <h5 className="text-2xl/8 md:text-[32px]/[42px] font-medium text-white">
                Research & Development
              </h5>
              <p className="text-xs/5 md:text-lg/[28px] text-[#F9F5EC]">
                Every venture at Elysium begins with insight. Our research team
                helps founders validate ideas, test assumptions, and make
                data-backed decisions — ensuring each project is built on
                clarity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mw flex flex-col gap-6 md:gap-[50px]">
          <div className="space-y-6">
            <h2 className="heading-section">
              Your Journey from Idea to Impact
            </h2>
            <p className="text-body max-w-[784px]">
              We guide founders through a structured process that transforms
              research-backed ideas into fully operational ventures — supported
              every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <div className="md:border-r border-r-[#D9C6B8] px-4 md:px-6 py-5 flex flex-col gap-4 md:gap-6">
              <div className="space-y-1.5">
                <p className="text-xs/4 md:text-sm/[18px] font-medium text-[#A77B5A]">
                  Step 1
                </p>
                <p className="text-sm/[18px] md:text-base/5 font-semibold text-[#0D1B2A]">
                  Apply & Get Evaluated
                </p>
              </div>
              <p className="text-[#333] text-xs/4 md:text-sm/5">
                Submit your idea for review based on innovation, market value,
                and alignment with our research goals.
              </p>
            </div>
            <div className="md:border-r border-r-[#D9C6B8] px-4 md:px-6 py-5 flex flex-col gap-4 md:gap-6">
              <div className="space-y-1.5">
                <p className="text-xs/4 md:text-sm/[18px] font-medium text-[#A77B5A]">
                  Step 2
                </p>
                <p className="text-sm/[18px] md:text-base/5 font-semibold text-[#0D1B2A]">
                  Research & Validation
                </p>
              </div>
              <p className="text-[#333] text-xs/4 md:text-sm/5">
                Refine your concept with expert insights and data to build a
                strong foundation.
              </p>
            </div>
            <div className="md:border-r border-r-[#D9C6B8] px-4 md:px-6 py-5 flex flex-col gap-4 md:gap-6">
              <div className="space-y-1.5">
                <p className="text-xs/4 md:text-sm/[18px] font-medium text-[#A77B5A]">
                  Step 3
                </p>
                <p className="text-sm/[18px] md:text-base/5 font-semibold text-[#0D1B2A]">
                  Build & Fund
                </p>
              </div>
              <p className="text-[#333] text-xs/4 md:text-sm/5">
                Once approved, access our technical resources, R&D backing, and
                funding support to start building and testing your product.
              </p>
            </div>
            <div className="px-4 md:px-6 py-5 flex flex-col gap-4 md:gap-6">
              <div className="space-y-1.5">
                <p className="text-xs/4 md:text-sm/[18px] font-medium text-[#A77B5A]">
                  Step 4
                </p>
                <p className="text-sm/[18px] md:text-base/5 font-semibold text-[#0D1B2A]">
                  Launch & Scale
                </p>
              </div>
              <p className="text-[#333] text-xs/4 md:text-sm/5">
                With mentorship and regulatory guidance, bring your solution to
                market confidently and connect with global investors and
                partners.
              </p>
            </div>
          </div>

          <button className="btn-brown text-button w-fit">
            Apply now
            <ArrowRightSmallIcon className="w-3 h-[11px]" />
          </button>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="flex flex-col items-center justify-center mw">
          <p className="text-[var(--color-primary-accent)] tracking-[6%] text-xs/4 font-semibold">
            TESTIMONIAL
          </p>
          <h2 className="md:mt-3 text-[var(--color-primary-dark)] heading-section">
            Client Success Stories
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-xl border border-[#D9C6B8] shadow-md transition hover:shadow-sm w-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Image
                      className="rounded-full object-top object-cover mr-4"
                      width={50}
                      height={50}
                      src={t.avatarUrl}
                      alt={`${t.name} Avatar`}
                    />
                    <div>
                      <div className="text-[#1E1E1E] font-bold text-xs/4 md:text-sm/5">
                        {t.name}
                      </div>
                      <div className="text-[#1E1E1E99] text-xs/4 md:text-sm/5">
                        {t.title}
                      </div>
                    </div>
                  </div>
                  <span>
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0763 23.8428H9.71276C10.0082 21.8753 10.7108 19.991 11.7756 18.3103C12.8404 16.6296 14.244 15.1894 15.8969 14.0818L18.7425 12.1741L16.9938 9.53516L14.1481 11.4428C11.7528 13.0391 9.7886 15.2019 8.42973 17.7394C7.07085 20.2769 6.35936 23.1106 6.3584 25.989V36.5608C6.3584 37.4041 6.69338 38.2128 7.28965 38.809C7.88592 39.4053 8.69463 39.7403 9.53789 39.7403H19.0763C19.9196 39.7403 20.7283 39.4053 21.3246 38.809C21.9209 38.2128 22.2558 37.4041 22.2558 36.5608V27.0223C22.2558 26.1791 21.9209 25.3704 21.3246 24.7741C20.7283 24.1778 19.9196 23.8428 19.0763 23.8428ZM41.3328 23.8428H31.9692C32.2646 21.8753 32.9672 19.991 34.032 18.3103C35.0968 16.6296 36.5005 15.1894 38.1533 14.0818L40.9989 12.1741L39.2661 9.53516L36.4046 11.4428C34.0093 13.0391 32.045 15.2019 30.6861 17.7394C29.3273 20.2769 28.6158 23.1106 28.6148 25.989V36.5608C28.6148 37.4041 28.9498 38.2128 29.5461 38.809C30.1423 39.4053 30.951 39.7403 31.7943 39.7403H41.3328C42.176 39.7403 42.9847 39.4053 43.581 38.809C44.1773 38.2128 44.5122 37.4041 44.5122 36.5608V27.0223C44.5122 26.1791 44.1773 25.3704 43.581 24.7741C42.9847 24.1778 42.176 23.8428 41.3328 23.8428Z"
                        fill="#A77B5A"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-[#333333] text-xs/4 md:text-sm/5">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mw flex flex-col gap-10 md:gap-20">
          <h3 className="text-center w-full heading-section">
            Frequenty Asked Questions
          </h3>

          <div className="flex items-center max-lg:flex-col justify-between gap-4 w-full">
            <div className="flex-1 flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="px-6 flex items-center gap-6 rounded-[5px] shadow-[0px_24.56px_32.74px_-14.73px_#95959540] bg-white h-[100px]"
                >
                  <span>
                    <svg
                      className="size-4 md:size-[18px]"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.8"
                        y="7.5"
                        width="18"
                        height="3"
                        rx="1.5"
                        fill="#1B1139"
                      />
                      <rect
                        opacity="0.8"
                        x="10.5"
                        width="18"
                        height="3"
                        rx="1.5"
                        transform="rotate(90 10.5 0)"
                        fill="#1B1139"
                      />
                    </svg>
                  </span>
                  <p className="text-sm/[130%] md:text-lg/[130%] text-[#1B1139]">
                    How long until we deliver your first blog post?
                  </p>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="text-2xl md:text-[32px] leading-[150%] font-semibold text-[#8E694D]">
                Any Question?
              </p>
              <p className="mt-2 text-xs md:text-base leading-[150%] text-[#474646]">
                You can ask anything you want to know Feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
