
import React from 'react';

import { SectionContact } from "./SectionContact/SectionContact";
import { Copyright } from "./Copyrights";
export const Footer = () => {
  return (
    // FOOTER

    <footer className="h-auto d-flex justify-content-center align-items-center flex-wrap mt-lg-3 mt-5" >
       <SectionContact/>
 
    <Copyright/>
     
    </footer>
  );
};