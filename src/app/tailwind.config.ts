  /** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    // prefix: "tw-",
    media: false,
    theme: {
      fontSize: {
        
        18: "18px",
        20:"20px",
        24: "24px",
        14: "14px",
        12: "12px",
        16: "16px",
        30:"30px",
        56: "56px",
        36: "36px",
      },
  
  
      fontFamily: {
        sans: ["DM Sans", "sans-serif"]
      },
  
      extend: {}
    },
    plugins: []
  };