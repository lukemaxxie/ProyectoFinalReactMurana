
import React from "react";
import { BsTelephone, BsGeoAlt, BsEnvelopeHeart } from "react-icons/bs";
import { BsInstagram, BsFacebook, } from "react-icons/bs";

export const Contacts = [
  {
    id: 1,
    subtitle: "Encuéntranos",
    paragraph: "Maldonado, Uruguay",
    icon: (
      <BsGeoAlt
        className="fs-1 mt-lg-2 me-lg-0 me-3 mt-2"
        style={{ fontSize: "3rem", color:"#6f4ec2" }}
      />
    ),
  },
  {
    id: 2,
    subtitle: "Llámanos",
    paragraph: "+598 99 261 781",
    icon: (
      <BsTelephone
        className="fs-1 mt-lg-2 me-lg-0 me-3 mt-2"
        style={{ fontSize: "3rem", color:"#6f4ec2" }}
      />
    ),
  },
  {
    id: 3,
    subtitle: "Nuestro Email",
    paragraph: "pachamamaeventosuy@gmail.com",
    icon: (
      <BsEnvelopeHeart
        className="fs-1 mt-lg-2 me-lg-0 me-3 mt-2"
        style={{ fontSize: "3rem", color:"#6f4ec2" }}
      />
    ),
  },
];

export const Links = [
  { id: 1, link: ["Inicio", "Servicios", "Contacto" ] },
  { id: 2, link: ["Nosotras", "Galeria", ] },
];

export const Networks = [
{id: 1, icon: <BsInstagram   />,},
{id: 2, icon:<BsFacebook />},
 

];