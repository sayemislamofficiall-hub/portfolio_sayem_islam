"use client";

import { useEffect, useState } from "react";
import {
  House,
  UserRound,
  BriefcaseBusiness,
  Code2,
  Grid2X2,
  Mail,
  Menu,
  X,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: Grid2X2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function SlideNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        const sectionTop = element.offsetTop;
        const sectionBottom =
          sectionTop + element.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================
          DESKTOP NAVIGATION
      ========================================== */}
      <nav
        aria-label="Desktop navigation"
        className="
          fixed
          left-5
          top-1/2
          z-50
          hidden
          -translate-y-1/2
          lg:left-6
          lg:block
        "
      >
        <div
          className="
            flex
            flex-col
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-[#111114]/90
            p-2
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive =
              activeSection === section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() =>
                  scrollToSection(section.id)
                }
                title={section.label}
                aria-label={`Go to ${section.label}`}
                aria-current={
                  isActive ? "page" : undefined
                }
                className={`
                  group
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20"
                      : "text-white/40 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon
                  size={18}
                  strokeWidth={
                    isActive ? 2.3 : 1.8
                  }
                />

                {/* Desktop Tooltip */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-14
                    whitespace-nowrap
                    rounded-lg
                    border
                    border-white/10
                    bg-[#17171b]
                    px-3
                    py-1.5
                    text-xs
                    text-white
                    opacity-0
                    shadow-xl
                    transition-all
                    duration-200
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* =========================================
          MOBILE NAVIGATION
      ========================================== */}
      <nav
        aria-label="Mobile navigation"
        className="
          fixed
          left-4
          top-4
          z-50
          lg:hidden
        "
      >
        <div className="relative">
          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() =>
              setIsOpen((prev) => !prev)
            }
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#111114]/90
              text-white/70
              shadow-xl
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-white
              active:scale-95
            "
          >
            {isOpen ? (
              <X
                size={20}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={2}
              />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`
              absolute
              left-0
              top-14
              w-52
              origin-top-left
              rounded-2xl
              border
              border-white/10
              bg-[#111114]/95
              p-2
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-200
              ${
                isOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }
            `}
          >
            {/* Menu Header */}
            <div className="mb-1 px-3 py-2">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                Navigation
              </span>
            </div>

            {/* Menu Items */}
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive =
                activeSection === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() =>
                    scrollToSection(section.id)
                  }
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20"
                        : "text-white/45 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={17}
                    strokeWidth={
                      isActive ? 2.3 : 1.8
                    }
                  />

                  <span>{section.label}</span>

                  {/* Active Indicator */}
                  {isActive && (
                    <span
                      className="
                        ml-auto
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}