import Image from "next/image";

export default function Cta() {
  return (
    <section className="mw">
      <div
        className="relative rounded-[19px] px-[18px] py-[18px] md:px-16 md:py-[50px] overflow-hidden"
        style={{ backgroundColor: "var(--color-primary-accent)" }}
      >
        <div className="flex gap-8 max-md:flex-col md:items-center justify-between">
          <div className="max-w-[540px]">
            <h2 className="text-[35px] md:text-[50px] font-medium text-white mb-[18px] md:mb-8">
              Ready to Build the Future With Us?
            </h2>
            <div className="flex gap-4">
              <button className="bg-white p-2.5 sm:p-4 text-[8px]/[14px] sm:text-sm/6 font-medium hover:bg-gray-100 text-[#775740] w-full md:w-[224px] rounded-[6px] sm:rounded-[10px]">
                Apply to Incubation
              </button>
              <button className="bg-white/25 text-white p-2.5 sm:p-4 text-[8px]/[14px] sm:text-sm/6 font-medium hover:bg-white/10 w-full md:w-[224px] rounded-[6px] sm:rounded-[10px]">
                Get Involved
              </button>
            </div>
          </div>

          <Image
            src="/images/cta-cubes.svg"
            alt=""
            width={361}
            height={300}
            className="max-md:self-end w-[160px] h-[132px] lg:w-[361px] lg:h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
