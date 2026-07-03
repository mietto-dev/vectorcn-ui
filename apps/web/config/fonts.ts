import localFont from "next/font/local"

export const vectorBattle = localFont({
  src: "../public/fonts/Vectorb.ttf",
  variable: "--font-vector-battle",
})

export const simplex = localFont({
  src: "../public/fonts/Simplex.ttf",
  variable: "--font-simplex",
})

export const hershey = localFont({
  src: [
    {
      path: "../public/fonts/AVHersheySimplexLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/AVHersheySimplexMedium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AVHersheySimplexHeavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hershey",
})

export const hersheyDuplex = localFont({
  src: "../public/fonts/AVHersheyDuplexLight.otf",
  variable: "--font-hershey-duplex",
})
