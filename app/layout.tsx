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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image:alt" content={metadata.og.imageAlt} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:locale" content={metadata.og.locale} />
        <meta property="og:site_name" content={metadata.og.siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta property="twitter:url" content={metadata.twitter.url} />
        <meta
          property="twitter:image:alt"
          content={metadata.twitter.imageAlt}
        />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
