import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Cairo, Cairo_Play, Quicksand } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import NavbarSmall from "@/components/NavbarSmall/NavbarSmall";
import FooterSmall from "@/components/FooterSmall/FooterSmall";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dukkan - Home",
  description: "Dukkan - Home",
};

const i18nNamespaces = ["common"];

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <body
        dir={locale == "ar" ? "rtl" : "ltr"}
        className={locale == "ar" ? cairo.className : quicksand.className}
      >
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          {" "}
          <header>
            <Navbar />
            <NavbarSmall />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
            <FooterSmall />
          </footer>
        </TranslationsProvider>
      </body>
    </html>
  );
}
