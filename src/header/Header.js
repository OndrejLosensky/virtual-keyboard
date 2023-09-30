import React from "react";
//import RefreshIcon from "../assets/refreshIcon.png"
const Header = () => {

   // funkce bude zavolána po kliknutí na "zde"
   const handleClick = () => {

    alert("Tato funkce momentálně není ještě dostupná");
  };

    return (
        <div className="px-8 pt-2">
            <div className="w-[100%] h-[60px] border-b-[2px] border-b-foreColorWhite  flex items-center">
                <h1 className="w-full tablet:font-normal laptop:font-semiBold bigScreen:font-bold uppercase text-4xl text-center py-10 font-bold text-foreColorWhite">
                    Virtuální klávesnice
                </h1>
            </div>
            <div>
                <p className="text-foreColorWhite pt-6  text-center text-lg font-thin">

                    Jednoduchá virtuální klávesnice, která zobrazuje jaké klávesy stisknete,<br/>
                    a také obsahuje funkci pro otestování funkčnosti vaší klávesnice <br/>
                    klávesnice je dostupná v českém rozložení a anglickém a ve verzích na Mac a Windows <br/>
                    kliknutím <span className="cursor-pointer text-foreColorOrange font-semibold" onClick={handleClick} style={{ textDecoration: "underline" }}> zde</span> spustíte test funkčnosti vaší klávesnice
                </p>
            </div>
       </div>
        
    )
}

export default Header