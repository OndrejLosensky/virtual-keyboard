import React from "react";
import ButtonKey from "../button/ButtonKey";

const Keyboard = () => {
    return (
        <div className=" h-[88%] flex flex-col gap-2 justify-center items-center" >

            <div className="flex flex-row gap-2">
                <ButtonKey text="1"/>
                <ButtonKey text="2"/>
                <ButtonKey text="3"/>
                <ButtonKey text="4"/>
                <ButtonKey text="5"/>
                <ButtonKey text="6"/>
                <ButtonKey text="7"/>
                <ButtonKey text="8"/>
                <ButtonKey text="9"/>
                <ButtonKey text="10"/>
                <ButtonKey text="delete"/>
            </div>
        
            <div className="flex flex-row gap-2">
                <ButtonKey text="Q"/>
                <ButtonKey text="W"/>
                <ButtonKey text="E"/>
                <ButtonKey text="r"/>
                <ButtonKey text="t"/>
                <ButtonKey text="z"/>
                <ButtonKey text="u"/>
                <ButtonKey text="i"/>
                <ButtonKey text="o"/>
                <ButtonKey text="p"/>
                <ButtonKey text="enter"/>
            </div>

            <div className="flex flex-row gap-2">
                <ButtonKey text="caps"/>
                <ButtonKey text="a"/>
                <ButtonKey text="s"/>
                <ButtonKey text="d"/>
                <ButtonKey text="f"/>
                <ButtonKey text="g"/>
                <ButtonKey text="h"/>
                <ButtonKey text="j"/>
                <ButtonKey text="k"/>
                <ButtonKey text="l"/>
                <ButtonKey text="ů"/>
            </div>
                
            <div className="flex flex-row gap-2">
                <ButtonKey text="y"/>
                <ButtonKey text="x"/>
                <ButtonKey text="c"/>
                <ButtonKey text="v"/>
                <ButtonKey text="b"/>
                <ButtonKey text="n"/>
                <ButtonKey text="m"/>
                <ButtonKey text="shift"/>
            </div>        
        </div>
       
    
    )
}

export default Keyboard