import type { Metadata } from "next";
import localFont from "next/font/local";
// import ConfiguratorNavbar from "@/components/Navbar/ConfiguratorNavbar";
import "../../globals.css";

const geistSans = localFont({
  // src: "../../fonts/Universal-Sans-Display-350.ttf",
  // variable: "--font-geist-sans",
  // weight: "100 900",
  src: [
    {
      path: "../../fonts/Universal-Sans-Display-350.ttf",
      weight: "350",
    },
    {
      path: "../../fonts/Universal-Sans-Display-400.ttf",
      weight: "400",
    },
    {
      path: "../../fonts/Universal-Sans-Display-450.ttf",
      weight: "450",
    },
    {
      path: "../../fonts/Universal-Sans-Display-500.ttf",
      weight: "500",
    },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Configurator",
  description: "Configurator",
};

export default function ConfiguratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <div
          style={
            {
              // background: "white",
              // color: "black",
              // height: "100%",
              // overflow: "hidden",
            }
          }
        >
          {/* <ConfiguratorNavbar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
