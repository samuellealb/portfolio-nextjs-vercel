import '@/src/styles/index.scss';
import { Base } from '@/src/layouts/Base';

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <Base>{children}</Base>
      </body>
    </html>
  );
}
