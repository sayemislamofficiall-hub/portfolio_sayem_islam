import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function ProfileCard() {
  return (
    <aside
      className="
        relative
        mx-4
        mt-4
        w-auto
        overflow-hidden
        rounded-3xl
        bg-[#111114]
        shadow-2xl

        sm:mx-6
        sm:mt-6

        lg:fixed
        lg:right-6
        lg:top-6
        lg:z-40
        lg:mx-0
        lg:mt-0
        lg:h-[calc(100vh-48px)]
        lg:w-[330px]
        lg:rounded-3xl
      "
    >
      <div
        className="
          flex
          h-full
          flex-col
          px-5
          py-6

          sm:px-6
          sm:py-7

          lg:overflow-y-auto
          lg:px-6
          lg:py-6
        "
      >
        {/* Profile Image */}
        {profile.image && (
          <div className="group relative mb-5 w-full sm:mb-6">
            <div
              className="
                relative
                mx-auto
                aspect-[1122/1402]
                w-full
                max-w-[230px]
                overflow-hidden
                sm:max-w-[250px]
                lg:max-w-[235px]
              "
            >
              <Image
                src={profile.image}
                alt={`${profile.firstName} ${profile.lastName}`}
                fill
                priority
                sizes="
                  (max-width: 640px) 230px,
                  (max-width: 1024px) 250px,
                  235px
                "
                className="
                  object-contain
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.02]
                "
              />
            </div>
          </div>
        )}

        {/* Availability */}
        <div
          className="
            mb-4
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            bg-white/5
            px-3
            py-1.5
            text-xs
            text-white/65
            sm:mb-5
          "
        >
          <span
            className="
              h-2
              w-2
              shrink-0
              rounded-full
              bg-green-400
              shadow-[0_0_8px_rgba(74,222,128,0.7)]
            "
          />

          <span>{profile.availability}</span>
        </div>

        {/* Name */}
        <h2
          className="
            text-3xl
            font-bold
            leading-[0.95]
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-3xl
          "
        >
          {profile.firstName}
          <br />
          <span className="text-white/40">
            {profile.lastName}
          </span>
        </h2>

        {/* Title */}
        <p
          className="
            mt-2.5
            text-sm
            font-medium
            text-[var(--primary)]
            sm:mt-3
          "
        >
          {profile.title}
        </p>

        {/* Bio */}
        <p
          className="
            mt-4
            text-sm
            leading-6
            text-white/45
            sm:mt-5
          "
        >
          {profile.bio ||
            "Full-Stack Developer focused on building modern, responsive, and user-friendly web applications."}
        </p>

        {/* Contact Information */}
        <div
          className="
            mt-6
            space-y-4
            sm:mt-7
          "
        >
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="
              group
              flex
              min-w-0
              items-center
              gap-3
              text-sm
              text-white/50
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <Mail
              size={17}
              className="
                shrink-0
                text-white/30
                transition-colors
                duration-300
                group-hover:text-[var(--primary)]
              "
            />

            <span className="truncate">
              {profile.email}
            </span>
          </a>

          {/* Location */}
          <div
            className="
              flex
              items-center
              gap-3
              text-sm
              text-white/50
            "
          >
            <MapPin
              size={17}
              className="
                shrink-0
                text-white/30
              "
            />

            <span>{profile.location}</span>
          </div>
        </div>

        {/* Social Links */}
        <div
          className="
            mt-7
            pt-1
            sm:mt-8
            lg:mt-auto
            lg:pt-7
          "
        >
          <div className="flex items-center gap-3">
            {/* GitHub */}
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-white/50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--primary)]
                  hover:text-white
                "
              >
                <FaGithub size={17} />
              </a>
            )}

            {/* LinkedIn */}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-white/50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--primary)]
                  hover:text-white
                "
              >
                <FaLinkedinIn size={17} />
              </a>
            )}

            {/* Facebook */}
            {profile.social.facebook && (
              <a
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-white/50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--primary)]
                  hover:text-white
                "
              >
                <FaFacebookF size={17} />
              </a>
            )}

            {/* X / Twitter */}
            {profile.social.x && (
              <a
                href={profile.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-white/50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--primary)]
                  hover:text-white
                "
              >
                <FaXTwitter size={17} />
              </a>
            )}

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/5
                text-white/50
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[var(--primary)]
                hover:text-white
              "
            >
              <Mail size={17} />
            </a>
          </div>

          {/* Resume */}
          {profile.resume && (
            <a
              href={profile.resume}
              className="
                mt-5
                flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-xl
                bg-white
                px-5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/90
              "
            >
              Download Resume
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}