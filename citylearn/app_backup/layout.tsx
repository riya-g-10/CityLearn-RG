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
      <body className={`${nunito.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen bg-background">
            <SideNavBar />
            <div className="flex-1 flex flex-col">
              <TopAppBar />
              <main className="flex-1 pt-16 p-6 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
