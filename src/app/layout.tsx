import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import SessionIndicator from "@/components/SessionIndicator";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deltarune Online - Play the Epic RPG Adventure by Toby Fox",
  description: "Play Deltarune online for free. Join Kris, Susie, and Ralsei in Toby Fox's acclaimed RPG adventure. Enjoy turn-based combat and bullet-hell action now!",
  keywords: "",
  authors: [{ name: "Deltarune Online Hub" }],
  creator: "Deltarune Online Hub",
  publisher: "Deltarune Online Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deltarune-arcade-hub.vercel.app'),
  alternates: {
    canonical: 'https://deltarune.cc',
  },
  openGraph: {
    title: "Deltarune Online - Play the Epic RPG Adventure by Toby Fox",
    description: "Play Deltarune online for free. Join Kris, Susie, and Ralsei in Toby Fox's acclaimed RPG adventure.",
    url: 'https://deltarune-arcade-hub.vercel.app',
    siteName: 'Deltarune Online Hub',
    images: [
      {
        url: '/deltarune-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltarune Online - Epic RPG Adventure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Deltarune Online - Play the Epic RPG Adventure by Toby Fox",
    description: "Play Deltarune online for free. Join Kris, Susie, and Ralsei in Toby Fox's acclaimed RPG adventure.",
    images: ['/deltarune-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HJSFL4E6KB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HJSFL4E6KB');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s0ddodvjcf");
          `}
        </Script>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <SessionIndicator />
      </body>
    </html>
  );
}
