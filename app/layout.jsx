import "./globals.css";

export const metadata = {
  title: "Tomás Deluca @ muShanghai 2026",
  description:
    "Landing de sponsorship para acompañar el viaje de Tomás Deluca a muShanghai 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
