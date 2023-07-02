import FeaturedCompanies from "./components/FeaturedCompanies";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import RateBlackStrip from "./components/RateBlackStrip";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-full">
        <header className="sticky top-0 z-[20]">
          <Header />
          <RateBlackStrip />
          <FeaturedCompanies />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
