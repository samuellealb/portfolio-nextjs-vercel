import { Header } from "@/src/features/Header";
import "@/src/styles/index.scss";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <div id="wrapper--body">
          <div id="container--sf">
            <Header />
            <main>{children}</main>
          </div>
        </div>
        <footer id="footer">Footer</footer>
      </body>
    </html>
  );
}
