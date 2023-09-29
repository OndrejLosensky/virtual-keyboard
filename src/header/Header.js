import React from "react";
import RefreshIcon from "../assets/refreshIcon.png"
const Header = () => {
    return (
        <div className="w-full h-[80px] border-b-[1px] border-b-foreColorWhite flex justify-between items-center">
            
                <h1 className="uppercase text-4xl text-center py-4 font-semiBold mx-auto text-foreColorWhite">
                     Virtuální klávesnice
                </h1>

                <button className="px-8"> 
                    <img src={RefreshIcon} alt="refresh" height={30} width={30}/>
                </button>
           
        </div>
    )
}

export default Header