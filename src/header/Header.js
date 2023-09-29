import React from "react";

const Header = () => {
    return (
        <div className="w-full h-[80px] border-b-[1px] border-b-foreColorWhite">
            <div className="text-foreColorWhite flex flex-row justify-center">
                <h1 className="uppercase text-4xl text-center py-4 font-semiBold"> Virtuální klávesnice</h1>
                <button className=""> Obnovit </button>
            </div>
        </div>
    )
}

export default Header