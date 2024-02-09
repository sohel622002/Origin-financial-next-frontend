import localFont from "next/font/local";

const touche = localFont({
  src: [
    {
      path: "./touche-font/Touche-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./touche-font/Touche-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./touche-font/Touche-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./touche-font/Touche-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./touche-font/Touche-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./touche-font/Touche-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./touche-font/Touche-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./touche-font/Touche-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./touche-font/Touche-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./touche-font/Touche-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ]
});

export default touche;