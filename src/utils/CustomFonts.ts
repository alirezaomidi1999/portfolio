import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});
