// src/app/layout.tsx
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import SideNavBar from "@/components/navigation/SideNavBar";
import TopAppBar from "@/components/navigation/TopAppBar";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "CityLearn | Urban Intelligence",
  description: "Cities Forget. CityLearn Remembers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Nunito+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
