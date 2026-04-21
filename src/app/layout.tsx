import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://referencesalon.com"),
  title: "Reference Salon | Premium Hair & Beauty Salon in Ashaley Botwe",
  description:
    "Reference Salon is your trusted hair and beauty destination in Ashaley Botwe, Greater Accra for styling, facials, manicures, and premium self-care experiences.",
  keywords: [
    "hair salon in Ashaley Botwe",
    "beauty salon in Greater Accra",
    "hair and beauty salon Ghana",
    "salon near me",
    "manicure and pedicure Ashaley Botwe",
    "hair styling salon Accra",
    "facials and skincare salon Ghana",
  ],
  openGraph: {
    title: "Reference Salon | Hair & Beauty in Ashaley Botwe",
    description:
      "Beautiful hair, confident you. Discover premium beauty care and warm hospitality at Reference Salon.",
    type: "website",
    locale: "en_GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
