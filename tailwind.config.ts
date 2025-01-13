import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jet": "hsl(0, 0%, 22%)",
        "onyx": "hsl(240, 1%, 17%)",
        "gradient-jet": "hsl(240, 2%, 13%)",
        "eerie-black-1": "hsl(240, 2%, 13%)",
        "eerie-black-2": "hsl(240, 2%, 12%)",
        "smoky-black": "hsl(0, 0%, 7%)",
        "white-1": "hsl(0, 0%, 100%)",
        "white-2": "hsl(0, 0%, 98%)",
        "orange-yellow-crayola": "hsl(45, 100%, 72%)",
        "vegas-gold": "hsl(45, 54%, 58%)",
        "light-gray": "hsl(0, 0%, 84%)",
        "light-gray-70": "hsla(0, 0%, 84%, 0.7)",
        "bittersweet-shimmer": "hsl(0, 43%, 51%)",
      },

      backgroundImage: {
        "bg-gradient-onyx":
          "linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)",
        "bg-gradient-jet":
          "linear-gradient(to bottom right, hsla(240,1%,18%,0.251) 0%, hsla(240,2%,11%,0) 100%)",
        "bg-gradient-yellow-1":
          "linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)",
        "bg-gradient-yellow-2":
          "linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)",
        "border-gradient-onyx":
          "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
        "text-gradient-yellow":
          "linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))",
      },
      // Typography
      fontFamily: {
        // poppins: ['Poppins', 'sans-serif'],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        "fs-1": "32px",
        "fs-2": "24px",
        "fs-3": "26px",
        "fs-4": "18px",
        "fs-6": "15px",
        "fs-7": "15px",
        "fs-8": "12px",
      },
      fontWeight: {
        "fw-300": "300",
        "fw-400": "400",
        "fw-500": "500",
        "fw-600": "600",
      },

      // Shadows
      boxShadow: {
        "shadow-1": "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
        "shadow-2": "0 16px 30px hsla(0, 0%, 0%, 0.25)",
        "shadow-3": "0 16px 40px hsla(0, 0%, 0%, 0.25)",
        "shadow-4": "0 25px 50px hsla(0, 0%, 0%, 0.15)",
        "shadow-5": "0 24px 80px hsla(0, 0%, 0%, 0.25)",
        "shadow-6": "0 0 0 4px hsl(0, 0%, 22%)",
      },

      // Transitions
      transitionTimingFunction: {
        "transition-1": "ease",
        "transition-2": "ease-in-out",
      },
      transitionDuration: {
        "transition-1": "250ms",
        "transition-2": "500ms",
      },
      // Animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        scaleUp: "scaleUp 0.5s ease forwards",
        blinkingCircle: "blink 1s 10;",
      },
    },
  },
  plugins: [],
};
export default config;
