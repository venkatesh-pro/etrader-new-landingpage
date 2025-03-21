import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../../globals.css";
import ConfiguratorSubmitNavbar from "@/components/Navbar/ConfiguratorSubmitNavbar";

const geistSans = localFont({
  // src: "../../../fonts/Universal-Sans-Display-350.ttf",
  // variable: "--font-geist-sans",
  // weight: "100 900",
  src: [
    {
      path: "../../../fonts/Universal-Sans-Display-350.ttf",
      weight: "350",
    },
    {
      path: "../../../fonts/Universal-Sans-Display-400.ttf",
      weight: "400",
    },
    {
      path: "../../../fonts/Universal-Sans-Display-450.ttf",
      weight: "450",
    },
    {
      path: "../../../fonts/Universal-Sans-Display-500.ttf",
      weight: "500",
    },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "confirmed",
  description: "confirmed",
};

export default function ConfiguratorConfirmedLayout({
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
        }}
      >
        <ConfiguratorSubmitNavbar />
        {children}
      </body>
    </html>
  );
}
