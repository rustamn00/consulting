/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        headerBack: `linear-gradient(0deg, rgba(169, 97, 10, 0.5), rgba(169, 97, 10, 0.5)),
        url("../public/assets/header.png")`,
        headerMobiBack: `linear-gradient(0deg, rgba(169, 97, 10, 0.5), rgba(169, 97, 10, 0.5)),
        url("../public/assets/mobileBack.png")`,
        aboutBack: `linear-gradient(0deg, rgba(36, 36, 36, 0.5), rgba(36, 36, 36, 0.5)), 
        url("../public/assets/aboutUs.png")`,
        aboutMobiBack: `linear-gradient(0deg, rgba(169, 97, 10, 0.2), rgba(169, 97, 10, 0.2)), 
        url("../public/assets/aboutMobi.png")`,
        footerBack: `linear-gradient(0deg, rgba(169, 97, 10, 0.5), rgba(169, 97, 10, 0.5)), 
        url("../public/assets/footerBg.png")`,
        footerMobiBack: `linear-gradient(0deg, rgba(169, 97, 10, 0.5), rgba(169, 97, 10, 0.5)), 
        url("../public/assets/footerMobi.png")`,

        hero_pattern: "url('/head-bg.png')",
        feature_pattern: "url('/features-bg.png')",
        econom: "url('/econom-bg.png')",
        // footer: "url('/footer-bg.png')",
        discount: "url('/discount.png')",
        discount_ph: "url('/discount-ph.png')",
        footer: "url('/footer.png')",
        right: "url('/right-arrow.png')",
        head: "url('/head.jpg')",
        video: "url('/video-bg.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
