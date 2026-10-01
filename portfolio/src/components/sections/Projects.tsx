import Image from "next/image";
import {
  ArrowUpRight,
  FolderOpen,
  GitBranch,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative px-5 py-20
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
              Projects
            </span>

            <h2
              className="
                text-3xl font-bold tracking-tight text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Selected{" "}
              <span className="text-white/35">work.</span>
            </h2>
          </div>

          <span className="hidden text-sm text-white/20 sm:block">
            05
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
          A collection of projects I have built while learning,
          experimenting, and solving real-world problems.
        </p>
      </div>

      {/* Projects */}
      {projects.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="
                group
                overflow-hidden
                rounded-2xl
                border border-white/[0.07]
                bg-white/[0.025]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/[0.13]
                hover:bg-white/[0.04]
              "
            >
              {/* Project Image */}
              {project.image ? (
                <div
                  className="
                    relative
                    aspect-[16/9]
                    w-full
                    overflow-hidden
                    bg-[#0b0b0d]
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#111114]
                      via-transparent
                      to-transparent
                      opacity-70
                    "
                  />
                </div>
              ) : (
                <div
                  className="
                    flex
                    aspect-[16/9]
                    w-full
                    items-center
                    justify-center
                    bg-white/[0.02]
                  "
                >
                  <FolderOpen
                    size={38}
                    className="
                      text-white/10
                      transition-colors duration-300
                      group-hover:text-[var(--primary)]/50
                    "
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className="
                      text-xs
                      font-medium
                      tracking-[0.15em]
                      text-white/20
                    "
                  >
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-2">
                    {/* GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-white/5
                          text-white/45
                          transition-all duration-300
                          hover:bg-[var(--primary)]
                          hover:text-white
                        "
                      >
                        <GitBranch size={16} />
                      </a>
                    )}

                    {/* Live */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live website`}
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-white/5
                          text-white/45
                          transition-all duration-300
                          hover:bg-[var(--primary)]
                          hover:text-white
                        "
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                    text-white
                    transition-colors duration-300
                    group-hover:text-[var(--primary)]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          bg-white/5
                          px-3
                          py-1.5
                          text-[11px]
                          font-medium
                          text-white/45
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty Projects State */
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-white/[0.07]
            bg-white/[0.02]
            px-5
            py-12
            text-center
            sm:px-8
            sm:py-16
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-40
              w-40
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[var(--primary)]
              opacity-[0.06]
              blur-[80px]
            "
          />

          <div
            className="
              relative
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white/5
              text-white/20
            "
          >
            <FolderOpen size={25} />
          </div>

          <h3
            className="
              relative
              mt-5
              text-lg
              font-semibold
              text-white/80
              sm:text-xl
            "
          >
            Projects are coming soon
          </h3>

          <p
            className="
              relative
              mx-auto
              mt-3
              max-w-md
              text-sm
              leading-7
              text-white/35
            "
          >
            I&apos;m currently working on projects that will be
            showcased here. Check back soon to see what I&apos;ve
            been building.
          </p>
        </div>
      )}

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