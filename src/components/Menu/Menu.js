import React from "react";
import Brand from "../Brand/Brand";
import MenuLinks from "./MenuLinks/MenuLinks";
import { Button } from "../Global/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import { fetchWord } from "@/lang/fetchWord";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import UserDropdownBar from "../UserDropdownBar/UserDropdownBar";
import { useState } from "react";

const Menu = () => {
  const { lang } = useContext(LanguageContext);
  const shadow = `box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;`;
  return (
    <div className="shadow" style={{ boxShadow: shadow }}>
      <div className="container justify-between flex items-center py-4 ">
        <Brand />
        <div className="flex gap-4">
          <MenuLinks />
         
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
