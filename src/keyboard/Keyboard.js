import React, {useState} from "react";
import DisplayKey from "../displayKey/DisplayKey";
import ButtonKey from "../button/ButtonKey";

const Keyboard = () => {

  const [x, setX] = useState('');

  const handleButtonClick = (newValue) => {
    setX(newValue);
  };
    return (
        <div>
            <DisplayKey/>
                <div className="flex justify-center items-center h-screen">
                    <div className=" h-[45%] w-[48%] flex flex-col gap-2 " >

                     <h3 className="text-foreColorWhite"> hodnota je: {x} </h3>

                        {/* Vrchní řada znaků ESC - F9*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="esc" onClick={() => handleButtonClick('escape')}/>
                            <ButtonKey text="f1"  onClick={() => handleButtonClick('F1')}/>
                            <ButtonKey text="f2"  onClick={() => handleButtonClick('F2')}/>
                            <ButtonKey text="f3"  onClick={() => handleButtonClick('F3')}/>
                            <ButtonKey text="f4"  onClick={() => handleButtonClick('F4')}/>
                            <ButtonKey text="f5"  onClick={() => handleButtonClick('F5')}/>
                            <ButtonKey text="f6"  onClick={() => handleButtonClick('F6')}/>
                            <ButtonKey text="f7"  onClick={() => handleButtonClick('F7')}/>
                            <ButtonKey text="f8"  onClick={() => handleButtonClick('F8')}/>
                            <ButtonKey text="F9"  onClick={() => handleButtonClick('F9')}/>
                            <ButtonKey text="\ |" onClick={() => handleButtonClick('|')}/>

                        </div>

  
                        {/* druhá řada znaků ; - DELETE*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text=";" onClick={() => handleButtonClick(';')}/>
                            <ButtonKey text="1" onClick={() => handleButtonClick('1')}/>
                            <ButtonKey text="2" onClick={() => handleButtonClick('2')}/>
                            <ButtonKey text="3" onClick={() => handleButtonClick('3')}/>
                            <ButtonKey text="4" onClick={() => handleButtonClick('4')}/>
                            <ButtonKey text="5" onClick={() => handleButtonClick('5')}/>
                            <ButtonKey text="6" onClick={() => handleButtonClick('6')}/>
                            <ButtonKey text="7" onClick={() => handleButtonClick('7')}/>
                            <ButtonKey text="8" onClick={() => handleButtonClick('8')}/>
                            <ButtonKey text="9" onClick={() => handleButtonClick('9')}/>
                            <ButtonKey text="10" onClick={() => handleButtonClick('0')}/>
                            <ButtonKey text="delete" onClick={() => handleButtonClick('delete')}/>
                        </div>

                        {/* Třetí řada znaků TAB - ENTER*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="Tab" onClick={() => handleButtonClick('TAB')}/>
                            <ButtonKey text="Q" onClick={() => handleButtonClick('Q')}/>
                            <ButtonKey text="W" onClick={() => handleButtonClick('W')}/>
                            <ButtonKey text="E" onClick={() => handleButtonClick('E')}/>
                            <ButtonKey text="r" onClick={() => handleButtonClick('R')}/>
                            <ButtonKey text="t" onClick={() => handleButtonClick('T')}/>
                            <ButtonKey text="z" onClick={() => handleButtonClick('Z')}/>
                            <ButtonKey text="u" onClick={() => handleButtonClick('U')}/>
                            <ButtonKey text="i" onClick={() => handleButtonClick('I')}/>
                            <ButtonKey text="o" onClick={() => handleButtonClick('O')}/>
                            <ButtonKey text="p" onClick={() => handleButtonClick('P')}/>
                            <ButtonKey text="ent" onClick={() => handleButtonClick('ENTER')}/>
                        </div>


                        {/* Čtvrtá řadu znaků CAPS - AC */}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="caps"/>
                            <ButtonKey text="a" onClick={() => handleButtonClick('A')}/>
                            <ButtonKey text="s" onClick={() => handleButtonClick('S')}/>
                            <ButtonKey text="d" onClick={() => handleButtonClick('D')}/>
                            <ButtonKey text="f" onClick={() => handleButtonClick('F')}/>
                            <ButtonKey text="g" onClick={() => handleButtonClick('G')}/>
                            <ButtonKey text="h" onClick={() => handleButtonClick('H')}/>
                            <ButtonKey text="j" onClick={() => handleButtonClick('J')}/>
                            <ButtonKey text="k" onClick={() => handleButtonClick('K')}/>
                            <ButtonKey text="l" onClick={() => handleButtonClick('L')}/>
                            <ButtonKey text="ů" onClick={() => handleButtonClick('Ů')}/>
                            <ButtonKey text="AC" onClick={() => handleButtonClick('AC')}/>
                        </div>
                            
                        {/* Pátá řada znaků CONTROL - <>*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="control"/>
                            <ButtonKey text="y" onClick={() => handleButtonClick('Y')}/>
                            <ButtonKey text="x" onClick={() => handleButtonClick('X')}/>
                            <ButtonKey text="c" onClick={() => handleButtonClick('C')}/>
                            <ButtonKey text="v" onClick={() => handleButtonClick('V')}/>
                            <ButtonKey text="b" onClick={() => handleButtonClick('B')}/>
                            <ButtonKey text="n" onClick={() => handleButtonClick('N')}/>
                            <ButtonKey text="m" onClick={() => handleButtonClick('M')}/>
                            <ButtonKey text="?" onClick={() => handleButtonClick('?')}/>
                            <ButtonKey text="alt" onClick={() => handleButtonClick('ALT')}/>
                            <ButtonKey text="<>" onClick={() => handleButtonClick('<')}/>
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