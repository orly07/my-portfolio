// src/styles/theme.js

export const theme = {
  // 🎨 COLORS
  colors: {
    // Primary Palette
    primary: "#8750f7",
    primaryLight: "#9b8dff",
    primaryDark: "#2400ff",

    // Accent & Secondary

    accent: "#8750F7",
    accentDark: "#2a1454",
    secondary: "#2a1454",

    // Background
    background: {
      main: "#140C1C",
      light: "#0e1418",
      dark: "#050709",
      alt: "#10171c",
      deep: "#151b1f",
    },

    // Text
    text: {
      main: "#DDDDDD",
      light: "#f6f3fc",
      dark: "#000000",
      muted: "#5c6266",
    },

    // Borders
    border: {
      light: "#2a343c",
      dark: "#1b2227",
    },

    // Grayscale
    gray: {
      100: "#f6f3fc",
      200: "#dddddd",
      300: "#d9d9d9",
      400: "#747779",
      500: "#636363",
      600: "#22272c",
      700: "#1b262e",
    },

    // Scrollbar
    scrollbar: {
      primary: "#8750f7",
      secondary: "#2a1454",
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
