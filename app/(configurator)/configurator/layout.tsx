import type { Metadata } from "next";
import localFont from "next/font/local";
// import ConfiguratorNavbar from "@/components/Navbar/ConfiguratorNavbar";
import "../../globals.css";

const geistSans = localFont({
  src: "../../fonts/Universal-Sans-Display-350.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
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
      <body
        className={`${geistSans.className} antialiased`}
        style={{
          background: "white",
          color: "black",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* <ConfiguratorNavbar /> */}
        {children}
      </body>
    </html>
  );
}
