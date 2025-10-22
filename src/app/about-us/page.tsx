import ArrowRightSmallIcon from "@/components/icons/ArrowRightSmallIcon";
import Cta from "@/components/layout/cta";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="flex flex-col gap-10 w-full overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative pt-[85px] md:pt-[171px] pb-10 md:pb-20"
        style={{
          backgroundImage: "url(/images/about-hero-bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mw">
          <div className="flex flex-col gap-5 md:gap-6 mb-12 md:mb-20">
            <h1 className="font-['Poppins',sans-serif] text-[60px]/[72px] md:text-[120px]/[144px] font-normal text-[#151d26]">
              About US
            </h1>
            <p className="text-base md:text-base font-normal text-[#333333] max-w-[1014px]">
              Where Research Meets Real-World Impact, transforming ideas into
              sustainable digital ventures.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1"></div>

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-lg md:text-xl/[32px] font-normal text-[#333333]">
                Elysium Research is a blockchain-focused institute advancing
                innovation through research, regulatory infrastructure, and
                venture development. We connect insight, compliance, and capital
                to help founders, institutions, and regulators build sustainable
                digital economies across Africa and beyond.
              </p>
              <button className="btn-brown text-button w-fit">
                Explore Focus Areas
                <ArrowRightSmallIcon className="w-3 h-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="relative py-10 md:py-[100px]">
        <div className="mw">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="flex-1 flex flex-col gap-8">
              <h2 className="heading-section">
                Shaping the Future of Digital Economies
              </h2>
              <p className="text-base/[26px] font-normal tracking-[-0.32px] text-[#333333CC] max-w-[663px]">
                At Elysium Research, we believe technology should grow
                responsibly. We connect research, regulation, and venture
                creation to build trusted, inclusive digital systems where
                innovation truly serves people.
              </p>

              {/* Statistics */}
              <div className="flex gap-8 md:gap-16">
                <div>
                  <p className="heading-large">20+</p>
                  <p className="text-base font-normal tracking-[-0.32px] text-[#333333]">
                    Research Partnerships
                  </p>
                </div>
                <div>
                  <p className="heading-large">10+</p>
                  <p className="text-base font-normal tracking-[-0.32px] text-[#333333]">
                    Active Venture Collaborations
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-1">
              <div className="shrink-0 flex justify-center pt-2 lg:pt-3">
                <Image
                  src="/images/about-vertical-line.svg"
                  alt=""
                  width={12}
                  height={236}
                  className="w-2 h-[164px] lg:w-3 lg:h-[236px]"
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-7 md:gap-12 lg:gap-20">
                <div>
                  <h3 className="text-[25px] md:text-[32px]/10 font-medium tracking-[-2%] md:tracking-[-0.64px] text-[#000000] mb-2">
                    Our Mission
                  </h3>
                  <p className="text-xs/[18px] md:text-lg/[26px] font-normal tracking-[-2%] md:tracking-[-0.36px] text-[#333333]">
                    Innovating for the future of humanity while staying
                    connected to nature and sustainable growth. We invest in and
                    support innovative projects that advance human progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-[25px] md:text-[32px]/10 font-medium tracking-[-2%] md:tracking-[-0.64px] text-[#000000] mb-2">
                    Our Vision
                  </h3>
                  <p className="text-xs/[18px] md:text-lg/[26px] font-normal tracking-[-2%] md:tracking-[-0.36px] text-[#333333]">
                    To empower research, innovation, and human development by
                    backing transformative ideas and projects while maintaining
                    an approachable, human-centric presence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Cubes - Bottom Right */}
          <Image
            src="/images/about-cubes-decoration.svg"
            alt=""
            width={180}
            height={149}
            className="absolute right-8 bottom-0 max-lg:hidden"
          />
        </div>
      </section>

      {/* Our Approach Section */}
      <section
        className="relative py-10 md:py-[100px]"
        style={{
          backgroundColor: "#a77b5a",
          backgroundImage: "url(/images/about-approach-bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mw">
          <div className="flex flex-col gap-4 mb-6 md:mb-12 lg:mb-16">
            <p className="text-[10px] md:text-lg font-bold text-[#87ceeb]">
              Our Approach
            </p>
            <h2 className="text-xl/[26px] md:text-[40px]/[48px] lg:text-[68px]/[78px] font-semibold tracking-[-2%] md:tracking-[-1.36px] text-white max-w-[1057px]">
              Turning Insight Into Impact. We build ventures that balance
              innovation with responsibility.
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:gap-12 lg:gap-[50px]">
            {/* Step 1 */}
            <div className="flex flex-col gap-2 md:gap-6">
              <div className="h-px bg-[#eadfd7]"></div>
              <div className="flex flex-col lg:flex-row gap-2 md:gap-6 lg:gap-16">
                <div className="flex max-lg:flex-col gap-2 md:gap-6 lg:gap-12 items-start lg:w-[574px]">
                  <p className="text-[8px] sm:text-base md:text-3xl lg:text-[32px]/[42px] font-bold text-white">
                    01
                  </p>
                  <h3 className="text-[10px] sm:text-lg md:text-[32px]/[42px] font-bold text-white">
                    Research & Insight
                  </h3>
                </div>
                <p className="text-[8px]/[11px] sm:text-sm/5 md:text-lg/[28px] font-normal text-[#f6f0f0] flex-1">
                  Our work begins with research — the foundation of every
                  venture we build. We explore emerging technologies, regulatory
                  landscapes, and market opportunities to uncover what&apos;s
                  shaping the future of digital economies. These insights guide
                  our strategy, ensuring that every solution we develop is
                  grounded in evidence, relevance, and long-term value.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-2 md:gap-6">
              <div className="h-px bg-[#eadfd7]"></div>
              <div className="flex flex-col lg:flex-row gap-2 md:gap-6 lg:gap-16">
                <div className="flex max-lg:flex-col gap-2 md:gap-6 lg:gap-12 items-start lg:w-[574px]">
                  <p className="text-[8px] sm:text-base md:text-3xl lg:text-[32px]/[42px] font-bold text-white">
                    02
                  </p>
                  <h3 className="text-[10px] sm:text-lg md:text-[32px]/[42px] font-bold text-white">
                    VASP-Backed Infrastructure
                  </h3>
                </div>
                <p className="text-[8px]/[11px] sm:text-sm/5 md:text-lg/[28px] font-normal text-[#f6f0f0] flex-1">
                  Compliance is at the core of innovation. Through our VASP
                  license, we provide the regulatory foundation that enables
                  digital ventures to operate with transparency and trust. By
                  bridging blockchain innovation with compliant frameworks, we
                  help founders and enterprises scale responsibly in a rapidly
                  evolving global ecosystem.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-2 md:gap-6">
              <div className="h-px bg-[#eadfd7]"></div>
              <div className="flex flex-col lg:flex-row gap-2 md:gap-6 lg:gap-16">
                <div className="flex max-lg:flex-col gap-2 md:gap-6 lg:gap-12 items-start lg:w-[574px]">
                  <p className="text-[8px] sm:text-base md:text-3xl lg:text-[32px]/[42px] font-bold text-white">
                    03
                  </p>
                  <h3 className="text-[10px] sm:text-lg md:text-[32px]/[42px] font-bold text-white">
                    R&D + Venture Investment
                  </h3>
                </div>
                <p className="text-[8px]/[11px] sm:text-sm/5 md:text-lg/[28px] font-normal text-[#f6f0f0] flex-1">
                  We translate ideas into impact through focused research and
                  development. By investing in ventures that align with our
                  vision of a secure and sustainable digital economy, we empower
                  innovators to bring their concepts to life — supported by
                  technical expertise, funding, and strategic guidance that turn
                  research into real-world transformation.
                </p>
              </div>
              <div className="h-px bg-[#eadfd7]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      {/* <section className="py-10 md:py-[100px]">
        <div className="mw">
          <h2 className="heading-section text-center mb-12 md:mb-16">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col bg-white group hover:-translate-y-1"
              >
                <div className="relative p-4 md:p-6 border-[12px] md:border-[16px] border-[#a77b5a]">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="bg-[#a77b5a] p-4 md:p-6 flex flex-col items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base font-normal text-white text-center">
                    {member.title}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Linkedin className="w-[13px] h-[13px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <Cta />
    </main>
  );
}
