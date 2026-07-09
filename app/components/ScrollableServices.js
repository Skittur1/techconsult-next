"use client";

import Link from "next/link";
import Icon from "./Icon";
import { useRef, useState } from "react";

export default function ScrollableServices({ services }) {
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isNearby =
            hoveredIndex !== null &&
            Math.abs(hoveredIndex - index) <= 1 &&
            !isHovered;

          return (
            <div
              key={service.title}
              className={`min-w-[300px] max-w-[300px] flex-shrink-0 snap-start level-1-shadow-hover group flex flex-col rounded-xl border border-surface-variant bg-surface-bright p-8 transition-all duration-700 ease-out
                ${isHovered ? "scale-110 shadow-2xl border-secondary z-10" : ""}
                ${isNearby ? "scale-95 opacity-70" : ""}
                ${hoveredIndex !== null && !isHovered && !isNearby ? "scale-90 opacity-40 blur-[1px]" : ""}
              `}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s forwards`,
                opacity: 0,
                transform: "translateY(30px)",
                height: "420px", // Fixed height for all cards
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col h-full">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-surface-container-low transition-colors duration-300 group-hover:bg-secondary
    ${isHovered ? "bg-secondary" : ""}
  `}
                >
                  {service.icon.endsWith(".svg") ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <Icon
                      className={`h-7 w-7 ${
                        isHovered ? "text-on-secondary" : "text-secondary"
                      }`}
                      name={service.icon}
                    />
                  )}
                </div>
                <h3
                  className={`mb-3 font-headline-md text-headline-md text-primary transition-all duration-300
                  ${isHovered ? "text-secondary" : ""}
                `}
                >
                  {service.title}
                </h3>
                <p
                  className={`flex-grow font-body-md text-body-md text-on-surface-variant transition-all duration-300
                  ${isHovered ? "text-on-surface" : ""}
                `}
                >
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex items-center text-secondary font-label-sm text-label-sm font-semibold transition-all duration-300
                  ${isHovered ? "translate-x-2 scale-105" : "group-hover:translate-x-1"}
                `}
                >
                  Explore Service{" "}
                  <Icon className="ml-1 h-4 w-4" name="arrow_right_alt" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global styles for animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `,
        }}
      />
    </div>
  );
}
