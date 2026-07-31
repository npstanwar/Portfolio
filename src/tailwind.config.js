module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Name this whatever you imported your font as
        display: ['"Clash Display"', "sans-serif"],
      },
      backgroundImage: {
        // Adjust the hex code to change the dot color. The '1px' defines the dot size.
        "dotted-pattern": "radial-gradient(#C4B5A5 1px, transparent 1px)",
      },
      backgroundSize: {
        // This controls the spacing/grid size between the dots
        "dotted-spacing": "24px 24px",
      },
    },
  },
};
