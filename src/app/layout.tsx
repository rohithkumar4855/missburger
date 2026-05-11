import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Miss Burger | Premium Fast Food Kiosk",
    template: "%s | Miss Burger"
  },
  description: "Experience the most premium fast food in Nellore, Tirupati, and Gudur. Burgers, Pizzas, Momos, and more. Freshly made happiness in every bite.",
  keywords: ["Miss Burger", "Fast Food", "Burgers Nellore", "Pizzas Tirupati", "Best Burgers Andhra", "Food Kiosk", "WhatsApp Ordering"],
  openGraph: {
    title: "Miss Burger | Premium Fast Food",
    description: "Freshly made happiness in every bite. Order your favorite fast food now!",
    url: "https://missburger.com",
    siteName: "Miss Burger",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Miss Burger",
    "image": "https://missburger.com/logo.png",
    "priceRange": "₹1–200",
    "servesCuisine": "Fast Food",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "28-2-1437, Kisan Nagar, Ram Nagar",
      "addressLocality": "Nellore",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "524002",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5000"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
