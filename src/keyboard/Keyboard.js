import React from "react";
import ButtonKey from "../button/ButtonKey";

const Keyboard = () => {
    return (
        <div className=" bg-foreColorBlue flex flex-col gap-2" >
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
            </div>

            <div className="flex flex-row gap-2">
                <ButtonKey text="a"/>
                <ButtonKey text="s"/>
                <ButtonKey text="d"/>
                <ButtonKey text="f"/>
                <ButtonKey text="g"/>
                <ButtonKey text="h"/>
                <ButtonKey text="j"/>
                <ButtonKey text="k"/>
                <ButtonKey text="l"/>
            </div>
                
            <div className="flex flex-row gap-2">
                <ButtonKey text="y"/>
                <ButtonKey text="x"/>
                <ButtonKey text="c"/>
                <ButtonKey text="v"/>
                <ButtonKey text="b"/>
                <ButtonKey text="n"/>
                <ButtonKey text="m"/>
            </div>        
        </div>
       
    
    )
}

export default Keyboard