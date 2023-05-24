import "./globals.css";
import Head from "next/head";

export const metadata = {
  title:
    "Unified management, communication and networking platform for universities, businesses and individuals",
  description:
    "A revolutionary digital platform for universities, students and businesses, promoting access to higher education and employability of young people.",
  og: {
    title: "Oreonyx Technologies",
    type: "website",
    imageAlt: "Join Oreonyx Technologies",
    url: "https://www.oreonyx.com",
    description:
      "A revolutionary digital platform for universities, students and businesses, promoting access to higher education and employability of young people.",
    image:
      "https://res.cloudinary.com/shogunmp7/image/upload/v1675845644/oreonyx_swzmsi.png",
    locale: "en_US",
    siteName: "Oreonyx",
  },
  twitter: {
    card: "summary_large_image",
    site: "@oreonyxHQ",
    creator: "@oreonyxHQ",
    url: "https://oreonyx.com",
    imageAlt: "Join Oreonyx Technologies",
    title: "Oreonyx Technologies",
    description:
      "A revolutionary digital platform for universities, students and businesses, promoting access to higher education and employability of young people.",
    image:
      "https://res.cloudinary.com/shogunmp7/image/upload/v1675845644/oreonyx_swzmsi.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="Oreonyx Technologies" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/shogunmp7/image/upload/v1675845644/oreonyx_swzmsi.png"
        />
        <meta property="og:image:alt" content="Join Oreonyx Technologies" />
        <meta property="og:url" content="https://www.oreonyx.com" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Oreonyx" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@oreonyxHQ" />
        <meta name="twitter:creator" content="@oreonyxHQ" />
        <meta name="twitter:title" content="Oreonyx Technologies" />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/shogunmp7/image/upload/v1675845644/oreonyx_swzmsi.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
