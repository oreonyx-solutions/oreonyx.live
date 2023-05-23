import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en"; // Set the default locale here if needefd

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
