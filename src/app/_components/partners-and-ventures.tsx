"use client";

import Boltshift from "@/components/svgs/boltshift";
import FeatherDev from "@/components/svgs/feather-dev";
import GlobalBank from "@/components/svgs/global-bank";
import Lightbox from "@/components/svgs/lightbox";
import Neitzsche from "@/components/svgs/neitzsche";
import Streple from "@/components/svgs/streple";
import { useEffect, useRef } from "react";

export default function PartnersAndVentures() {
  const eventsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (eventsRef.current) {
      const ul = eventsRef.current;
      const clonedUl = ul.cloneNode(true) as HTMLElement;
      ul.parentNode?.insertBefore(clonedUl, ul.nextSibling);
      clonedUl.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="py-2 md:py-8 mt-12 md:mt-20">
      <h2
        className="text-[10px]/[150%] md:text-lg/6 lg:text-[24px]/[30px] font-semibold text-center mb-4 md:mb-10"
        style={{ color: "var(--color-primary-text)" }}
      >
        Our Partners & Ventures
      </h2>
      <div className="w-full mx-auto inline-flex flex-nowrap overflow-hidden">
        <div className="flex animate-infinite-scroll-left">
          <ul
            ref={eventsRef}
            className="flex items-start [&>li]:mr-4 [&>li]:md:mr-8 justify-start shrink-0"
          >
            <li>
              <Boltshift />
            </li>
            <li>
              <Lightbox />
            </li>
            <li>
              <FeatherDev />
            </li>
            <li>
              <Streple />
            </li>
            <li>
              <GlobalBank />
            </li>
            <li>
              <Neitzsche />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
