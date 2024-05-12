import defaultColors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  $schema: "https://tailwindcss.com/docs/config.schema.json",
  content: ["content/**/*.md"],
  theme: {
    colors: {
      background: "#000000",
      foreground: "#080808",
      "foreground-80": "#232323",
      text: "#f0dedb",
      primary: "#d6a19a",
      secondary: "#33777e",
      accent: "#6857bb",
      "text-dimmed": "rgba(240, 222, 219, 0.5)",
      "secondary-30": "#0f2426",
      ...defaultColors,
    },
    extend: {
      backgroundImage: ({ theme }) => ({
        "gradient-primary": `linear-gradient(to right, ${theme("colors.primary")}, ${theme("colors.accent")})`,
      }),
    },
  },
};
