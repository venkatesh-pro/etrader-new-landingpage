import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../../globals.css";
import ConfiguratorSubmitNavbar from "@/components/Navbar/ConfiguratorSubmitNavbar";

const geistSans = localFont({
  src: "../../../fonts/Universal-Sans-Display-350.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "confirmed",
  description: "confirmed",
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
        }}
      >
        <ConfiguratorSubmitNavbar />
        {children}
      </body>
    </html>
  );
}
