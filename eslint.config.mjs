module.exports = {
  // If you extend Next.js presets, you might have:
  extends: [
    "next",
    "next/core-web-vitals"
  ],
  rules: {
    // Disable unescaped entity warnings in JSX
    "react/no-unescaped-entities": "off",
    // Disable warning for using <img> elements in Next.js
    "@next/next/no-img-element": "off"
  }
};
