import ArrowRightSmallIcon from "@/components/icons/ArrowRightSmallIcon";
import Cta from "@/components/layout/cta";
import Link from "next/link";

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
            <h1 className="font-['Poppins',sans-serif] text-[42px]/[45px] sm:text-[60px]/[72px] md:text-[120px]/[144px] font-normal text-[#151d26]">
              Focus Area
            </h1>
            <p className="text-[10px]/[14px] md:text-base font-normal text-[#333333] max-w-[1014px]">
              Building the Foundation of the Digital Economy
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1"></div>

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-xs/5 md:text-lg/6 lg:text-xl/[32px] font-normal text-[#333333]">
                Elysium Research explores the technologies shaping tomorrow from
                blockchain and AI to cybersecurity and sustainable digital
                infrastructure. Through research, regulation, and venture
                collaboration, we&apos;re creating the systems that power a
                trusted and inclusive digital future.
              </p>
              <button className="btn-brown text-button w-fit">
                application with us
                <ArrowRightSmallIcon className="w-3 h-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mw flex flex-col items-center justify-center gap-6 md:gap-10">
          <h4 className="heading-section text-center">
            Driving Research, Compliance, and Innovation Across the Digital
            Economy
          </h4>

          <div className="flex flex-col gap-6 md:gap-12 w-full">
            <div className="p-8 md:p-16 max-w-[939px] border-b-[5px] border-b-[#A77B5A] border border-[#D9C6B8] bg-white rounded-[20px] space-y-4">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-[18px]">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="65"
                      height="65"
                      rx="8"
                      fill="#A77B5A"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M28.8333 46.8477C28.8333 44.3252 27.2942 42.2257 25.0833 41.2106V34.4584C26.552 35.2966 28.2629 35.7734 30.0833 35.7734H37.5833C40.3411 35.7734 42.5833 37.9806 42.5833 40.6953V41.2106C40.3723 42.2257 38.8333 44.3252 38.8333 46.8477C38.8333 50.2453 41.6301 53 45.0833 53C48.5364 53 51.3333 50.2453 51.3333 46.8477C51.3333 44.3252 49.7942 42.2257 47.5833 41.2106V40.6953C47.5833 35.2582 43.1067 30.8516 37.5833 30.8516H30.0833C27.3254 30.8516 25.0833 28.6444 25.0833 25.9297V25.4144C27.2942 24.4685 28.8333 22.2998 28.8333 19.7773C28.8333 16.3782 26.0364 13.625 22.5833 13.625C19.1317 13.625 16.3333 16.3782 16.3333 19.7773C16.3333 22.2998 17.8762 24.4685 20.0833 25.4144V41.2106C17.8762 42.2257 16.3333 44.3252 16.3333 46.8477C16.3333 50.2453 19.1317 53 22.5833 53C26.0364 53 28.8333 50.2453 28.8333 46.8477ZM22.5833 45.002C23.6184 45.002 24.4583 45.8287 24.4583 46.8477C24.4583 47.8666 23.6184 48.6934 22.5833 48.6934C21.5481 48.6934 20.7083 47.8666 20.7083 46.8477C20.7083 45.8287 21.5481 45.002 22.5833 45.002ZM45.0833 48.6934C44.0442 48.6934 43.2083 47.8666 43.2083 46.8477C43.2083 45.8287 44.0442 45.002 45.0833 45.002C46.1223 45.002 46.9583 45.8287 46.9583 46.8477C46.9583 47.8666 46.1223 48.6934 45.0833 48.6934ZM22.5833 17.9316C23.6184 17.9316 24.4583 18.7545 24.4583 19.7773C24.4583 20.8002 23.6184 21.623 22.5833 21.623C21.5481 21.623 20.7083 20.8002 20.7083 19.7773C20.7083 18.7545 21.5481 17.9316 22.5833 17.9316Z"
                      fill="#87CEEB"
                    />
                  </svg>

                  <p className="text-2xl md:text-[32px]/[42px] tracking-[-2%] font-medium text-[#0D1B2A]">
                    Blockchain & Web3
                  </p>
                </div>
                <p className="text-xs/[18px] md:text-lg/[28px] text-[#333] tracking-[-2%]">
                  We research and support decentralized systems that redefine
                  digital ownership and value exchange. Our work focuses on
                  tokenization, smart contract design, and blockchain
                  infrastructure that empower transparent, inclusive, and
                  borderless economies.
                </p>
              </div>
              <Link
                href="/application"
                className="text-sm md:text-[22px] font-semibold text-[#A77B5A] flex items-center gap-2"
              >
                Explore Collaboration
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 8.625H1.125M19.125 8.625L11.625 16.125M19.125 8.625L11.625 1.125"
                    stroke="#A77B5A"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 md:p-16 self-end max-w-[939px] border-b-[5px] border-b-[#A77B5A] border border-[#D9C6B8] bg-white rounded-[20px] space-y-4">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-[18px]">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="65"
                      height="65"
                      rx="8"
                      fill="#A77B5A"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M45.8713 22.5989C45.689 22.5989 45.5067 22.526 45.3681 22.3874L43.6033 20.6227C43.3262 20.3455 43.3262 19.8934 43.6033 19.609C43.8805 19.3246 44.3326 19.3319 44.617 19.609L46.3818 21.3738C46.6589 21.6509 46.6589 22.103 46.3818 22.3874C46.2359 22.5333 46.0536 22.5989 45.8713 22.5989Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M21.8862 46.5844C21.7039 46.5844 21.5216 46.5115 21.383 46.373L19.6256 44.6082C19.3484 44.3311 19.3484 43.879 19.6256 43.5946C19.9027 43.3174 20.3548 43.3174 20.6392 43.5946L22.3967 45.3593C22.6738 45.6364 22.6738 46.0886 22.3967 46.373C22.2508 46.5188 22.0685 46.5844 21.8862 46.5844Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M36.2745 36.9894C36.0922 36.9894 35.9099 36.9164 35.7713 36.7779L29.2227 30.2293C28.9456 29.9522 28.9456 29.5001 29.2227 29.2156C29.4998 28.9385 29.952 28.9385 30.2364 29.2156L36.785 35.7642C37.0621 36.0414 37.0621 36.4935 36.785 36.7779C36.6391 36.9164 36.4568 36.9894 36.2745 36.9894Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M33.2844 38.7817C33.102 38.7817 32.9197 38.7088 32.7812 38.5702L27.4285 33.2176C27.1514 32.9405 27.1514 32.4883 27.4285 32.2039C27.7056 31.9268 28.1578 31.9268 28.4422 32.2039L33.7948 37.5566C34.0719 37.8337 34.0719 38.2858 33.7948 38.5702C33.649 38.7088 33.4667 38.7817 33.2844 38.7817Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M38.0683 34.0004C37.886 34.0004 37.7037 33.9275 37.5651 33.789L32.2125 28.4363C31.9354 28.1592 31.9354 27.7071 32.2125 27.4227C32.4896 27.1456 32.9417 27.1456 33.2261 27.4227L38.5788 32.7753C38.8559 33.0524 38.8559 33.5046 38.5788 33.789C38.4329 33.9275 38.2506 34.0004 38.0683 34.0004Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M23.1187 50.5001C22.8416 50.5001 22.5718 50.398 22.3603 50.1865C21.9447 49.7709 21.9447 49.0927 22.3603 48.6697C25.27 45.76 24.7377 42.2597 24.1761 38.5478C23.5855 34.6609 22.9219 30.2563 26.5899 26.5882C30.2653 22.9201 34.6627 23.5838 38.5495 24.1744C42.2614 24.736 45.769 25.2683 48.6714 22.3586C49.0871 21.943 49.7653 21.943 50.1882 22.3586C50.6039 22.7743 50.6039 23.4525 50.1882 23.8755C46.5129 27.5508 42.1155 26.8799 38.2287 26.2892C34.5168 25.7277 31.0092 25.1954 28.1068 28.1051C25.1971 31.0147 25.7294 34.5151 26.291 38.2269C26.8816 42.1138 27.5453 46.5184 23.8772 50.1865C23.6657 50.398 23.3886 50.5001 23.1187 50.5001Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M16.5704 43.9532C16.2933 43.9532 16.0235 43.8511 15.812 43.6397C15.3963 43.224 15.3963 42.5458 15.812 42.1228C19.4874 38.4474 23.892 39.1183 27.7716 39.709C31.4834 40.2705 34.9911 40.8029 37.8935 37.8932C40.8031 34.9835 40.2708 31.4832 39.7093 27.7713C39.1186 23.8845 38.455 19.4798 42.1231 15.8118C42.5387 15.3961 43.2169 15.3961 43.6399 15.8118C44.0556 16.2274 44.0556 16.9056 43.6399 17.3286C40.7302 20.2383 41.2626 23.7386 41.8241 27.4505C42.4148 31.3373 43.0784 35.742 39.4103 39.41C35.7349 43.0854 31.3376 42.4145 27.4507 41.8238C23.7389 41.2623 20.2312 40.73 17.3288 43.6397C17.1173 43.8511 16.8475 43.9532 16.5704 43.9532Z"
                      fill="#87CEEB"
                    />
                  </svg>

                  <p className="text-2xl md:text-[32px]/[42px] tracking-[-2%] font-medium text-[#0D1B2A]">
                    Cybersecurity & Compliance
                  </p>
                </div>
                <p className="text-xs/[18px] md:text-lg/[28px] text-[#333] tracking-[-2%]">
                  We advance innovation that’s built on trust. Through our
                  VASP-backed framework and regulatory expertise, we help
                  organizations navigate complex compliance environments —
                  developing secure, ethical, and regulation-ready digital
                  systems.
                </p>
              </div>
              <Link
                href="/application"
                className="text-sm md:text-[22px] font-semibold text-[#A77B5A] flex items-center gap-2"
              >
                Explore Collaboration
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 8.625H1.125M19.125 8.625L11.625 16.125M19.125 8.625L11.625 1.125"
                    stroke="#A77B5A"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 md:p-16 max-w-[939px] border-b-[5px] border-b-[#A77B5A] border border-[#D9C6B8] bg-white rounded-[20px] space-y-4">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-[18px]">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="65"
                      height="65"
                      rx="8"
                      fill="#A77B5A"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M45.8713 22.5989C45.689 22.5989 45.5067 22.526 45.3681 22.3874L43.6033 20.6227C43.3262 20.3455 43.3262 19.8934 43.6033 19.609C43.8805 19.3246 44.3326 19.3319 44.617 19.609L46.3818 21.3738C46.6589 21.6509 46.6589 22.103 46.3818 22.3874C46.2359 22.5333 46.0536 22.5989 45.8713 22.5989Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M21.8862 46.5844C21.7039 46.5844 21.5216 46.5115 21.383 46.373L19.6256 44.6082C19.3484 44.3311 19.3484 43.879 19.6256 43.5946C19.9027 43.3174 20.3548 43.3174 20.6392 43.5946L22.3967 45.3593C22.6738 45.6364 22.6738 46.0886 22.3967 46.373C22.2508 46.5188 22.0685 46.5844 21.8862 46.5844Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M36.2745 36.9894C36.0922 36.9894 35.9099 36.9164 35.7713 36.7779L29.2227 30.2293C28.9456 29.9522 28.9456 29.5001 29.2227 29.2156C29.4998 28.9385 29.952 28.9385 30.2364 29.2156L36.785 35.7642C37.0621 36.0414 37.0621 36.4935 36.785 36.7779C36.6391 36.9164 36.4568 36.9894 36.2745 36.9894Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M33.2844 38.7817C33.102 38.7817 32.9197 38.7088 32.7812 38.5702L27.4285 33.2176C27.1514 32.9405 27.1514 32.4883 27.4285 32.2039C27.7056 31.9268 28.1578 31.9268 28.4422 32.2039L33.7948 37.5566C34.0719 37.8337 34.0719 38.2858 33.7948 38.5702C33.649 38.7088 33.4667 38.7817 33.2844 38.7817Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M38.0683 34.0004C37.886 34.0004 37.7037 33.9275 37.5651 33.789L32.2125 28.4363C31.9354 28.1592 31.9354 27.7071 32.2125 27.4227C32.4896 27.1456 32.9417 27.1456 33.2261 27.4227L38.5788 32.7753C38.8559 33.0524 38.8559 33.5046 38.5788 33.789C38.4329 33.9275 38.2506 34.0004 38.0683 34.0004Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M23.1187 50.5001C22.8416 50.5001 22.5718 50.398 22.3603 50.1865C21.9447 49.7709 21.9447 49.0927 22.3603 48.6697C25.27 45.76 24.7377 42.2597 24.1761 38.5478C23.5855 34.6609 22.9219 30.2563 26.5899 26.5882C30.2653 22.9201 34.6627 23.5838 38.5495 24.1744C42.2614 24.736 45.769 25.2683 48.6714 22.3586C49.0871 21.943 49.7653 21.943 50.1882 22.3586C50.6039 22.7743 50.6039 23.4525 50.1882 23.8755C46.5129 27.5508 42.1155 26.8799 38.2287 26.2892C34.5168 25.7277 31.0092 25.1954 28.1068 28.1051C25.1971 31.0147 25.7294 34.5151 26.291 38.2269C26.8816 42.1138 27.5453 46.5184 23.8772 50.1865C23.6657 50.398 23.3886 50.5001 23.1187 50.5001Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M16.5704 43.9532C16.2933 43.9532 16.0235 43.8511 15.812 43.6397C15.3963 43.224 15.3963 42.5458 15.812 42.1228C19.4874 38.4474 23.892 39.1183 27.7716 39.709C31.4834 40.2705 34.9911 40.8029 37.8935 37.8932C40.8031 34.9835 40.2708 31.4832 39.7093 27.7713C39.1186 23.8845 38.455 19.4798 42.1231 15.8118C42.5387 15.3961 43.2169 15.3961 43.6399 15.8118C44.0556 16.2274 44.0556 16.9056 43.6399 17.3286C40.7302 20.2383 41.2626 23.7386 41.8241 27.4505C42.4148 31.3373 43.0784 35.742 39.4103 39.41C35.7349 43.0854 31.3376 42.4145 27.4507 41.8238C23.7389 41.2623 20.2312 40.73 17.3288 43.6397C17.1173 43.8511 16.8475 43.9532 16.5704 43.9532Z"
                      fill="#87CEEB"
                    />
                  </svg>

                  <p className="text-2xl md:text-[32px]/[42px] tracking-[-2%] font-medium text-[#0D1B2A]">
                    AI & Data Intelligence
                  </p>
                </div>
                <p className="text-xs/[18px] md:text-lg/[28px] text-[#333] tracking-[-2%]">
                  We leverage artificial intelligence and data-driven research
                  to transform digital ecosystems. From predictive analytics to
                  ethical AI deployment, our focus is on enabling smarter,
                  transparent, and inclusive decision-making across emerging
                  markets.
                </p>
              </div>
              <Link
                href="/application"
                className="text-sm md:text-[22px] font-semibold text-[#A77B5A] flex items-center gap-2"
              >
                Explore Collaboration
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 8.625H1.125M19.125 8.625L11.625 16.125M19.125 8.625L11.625 1.125"
                    stroke="#A77B5A"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 md:p-16 self-end max-w-[939px] border-b-[5px] border-b-[#A77B5A] border border-[#D9C6B8] bg-white rounded-[20px] space-y-4">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-[18px]">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="65"
                      height="65"
                      rx="8"
                      fill="#A77B5A"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M45.8713 22.5989C45.689 22.5989 45.5067 22.526 45.3681 22.3874L43.6033 20.6227C43.3262 20.3455 43.3262 19.8934 43.6033 19.609C43.8805 19.3246 44.3326 19.3319 44.617 19.609L46.3818 21.3738C46.6589 21.6509 46.6589 22.103 46.3818 22.3874C46.2359 22.5333 46.0536 22.5989 45.8713 22.5989Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M21.8862 46.5844C21.7039 46.5844 21.5216 46.5115 21.383 46.373L19.6256 44.6082C19.3484 44.3311 19.3484 43.879 19.6256 43.5946C19.9027 43.3174 20.3548 43.3174 20.6392 43.5946L22.3967 45.3593C22.6738 45.6364 22.6738 46.0886 22.3967 46.373C22.2508 46.5188 22.0685 46.5844 21.8862 46.5844Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M36.2745 36.9894C36.0922 36.9894 35.9099 36.9164 35.7713 36.7779L29.2227 30.2293C28.9456 29.9522 28.9456 29.5001 29.2227 29.2156C29.4998 28.9385 29.952 28.9385 30.2364 29.2156L36.785 35.7642C37.0621 36.0414 37.0621 36.4935 36.785 36.7779C36.6391 36.9164 36.4568 36.9894 36.2745 36.9894Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M33.2844 38.7817C33.102 38.7817 32.9197 38.7088 32.7812 38.5702L27.4285 33.2176C27.1514 32.9405 27.1514 32.4883 27.4285 32.2039C27.7056 31.9268 28.1578 31.9268 28.4422 32.2039L33.7948 37.5566C34.0719 37.8337 34.0719 38.2858 33.7948 38.5702C33.649 38.7088 33.4667 38.7817 33.2844 38.7817Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M38.0683 34.0004C37.886 34.0004 37.7037 33.9275 37.5651 33.789L32.2125 28.4363C31.9354 28.1592 31.9354 27.7071 32.2125 27.4227C32.4896 27.1456 32.9417 27.1456 33.2261 27.4227L38.5788 32.7753C38.8559 33.0524 38.8559 33.5046 38.5788 33.789C38.4329 33.9275 38.2506 34.0004 38.0683 34.0004Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M23.1187 50.5001C22.8416 50.5001 22.5718 50.398 22.3603 50.1865C21.9447 49.7709 21.9447 49.0927 22.3603 48.6697C25.27 45.76 24.7377 42.2597 24.1761 38.5478C23.5855 34.6609 22.9219 30.2563 26.5899 26.5882C30.2653 22.9201 34.6627 23.5838 38.5495 24.1744C42.2614 24.736 45.769 25.2683 48.6714 22.3586C49.0871 21.943 49.7653 21.943 50.1882 22.3586C50.6039 22.7743 50.6039 23.4525 50.1882 23.8755C46.5129 27.5508 42.1155 26.8799 38.2287 26.2892C34.5168 25.7277 31.0092 25.1954 28.1068 28.1051C25.1971 31.0147 25.7294 34.5151 26.291 38.2269C26.8816 42.1138 27.5453 46.5184 23.8772 50.1865C23.6657 50.398 23.3886 50.5001 23.1187 50.5001Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M16.5704 43.9532C16.2933 43.9532 16.0235 43.8511 15.812 43.6397C15.3963 43.224 15.3963 42.5458 15.812 42.1228C19.4874 38.4474 23.892 39.1183 27.7716 39.709C31.4834 40.2705 34.9911 40.8029 37.8935 37.8932C40.8031 34.9835 40.2708 31.4832 39.7093 27.7713C39.1186 23.8845 38.455 19.4798 42.1231 15.8118C42.5387 15.3961 43.2169 15.3961 43.6399 15.8118C44.0556 16.2274 44.0556 16.9056 43.6399 17.3286C40.7302 20.2383 41.2626 23.7386 41.8241 27.4505C42.4148 31.3373 43.0784 35.742 39.4103 39.41C35.7349 43.0854 31.3376 42.4145 27.4507 41.8238C23.7389 41.2623 20.2312 40.73 17.3288 43.6397C17.1173 43.8511 16.8475 43.9532 16.5704 43.9532Z"
                      fill="#87CEEB"
                    />
                  </svg>

                  <p className="text-2xl md:text-[32px]/[42px] tracking-[-2%] font-medium text-[#0D1B2A]">
                    Digital Economy Infrastructure
                  </p>
                </div>
                <p className="text-xs/[18px] md:text-lg/[28px] text-[#333] tracking-[-2%]">
                  Our research and venture work strengthen the backbone of the
                  digital economy. We develop systems that power cross-border
                  payments, digital trade, and blockchain-based financial
                  networks — enabling global interoperability and growth.
                </p>
              </div>
              <Link
                href="/application"
                className="text-sm md:text-[22px] font-semibold text-[#A77B5A] flex items-center gap-2"
              >
                Explore Collaboration
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 8.625H1.125M19.125 8.625L11.625 16.125M19.125 8.625L11.625 1.125"
                    stroke="#A77B5A"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 md:p-16 max-w-[939px] border-b-[5px] border-b-[#A77B5A] border border-[#D9C6B8] bg-white rounded-[20px] space-y-4">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-[18px]">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="65"
                      height="65"
                      rx="8"
                      fill="#A77B5A"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M45.8713 22.5989C45.689 22.5989 45.5067 22.526 45.3681 22.3874L43.6033 20.6227C43.3262 20.3455 43.3262 19.8934 43.6033 19.609C43.8805 19.3246 44.3326 19.3319 44.617 19.609L46.3818 21.3738C46.6589 21.6509 46.6589 22.103 46.3818 22.3874C46.2359 22.5333 46.0536 22.5989 45.8713 22.5989Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M21.8862 46.5844C21.7039 46.5844 21.5216 46.5115 21.383 46.373L19.6256 44.6082C19.3484 44.3311 19.3484 43.879 19.6256 43.5946C19.9027 43.3174 20.3548 43.3174 20.6392 43.5946L22.3967 45.3593C22.6738 45.6364 22.6738 46.0886 22.3967 46.373C22.2508 46.5188 22.0685 46.5844 21.8862 46.5844Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M36.2745 36.9894C36.0922 36.9894 35.9099 36.9164 35.7713 36.7779L29.2227 30.2293C28.9456 29.9522 28.9456 29.5001 29.2227 29.2156C29.4998 28.9385 29.952 28.9385 30.2364 29.2156L36.785 35.7642C37.0621 36.0414 37.0621 36.4935 36.785 36.7779C36.6391 36.9164 36.4568 36.9894 36.2745 36.9894Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M33.2844 38.7817C33.102 38.7817 32.9197 38.7088 32.7812 38.5702L27.4285 33.2176C27.1514 32.9405 27.1514 32.4883 27.4285 32.2039C27.7056 31.9268 28.1578 31.9268 28.4422 32.2039L33.7948 37.5566C34.0719 37.8337 34.0719 38.2858 33.7948 38.5702C33.649 38.7088 33.4667 38.7817 33.2844 38.7817Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M38.0683 34.0004C37.886 34.0004 37.7037 33.9275 37.5651 33.789L32.2125 28.4363C31.9354 28.1592 31.9354 27.7071 32.2125 27.4227C32.4896 27.1456 32.9417 27.1456 33.2261 27.4227L38.5788 32.7753C38.8559 33.0524 38.8559 33.5046 38.5788 33.789C38.4329 33.9275 38.2506 34.0004 38.0683 34.0004Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M23.1187 50.5001C22.8416 50.5001 22.5718 50.398 22.3603 50.1865C21.9447 49.7709 21.9447 49.0927 22.3603 48.6697C25.27 45.76 24.7377 42.2597 24.1761 38.5478C23.5855 34.6609 22.9219 30.2563 26.5899 26.5882C30.2653 22.9201 34.6627 23.5838 38.5495 24.1744C42.2614 24.736 45.769 25.2683 48.6714 22.3586C49.0871 21.943 49.7653 21.943 50.1882 22.3586C50.6039 22.7743 50.6039 23.4525 50.1882 23.8755C46.5129 27.5508 42.1155 26.8799 38.2287 26.2892C34.5168 25.7277 31.0092 25.1954 28.1068 28.1051C25.1971 31.0147 25.7294 34.5151 26.291 38.2269C26.8816 42.1138 27.5453 46.5184 23.8772 50.1865C23.6657 50.398 23.3886 50.5001 23.1187 50.5001Z"
                      fill="#87CEEB"
                    />
                    <path
                      d="M16.5704 43.9532C16.2933 43.9532 16.0235 43.8511 15.812 43.6397C15.3963 43.224 15.3963 42.5458 15.812 42.1228C19.4874 38.4474 23.892 39.1183 27.7716 39.709C31.4834 40.2705 34.9911 40.8029 37.8935 37.8932C40.8031 34.9835 40.2708 31.4832 39.7093 27.7713C39.1186 23.8845 38.455 19.4798 42.1231 15.8118C42.5387 15.3961 43.2169 15.3961 43.6399 15.8118C44.0556 16.2274 44.0556 16.9056 43.6399 17.3286C40.7302 20.2383 41.2626 23.7386 41.8241 27.4505C42.4148 31.3373 43.0784 35.742 39.4103 39.41C35.7349 43.0854 31.3376 42.4145 27.4507 41.8238C23.7389 41.2623 20.2312 40.73 17.3288 43.6397C17.1173 43.8511 16.8475 43.9532 16.5704 43.9532Z"
                      fill="#87CEEB"
                    />
                  </svg>

                  <p className="text-2xl md:text-[32px]/[42px] tracking-[-2%] font-medium text-[#0D1B2A]">
                    Sustainable R&D
                  </p>
                </div>
                <p className="text-xs/[18px] md:text-lg/[28px] text-[#333] tracking-[-2%]">
                  We believe innovation should be as responsible as it is
                  ambitious. Elysium invests in sustainable research and
                  development that prioritizes ethical impact, long-term
                  scalability, and digital progress aligned with social and
                  environmental values.
                </p>
              </div>
              <Link
                href="/application"
                className="text-sm md:text-[22px] font-semibold text-[#A77B5A] flex items-center gap-2"
              >
                Explore Collaboration
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 8.625H1.125M19.125 8.625L11.625 16.125M19.125 8.625L11.625 1.125"
                    stroke="#A77B5A"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
