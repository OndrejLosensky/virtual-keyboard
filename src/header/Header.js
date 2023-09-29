import React from "react";
//import RefreshIcon from "../assets/refreshIcon.png"
const Header = () => {
    return (
        <div className="">
            {/*
            <div className=" text-right">
                <button className="pr-8"> 
                    <img
                        className="cursor-pointer"
                        src={RefreshIcon}
                        alt="refresh"
                        height={30}
                        width={30}
                        onClick={() => window.location.reload()}
                    />
                </button>
            </div>
            */}

            <div className="w-[100%] h-[60px] border-b-[1px] border-b-foreColorWhite  flex items-center">
                <h1 className="w-full uppercase text-4xl text-center py-6 font-bold text-foreColorWhite">
                    Virtuální klávesnice
                </h1>
            </div>

          
        </div>
        
    )
}

export default Header