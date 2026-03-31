import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mushanghai.xyz"),
  title: "Tomás Deluca @ muShanghai 2026 | Sponsorship Journey",
  description:
    "Join Tomás Deluca (Huevo) on his 28-day journey to muShanghai 2026, the heart of the Chinese tech ecosystem. Support the mission and get exclusive market insights.",
  keywords: ["muShanghai", "Tomás Deluca", "Huevo", "China tech ecosystem", "AI", "Robotics", "Startups sponsorship"],
  authors: [{ name: "Tomás Deluca", url: "https://huevsite.io" }],
  creator: "Tomás Deluca",
  openGraph: {
    title: "Tomás Deluca @ muShanghai 2026 | Sponsorship Journey",
    description: "28 days in Shanghai building the future. Join as a sponsor and get direct access to the Chinese tech ecosystem.",
    url: "https://mushanghai.xyz",
    siteName: "muShanghai 2026 - Tomás Deluca",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "mushanghai — De Argentina a Alibaba HQ, Shanghai" }],
  },
  alternates: {
    canonical: "https://mushanghai.xyz",
    languages: {
      "en-US": "https://mushanghai.xyz/en",
      "es-AR": "https://mushanghai.xyz/es",
      "zh-CN": "https://mushanghai.xyz/zh",
    },
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Tomás Deluca @ muShanghai 2026",
    description: "Sponsorship landing page for Tomás Deluca's muShanghai 2026 journey.",
    creator: "@_huevsite",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "muShanghai 2026 Sponsorship Journey",
    "startDate": "2026-05-10",
    "endDate": "2026-06-07",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Shanghai",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shanghai",
        "addressCountry": "CN"
      }
    },
    "image": [
      "https://mushanghai.xyz/opengraph-image"
    ],
    "description": "Join Tomás Deluca (Huevo) on his 28-day journey to muShanghai 2026, the heart of the Chinese tech ecosystem.",
    "organizer": {
      "@type": "Person",
      "name": "Tomás Deluca",
      "url": "https://huevsite.io"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
