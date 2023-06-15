import '../styles/globals.scss';

import { Sidebar, Navbar } from '../components';

export const metadata = {
  title: 'Josef Hrůza',
  description: 'Junior Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
