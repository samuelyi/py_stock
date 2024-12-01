import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Own Sound",
  description: "Made with love by the Qoneqt team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
