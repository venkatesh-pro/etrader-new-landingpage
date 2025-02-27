import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      screens: {
        tabS: "713px",
        lapS: "1083px",
        lapL: "1440px",
        desktop: "1680px",
        desktopG: "1681px",
        custom927: "927px",
        custom1209: "1209px",
      },

      fontSize: {
        "desktop-header-xl": "var(--desktop-header-xl)",
        "desktop-header-lg": "var(--desktop-header-lg)",
        "desktop-header-md": "var(--desktop-header-md)",
        "desktop-header-sm": "var(--desktop-header-sm)",

        "desktop-body-xl": "var(--desktop-body-xl)",
        "desktop-body-lg": "var(--desktop-body-lg)",
        "desktop-body-md": "var(--desktop-body-md)",
        "desktop-body-sm": "var(--desktop-body-sm)",

        "mobile-header-xl": "var(--mobile-header-xl)",
        "mobile-header-lg": "var(--mobile-header-lg)",
        "mobile-header-md": "var(--mobile-header-md)",
        "mobile-header-sm": "var(--mobile-header-sm)",

        "mobile-body-xl": "var(--mobile-body-xl)",
        "mobile-body-lg": "var(--mobile-body-lg)",
        "mobile-body-md": "var(--mobile-body-md)",
        "mobile-body-sm": "var(--mobile-body-sm)",
      },
      colors: {
        "dark-red": "var(--dark-red)",
        "light-red": "var(--light-red)",
        silver: "var(--silver)",
        blue: "var(--blue)",

        "light-silver": "var(--light-silver)",
        background: {
          a: "var(--background-a)",
          b: "var(--background-b)",
          "alt-a": "var(--alt-background-a)",
          "alt-b": "var(--alt-background-b)",
        },
        header: {
          a: "var(--header-a)",
          b: "var(--header-b)",
        },
        "color-dark": "var(--text-color-dark)",
        button: {
          a: "var(--button-a)",
          "a-hover": "var(--button-a-hover)",
          "b-o30": "var(--button-b-o30)",
          "b-o40": "var(--button-b-o40)",
        },
        tab: {
          a: "var(--tab-a)",
          "a-hover": "var(--tab-a-hover)",
          b: "var(--tab-b)",
        },
        divider: {
          a: "var(--divider-a)",
          b: "var(--divider-b)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
