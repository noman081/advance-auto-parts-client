module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        manufacture: {
          primary: "#ff7607",
          secondary: "#1c293c",
          accent: "#0a3f66",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
