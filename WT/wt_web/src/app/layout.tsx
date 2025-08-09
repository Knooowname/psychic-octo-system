import { Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers/Providers";
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body
        className={`${openSans.variable} antialiased h-screen flex items-center justify-center`}
      >
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
