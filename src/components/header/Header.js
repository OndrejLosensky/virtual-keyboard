import React from "react";
import refreshIcon from "../../assets/refreshIcon.png"

const Header = () => {


    return (
        <div className="pl-20 pr-4 pt-2">
            <div className="w-[100%] h-[60px] border-b-[2px] border-b-foreColorWhite  flex items-center">
                <h1 className="w-full tablet:font-normal laptop:font-bold bigScreen:font-bold uppercase text-4xl text-center py-10 font-bold text-foreColorWhite">
                    Virtual-keyboard
                </h1>

                 {/*přidání tlačítka, které vždy obnoví stránku po kliknutí na něj*/}
            <div className="cursor-pointer">
              <img src={refreshIcon} alt="refresh" onClick={() => window.location.reload()}/>
            </div>
            </div>
            <div>
               
            </div>
       </div>
        
    )
}

export default Header