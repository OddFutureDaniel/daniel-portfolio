import localFont from "next/font/local";

export const neueHaasDisplay = localFont({
  src: [
    {
      path: "../public/fonts/Neue-Haas-Grotesk-Display-Pro-75-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});