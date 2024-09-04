import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.tsx",
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
