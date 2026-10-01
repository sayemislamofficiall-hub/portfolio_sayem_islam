import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
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
              Contact
            </span>

            <h2
              className="
                max-w-2xl
                text-3xl font-bold
                tracking-tight text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Let&apos;s build
              <span className="text-white/35">
                {" "}
                something.
              </span>
            </h2>
          </div>

          <span className="hidden text-sm text-white/20 sm:block">
            06
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
          Have an idea, a project, or simply want to
          connect? Feel free to reach out. I&apos;d love to
          hear from you.
        </p>
      </div>

      {/* Contact Layout */}
      <div
        className="
          grid gap-5
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-6
        "
      >
        {/* Contact Information */}
        <div
          className="
            rounded-2xl
            border border-white/[0.07]
            bg-white/[0.025]
            p-5
            sm:p-7
          "
        >
          <div
            className="
              mb-7
              flex h-12 w-12
              items-center justify-center
              rounded-xl
              bg-[var(--primary)]/10
              text-[var(--primary)]
            "
          >
            <Send size={20} />
          </div>

          <h3
            className="
              text-xl font-semibold
              text-white
              sm:text-2xl
            "
          >
            Get in touch
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-white/40
            "
          >
            I&apos;m open to discussing new projects,
            creative ideas, or opportunities to be part of
            something interesting.
          </p>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="
              group
              mt-7
              flex
              min-w-0
              items-center
              gap-4
              rounded-xl
              bg-white/[0.03]
              p-4
              transition-all
              duration-300
              hover:bg-white/[0.06]
            "
          >
            <div
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-lg
                bg-white/5
                text-white/50
                transition-colors
                duration-300
                group-hover:bg-[var(--primary)]
                group-hover:text-white
              "
            >
              <Mail size={17} />
            </div>

            <div className="min-w-0">
              <span
                className="
                  block text-[11px]
                  uppercase
                  tracking-[0.15em]
                  text-white/25
                "
              >
                Email
              </span>

              <span
                className="
                  mt-1 block
                  truncate
                  text-sm
                  text-white/65
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {profile.email}
              </span>
            </div>

            <ArrowUpRight
              size={16}
              className="
                ml-auto
                shrink-0
                text-white/20
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[var(--primary)]
              "
            />
          </a>

          {/* Location */}
          <div
            className="
              mt-3
              flex
              items-center
              gap-4
              rounded-xl
              bg-white/[0.03]
              p-4
            "
          >
            <div
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-lg
                bg-white/5
                text-white/50
              "
            >
              <MapPin size={17} />
            </div>

            <div className="min-w-0">
              <span
                className="
                  block text-[11px]
                  uppercase
                  tracking-[0.15em]
                  text-white/25
                "
              >
                Location
              </span>

              <span className="mt-1 block text-sm text-white/65">
                {profile.location}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border border-white/[0.07]
            bg-white/[0.025]
            p-6
            sm:p-8
            md:p-10
          "
        >
          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-[var(--primary)]
              opacity-[0.08]
              blur-[100px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-56
              w-56
              rounded-full
              bg-[var(--primary)]
              opacity-[0.04]
              blur-[90px]
            "
          />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[var(--primary)]/10
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-[var(--primary)]
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Available for opportunities
              </span>

              <h3
                className="
                  mt-6
                  max-w-xl
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-3xl
                  md:text-4xl
                "
              >
                Have a project in mind?
                <br />
                <span className="text-white/35">
                  Let&apos;s talk about it.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-white/40
                  sm:text-base
                  sm:leading-8
                "
              >
                Whether it&apos;s a website, web
                application, or a new idea you want to
                bring to life, send me a message and
                let&apos;s start a conversation.
              </p>
            </div>

            {/* Email CTA */}
            <div className="mt-8 sm:mt-10">
              <a
                href={`mailto:${profile.email}`}
                className="
                  group
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-6
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/90
                  sm:w-auto
                "
              >
                Send me an email

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
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-16 h-px w-full bg-white/[0.06] sm:mt-20" />
    </section>
  );
}