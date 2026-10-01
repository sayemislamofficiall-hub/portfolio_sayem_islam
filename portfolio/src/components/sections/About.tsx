import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and practical solutions.",
  },
  {
    icon: Layers3,
    title: "Modern Stack",
    description: "Working with modern web technologies.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description: "Continuously improving through real projects.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        px-5 py-20
        sm:px-8 sm:py-24
        md:px-10
        lg:px-14 lg:py-28
        xl:px-20
      "
    >
      {/* Section Header */}
      <div
        className="
          mb-10 flex flex-col gap-4
          sm:mb-12
          md:flex-row md:items-end md:justify-between
        "
      >
        <div>
          <span
            className="
              mb-3 inline-block
              text-xs font-semibold uppercase
              tracking-[0.2em]
              text-[var(--primary)]
            "
          >
            About Me
          </span>

          <h2
            className="
              text-3xl font-bold
              tracking-tight text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            A little bit
            <span className="text-white/35"> about me.</span>
          </h2>
        </div>

        <div className="hidden md:block">
          <span className="text-sm text-white/20">02</span>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="
          grid gap-10
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-14
          xl:gap-20
        "
      >
        {/* Left Content */}
        <div>
          <p
            className="
              max-w-3xl
              text-base
              leading-8
              text-white/55
              sm:text-lg
              sm:leading-9
            "
          >
            {profile.bio ||
              "I’m a Full-Stack Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into functional digital experiences and continuously learning new technologies through real-world projects."}
          </p>

          <p
            className="
              mt-5 max-w-3xl
              text-sm
              leading-7
              text-white/35
              sm:mt-6
              sm:text-base
              sm:leading-8
            "
          >
            My approach is simple: understand the problem, build a clean
            solution, and keep improving it. I care about both the user
            experience and the quality of the code behind it.
          </p>

          {/* CTA */}
          <a
            href={`mailto:${profile.email}`}
            className="
              group
              mt-8
              inline-flex
              min-h-12
              items-center
              gap-2
              rounded-xl
              bg-white
              px-5
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/90
              sm:mt-10
              sm:px-6
            "
          >
            Let&apos;s Work Together

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* Right Highlights */}
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/[0.12]
                  hover:bg-white/[0.04]
                  sm:p-6
                "
              >
                <div
                  className="
                    mb-5
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-[var(--primary)]/10
                    text-[var(--primary)]
                    transition-all
                    duration-300
                    group-hover:bg-[var(--primary)]
                    group-hover:text-white
                  "
                >
                  <Icon size={19} />
                </div>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-16 h-px w-full bg-white/[0.06] sm:mt-20" />
    </section>
  );
}