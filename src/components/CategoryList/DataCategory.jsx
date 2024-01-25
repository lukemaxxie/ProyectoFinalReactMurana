import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faVolumeHigh, faUtensils, faExplosion, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";

export const DataCategory = [
  {
    id: 1,
    title: "Todos",
    icon: <FontAwesomeIcon icon={faGlobe} style={{ color: "green" }} />,
    link: "/"
  },
  {
    id: 2,
    title: "Musicalizacion",
    icon: <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "green" }} />,
    link: "/catalogo/combos"
  },
  {
    id: 3,
    title: "Servicio de Lunch",
    icon: <FontAwesomeIcon icon={faUtensils} style={{ color: "green" }} />,
    link: "/catalogo/protector"
  },
  {
    id: 5,
    title: "Decoracion",
    icon: <FontAwesomeIcon icon={faExplosion} style={{ color: "green" }} />,
    link: "/catalogo/serum"
  },
  {
    id: 6,
    title: "Presupuesto",
    icon: <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: "green" }} />,
    link: "/catalogo/contorno"
  },
];
