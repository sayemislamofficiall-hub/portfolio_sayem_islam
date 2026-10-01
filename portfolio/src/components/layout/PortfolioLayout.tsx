"use client";

import ProfileCard from "./ProfileCard";
import SlideNavigation from "./SlideNavigation";
import ThemeSwitcher from "./ThemeSwitcher";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function PortfolioLayout() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      {/* Fixed Desktop Elements */}
      <ProfileCard />
      <SlideNavigation />
      <ThemeSwitcher />

      {/* Main Content */}
      <div
        className="
          min-h-screen
          w-full
          min-w-0
          pb-24

          lg:pb-0
          lg:pl-[92px]
          lg:pr-[370px]
        "
      >
        <div className="w-full">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />

          <footer
            className="
              px-5
              pb-8
              pt-4
              sm:px-8
              md:px-10
              lg:px-12
              xl:px-16
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                border-t
                border-white/[0.06]
                pt-6
                text-xs
                text-white/25

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p>
                © {new Date().getFullYear()} Sayem Islam. All rights reserved.
              </p>

              <p>
                Built with{" "}
                <span className="text-white/40">
                  Next.js
                </span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}