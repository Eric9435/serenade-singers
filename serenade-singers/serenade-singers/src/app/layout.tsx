import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Serenade Singers",
  description: "Modern premium choir website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}
