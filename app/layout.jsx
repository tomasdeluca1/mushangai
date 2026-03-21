import "./globals.css";

export const metadata = {
  title: "Tomás Deluca @ muShanghai 2026",
  description:
    "Sponsorship landing page for Tomás Deluca's muShanghai 2026 journey.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
