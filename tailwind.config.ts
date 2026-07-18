// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "var(--primary)",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}", // Added src prefix for components folder
    "./app/**/*.{js,ts,jsx,tsx}",             // Added root app folder fallback
    "./components/**/*.{js,ts,jsx,tsx}",     // Root components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Added typography plugin here
  ],
};

export default config;