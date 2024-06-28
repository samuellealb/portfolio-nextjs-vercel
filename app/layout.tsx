import type { Metadata } from "next";
import { Header } from "./features/Header";
import "./styles/index.scss";

export const metadata: Metadata = {
  title: "Jeanne Dosse",
  description: "Jeanne Dosse - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <div className="stickyfooter-container">
            <Header></Header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
