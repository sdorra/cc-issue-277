import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.tsx",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    typographyPlugin
  ],
};
export default config;
