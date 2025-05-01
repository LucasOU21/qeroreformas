// These are the suggested updates to make to your constants file where site configuration is stored
// Typically this would be in a file like data/constants.ts or similar

import ogImage from "@images/social.png"; // Import the image properly

export const SITE = {
  title: "Kalia Reformas y Decoración", // Changed from "Qero" to "Kalia"
  description: "Diseño personalizado • Calidad excepcional • Precio inmejorable",
  author: "Kalia Reformas",  // Changed author name 
  url: "https://kaliareformas.com" // Changed domain name if applicable
};

export const SEO = {
  // Your existing SEO settings
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kalia Reformas y Decoración", // Updated name
    // Other SEO properties...
  }
};

export const OG = {
  title: "Kalia Reformas y Decoración - Espacios excepcionales", // Updated title
  description: "Transformamos espacios en hogares que reflejan su estilo personal.",
  image: ogImage // Use the imported image instead of a string path
};