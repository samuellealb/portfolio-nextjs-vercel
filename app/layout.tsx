import "@/src/styles/index.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}

export const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div id="wrapper--body">
        <div id="container--sf">{children}</div>
      </div>
      <footer id="footer">Footer</footer>
    </>
  );
};
