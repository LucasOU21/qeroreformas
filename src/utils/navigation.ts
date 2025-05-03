// Import necessary components and utilities
import { Image } from "astro:assets";
import kaliaLogo from "@images/logos/KaliaLogo-removebg.png";
import ThemeIcon from "@components/ThemeIcon.astro";

// Navigation data defined directly in the component
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Servicios", url: "/services" },
  { name: "Nosotros", url: "/nosotros" },
  // { name: "Equipo", url: "/equipo" },
  { name: "Blog", url: "/blog" },
  // { name: "Contacto", url: "/contact" },
];

const footerLinks = [
  {
    section: "Secciones",
    links: [
      { name: "Nosotros", url: "/nosotros" },
      { name: "Servicios", url: "/services" },
      { name: "Blog", url: "/blog" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/es/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};