import "./globals.css";

/*export const metadata = {
  title:
    "Unified management, communication and networking platform for universities, businesses and individuals",
  description:
    "A revolutionary digital platform for universities, students and businesses, promoting access to higher education and employability of young people.",
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
