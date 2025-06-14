export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Deltarune Online Hub",
    "description": "Experience Deltarune, the acclaimed episodic RPG by Toby Fox. Play Deltarune online and join Kris, Susie, and Ralsei on an epic Dark World adventure with turn-based combat and bullet-hell mechanics.",
    "url": "https://deltarune-arcade-hub.vercel.app",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "Toby Fox"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deltarune Online Hub"
    },
    "genre": ["Deltarune", "RPG", "Episodic RPG", "Adventure", "Indie"],
    "gamePlatform": ["Web Browser", "HTML5", "Windows", "macOS", "PlayStation", "Nintendo Switch"],
    "playMode": "SinglePlayer",
    "accessibilityFeature": [
      "keyboard navigation",
      "fullscreen support",
      "Deltarune save system"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "10",
      "ratingCount": "6",
      "bestRating": "10",
      "worstRating": "1"
    },
    "screenshot": [
      {
        "@type": "ImageObject",
        "url": "https://deltarune-arcade-hub.vercel.app/deltarune-screenshot-1.jpg",
        "description": "Deltarune gameplay screenshot showing Kris, Susie, and Ralsei in Dark World battle"
      },
      {
        "@type": "ImageObject",
        "url": "https://deltarune-arcade-hub.vercel.app/deltarune-screenshot-2.jpg",
        "description": "Deltarune Dark World exploration with main characters"
      }
    ],
    "featureList": [
      "Deltarune turn-based combat with bullet-hell mechanics",
      "Deltarune story by Toby Fox with Kris, Susie, and Ralsei",
      "Multiple Deltarune chapters and Dark World environments",
      "Play Deltarune online in browser",
      "Deltarune save progress functionality",
      "Deltarune compatible on mobile and desktop"
    ]
  };

  const gameStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Deltarune",
    "description": "Deltarune is an acclaimed episodic role-playing game by Toby Fox where players control Kris and explore the mysterious Dark World alongside Susie and Ralsei. Experience Deltarune's unique turn-based combat with bullet-hell mechanics.",
    "genre": ["Deltarune", "Episodic RPG", "Role-playing game", "Adventure", "Indie"],
    "gamePlatform": ["PC", "Web Browser", "Windows", "macOS", "PlayStation 4", "Nintendo Switch"],
    "playMode": "SinglePlayer",
    "author": {
      "@type": "Person",
      "name": "Toby Fox"
    },
    "datePublished": "2018-10-31",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "10",
      "ratingCount": "6",
      "bestRating": "10"
    },
    "character": [
      {
        "@type": "Person",
        "name": "Kris",
        "description": "The main protagonist of Deltarune, a silent human teenager"
      },
      {
        "@type": "Person",
        "name": "Susie",
        "description": "A rebellious monster classmate in Deltarune"
      },
      {
        "@type": "Person",
        "name": "Ralsei",
        "description": "The kind Dark Prince in Deltarune's Dark World"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Deltarune directly related to Undertale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to creator Toby Fox, Deltarune is set in an alternate universe, not a prequel or sequel to Undertale. While it shares some familiar characters and themes, it has a fresh story and new character roles."
        }
      },
      {
        "@type": "Question",
        "name": "Is this game multiplayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The first chapter of Deltarune offers a single-player adventure focused on story and strategy. There is no multiplayer mode currently available."
        }
      },
      {
        "@type": "Question",
        "name": "What are the system requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deltarune runs in your web browser using HTML5 technology. You need a modern browser and a stable internet connection. It works on desktop, tablet, and mobile devices."
        }
      },
      {
        "@type": "Question",
        "name": "Can I save my progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The game automatically saves your progress as you play. You can continue your adventure anytime by returning to the website."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
