import { Press_Start_2P } from "next/font/google"
import localFont from "next/font/local"

export const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const vectorBattle = localFont({
  src: "../public/fonts/Vectorb.ttf",
})

export const simplex = localFont({
  src: "../public/fonts/Simplex.ttf",
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
})

export const hersheyDuplex = localFont({
  src: "../public/fonts/AVHersheyDuplexLight.otf",
})
