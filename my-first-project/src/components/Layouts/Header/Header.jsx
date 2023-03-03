import React from 'react';
import { Logo } from "../../UI/Logo/Logo";
import {Navbar} from '../../UI/Navbar/Navbar';
import { Button } from "../../UI/Button/Button";
import './Header.css';
  
export const  Header = () => {;
  return(
    <header>
      <Logo/>
      <Navbar/>
      <Button/>
    </header>
  )
}