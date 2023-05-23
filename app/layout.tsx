import React from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import enMessages from "@/locales/en.json";
import frMessages from "@/locales/fr.json";

interface Messages {
  [key: string]: { [key: string]: string };
}

const messages: Messages = {
  en: enMessages,
  fr: frMessages,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { locale } = router;

  // Provide a fallback value for the locale
  const selectedLocale = locale ?? "en";

  return (
    <IntlProvider
      locale={selectedLocale}
      messages={messages[selectedLocale as keyof Messages]}
    >
      <html lang={selectedLocale}>
        <body>{children}</body>
      </html>
    </IntlProvider>
  );
}
