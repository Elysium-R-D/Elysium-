import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Cta from "@/components/layout/cta";
import Image from "next/image";
import PartnersAndVentures from "./_components/partners-and-ventures";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 w-full overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-[85px] md:pt-[171px] pb-10 md:pb-20 lg:min-h-screen"
        style={{
          backgroundImage: "url(/images/hero-background.svg)",
          backgroundSize: "cover",
        }}
      >
        <div className="mw">
          <div className="flex flex-col gap-2.5 md:gap-6 max-w-[1218px]">
            <h1 className="heading-hero">
              Research. Regulation. R&D. Backing the Future of Digital Economies
            </h1>
            <p className="text-body max-w-[1014px]">
              Elysium Research is a blockchain-focused institute, empowering
              ventures with research, VASP-backed compliance, and R&D investment
              to transform the digital economy.
            </p>

            <div className="flex items-center gap-4 md:gap-6 mt-6">
              <button className="btn-brown text-button">
                Explore Focus Areas
                <ArrowRightIcon className="size-[14px]" color="white" />
              </button>
              <a
                href="#incubation"
                className="text-[10px] md:text-[14px] font-semibold underline hover:opacity-80"
                style={{ color: "var(--color-primary-dark)" }}
              >
                Apply to Join Incubation
              </a>
            </div>
          </div>

          {/* Partner Logos */}
          <PartnersAndVentures />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-7 md:py-[50px]">
        <div className="mw flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="flex-1 flex flex-col gap-3 md:gap-5">
            <h2 className="heading-large">Who We Are</h2>
            <p className="text-body-alt max-w-[475px]">
              We are a research-driven institute enabling blockchain innovation,
              backed by our VASP license. Elysium bridges research, compliance,
              and venture building, helping businesses and founders transform
              digital value systems.
            </p>
            <button className="btn-brown text-button mt-5 w-[140px]">
              Learn More
              <ArrowRightIcon className="size-[14px]" color="white" />
            </button>
          </div>

          <div className="flex-1">
            <Image
              src="/images/team-collage.png"
              alt="Team members celebrating together in office"
              width={700}
              height={515}
              className="relative z-10"
            />
            <Image
              src="/images/polygon-decoration.svg"
              alt=""
              width={554}
              height={664}
              className="max-lg:hidden absolute -right-0 -top-20 z-0"
            />
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section id="focus" className="py-7 md:py-[50px]">
        <div className="max-w-[1440px] mx-auto pl-[5.55%] flex flex-col lg:flex-row lg:items-center gap-8 md:gap-16">
          <div className="max-w-[535px] space-y-3 md:space-y-6">
            <h2 className="heading-section">Our Research & Innovation Focus</h2>
            <p className="text-body">
              We invest in research and ventures that redefine global innovation
              from blockchain and AI to sustainable technologies. Each focus
              area drives progress toward a smarter, more resilient future.
            </p>
            <div className="flex gap-2">
              <div className="w-[82px] h-[11px] rounded-[18px] bg-(--color-accent-blue-light)"></div>
              <div className="w-[51px] h-[11px] rounded-[18px] bg-(--color-accent-blue-lighter)"></div>
              <div className="w-[51px] h-[11px] rounded-[18px] bg-(--color-accent-blue-lighter)"></div>
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 overflow-x-auto hide-scrollbar">
            {[
              {
                icon: (
                  <span className="size-[64px] md:size-[83px] flex items-center justify-center">
                    <svg
                      className="size-[30px] md:size-[40px]"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8333 33.8477C15.8333 31.3252 14.2943 29.2257 12.0833 28.2106V21.4584C13.5521 22.2966 15.263 22.7734 17.0833 22.7734H24.5833C27.3412 22.7734 29.5833 24.9806 29.5833 27.6953V28.2106C27.3724 29.2257 25.8333 31.3252 25.8333 33.8477C25.8333 37.2453 28.6302 40 32.0833 40C35.5365 40 38.3333 37.2453 38.3333 33.8477C38.3333 31.3252 36.7943 29.2257 34.5833 28.2106V27.6953C34.5833 22.2582 30.1068 17.8516 24.5833 17.8516H17.0833C14.3255 17.8516 12.0833 15.6444 12.0833 12.9297V12.4144C14.2943 11.4685 15.8333 9.2998 15.8333 6.77734C15.8333 3.37817 13.0365 0.625 9.58334 0.625C6.13178 0.625 3.33334 3.37817 3.33334 6.77734C3.33334 9.2998 4.87631 11.4685 7.08334 12.4144V28.2106C4.87631 29.2257 3.33334 31.3252 3.33334 33.8477C3.33334 37.2453 6.13178 40 9.58334 40C13.0365 40 15.8333 37.2453 15.8333 33.8477ZM9.58334 32.002C10.6185 32.002 11.4583 32.8287 11.4583 33.8477C11.4583 34.8666 10.6185 35.6934 9.58334 35.6934C8.54819 35.6934 7.70834 34.8666 7.70834 33.8477C7.70834 32.8287 8.54819 32.002 9.58334 32.002ZM32.0833 35.6934C31.0443 35.6934 30.2083 34.8666 30.2083 33.8477C30.2083 32.8287 31.0443 32.002 32.0833 32.002C33.1224 32.002 33.9583 32.8287 33.9583 33.8477C33.9583 34.8666 33.1224 35.6934 32.0833 35.6934ZM9.58334 4.93164C10.6185 4.93164 11.4583 5.75452 11.4583 6.77734C11.4583 7.80017 10.6185 8.62305 9.58334 8.62305C8.54819 8.62305 7.70834 7.80017 7.70834 6.77734C7.70834 5.75452 8.54819 4.93164 9.58334 4.93164Z"
                        fill="#A77B5A"
                      />
                    </svg>
                  </span>
                ),
                title: "Blockchain & Web3",
                desc: "Tokenization, digital assets, wallets, and smart contracts driving trust and transparency.",
              },
              {
                icon: (
                  <svg
                    className="size-[64px] md:size-[83px]"
                    viewBox="0 0 83 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="83" height="83" rx="10" fill="white" />
                    <path
                      d="M54.8712 30.5989C54.6889 30.5989 54.5066 30.526 54.368 30.3874L52.6032 28.6227C52.3261 28.3455 52.3261 27.8934 52.6032 27.609C52.8803 27.3246 53.3325 27.3319 53.6169 27.609L55.3816 29.3738C55.6588 29.6509 55.6588 30.103 55.3816 30.3874C55.2358 30.5333 55.0535 30.5989 54.8712 30.5989Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M30.8863 54.5844C30.704 54.5844 30.5217 54.5115 30.3832 54.373L28.6257 52.6082C28.3486 52.3311 28.3486 51.879 28.6257 51.5946C28.9028 51.3174 29.3549 51.3174 29.6393 51.5946L31.3968 53.3593C31.6739 53.6364 31.6739 54.0886 31.3968 54.373C31.251 54.5188 31.0686 54.5844 30.8863 54.5844Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M45.2743 44.9894C45.092 44.9894 44.9097 44.9164 44.7711 44.7779L38.2225 38.2293C37.9454 37.9522 37.9454 37.5001 38.2225 37.2156C38.4996 36.9385 38.9518 36.9385 39.2362 37.2156L45.7848 43.7642C46.0619 44.0414 46.0619 44.4935 45.7848 44.7779C45.6389 44.9164 45.4566 44.9894 45.2743 44.9894Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M42.2843 46.7817C42.102 46.7817 41.9197 46.7088 41.7811 46.5702L36.4285 41.2176C36.1514 40.9405 36.1514 40.4883 36.4285 40.2039C36.7056 39.9268 37.1577 39.9268 37.4421 40.2039L42.7948 45.5566C43.0719 45.8337 43.0719 46.2858 42.7948 46.5702C42.6489 46.7088 42.4666 46.7817 42.2843 46.7817Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M47.0682 42.0004C46.8859 42.0004 46.7036 41.9275 46.5651 41.789L41.2124 36.4363C40.9353 36.1592 40.9353 35.7071 41.2124 35.4227C41.4895 35.1456 41.9417 35.1456 42.2261 35.4227L47.5787 40.7753C47.8558 41.0524 47.8558 41.5046 47.5787 41.789C47.4329 41.9275 47.2505 42.0004 47.0682 42.0004Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M32.1186 58.5001C31.8415 58.5001 31.5717 58.398 31.3602 58.1865C30.9445 57.7709 30.9445 57.0927 31.3602 56.6697C34.2699 53.76 33.7375 50.2597 33.176 46.5478C32.5853 42.6609 31.9217 38.2563 35.5898 34.5882C39.2652 30.9201 43.6625 31.5838 47.5494 32.1744C51.2612 32.736 54.7689 33.2683 57.6713 30.3586C58.0869 29.943 58.7651 29.943 59.1881 30.3586C59.6038 30.7743 59.6038 31.4525 59.1881 31.8755C55.5127 35.5508 51.1154 34.8799 47.2285 34.2892C43.5167 33.7277 40.009 33.1954 37.1066 36.1051C34.1969 39.0147 34.7293 42.5151 35.2908 46.2269C35.8815 50.1138 36.5451 54.5184 32.877 58.1865C32.6655 58.398 32.3884 58.5001 32.1186 58.5001Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M25.5703 51.9532C25.2932 51.9532 25.0234 51.8511 24.8119 51.6397C24.3962 51.224 24.3962 50.5458 24.8119 50.1228C28.4873 46.4474 32.8919 47.1183 36.7715 47.709C40.4833 48.2705 43.991 48.8029 46.8934 45.8932C49.803 42.9835 49.2707 39.4832 48.7092 35.7713C48.1185 31.8845 47.4549 27.4798 51.123 23.8118C51.5386 23.3961 52.2168 23.3961 52.6398 23.8118C53.0555 24.2274 53.0555 24.9056 52.6398 25.3286C49.7301 28.2383 50.2625 31.7386 50.824 35.4505C51.4147 39.3373 52.0783 43.742 48.4102 47.41C44.7348 51.0854 40.3375 50.4145 36.4506 49.8238C32.7388 49.2623 29.2311 48.73 26.3287 51.6397C26.1172 51.8511 25.8474 51.9532 25.5703 51.9532Z"
                      fill="#87CEEB"
                    />
                  </svg>
                ),
                title: "Cybersecurity & Compliance",
                desc: "Building frameworks for regulation, ISO standards, and digital trust infrastructure.",
              },
              {
                icon: (
                  <span className="size-[64px] md:size-[83px] flex items-center justify-center">
                    <svg
                      className="size-[30px] md:size-[40px]"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_185_357)">
                        <path
                          opacity="0.503384"
                          d="M7.30671 21.4444C10.2671 19.7261 12.7154 17.2854 15.6077 15.4701C18.3882 13.7249 20.902 11.7992 24.0472 10.7467C25.9236 10.1186 27.7109 9.46352 29.7195 9.35732C55.781 7.97985 5.6219 45.6216 4.33228 27.4876"
                          stroke="#A77B5A"
                          strokeWidth="0.843951"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.2521 2.04995C24.036 1.44279 25.1131 1.17411 25.8347 2.04995C26.446 2.79145 26.6449 4.10226 26.3104 5.00315C24.3646 10.2464 17.7227 3.05158 23.2521 1.01953"
                          stroke="#A77B5A"
                          strokeWidth="2.25054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.503384"
                          d="M20.8963 2.81474C10.3951 2.39342 12.8178 23.7642 14.3147 30.7834C16.0546 38.9419 22.6519 43.2172 25.4216 32.7814C25.9505 30.7882 26.5294 28.7997 26.9296 26.7878C27.3893 24.4785 27.7942 22.0998 28.0267 19.7611C28.3833 16.1783 28.5451 11.7779 26.9296 8.53249"
                          stroke="#A77B5A"
                          strokeWidth="0.843951"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.38304 27.3017C2.63163 26.6382 2.4094 25.4872 2.61315 24.5273C3.53464 20.179 11.5188 24.3864 5.13311 27.8304C4.14805 28.361 3.67644 27.8124 3.24287 27.1694"
                          stroke="#A77B5A"
                          strokeWidth="2.25054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29.3214 29.0341C30.2515 27.8966 32.7804 27.5674 33.6922 28.9643C37.1746 34.3002 23.9562 37.063 29.4581 29.0341"
                          stroke="#A77B5A"
                          strokeWidth="2.25054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.503384"
                          d="M27.239 31.9507C23.8033 30.5244 20.2454 29.1247 16.9077 27.3029C14.9362 26.2272 13.2039 24.8188 11.4295 23.488C8.07828 20.9737 -0.452994 9.55859 8.37858 8.29674C16.2328 7.17414 27.0071 14.6447 31.9546 20.0893C33.862 22.1883 40.3201 28.7047 36.1842 31.1872"
                          stroke="#A77B5A"
                          strokeWidth="0.843951"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.0313 17.9016C19.8254 17.0737 21.6996 16.1206 22.7387 16.9976C27.2295 20.7879 16.7835 27.2045 17.9324 19.64"
                          stroke="#A77B5A"
                          strokeWidth="2.25054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_185_357">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                ),
                title: "AI & Data Intelligence",
                desc: "Research-backed intelligence powering automation, analytics, and smarter economies.",
              },
              // {
              //   icon: (
              //     <span className="size-[83px] flex items-center justify-center"></span>
              //   ),
              //   title: "Digital Economy Infrastructure",
              //   desc: "Developing systems for payments, trade, and cross-border digital enablement.",
              // },
              // {
              //   icon: (
              //     <span className="size-[83px] flex items-center justify-center"></span>
              //   ),
              //   title: "Sustainability & Climate Tech",
              //   desc: "Investing in technologies that ensure long-term, responsible digital innovation.",
              // },
            ].map((card, i) => (
              <div
                key={i}
                className={`card-focus ${
                  i % 2 ? "bg-[var(--color-primary-accent)]" : "bg-[#fff]"
                } w-[243px] md:w-[317px] h-[263px] md:h-[343px] shrink-0 flex flex-col items-start gap-2 md:gap-6`}
              >
                <div>{card.icon}</div>
                <div className="flex flex-col gap-1.5 md:gap-2.5">
                  <h3
                    className={`text-lg md:text-2xl font-bold tracking-[0.25px] ${
                      i % 2 ? "text-[#fff]" : "text-[#000]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs/4 md:text-base/[22px] tracking-[0.1px] ${
                      i % 2 ? "text-[#F6F0F0]" : "text-[#474646]"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="program" className="py-7 md:py-[50px]">
        <div className="mw">
          <h2 className="heading-section text-center mb-4">Our Approach</h2>
          <p
            className="text-body text-center mb-10 md:mb-16"
            style={{ color: "var(--color-black)" }}
          >
            Elysium operates at the intersection of research, regulation, and
            venture building.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {/* Step 1 */}
            <div className="card-approach bg-white">
              <div className="h-[190px] md:h-[280px] w-full flex items-center justify-center">
                <div
                  className="relative w-full size-[155px] md:size-[200px] rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: "url(/images/approach-step1-bg.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              <p
                className="text-[13px] md:text-base font-medium mb-2"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Step 1
              </p>
              <h3 className="heading-step mb-3">Research & Insights</h3>
              <p className="text-description">
                We begin with deep, data-driven research — uncovering
                opportunities across blockchain, digital finance, and compliance
                to guide in
              </p>
            </div>

            {/* Step 2 */}
            <div className="card-approach bg-white">
              <div className="h-[190px] md:h-[280px] w-full flex items-center justify-center">
                <div
                  className="relative w-full size-[155px] md:size-[200px] rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: "url(/images/approach-step2-bg.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <p
                className="text-[13px] md:text-base font-medium mb-2"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Step 2
              </p>
              <h3 className="heading-step mb-3">VASP-Backed Infrastructure</h3>
              <p className="text-description">
                Our infrastructure framework ensures compliance and trust —
                enabling ventures to grow securely under regulatory standards.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card-approach bg-white">
              <div className="h-[190px] md:h-[280px] w-full flex items-center justify-center">
                <div
                  className="relative w-full size-[155px] md:size-[200px] mb-6 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: "url(/images/approach-step3-bg.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <p
                className="text-[13px] md:text-base font-medium mb-2"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Step 3
              </p>
              <h3 className="heading-step mb-3">R&D + Venture Investment</h3>
              <p className="text-description">
                We turn research into real-world impact by funding and building
                ventures that redefine the future of digital economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="relative py-7 md:py-[50px]">
        <Image
          src="/images/cubes-decoration.svg"
          alt=""
          width={250}
          height={207}
          className="absolute left-0 lg:left-8 top-0 md:top-24 opacity-50 max-lg:size-16 w-[250px] h-[207px]"
        />

        <div className="mw relative z-10">
          <h2 className="text-[28px] md:text-[48px]/[58px] md:tracking-[0.32px] font-medium text-center mb-4">
            Ventures We Support
          </h2>
          <p
            className="text-body text-center max-w-[764px] mx-auto mb-6 md:mb-16"
            style={{ color: "var(--color-black)" }}
          >
            From digital wallets to compliance-driven blockchain systems,
            Elysium powers bold projects through research, licensing, and
            execution.
          </p>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Digital Wallets */}
            <div className="card-venture bg-white">
              <Image
                src="/images/venture-digital-wallets.jpg"
                alt="Mobile phone displaying QR code for digital wallet payments"
                width={405}
                height={200}
                className="w-full h-[155px] md:h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="heading-venture mb-1">
                  Digital Wallets & Payments
                </h3>
                <p
                  className="text-sm md:text-lg font-medium mb-1 md:mb-2"
                  style={{ color: "var(--color-black)" }}
                >
                  Enabling Borderless Transactions
                </p>
                <p className="text-description">
                  We support ventures that make digital payments faster, safer,
                  and globally accessible bridging users to the blockchain
                  economy with compliance and ease.
                </p>
              </div>
            </div>

            {/* Trust & Compliance */}
            <div className="card-venture bg-white">
              <Image
                src="/images/venture-trust-compliance.jpg"
                alt="Hands interacting with holographic security icons"
                width={405}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="heading-venture mb-1">Trust & Compliance</h3>
                <p
                  className="text-[18px] font-medium mb-2"
                  style={{ color: "var(--color-black)" }}
                >
                  Security. Regulation. Confidence.
                </p>
                <p className="text-description">
                  We support platforms that strengthen the backbone of
                  blockchain adoption through compliance infrastructure and
                  cybersecurity innovation.
                </p>
              </div>
            </div>

            {/* Data Intelligence */}
            <div className="card-venture bg-white">
              <Image
                src="/images/venture-data-intelligence.jpg"
                alt="Digital brain with blue neural network"
                width={405}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="heading-venture mb-1">Data Intelligence</h3>
                <p
                  className="text-[18px] font-medium mb-2"
                  style={{ color: "var(--color-black)" }}
                >
                  Smarter Economies Through Insight
                </p>
                <p className="text-description">
                  Our research partnerships merge blockchain and AI to deliver
                  intelligent systems and data-driven solutions for future
                  economies.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sustainable Tech */}
            <div className="card-venture bg-white">
              <Image
                src="/images/venture-sustainable-tech.jpg"
                alt="Hand holding glowing green digital globe"
                width={405}
                height={200}
                className="w-full h-[155px] md:h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="heading-venture mb-1">Sustainable Tech</h3>
                <p
                  className="text-sm/text-lg font-medium mb-1 md:mb-2"
                  style={{ color: "var(--color-black)" }}
                >
                  Building the Green Digital Future
                </p>
                <p className="text-description">
                  We empower R&D projects aligning innovation with
                  sustainability — promoting green blockchain systems and
                  energy-efficient technologies.
                </p>
              </div>
            </div>

            {/* Digital Identity */}
            <div className="card-venture bg-white">
              <Image
                src="/images/venture-digital-identity.jpg"
                alt="Face with digital recognition overlay"
                width={405}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="heading-venture mb-1">Digital Identity</h3>
                <p
                  className="text-[18px] font-medium mb-2"
                  style={{ color: "var(--color-black)" }}
                >
                  Secure Identity for a Connected World
                </p>
                <p className="text-description">
                  We drive ventures that establish trust through
                  blockchain-secured identity, enabling safe and seamless access
                  across digital networks.
                </p>
              </div>
            </div>

            {/* Trade & Infrastructure */}
            <div className="card-venture bg-white">
              <Image
                src="/images/venture-trade-infrastructure.jpg"
                alt="Digital globe with network connections"
                width={405}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="heading-venture mb-1">Trade & Infrastructure</h3>
                <p
                  className="text-[18px] font-medium mb-2"
                  style={{ color: "var(--color-black)" }}
                >
                  Connecting Global Digital Economies
                </p>
                <p className="text-description">
                  We support ventures that enhance blockchain-based trade,
                  logistics, and cross-border infrastructure for global
                  commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-7 md:py-[50px]">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[87px] h-[405px] blur-[40px] opacity-30"
          style={{ backgroundColor: "var(--color-primary-accent)" }}
        ></div>
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[87px] h-[405px] blur-[40px] opacity-30"
          style={{ backgroundColor: "var(--color-primary-accent)" }}
        ></div>

        <div className="mw relative z-10 flex items-center max-lg:flex-col-reverse gap-12 md:gap-16">
          <div className="flex-1">
            <Image
              src="/images/partner-logos-left.svg"
              alt="Partner logos"
              width={605}
              height={48}
              className="mb-8"
            />
            <Image
              src="/images/partner-logos-right.svg"
              alt="Partner logos"
              width={606}
              height={48}
            />
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div>
              <p
                className="text-[18px] font-medium mb-3"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Why Partner With Us
              </p>
              <h2 className="heading-large mb-3 md:mb-6">Together We Build</h2>
              <p className="text-sm/[18px] md:text-lg/[28px]">
                Elysium Research partners with institutions, innovators, and
                investors who believe in building the future of digital
                economies. Through our licensed infrastructure and deep research
                expertise, we help partners launch secure, compliant, and
                scalable blockchain ventures. Together, we create lasting impact
                turning research into real-world transformation.
              </p>
            </div>
            <button className="btn-brown text-button w-[140px]">
              Become a Partner
              <ArrowRightIcon className="size-[14px]" color="white" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-7 md:py-[50px]">
        <div className="mw">
          <p className="text-[var(--color-primary-accent)] text-[10px] tracking-[0.66px] md:text-[14.93px] md:tracking-[1.07px] text-center mb-1.5 md:mb-4">
            OUR LATEST NEWS & BLOG
          </p>
          <h2 className="text-[28px] md:text-[48px]/[58px] md:tracking-[0.32px] text-center mb-8 md:mb-16 max-w-[507px] mx-auto">
            Stay updated with our latest posts
          </h2>

          <div className="lg:grid lg:grid-cols-3 flex overflow-x-auto hide-scrollbar w-full gap-5 md:gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="group max-lg:w-[300px] shrink-0 cursor-pointer"
              >
                <Image
                  src={`/images/blog-post-${i + 1}.jpg`}
                  alt="Team members high-fiving in office"
                  width={405}
                  height={228}
                  className="w-full h-[169px] md:h-[228px] object-cover mb-6 group-hover:opacity-90"
                />
                <p className="text-label mb-3">
                  BRANDING / DESIGN / 24.OCT.2022
                </p>
                <h3 className="text-blog-title mb-4">
                  Four Ways a Clean Workplace Makes Employees Happy and Healthy
                </h3>
                <div
                  className="flex items-center gap-3 hover:opacity-80"
                  style={{ color: "var(--color-muted-text)" }}
                >
                  <span className="h-6 w-10 flex items-center relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="absolute right-0"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11.7333"
                        cy="11.9326"
                        r="11.2"
                        stroke="#DEDEDE"
                        strokeWidth="1.06667"
                      />
                    </svg>

                    <svg
                      width="32"
                      height="8"
                      viewBox="0 0 32 8"
                      className="relative"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.3105 4.31072C31.5187 4.10244 31.5187 3.76475 31.3105 3.55647L27.9163 0.162357C27.7081 -0.0459223 27.3704 -0.0459223 27.1621 0.162357C26.9538 0.370637 26.9538 0.708325 27.1621 0.916605L30.1791 3.93359L27.1621 6.95058C26.9538 7.15886 26.9538 7.49655 27.1621 7.70483C27.3704 7.91311 27.7081 7.91311 27.9163 7.70483L31.3105 4.31072ZM0 3.93359V4.46693H30.9333V3.93359V3.40026H0V3.93359Z"
                        fill="#595959"
                      />
                    </svg>
                  </span>

                  {/* <ArrowRightIcon width={40} height={23} color="currentColor" /> */}
                  <span className="text-[14.93px] font-normal tracking-[1.07px]">
                    VIEW MORE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </main>
  );
}
