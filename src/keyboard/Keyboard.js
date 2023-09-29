import React from "react";
import DisplayKey from "../displayKey/DisplayKey";
import ButtonKey from "../button/ButtonKey";

const Keyboard = () => {
    return (
        <div>
            <DisplayKey/>
                <div className="flex justify-center items-center h-screen">
                    <div className=" h-[45%] w-[48%] flex flex-col gap-2 " >

                        {/* Vrchní řada znaků ESC - F9*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="esc" />
                            <ButtonKey text="f1" />
                            <ButtonKey text="f2" />
                            <ButtonKey text="f3" />
                            <ButtonKey text="f4" />
                            <ButtonKey text="f5" />
                            <ButtonKey text="f6" />
                            <ButtonKey text="f7" />
                            <ButtonKey text="f8" />
                            <ButtonKey text="F9" />
                            <ButtonKey text="\ |" />
                        </div>

                     
                        {/* druhá řada znaků ; - DELETE*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text=";"/>
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

                        {/* Třetí řada znaků TAB - ENTER*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="Tab"/>
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
                            <ButtonKey text="ent"/>
                        </div>


                        {/* Čtvrtá řadu znaků CAPS - AC */}
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
                            <ButtonKey text="AC"/>
                        </div>
                            
                        {/* Pátá řada znaků CONTROL - <>*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="control"/>
                            <ButtonKey text="y"/>
                            <ButtonKey text="x"/>
                            <ButtonKey text="c"/>
                            <ButtonKey text="v"/>
                            <ButtonKey text="b"/>
                            <ButtonKey text="n"/>
                            <ButtonKey text="m"/>
                            <ButtonKey text="?"/>
                            <ButtonKey text="alt"/>
                            <ButtonKey text="<>"/>
                        </div>   

                        {/* Poslední řada znaků FN - OPTION*/}
                        <div className="flex flex-row gap-2">
                        </div>     

                    </div>
                </div>
        </div>
       
       
    
    )
}

export default Keyboard