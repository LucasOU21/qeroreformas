
// Import necessary images featuresNavs
import muebles from "@images/montaje-muebles.jpg";
import diseño from "@images/muebles-disenio.jpg";
import electro from "@images/cocinas-electro.jpg";
import reformas from "@images/reformas-vivienda.jpg";
import acabados from "@images/acabados-papel-pintado.jpg";
import handyman from "@images/handyman.jpg";
import puertas from "@images/puerta-tarima-rodapies.jpg";

// Import necessary images Articles
import porqueElegirnos1 from "@images/porque-elegirnos-1.jpg";
import porqueElegirnos2 from "@images/porque-elegirnos-2.jpg";
import experiencia1 from "@images/experiencia-profesionalismo.jpg";
import solucionespersonalizadas1 from "@images/soluciones-personalizadas-1.png";
import solucionespersonalizadas2 from "@images/soluciones-personalizadas-3.png";
import ahorrocalidad1 from "@images/ahorro-calidad-1.jpg";
import cercaniacompromiso1 from "@images/cercania-compromiso-1.jpg";
import cercaniacompromiso2 from "@images/cercania-compromiso-2.jpg";

interface Article {
  isRightSection: boolean;
  title: string;
  subTitle: string | string[];
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
  single?: boolean;
  img?: any;
  imgAlt?: string;
  imgOne?: any;
  imgOneAlt?: string;
  imgTwo?: any;
  imgTwoAlt?: string;
}

interface EmailJS {
  key: string;
  service: string;
  template: string;
}

// An array of links for navigation bar
const featuresNavs = [
  {
    heading: "Montaje de muebles",
    // content: "",
    svg: "tools",
    src: muebles,
    alt: "montaje de muebles",
    first: true,
  },
  {
    heading: "Diseños de muebles a medida",
    // content: "",
    svg: "dashboard",
    src: diseño,
    alt: "diseños de muebles a medida",
    second: false,
  },
  {
    heading: "Instalación de cocinas y electrodomésticos",
    // content: "",
    svg: "kitchen",
    src: electro,
    alt: "instalación de cocinas y electrodomésticos",
  },
  {
    heading: "Reformas de vivienda",
    // content: "",
    svg: "house",
    src: reformas,
    alt: "reformas de vivienda",
  },
  {
    heading: "Acabados (papel pintado) y pintura",
    // content: "",
    svg: "paint",
    src: acabados,
    alt: "acabados (papel pintado) y pintura",
  },
  {
    heading: "Manitas",
    // content: "",
    svg: "manitas",
    src: handyman,
    alt: "manitas",
  },
  {
    heading: "Instalación de puertas, tarima flotante y rodapiés",
    // content: "",
    svg: "door",
    src: puertas,
    alt: "instalación de puertas, tarima flotante y rodapiés",
  },
];

const articles: Article[] = [
  {
    isRightSection: true,
    title: "¿Por qué elegirnos?",
    subTitle:
      [
        "✔ Montaje profesional de muebles Ikea, Leroy Merlin y otras marcas.",
        "✔ Diseños de muebles a medida para cualquier espacio.",
        "✔ Reformas de vivienda y acabados de alta calidad.",
        "✔ Instalación de cocinas, puertas, tarima flotante y electrodomésticos.",
        "✔ Servicio de manitas para pequeñas reparaciones y montajes."
      ],
    single: false,
    imgOne: porqueElegirnos1,
    imgOneAlt: "Cocina blanca con muebles de estilo moderno",
    imgTwo: porqueElegirnos2,
    imgTwoAlt: "Baño con muebles de estilo moderno",
  },
  {
    isRightSection: false,
    title: "Experiencia y profesionalismo",
    subTitle:
      "Contamos con un equipo de expertos en reformas y decoración con años de experiencia en el sector. Ya sea que necesites renovar completamente tu cocina, instalar muebles a medida o realizar reparaciones en tu hogar, garantizamos un trabajo impecable y profesional.",
    img: experiencia1,
    imgAlt: "experiencia y profesionalismo",
    btnExists: false,
    btnTitle: "Pide tu presupuesto",
    btnURL: "/contact",
  },
  {
    isRightSection: true,
    title: "Soluciones personalizadas y un servicio integral",
    subTitle:
      "Entendemos que cada cliente es único, por eso diseñamos proyectos adaptados a tus preferencias, presupuesto y estilo de vida. Nos aseguramos de que cada detalle, desde los materiales hasta el diseño final, refleje tus expectativas. Ofrecemos una amplia gama de servicios para que no tengas que preocuparte por nada. Desde la reforma completa de tu cocina hasta el montaje de muebles, pintura, electricidad y más, somos tu solución integral para cualquier proyecto en el hogar.",
    single: false,
    imgOne: solucionespersonalizadas1,
    imgOneAlt: "Soluciones personalizadas y un servicio integral - imagen 1",
    imgTwo: solucionespersonalizadas2,
    imgTwoAlt: "Soluciones personalizadas y un servicio integral - imagen 2",
  },
  {
    isRightSection: false,
    title: "Ahorro inteligente y Calidad garantizada",
    subTitle:
      "Sabemos que la economía importa, por eso diseñamos soluciones que combinan calidad y precios competitivos. Gracias a nuestra experiencia, seleccionamos los materiales y procesos más eficientes, optimizando recursos sin comprometer los resultados. Además, nuestros servicios integrales reducen costos al evitar la contratación de múltiples proveedores. Trabajamos con los mejores materiales y las últimas tendencias en diseño para garantizar acabados de alta calidad. Nos preocupamos por cada detalle, asegurando resultados duraderos y funcionales que maximizan tu inversión.",
    img: ahorrocalidad1,
    imgAlt:
      "Ahorro inteligente y Calidad garantizada - imagen 1",
  },
  {
    isRightSection: true,
    title: "Cercanía, confianza y compromiso con el medio ambiente",
    subTitle:
      "Como empresa local, estamos comprometidos con brindar un servicio cercano y confiable en la Comunidad de Madrid y alrededores. Nos enorgullece construir relaciones basadas en la honestidad y el respeto, asegurándonos de mantener la confianza entre nosotros durante todo el proceso. En Qero Reformas y Decoración también nos preocupamos por el impacto ambiental. Por eso, promovemos el uso de materiales sostenibles y prácticas responsables en cada proyecto, ayudándote a cuidar el medio ambiente mientras transformas tu hogar.",
    single: false,
    imgOne: cercaniacompromiso1,
    imgOneAlt: "Cercanía, confianza y compromiso con el medio ambiente - imagen 1",
    imgTwo: cercaniacompromiso2,
    imgTwoAlt: "Cercanía, confianza y compromiso con el medio ambiente - imagen 2",
    btnExists: false,
    btnTitle: "Contáctanos",
    btnURL: "/contact",
  },
];

const emailjs: EmailJS = {
  key:  "buPDmH_xE0zSZ7Z6q",
  service: 'service_uf0bunm',
  template: "template_gvvz1mw"
};

export default {
  featuresNavs,
  articles,
  emailjs,
};