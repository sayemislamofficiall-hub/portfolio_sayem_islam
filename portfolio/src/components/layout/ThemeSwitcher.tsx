"use client";

import { useState } from "react";
import { Palette, Check } from "lucide-react";

const colors = [
  "#7c5cff",
  "#00c2ff",
  "#00d084",
  "#ff6b6b",
  "#ffb800",
];

export default function ThemeSwitcher() {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [isOpen, setIsOpen] = useState(false);

  const changeTheme = (color: string) => {
    setActiveColor(color);

    document.documentElement.style.setProperty(
      "--primary",
      color
    );

    setIsOpen(false);
  };

  return (
    <div
      className="
        fixed
        right-4
        top-4
        z-50
        sm:right-6
        sm:top-6
      "
    >
      <div className="relative">
        {/* Theme Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Change theme color"
          aria-expanded={isOpen}
          className="
            flex
            h-10
            w-10
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
            hover:-translate-y-0.5
            hover:text-white
            active:scale-95
            sm:h-11
            sm:w-11
          "
        >
          <Palette size={17} className="sm:h-[18px] sm:w-[18px]" />
        </button>

        {/* Color Picker */}
        <div
          className={`
            absolute
            right-0
            top-12
            origin-top-right
            rounded-2xl
            border
            border-white/10
            bg-[#111114]/95
            p-2.5
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-200
            sm:top-14
            sm:p-3
            ${
              isOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-95 opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-2">
            {colors.map((color) => {
              const isActive = activeColor === color;

              return (
                <button
                  key={color}
                  type="button"
                  onClick={() => changeTheme(color)}
                  aria-label={`Change theme to ${color}`}
                  aria-pressed={isActive}
                  className="
                    relative
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    transition-all
                    duration-200
                    hover:scale-110
                    active:scale-95
                    sm:h-8
                    sm:w-8
                  "
                  style={{
                    backgroundColor: color,
                    boxShadow: isActive
                      ? `0 0 14px ${color}`
                      : "none",
                  }}
                >
                  {isActive && (
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="text-white"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

