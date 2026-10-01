import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative px-5 py-20
        sm:px-8 sm:py-24
        md:px-10
        lg:px-14 lg:py-28
        xl:px-20
      "
    >
      {/* Section Header */}
      <div className="mb-10 flex items-end justify-between sm:mb-12">
        <div>
          <span
            className="
              mb-3 inline-block
              text-xs font-semibold uppercase
              tracking-[0.2em]
              text-[var(--primary)]
            "
          >
            Experience
          </span>

          <h2
            className="
              text-3xl font-bold tracking-tight text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            My <span className="text-white/35">journey.</span>
          </h2>
        </div>

        <span className="hidden text-sm text-white/20 sm:block">
          03
        </span>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div
          className="
            absolute left-[19px] top-0 hidden h-full w-px
            bg-gradient-to-b
            from-[var(--primary)]/40
            via-white/10
            to-transparent
            sm:block
          "
        />

        <div className="space-y-5 sm:space-y-7">
          {experience.length > 0 ? (
            experience.map((item, index) => (
              <article
                key={`${item.title}-${item.company}-${index}`}
                className="
                  group relative
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/[0.12]
                  hover:bg-white/[0.04]
                  sm:ml-10
                  sm:p-7
                "
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    -left-[51px]
                    top-8
                    hidden
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--primary)]/40
                    bg-[#111114]
                    sm:flex
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[var(--primary)]
                      shadow-[0_0_10px_var(--primary)]
                    "
                  />
                </div>

                {/* Experience Header */}
                <div
                  className="
                    flex flex-col gap-4
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >
                  <div className="min-w-0">
                    {/* Mobile Icon */}
                    <div
                      className="
                        mb-4
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-[var(--primary)]/10
                        text-[var(--primary)]
                        transition-all duration-300
                        group-hover:bg-[var(--primary)]
                        group-hover:text-white
                        sm:hidden
                      "
                    >
                      <BriefcaseBusiness size={19} />
                    </div>

                    <h3
                      className="
                        text-lg font-semibold text-white
                        sm:text-xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-sm font-medium
                        text-[var(--primary)]
                      "
                    >
                      {item.company}
                    </p>
                  </div>

                  {/* Duration */}
                  <div
                    className="
                      inline-flex
                      w-fit
                      shrink-0
                      items-center
                      gap-2
                      rounded-full
                      bg-white/5
                      px-3
                      py-1.5
                      text-xs
                      text-white/45
                    "
                  >
                    <CalendarDays size={14} />

                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-3xl
                    text-sm
                    leading-7
                    text-white/45
                    sm:mt-6
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {item.description}
                </p>

                {/* Bottom */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.06]
                    pt-5
                  "
                >
                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.16em]
                      text-white/20
                    "
                  >
                    Experience
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="
                      text-white/20
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[var(--primary)]
                    "
                  />
                </div>
              </article>
            ))
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
                sm:p-8
              "
            >
              Experience information will be added soon.
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div
        className="
          mt-16
          h-px
          w-full
          bg-white/[0.06]
          sm:mt-20
        "
      />
    </section>
  );
}