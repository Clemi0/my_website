import "./globals.css";

export const metadata = {
  title: "Clementine | Tech Portfolio",
  description: "Modern tech portfolio for Clementine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-night text-white antialiased">
        {children}
      </body>
    </html>
  );
}
