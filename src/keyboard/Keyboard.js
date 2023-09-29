import React, { useState, useEffect } from "react";
import DisplayKey from "../displayKey/DisplayKey";
import ButtonKey from "../button/ButtonKey";

const Keyboard = () => {

  const [x, setX] = useState('');

  const handleButtonClick = (newValue) => {
    setX(newValue);
  };


  // Funkce pro zvýraznění klávesy, která je stisklá
  const [buttonColors, setButtonColors] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Změní barvu tlačítka, podle toho která klávesa je stisklá 
      const key = e.key.toLowerCase();
      setButtonColors((prevColors) => ({
        ...prevColors,
        [key]: true,
      }));
    };
    const handleKeyUp = (e) => {
        // Resetuje barvu jakmile se klávesa pustí
        const key = e.key.toLowerCase();
        setButtonColors((prevColors) => ({
          ...prevColors,
          [key]: false,
        }));
      };
  
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
  
      return () => {
        // odstraní EventListener jakmile je klávesa puštěna
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, []);


    return (
        <div>
            <DisplayKey/> {/*Zobrazuje zmačknuté klávesy na fyzické klávesnice*/}
            
             {/*Zobrazuje sktisknuté tlačítka na té virtuální*/}
            <h3 className="text-foreColorWhite flex justify-center items-center pt-2 text-lg"> Poslední kliknuté tlačítko: "{x}"  </h3>
                
                
                <div className="flex justify-center items-center h-screen">
                    <div className=" h-[45%] w-[48%] flex flex-col gap-2 " >

                     

                        {/* Vrchní řada znaků ESC - F9*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="esc" isHighlighted={buttonColors["escape"]} onClick={() => handleButtonClick('escape')}/>
                            <ButtonKey text="f1"  isHighlighted={buttonColors["f1"]} onClick={() => handleButtonClick('F1')}/>
                            <ButtonKey text="f2"  isHighlighted={buttonColors["f2"]} onClick={() => handleButtonClick('F2')}/>
                            <ButtonKey text="f3"  isHighlighted={buttonColors["f3"]} onClick={() => handleButtonClick('F3')}/>
                            <ButtonKey text="f4"  isHighlighted={buttonColors["f4"]} onClick={() => handleButtonClick('F4')}/>
                            <ButtonKey text="f5"  isHighlighted={buttonColors["f5"]} onClick={() => handleButtonClick('F5')}/>
                            <ButtonKey text="f6"  isHighlighted={buttonColors["f6"]} onClick={() => handleButtonClick('F6')}/>
                            <ButtonKey text="f7"  isHighlighted={buttonColors["f7"]} onClick={() => handleButtonClick('F7')}/>
                            <ButtonKey text="f8"  isHighlighted={buttonColors["f8"]} onClick={() => handleButtonClick('F8')}/>
                            <ButtonKey text="F9"  isHighlighted={buttonColors["f9"]} onClick={() => handleButtonClick('F9')}/>
                            <ButtonKey text="\ |" isHighlighted={buttonColors["|"]} onClick={() => handleButtonClick('|')}/>

                        </div>

  
                        {/* druhá řada znaků ; - DELETE*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text=";" isHighlighted={buttonColors[";"]} onClick={() => handleButtonClick(';')}/>
                            <ButtonKey text="1" isHighlighted={buttonColors["1"]} onClick={() => handleButtonClick('1')}/>
                            <ButtonKey text="2" isHighlighted={buttonColors["2"]} onClick={() => handleButtonClick('2')}/>
                            <ButtonKey text="3" isHighlighted={buttonColors["3"]} onClick={() => handleButtonClick('3')}/>
                            <ButtonKey text="4" isHighlighted={buttonColors["4"]} onClick={() => handleButtonClick('4')}/>
                            <ButtonKey text="5" isHighlighted={buttonColors["5"]} onClick={() => handleButtonClick('5')}/>
                            <ButtonKey text="6" isHighlighted={buttonColors["6"]} onClick={() => handleButtonClick('6')}/>
                            <ButtonKey text="7" isHighlighted={buttonColors["7"]} onClick={() => handleButtonClick('7')}/>
                            <ButtonKey text="8" isHighlighted={buttonColors["8"]} onClick={() => handleButtonClick('8')}/>
                            <ButtonKey text="9" isHighlighted={buttonColors["9"]} onClick={() => handleButtonClick('9')}/>
                            <ButtonKey text="10" isHighlighted={buttonColors["0"]} onClick={() => handleButtonClick('0')}/>
                            <ButtonKey text="delete" isHighlighted={buttonColors["backspace"]} onClick={() => handleButtonClick('DELETE')}/>
                        </div>

                        {/* Třetí řada znaků TAB - ENTER*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="Tab" isHighlighted={buttonColors["tab"]} onClick={() => handleButtonClick('TAB')}/>
                            <ButtonKey text="Q" isHighlighted={buttonColors["q"]} onClick={() => handleButtonClick('Q')}/>
                            <ButtonKey text="W" isHighlighted={buttonColors["w"]} onClick={() => handleButtonClick('W')}/>
                            <ButtonKey text="E" isHighlighted={buttonColors["e"]} onClick={() => handleButtonClick('E')}/>
                            <ButtonKey text="r" isHighlighted={buttonColors["r"]} onClick={() => handleButtonClick('R')}/>
                            <ButtonKey text="t" isHighlighted={buttonColors["t"]} onClick={() => handleButtonClick('T')}/>
                            <ButtonKey text="z" isHighlighted={buttonColors["z"]} onClick={() => handleButtonClick('Z')}/>
                            <ButtonKey text="u" isHighlighted={buttonColors["u"]} onClick={() => handleButtonClick('U')}/>
                            <ButtonKey text="i" isHighlighted={buttonColors["i"]} onClick={() => handleButtonClick('I')}/>
                            <ButtonKey text="o" isHighlighted={buttonColors["o"]} onClick={() => handleButtonClick('O')}/>
                            <ButtonKey text="p" isHighlighted={buttonColors["p"]} onClick={() => handleButtonClick('P')}/>
                            <ButtonKey text="ent" isHighlighted={buttonColors["enter"]} onClick={() => handleButtonClick('ENTER')}/>
                        </div>


                        {/* Čtvrtá řadu znaků CAPS - AC */}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="caps" isHighlighted={buttonColors["capslock"]} onClick={() => handleButtonClick('CAPS LOCK')}/>
                            <ButtonKey text="a" isHighlighted={buttonColors["a"]} onClick={() => handleButtonClick('A')}/>
                            <ButtonKey text="s" isHighlighted={buttonColors["s"]} onClick={() => handleButtonClick('S')}/>
                            <ButtonKey text="d" isHighlighted={buttonColors["d"]} onClick={() => handleButtonClick('D')}/>
                            <ButtonKey text="f" isHighlighted={buttonColors["f"]} onClick={() => handleButtonClick('F')}/>
                            <ButtonKey text="g" isHighlighted={buttonColors["g"]} onClick={() => handleButtonClick('G')}/>
                            <ButtonKey text="h" isHighlighted={buttonColors["h"]} onClick={() => handleButtonClick('H')}/>
                            <ButtonKey text="j" isHighlighted={buttonColors["j"]} onClick={() => handleButtonClick('J')}/>
                            <ButtonKey text="k" isHighlighted={buttonColors["k"]} onClick={() => handleButtonClick('K')}/>
                            <ButtonKey text="l" isHighlighted={buttonColors["l"]} onClick={() => handleButtonClick('L')}/>
                            <ButtonKey text="ů" isHighlighted={buttonColors["ů"]} onClick={() => handleButtonClick('Ů')}/>
                            <ButtonKey text="AC" isHighlighted={buttonColors["delete"]} onClick={() => handleButtonClick('AC')}/>
                        </div>
                            
                        {/* Pátá řada znaků CONTROL - <>*/}
                        <div className="flex flex-row gap-2">
                            <ButtonKey text="control" isHighlighted={buttonColors["control"]} onClick={() => handleButtonClick('CONTROL')}/>
                            <ButtonKey text="y" isHighlighted={buttonColors["y"]} onClick={() => handleButtonClick('Y')}/>
                            <ButtonKey text="x" isHighlighted={buttonColors["x"]} onClick={() => handleButtonClick('X')}/>
                            <ButtonKey text="c" isHighlighted={buttonColors["c"]} onClick={() => handleButtonClick('C')}/>
                            <ButtonKey text="v" isHighlighted={buttonColors["v"]} onClick={() => handleButtonClick('V')}/>
                            <ButtonKey text="b" isHighlighted={buttonColors["b"]} onClick={() => handleButtonClick('B')}/>
                            <ButtonKey text="n" isHighlighted={buttonColors["n"]} onClick={() => handleButtonClick('N')}/>
                            <ButtonKey text="m" isHighlighted={buttonColors["m"]} onClick={() => handleButtonClick('M')}/>
                            <ButtonKey text="?" isHighlighted={buttonColors["?"]} onClick={() => handleButtonClick('?')}/>
                            <ButtonKey text="alt" isHighlighted={buttonColors["alt"]} onClick={() => handleButtonClick('ALT')}/>
                            <ButtonKey text="<>" isHighlighted={buttonColors["<"]} onClick={() => handleButtonClick('<')}/>
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