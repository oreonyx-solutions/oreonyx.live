import React from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en.json";
import frMessages from "@/locales/fr.json";

interface Messages {
  [key: string]: { [key: string]: string };
}

const messages: Messages = {
  en: enMessages,
  fr: frMessages,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const locale = "fr"; // Set the default locale here if needed

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <html lang={locale}>
        <body>{children}</body>
      </html>
    </IntlProvider>
  );
}
