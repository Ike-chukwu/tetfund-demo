import { Inter } from "next/font/google";
import "./globals.css";
import styles from "../../tetfund/public/styles/layout.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tetfund",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layoutParent}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
