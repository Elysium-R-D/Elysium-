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
        <div className="max-w-[1440px] mx-auto pl-[5.55%] flex flex-col items-center gap-8 md:gap-16">
          <div className="max-w-[913px] mx-auto text-center space-y-3 md:space-y-6">
            <h2 className="heading-section">Our Research & Innovation Focus</h2>
            <p className="text-body">
              We invest in research and ventures that redefine global innovation
              from blockchain and AI to sustainable technologies. Each focus
              area drives progress toward a smarter, more resilient future.
            </p>
          </div>

          <div className="flex w-full gap-4 md:gap-8 md:grid md:grid-cols-3 overflow-x-auto hide-scrollbar">
            {[
              {
                icon: (
                  <svg
                    className="size-[30px] md:size-10"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 33.8477C15.8333 31.3252 14.2943 29.2257 12.0833 28.2106V21.4584C13.5521 22.2966 15.263 22.7734 17.0833 22.7734H24.5833C27.3412 22.7734 29.5833 24.9806 29.5833 27.6953V28.2106C27.3724 29.2257 25.8333 31.3252 25.8333 33.8477C25.8333 37.2453 28.6302 40 32.0833 40C35.5365 40 38.3333 37.2453 38.3333 33.8477C38.3333 31.3252 36.7943 29.2257 34.5833 28.2106V27.6953C34.5833 22.2582 30.1068 17.8516 24.5833 17.8516H17.0833C14.3255 17.8516 12.0833 15.6444 12.0833 12.9297V12.4144C14.2943 11.4685 15.8333 9.2998 15.8333 6.77734C15.8333 3.37817 13.0365 0.625 9.58334 0.625C6.13178 0.625 3.33334 3.37817 3.33334 6.77734C3.33334 9.2998 4.87631 11.4685 7.08334 12.4144V28.2106C4.87631 29.2257 3.33334 31.3252 3.33334 33.8477C3.33334 37.2453 6.13178 40 9.58334 40C13.0365 40 15.8333 37.2453 15.8333 33.8477ZM9.58334 32.002C10.6185 32.002 11.4583 32.8287 11.4583 33.8477C11.4583 34.8666 10.6185 35.6934 9.58334 35.6934C8.54819 35.6934 7.70834 34.8666 7.70834 33.8477C7.70834 32.8287 8.54819 32.002 9.58334 32.002ZM32.0833 35.6934C31.0443 35.6934 30.2083 34.8666 30.2083 33.8477C30.2083 32.8287 31.0443 32.002 32.0833 32.002C33.1224 32.002 33.9583 32.8287 33.9583 33.8477C33.9583 34.8666 33.1224 35.6934 32.0833 35.6934ZM9.58334 4.93164C10.6185 4.93164 11.4583 5.75452 11.4583 6.77734C11.4583 7.80017 10.6185 8.62305 9.58334 8.62305C8.54819 8.62305 7.70834 7.80017 7.70834 6.77734C7.70834 5.75452 8.54819 4.93164 9.58334 4.93164Z"
                      fill="#A77B5A"
                    />
                  </svg>
                ),
                title: "Blockchain & Web3",
                desc: "Tokenization, digital assets, wallets, and smart contracts driving trust and transparency.",
              },
              {
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.4038 11.5045C39.1853 11.5045 38.9668 11.4171 38.8007 11.251L36.6852 9.13549C36.353 8.80331 36.353 8.26132 36.6852 7.9204C37.0174 7.57947 37.5593 7.58821 37.9003 7.9204L40.0158 10.0359C40.3479 10.3681 40.3479 10.9101 40.0158 11.251C39.8409 11.4258 39.6224 11.5045 39.4038 11.5045Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M10.6523 40.259C10.4338 40.259 10.2152 40.1716 10.0491 40.0055L7.94238 37.89C7.61019 37.5578 7.61019 37.0158 7.94238 36.6749C8.27456 36.3427 8.81655 36.3427 9.15747 36.6749L11.2642 38.7904C11.5964 39.1226 11.5964 39.6646 11.2642 40.0055C11.0894 40.1803 10.8708 40.259 10.6523 40.259Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M27.8997 28.7553C27.6812 28.7553 27.4626 28.6679 27.2965 28.5018L19.4465 20.6517C19.1143 20.3196 19.1143 19.7776 19.4465 19.4366C19.7787 19.1045 20.3206 19.1045 20.6616 19.4366L28.5116 27.2867C28.8438 27.6189 28.8438 28.1609 28.5116 28.5018C28.3368 28.6679 28.1182 28.7553 27.8997 28.7553Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M24.3157 30.9037C24.0972 30.9037 23.8786 30.8163 23.7126 30.6502L17.2961 24.2338C16.964 23.9016 16.964 23.3596 17.2961 23.0187C17.6283 22.6865 18.1703 22.6865 18.5112 23.0187L24.9276 29.4351C25.2598 29.7673 25.2598 30.3093 24.9276 30.6502C24.7528 30.8163 24.5343 30.9037 24.3157 30.9037Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M30.0503 25.181C29.8317 25.181 29.6132 25.0936 29.4471 24.9275L23.0307 18.5111C22.6985 18.1789 22.6985 17.6369 23.0307 17.296C23.3629 16.9638 23.9049 16.9638 24.2458 17.296L30.6622 23.7124C30.9944 24.0446 30.9944 24.5866 30.6622 24.9275C30.4874 25.0936 30.2688 25.181 30.0503 25.181Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M12.1294 44.9595C11.7972 44.9595 11.4738 44.8371 11.2203 44.5836C10.722 44.0854 10.722 43.2724 11.2203 42.7654C14.7082 39.2774 14.0701 35.0814 13.397 30.6319C12.6889 25.9725 11.8934 20.6925 16.2905 16.2955C20.6963 11.8984 25.9675 12.6939 30.6269 13.402C35.0764 14.0751 39.2812 14.7132 42.7604 11.2253C43.2586 10.727 44.0716 10.727 44.5786 11.2253C45.0769 11.7235 45.0769 12.5365 44.5786 13.0435C40.1728 17.4494 34.9016 16.6451 30.2422 15.9371C25.7927 15.2639 21.5879 14.6258 18.1087 18.1137C14.6208 21.6017 15.2589 25.7977 15.932 30.2472C16.6401 34.9066 17.4356 40.1866 13.0385 44.5836C12.785 44.8371 12.4528 44.9595 12.1294 44.9595Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M4.27967 37.1119C3.94749 37.1119 3.62404 36.9895 3.37053 36.736C2.87226 36.2377 2.87226 35.4247 3.37053 34.9177C7.77636 30.5119 13.0563 31.3161 17.7069 32.0242C22.1565 32.6973 26.3612 33.3355 29.8404 29.8475C33.3284 26.3596 32.6902 22.1635 32.0171 17.714C31.309 13.0547 30.5135 7.77469 34.9106 3.37761C35.4089 2.87934 36.2219 2.87934 36.7289 3.37761C37.2272 3.87589 37.2272 4.68887 36.7289 5.19589C33.241 8.68383 33.8791 12.8799 34.5522 17.3294C35.2603 21.9887 36.0558 27.2687 31.6587 31.6658C27.2529 36.0716 21.9816 35.2674 17.3223 34.5593C12.8728 33.8862 8.66801 33.248 5.18881 36.736C4.9353 36.9895 4.61186 37.1119 4.27967 37.1119Z"
                      fill="#A77B5A"
                    />
                  </svg>
                ),
                title: "Cybersecurity & Compliance",
                desc: "Building frameworks for regulation, ISO standards, and digital trust infrastructure.",
              },
              {
                icon: (
                  <svg
                    className="size-[30px] md:size-10"
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
                ),
                title: "AI & Data Intelligence",
                desc: "Research-backed intelligence powering automation, analytics, and smarter economies.",
              },
              {
                icon: (
                  <svg
                    className="size-[30px] md:size-[35px]"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_487_1007)">
                      <path
                        d="M7.16743 30.1901C6.48056 31.6186 6.04634 32.5712 2.22149 32.7101C2.33087 29.0198 3.03524 28.6239 4.4429 27.9217C5.03352 27.6264 5.76962 27.26 6.56587 26.6486L5.23368 24.9478C4.60477 25.4312 4.02618 25.685 3.46727 25.9628C1.12118 27.1331 0.0153991 28.2848 0.0153991 33.7776L0.0339928 34.8955L1.10915 34.8714C6.90712 34.8714 7.99102 33.5611 9.07712 31.3058C9.31446 30.8114 9.44681 30.4767 9.84821 29.8106L8.22618 28.3373C7.74056 29.0012 7.43649 29.6312 7.16743 30.188V30.1901ZM24.0954 6.44921C21.676 6.44921 19.7084 8.41687 19.7084 10.8351C19.7084 13.2534 21.6771 15.2222 24.0954 15.2222C26.5137 15.2222 28.4824 13.2534 28.4824 10.8351C28.4824 8.41687 26.5137 6.44921 24.0954 6.44921ZM24.0954 13.0259C22.8879 13.0259 21.9046 12.0426 21.9046 10.8362C21.9046 9.62984 22.8868 8.64655 24.0954 8.64655C25.304 8.64655 26.2862 9.62984 26.2862 10.8362C26.2862 12.0437 25.304 13.0259 24.0954 13.0259ZM34.9924 1.00234C34.9596 0.456555 34.5265 0.0190548 33.9807 -0.021414C33.9807 -0.021414 27.8601 -0.467664 21.9713 1.73187C19.8199 2.53577 18.0491 3.8078 16.3965 5.73609C15.0184 7.3439 13.649 10.2489 12.4404 12.6617C11.9734 13.5925 11.5271 14.4839 11.1487 15.1642H5.06415C4.75134 15.1642 4.45384 15.2987 4.24602 15.5317L0.236337 19.8772C-0.0196009 20.167 -0.104913 20.5695 0.0132116 20.937C0.131337 21.3045 0.434305 21.5845 0.810555 21.6698L7.33696 23.1617C7.78212 23.7108 8.52259 24.5322 9.70821 25.848L12.1812 28.5889L13.5123 34.2195C13.5998 34.5903 13.8743 34.89 14.2374 35.007C14.3479 35.042 14.4627 35.0606 14.5754 35.0606C14.8335 35.0606 15.0862 34.9698 15.2874 34.797L19.3398 30.7655C19.5815 30.5587 19.7215 30.2547 19.7215 29.9353V24.2916C20.2662 23.9536 21.232 23.4319 22.1409 22.9233C24.6171 21.5397 28.3151 19.8159 29.8474 18.4531C32.0065 16.5347 32.7918 15.1281 33.564 13.0489C35.3993 8.10406 35.011 1.28999 34.9924 1.00234ZM31.5143 12.2866C30.8406 14.1011 30.2302 15.1861 28.3949 16.8169C27.0398 18.0211 23.332 19.7503 21.0734 21.0136C19.3879 21.9553 18.3784 22.5055 17.9354 22.8675C17.6806 23.0742 17.5329 23.3859 17.5329 23.7141V29.4311L15.2251 31.9675L14.2418 27.8112C14.1991 27.633 14.1127 27.4678 13.9891 27.3311C11.9777 25.102 8.93931 21.7322 8.70634 21.4642C8.55431 21.2794 8.34321 21.1481 8.10587 21.0934L3.0954 19.9472L5.55306 17.3495H11.7754C12.156 17.3495 12.5093 17.1516 12.7073 16.8289C13.1885 16.0458 13.7463 14.9301 14.3938 13.6406C15.4898 11.4553 16.8526 8.56343 18.0557 7.15905C19.4776 5.50093 20.9202 4.45859 22.7348 3.78046C26.7718 2.27218 30.9368 2.11359 32.841 2.1278C32.876 4.14468 32.8006 8.82046 31.5132 12.2876L31.5143 12.2866Z"
                        fill="#A77B5A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_487_1007">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ),
                title: "Digital Economy Infrastructure",
                desc: "Developing systems for payments, trade, and cross-border digital enablement.",
              },
              {
                icon: (
                  <svg
                    className="size-[30px] md:size-10"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.4962 14.6518C25.6122 14.6611 25.7288 14.666 25.8461 14.666C27.7906 14.666 29.8394 13.3566 30.6123 11.6198L31.3591 9.94069C32.1953 8.06308 31.9825 7.36898 31.7499 7.01046C31.4137 6.49438 30.7234 6.34675 30.0944 6.71582C29.961 6.7946 29.8394 6.85725 29.7371 6.90501L29.2564 6.11787C29.0083 5.71468 28.7936 5.35058 28.6113 5.02803C28.4271 4.70052 28.316 4.49644 28.2534 4.38045C27.8291 3.64727 26.9818 3.21928 25.6624 3.07227C24.6266 2.9569 23.0672 2.911 20.8856 2.92836C18.781 2.94821 17.3587 2.96806 16.6181 2.98729C16.2713 2.99473 15.9531 3.00838 15.6616 3.02761C15.4625 3.04063 15.1964 3.06048 14.9452 3.13182C14.7039 3.06669 14.4756 3.0152 14.2684 2.98667C14.0929 2.96248 13.9322 2.94387 13.7858 2.93022C13.4428 2.89673 12.8083 2.96682 12.3573 3.09026C12.0441 3.17648 11.7891 3.26642 11.5857 3.36132C11.1081 3.57842 10.7415 3.91027 10.525 4.29609C10.4332 4.43752 10.2713 4.70796 10.0468 5.10122C9.83463 5.46905 9.56047 5.92868 9.21993 6.48198L6.77042 10.512C6.59488 10.7992 6.5496 11.1502 6.64202 11.5007C6.94224 12.6352 8.73238 13.7009 9.27327 14.0005L10.6974 14.7888C11.2966 15.1201 11.9827 15.2956 12.6824 15.2956C14.0873 15.2956 15.4302 14.5885 16.1864 13.4509L18.0435 10.6565C18.8213 9.48664 19.2599 8.72803 19.4943 8.20885L20.6375 10.1392C21.1685 11.0361 21.2212 11.719 21.179 11.9318C20.6629 12.2841 20.5631 12.7884 20.6481 13.1556C20.7684 13.6773 21.2076 14.3007 23.5529 14.493L25.4962 14.6518ZM16.494 9.62558L14.6356 12.4193C14.2194 13.0452 13.4701 13.4341 12.6811 13.4341C12.2959 13.4341 11.9207 13.3392 11.5975 13.16L10.1733 12.3716C9.29995 11.8884 8.77518 11.4263 8.55064 11.1645L10.8054 7.45396C11.1558 6.88454 11.4387 6.4094 11.6601 6.02669C11.8599 5.67685 12.0013 5.43742 12.1129 5.2625C12.1477 5.20109 12.206 5.12231 12.3635 5.05098C12.4423 5.01438 12.5899 4.95545 12.848 4.88474C13.0824 4.82085 13.3864 4.78674 13.6128 4.78364C13.7331 4.7948 13.8671 4.81031 14.0104 4.83016C14.3106 4.87234 14.7132 4.98709 15.1765 5.16263C15.6113 5.32577 16.0648 5.59993 16.5244 5.97955C16.9723 6.34737 17.3699 6.8436 17.7321 7.49676L17.7551 7.53336C17.5566 7.9291 17.1242 8.67717 16.494 9.62558ZM22.2391 9.19014L20.849 6.84422C20.3838 6.02607 19.8299 5.34127 19.204 4.80721C19.709 4.80162 20.2747 4.79542 20.9011 4.78984C22.976 4.77061 24.5069 4.81651 25.4553 4.92196C26.4285 5.03051 26.6208 5.27986 26.6251 5.2811C26.6723 5.37105 26.792 5.58939 26.9892 5.94109C27.1828 6.28411 27.4098 6.66806 27.6703 7.0911L28.4413 8.36516C28.6907 8.80184 29.2192 8.97862 29.8016 8.8465C29.7601 8.95071 29.7123 9.0636 29.6589 9.18394L28.9121 10.863C28.4091 11.992 26.9049 12.9025 25.6488 12.7971L23.7042 12.6377C23.3953 12.6123 23.1404 12.5794 22.9338 12.544C23.2105 11.6775 22.9797 10.4406 22.2391 9.19014Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M16.099 25.3494L10.7292 25.3991C10.6808 25.3674 10.6337 25.3364 10.5816 25.3054C10.5816 25.3054 10.5748 25.2849 10.5741 25.2341C10.5741 25.2341 10.5748 25.1547 10.6988 24.9314C10.7038 24.9214 10.7503 24.8309 10.9376 24.6032C11.1045 24.4023 11.2775 24.1994 11.4506 23.9997C11.5387 23.8998 11.6212 23.808 11.6987 23.7237C11.8321 23.7838 11.9983 23.867 12.1906 23.9761C12.4226 24.1082 12.644 24.1728 12.8692 24.1728H12.8698C13.2519 24.1728 13.5968 23.9786 13.7922 23.653C14.039 23.2429 14.1575 22.5749 13.1737 20.7227L12.4455 19.3525C11.5257 17.6194 9.33356 16.3125 7.34617 16.3125L5.55107 16.3658C3.71502 16.4229 2.84662 16.7777 2.64627 17.5537C2.59665 17.746 2.49616 18.4103 3.28951 18.8811C3.37635 18.9326 3.45512 18.9816 3.52521 19.0269C3.45884 19.1298 3.39185 19.2396 3.32362 19.3562C3.09722 19.7421 2.90059 20.2004 2.73993 20.7215C2.57432 21.2593 2.49616 21.838 2.49988 22.4936C2.50298 22.8844 2.53338 23.238 2.59106 23.5425C2.64627 23.8341 2.73807 24.1448 2.86461 24.4674C3.03519 24.9841 3.37759 25.4518 3.8949 25.8816C4.00593 26.0776 4.12689 26.2916 4.27018 26.5422L4.48976 26.9287C4.81106 27.4907 5.14726 28.0837 5.50206 28.7108C5.84818 29.3248 6.09878 29.7808 6.24641 30.0648C6.31091 30.1945 6.35433 30.2844 6.37418 30.3359C6.38349 30.3607 6.39341 30.3849 6.4052 30.4091C6.67688 30.9847 6.93244 31.5014 7.17187 31.9598C7.42805 32.4436 7.70842 32.9287 8.00491 33.402C8.35351 33.9578 8.70646 34.4 9.08359 34.7567C9.57858 35.2213 10.0953 35.457 10.6194 35.457C10.6225 35.457 10.6306 35.457 10.6337 35.457L16.1908 35.4061C18.3494 35.3863 20.0893 33.6135 20.0695 31.4549L20.049 29.2293C20.031 27.0893 18.275 25.3494 16.099 25.3494ZM6.18065 24.9518C5.87609 24.8154 5.61744 24.664 5.41274 24.5027C5.18448 24.3235 5.06848 24.1777 5.03809 24.1374C4.92954 23.9922 4.77819 23.8874 4.61133 23.8235C4.60947 23.8186 4.60761 23.813 4.60575 23.808C4.51705 23.586 4.4544 23.38 4.41967 23.1964C4.38307 23.0035 4.3626 22.756 4.36074 22.4819C4.35826 22.0191 4.40974 21.6221 4.51767 21.2692C4.63552 20.8877 4.77385 20.5615 4.92892 20.2978C5.13361 19.948 5.27504 19.7625 5.33397 19.6918C5.37739 19.6403 5.41708 19.595 5.45058 19.5597C5.64411 19.3538 5.74273 19.0368 5.70241 18.757C5.68133 18.6088 5.63729 18.4419 5.46981 18.231C5.51447 18.2292 5.56037 18.2273 5.60875 18.2261L7.34679 18.1734C8.62892 18.1734 10.2119 19.1131 10.8024 20.2253L11.5312 21.5961C11.5604 21.6513 11.5883 21.7053 11.615 21.7574C11.2571 21.7139 10.955 21.8169 10.7094 22.0669L10.5704 22.2089C10.4246 22.3603 10.2497 22.5476 10.0494 22.7753C9.86205 22.9917 9.6803 23.2045 9.50228 23.4197C9.27588 23.6958 9.12515 23.9153 9.05382 24.0636C8.82431 24.4692 8.70956 24.8687 8.71266 25.2508C8.71328 25.3091 8.71886 25.3637 8.7232 25.4183L8.60225 25.4195C7.6805 25.4189 6.86607 25.262 6.18065 24.9518ZM16.1753 33.5446L10.6337 33.5955C10.612 33.5881 10.5208 33.5508 10.3608 33.4007C10.104 33.1588 9.8422 32.8264 9.58292 32.4126C9.31061 31.9784 9.05319 31.5331 8.81997 31.0927C8.59667 30.6647 8.35661 30.179 8.10106 29.6393C8.06446 29.5506 8.00243 29.4135 7.90629 29.2206C7.74625 28.9111 7.48449 28.436 7.12349 27.7958C7.01184 27.5986 6.90391 27.4069 6.79598 27.2165C7.26119 27.3071 7.74067 27.3641 8.24434 27.3641L9.48367 27.353C9.78575 27.3499 10.1393 27.343 10.4544 27.2624L16.1356 27.2103C17.2577 27.2103 18.1788 28.1233 18.1888 29.2454L18.2092 31.471C18.2204 32.6043 17.3073 33.5341 16.1753 33.5446Z"
                      fill="#A77B5A"
                    />
                    <path
                      d="M36.4523 19.2575L34.8173 16.2069C34.4637 15.5593 34.1641 15.006 33.9203 14.5514L33.6902 14.124C33.5054 13.7822 33.1425 13.5781 32.7195 13.5781C31.866 13.5781 30.2532 14.498 29.5994 14.8937L28.0022 15.8602C26.9359 16.5046 26.191 17.4561 25.9584 18.4691C25.7946 19.1781 25.9056 19.8777 26.2691 20.4391L27.3912 22.1716C28.576 23.9977 29.3712 25.2277 29.7886 25.8827C29.3265 25.8871 28.7248 25.8926 27.9706 25.8995C26.9632 25.8995 26.2784 25.6296 26.0837 25.4615C26.0626 25.1309 25.9491 24.8599 25.7456 24.6558C25.5446 24.4548 25.276 24.3438 24.9895 24.3438C24.5174 24.3438 23.8878 24.5807 22.7887 26.3399L21.9532 27.6772C20.8931 29.3743 20.8968 32.0304 21.9612 33.7244L22.8402 35.1225C23.922 36.8444 24.5522 37.077 25.0242 37.077C25.3151 37.077 25.5874 36.9641 25.7896 36.7594C26.0216 36.525 26.1376 36.203 26.1339 35.8023C26.1339 35.7961 26.1463 35.757 26.2027 35.6987C26.3442 35.5554 26.6754 35.3861 27.1456 35.3818L29.092 35.3638C29.7303 35.3582 30.3382 35.1132 30.8971 34.6362C31.3511 34.2485 31.7897 33.7386 32.2003 33.1214C32.5849 32.5415 32.939 31.9317 33.2523 31.3127C33.5513 30.7247 33.9352 29.9276 34.4172 28.8886C34.6064 28.4991 34.7887 28.1182 34.9575 27.7473L35.3805 26.9719C35.7297 26.3703 36.0188 25.8467 36.2371 25.42C36.3568 25.188 36.4678 24.9486 36.5721 24.6998C36.6297 24.5603 36.6843 24.4126 36.7191 24.2613C36.7569 24.2117 36.8016 24.1552 36.8338 24.1112C37.0565 23.8054 37.3009 23.2167 37.4008 22.7447C37.4702 22.424 37.5031 22.112 37.4994 21.8236C37.4957 21.3652 37.3995 20.9626 37.1948 20.5942C37.0596 20.3733 36.8307 19.9609 36.4523 19.2575ZM32.7362 28.0909C32.2574 29.1225 31.8833 29.9003 31.5924 30.4704C31.3114 31.0274 30.9938 31.5726 30.6496 32.0912C30.3345 32.5651 30.0107 32.9453 29.6881 33.2207C29.4679 33.4086 29.267 33.5011 29.0734 33.5029L27.1288 33.5209C26.2344 33.529 25.4125 33.8472 24.8747 34.3949C24.8164 34.4544 24.7618 34.5159 24.7116 34.5797C24.621 34.4513 24.5218 34.3031 24.4145 34.1319L23.5361 32.7338C22.8433 31.6309 22.8408 29.7669 23.5306 28.6628L24.3661 27.3255C24.5075 27.0997 24.6347 26.9118 24.7463 26.7567C25.3809 27.3851 26.5842 27.7597 27.9687 27.7597C27.9718 27.7597 28.0363 27.7597 28.0388 27.7597C29.8916 27.7423 30.8487 27.7337 30.9461 27.733C31.7251 27.7033 32.4608 27.5401 33.1375 27.2473C33.0122 27.5197 32.8776 27.7994 32.7362 28.0909ZM35.5815 22.3552C35.5225 22.6293 35.3755 22.9469 35.329 23.0164C35.2701 23.097 35.2 23.1894 35.1169 23.2943C35.1119 23.3005 35.1051 23.3073 35.1007 23.3141C35.0648 23.3507 35.0288 23.3793 34.9947 23.4245L34.9053 23.5399C34.7329 23.7297 34.5158 23.945 34.2491 24.1887C33.8943 24.5144 33.4365 24.8165 32.89 25.0857C32.5179 25.2686 32.1339 25.3908 31.7264 25.4547C31.6551 25.3449 31.5633 25.2041 31.4466 25.0224C31.0602 24.4126 30.2278 23.1249 28.9519 21.1586L27.8298 19.4268C27.7398 19.2879 27.72 19.1061 27.7702 18.8859C27.8874 18.376 28.3452 17.8265 28.9643 17.4518L30.5615 16.4854C31.3592 16.0028 31.9776 15.7107 32.3498 15.5618C32.5818 15.9935 32.8596 16.5065 33.1797 17.092L34.8123 20.1383C35.213 20.8826 35.4493 21.3087 35.5858 21.5308C35.5976 21.5525 35.636 21.6381 35.6379 21.8447C35.641 21.9979 35.6218 22.1691 35.5815 22.3552Z"
                      fill="#A77B5A"
                    />
                  </svg>
                ),
                title: "Sustainability & Climate Tech",
                desc: "Investing in technologies that ensure long-term, responsible digital innovation.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="card-focus bg-[#fff] max-md:w-[243px] max-md:h-[263px] shrink-0 flex flex-col items-start gap-2 md:gap-6"
              >
                <div className="size-[64px] md:size-[83px] flex items-center justify-center">
                  {card.icon}
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2.5">
                  <h3 className="text-lg md:text-2xl font-bold tracking-[0.25px] text-[#000]">
                    {card.title}
                  </h3>
                  <p className="text-xs/4 md:text-base/[22px] tracking-[0.1px] text-[#474646]">
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

      <Cta />
    </main>
  );
}
