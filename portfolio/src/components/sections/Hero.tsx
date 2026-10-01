import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="
        relative flex min-h-[calc(100vh-2rem)] items-center
        px-5 py-16
        sm:px-8 sm:py-20
        md:px-10
        lg:min-h-screen lg:px-14 lg:py-24
        xl:px-20
      "
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 top-1/4
          h-72 w-72
          rounded-full
          bg-[var(--primary)]
          opacity-[0.07]
          blur-[120px]
          sm:h-96 sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-10 right-0
          h-56 w-56
          rounded-full
          bg-[var(--primary)]
          opacity-[0.04]
          blur-[100px]
          sm:h-72 sm:w-72
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Small Label */}
        <div
          className="
            mb-5 inline-flex items-center gap-2
            rounded-full
            border border-white/10
            bg-white/[0.03]
            px-3 py-1.5
            text-xs font-medium
            text-white/50
            backdrop-blur-sm
            sm:mb-6
            sm:px-4 sm:py-2
            sm:text-sm
          "
        >
          <span
            className="
              h-1.5 w-1.5 rounded-full
              bg-[var(--primary)]
              shadow-[0_0_10px_var(--primary)]
              sm:h-2 sm:w-2
            "
          />

          <span>Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1
          className="
            max-w-4xl
            text-[clamp(2.8rem,11vw,5.5rem)]
            font-bold
            leading-[0.95]
            tracking-[-0.04em]
            text-white
          "
        >
          Building digital
          <br />

          <span className="text-white/35">
            experiences that
          </span>

          <br />

          <span className="text-[var(--primary)]">
            matter.
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-7
            max-w-2xl
            text-sm
            leading-7
            text-white/50
            sm:mt-8
            sm:text-base
            sm:leading-8
            md:text-lg
          "
        >
          I&apos;m{" "}
          <span className="font-medium text-white/80">
            {profile.firstName} {profile.lastName}
          </span>
          , a{" "}
          <span className="font-medium text-white/80">
            {profile.title}
          </span>{" "}
          focused on building modern, responsive, and user-friendly
          web applications.
        </p>

        {/* Actions */}
        <div
          className="
            mt-8 flex flex-col gap-3
            sm:mt-10
            sm:flex-row sm:items-center
          "
        >
          {/* Primary Button */}
          <button
            type="button"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="
              group
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[var(--primary)]
              px-6
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_35px_rgba(var(--primary-rgb),0.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(var(--primary-rgb),0.28)]
              active:translate-y-0
              sm:w-auto
            "
          >
            View My Work

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-6
              text-sm
              font-semibold
              text-white/70
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.06]
              hover:text-white
              active:translate-y-0
              sm:w-auto
            "
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="
            group
            mt-14
            hidden
            items-center
            gap-3
            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            text-white/30
            transition-colors
            duration-300
            hover:text-white/70
            sm:flex
            md:mt-20
          "
        >
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              transition-all
              duration-300
              group-hover:border-[var(--primary)]
              group-hover:text-[var(--primary)]
            "
          >
            <ArrowDown
              size={15}
              className="animate-bounce"
            />
          </span>

          Scroll to explore
        </button>
      </div>

      {/* Decorative Number */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-8
          right-8
          hidden
          select-none
          text-[8rem]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-white/[0.015]
          lg:block
          xl:right-14
        "
      >
        01
      </div>
    </section>
  );
}