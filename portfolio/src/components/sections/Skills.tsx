import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
  Terminal,
} from "lucide-react";
import { skills } from "@/data/skills";

const skillIcons: Record<string, typeof Code2> = {
  HTML: Globe,
  CSS: Code2,
  JavaScript: Braces,
  TypeScript: Braces,
  React: Code2,
  "Next.js": Globe,
  "Node.js": Server,
  MongoDB: Database,
  "Git & GitHub": GitBranch,
};

export default function Skills() {
  return (
    <section
      id="skills"
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
      <div className="mb-10 sm:mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span
              className="
                mb-3 inline-block
                text-xs font-semibold uppercase
                tracking-[0.2em]
                text-[var(--primary)]
              "
            >
              Skills
            </span>

            <h2
              className="
                text-3xl font-bold
                tracking-tight text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Tools I{" "}
              <span className="text-white/35">
                work with.
              </span>
            </h2>
          </div>

          <span className="hidden text-sm text-white/20 sm:block">
            04
          </span>
        </div>

        <p
          className="
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-white/40
            sm:text-base
            sm:leading-8
          "
        >
          Technologies and tools I use to build modern,
          responsive, and scalable web applications.
        </p>
      </div>

      {/* Skills Grid */}
      {skills.length > 0 ? (
        <div
          className="
            grid grid-cols-2 gap-3
            sm:grid-cols-3 sm:gap-4
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill] ?? Terminal;

            return (
              <div
                key={`${skill}-${index}`}
                className="
                  group relative
                  overflow-hidden
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/[0.13]
                  hover:bg-white/[0.045]
                  sm:p-5
                  md:p-6
                "
              >
                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-[var(--primary)]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    mb-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    text-white/55
                    transition-all
                    duration-300
                    group-hover:bg-[var(--primary)]
                    group-hover:text-white
                    sm:mb-5
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Icon size={19} />

                  <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />
                </div>

                {/* Skill Name */}
                <h3
                  className="
                    relative
                    text-sm
                    font-semibold
                    text-white/80
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-base
                  "
                >
                  {skill}
                </h3>

                {/* Skill Number */}
                <span
                  className="
                    absolute
                    bottom-4
                    right-4
                    text-[10px]
                    font-medium
                    text-white/15
                    transition-colors
                    duration-300
                    group-hover:text-[var(--primary)]/50
                    sm:bottom-5
                    sm:right-5
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="
            rounded-2xl
            border border-white/[0.07]
            bg-white/[0.025]
            p-6
            text-sm
            leading-7
            text-white/40
          "
        >
          Skills will be added soon.
        </div>
      )}

      {/* Bottom Divider */}
      <div className="mt-16 h-px w-full bg-white/[0.06] sm:mt-20" />
    </section>
  );
}