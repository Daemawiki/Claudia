/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/assets/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      gray950: "#030712",
      gray900: "#111827",
      gray800: "#1F2937",
      gray700: "#374151",
      gray600: "#4B5563",
      gray500: "#6B7280",
      gray400: "#9CA3AF",
      gray300: "#D1D5DB",
      gray200: "#E5E7EB",
      gray100: "#F3F4F6",
      gray50: "#F9FAFB",

      red900: "#7F1D1D",
      red800: "#991B1B",
      red700: "#B91C1C",
      red600: "#DC2626",
      red500: "#EF4444",
      red400: "#F87171",
      red300: "#FCA5A5",
      red200: "#FECACA",
      red100: "#FEE2E2",
      red50: "#FEF2F2",

      lime950: "#1A2E05",
      lime900: "#365314",
      lime800: "#3F6212",
      lime700: "#4D7C0F",
      lime600: "#65A30D",
      lime500: "#84CC16",
      lime400: "#A3E635",
      lime300: "#BEF264",
      lime200: "#D9F99D",
      lime100: "#ECFCCB",
      lime50: "#F7FEE7",

      black: "#000000",
      white: "#FFFFFF",

      transparent: "transparent",
      current: "currentColor",
    },

    fontSize: {
      bold48: [
        "48px",
        {
          fontWeight: 700,
          lineHeight: "58px",
        },
      ],
      bold40: [
        "40px",
        {
          fontWeight: 700,
          lineHeight: "48px",
        },
      ],
      medium36: [
        "36px",
        {
          fontWeight: 500,
          lineHeight: "44px",
        },
      ],
      semibold36: [
        "32px",
        {
          fontWeight: 600,
          lineHeight: "38px",
        },
      ],
      bold36: [
        "36px",
        {
          fontWeight: 700,
          lineHeight: "44px",
        },
      ],
      bold32: [
        "32px",
        {
          fontWeight: 700,
          lineHeight: "38px",
        },
      ],

      medium28: [
        "28px",
        {
          fontWeight: 500,
          lineHeight: "34px",
        },
      ],
      semibold28: [
        "28px",
        {
          fontWeight: 600,
          lineHeight: "34px",
        },
      ],
      bold28: [
        "28px",
        {
          fontWeight: 700,
          lineHeight: "34px",
        },
      ],
      medium24: [
        "24px",
        {
          fontWeight: 500,
          lineHeight: "28px",
        },
      ],
      semibold24: [
        "24px",
        {
          fontWeight: 700,
          lineHeight: "28px",
        },
      ],
      medium20: [
        "20px",
        {
          fontWeight: 500,
          lineHeight: "24px",
        },
      ],
      semibold20: [
        "20px",
        {
          fontWeight: 600,
          lineHeight: "24px",
        },
      ],
      medium18: [
        "18px",
        {
          fontWeight: 500,
          lineHeight: "22px",
        },
      ],
      semibold18: [
        "18px",
        {
          fontWeight: 600,
          lineHeight: "22px",
        },
      ],
      medium16: [
        "16px",
        {
          fontWeight: 500,
          lineHeight: "20px",
        },
      ],
      semibold16: [
        "16px",
        {
          fontWeight: 600,
          lineHeight: "20px",
        },
      ],
      medium14: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "18px",
        },
      ],
      semibold14: [
        "14px",
        {
          fontWeight: 600,
          lineHeight: "18px",
        },
      ],
      medium12: [
        "12px",
        {
          fontWeight: 500,
          lineHeight: "14px",
        },
      ],
    },

    screens: {
      sm: { max: "719px" },
      md: { min: "720px", max: "1419px" },
      lg: { min: "1420px" },
    },
    keyframes: {
      bouncing: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.25)" },
      },
    },
    animation: {
      bouncing: "bouncing 0.5s ease-in-out",
    },
  },
  plugins: [],
};
