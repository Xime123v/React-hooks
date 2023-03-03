import React from "react";
import './Logo.css';

export const Logo = () => {

    const logo = 'https://res.cloudinary.com/dml8ynouv/image/upload/v1677508001/Jimena/garfield_okuj1l.jpg';
    return (
      <img src={logo} alt="Logotipo"/>
    )
  }