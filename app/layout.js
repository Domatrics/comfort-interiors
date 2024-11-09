import "./globals.css";
import Fab from '../components/Fab';
import { Comfortaa} from 'next/font/google';

// Configure fonts
const comfortaa = Comfortaa({ subsets: ['latin']});

export const metadata = {
  title: "Comfort Interiors",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        {children}
        <Fab />
      </body>
    </html>
  );
}
