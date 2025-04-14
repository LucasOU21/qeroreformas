// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Servicios", url: "/services" },
  { name: "Nosotros", url: "/nosotros" },
  // { name: "Equipo", url: "/equipo" },
  { name: "Blog", url: "/blog" },
  // { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  // {
  //   section: "Ecosystem",
  //   links: [
  //     { name: "Documentation", url: "/welcome-to-docs/" },
  //     { name: "Tools & Equipment", url: "/products" },
  //     { name: "Construction Services", url: "/services" },
  //   ],
  // },
  {
    section: "Secciones",
    links: [
      { name: "Nosotros", url: "/nosotros" },
      { name: "Servicios", url: "/services" },
      // { name: "Equipo", url: "/equipo" },
      { name: "Blog", url: "/blog" },
      // { name: "Contacto", url: "/contact" },
    ],
  },
];
// An object of links for social icons
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