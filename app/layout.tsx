import type { Metadata } from "next";
import { Header } from "@/src/features/Header";
import "@/src/styles/index.scss";

export const metadata: Metadata = {
  title: "Jeanne Dosse Portfolio",
  description: "Checkout Jeanne Dosse's work",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
