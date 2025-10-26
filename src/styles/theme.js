// src/styles/theme.js

export const theme = {
  // 🎨 COLORS - Blue Palette
  colors: {
    // Primary Palette - Blue
    primary: "#2563eb",        // Vibrant blue
    primaryLight: "#4086f8ff",   // Lighter blue
    primaryDark: "#1646ccff",    // Darker blue

    // Accent & Secondary - Blue variants
    accent: "#60a5fa",         // Soft blue accent
    accentDark: "#1839a3ff",     // Deep blue
    secondary: "#1e40af",      // Secondary blue

    // Background - Dark with blue undertones
    background: {
      main: "#0b1222ff",         // Dark blue-black
      light: "#1e293b",        // Blue-gray
      dark: "#020617",         // Near black
      alt: "#1e293b",          // Alternate blue-gray
      deep: "#0f172a",         // Deep blue-black
    },

    // Text
    text: {
      main: "#f1f5f9",         // Light blue-gray
      light: "#f8fafc",        // Very light blue
      dark: "#000000",         // Black
      muted: "#64748b",        // Muted blue-gray
    },

    // Borders
    border: {
      light: "#334155",        // Medium blue-gray
      dark: "#1e293b",         // Dark blue-gray
    },

    // Grayscale - Blue tinted
    gray: {
      100: "#f8fafc",          // Lightest blue
      200: "#f1f5f9",          // Very light blue
      300: "#e2e8f0",          // Light blue-gray
      400: "#94a3b8",          // Medium blue-gray
      500: "#64748b",          // Blue-gray
      600: "#475569",          // Dark blue-gray
      700: "#334155",          // Darker blue-gray
    },

    // Scrollbar
    scrollbar: {
      primary: "#2563eb",      // Primary blue
      secondary: "#1e40af",    // Secondary blue
    },
  },

  // ✍️ TYPOGRAPHY
  typography: {
    body: {
      fontFamily: "'Sora', sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.6,
      footerText: "12px"
    },

    heading: {
      fontFamily: "'Sora', sans-serif",
      weight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      size: {
        h1: "60px",
        h2: "40px",
        h3: "30px",
        h4: "24px",
        h5: "22px",
        h6: "18px",
        subtitle: "36px",
      },
    },

    alt: {
      russo: "'Russo One', sans-serif",
      roboto: "'Roboto', sans-serif",
      robotoSlab: "'Roboto Slab', serif",
    },
  },

  // 🧱 TEXT VARIANTS
  textVariants: {
    primary: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 600,
    },
    secondary: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 400,
    },
    normal: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
    },
    accent: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
    },
  },

  media: {
    xs: "(max-width: 480px)",    // Mobile (portrait)
    sm: "(max-width: 576px)",    // Mobile (landscape)
    md: "(max-width: 768px)",    // Tablets
    lg: "(max-width: 992px)",    // Small laptops
    xl: "(max-width: 1200px)",   // Desktops
    xxl: "(max-width: 1400px)",  // Large screens
  },
};