import React, { useState, useEffect } from "react";
import DisplayKey from "../displayKey/DisplayKey";
import ButtonKey from "../button/ButtonKey";
import InputKeyboard from "../inputKeyboard/InputKeyboard";
import ChangeKeyboard from "../changeKeyboard/ChangeKeyboard";


const Keyboard = () => {

  // eslint-disable-next-line
  const [x,setX] = useState('');
  const [clickedKeys, setClickedKeys] = useState([]);
  const [buttonColors, setButtonColors] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [buttonSuccess, setButtonSuccess] = useState({});
  const [isGreenToggleOn, setIsGreenToggleOn] = useState(false);
  const [keyboardLayout, setKeyboardLayout] = useState("eng"); // určuje, který layout se zobrazuje defaultně

    const handleLayoutChange = (layout) => {
      setKeyboardLayout(layout);
    };

    // AKtivuje klávesovou zkratku
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "s"){ 
        console.log("Klávesová zkratka: CTRL + S")
      } else if (e.shiftKey && e.key === " "){
        console.log("Klávesová zkratka: SHIFT + Spacebar")
      } else if (e.shiftKey && e.key === "D"){
        console.log("SHIFT + D")
      }
    }

  // Rozložení jednotlivých klávesnic
  const layouts = {
    eng: {
      row1: ["escape", "f1", "f2","f3", "f4", "f5","f6","f7","f8","f9","f10","f11"],
      row2: ["`", "1", "2", "3", "4", "5", "6","7", "8", "9", "0", "backspace",],
      row3: ["Tab", "Q", "W", "E", "R", "T", "y", "U", "I", "O", "P", "Enter",],
      row4: ["capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",],
      row5: ["shift", "z", "x", "c", "v", "b", "n", "m", "?",".","/", "alt",],
      row6: ["fn","control"," ","option",],
      // Anglická klávesnice
    },
    cz: {
      row1: ["escape", "f1", "f2","f3", "f4", "f5","f6","f7","f8","f9","f10","f11",],
      row2: ["<", "+", "ě","š", "č", "ř","ž","ý","á","í","=","backspace",],
      row3: ["Tab", "q", "w","e", "r", "t","z","u","i","o","p","Enter",],
      row4: ["capslock", "a", "s","d", "f", "g","h","j","k","l","ů","§",],
      row5: ["shift", "y", "x","c", "v", "b","n","m","?",".","-","alt",],
      row6: ["fn","control"," ","option",],
      // česká klávesnice
    },
    mac: {
      row1: ["escape", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "eject"],
      row2: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
      row3: ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
      row4: ["capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "return"],
      row5: ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", ],
      row6: ["fn", "control", "option", "command", " ",],
    },
    win: {
      row1: ["escape", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "prtsc"],
      row2: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"],
      row3: ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
      row4: ["capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "return"],
      row5: ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",],
      row6: ["ctrl", "win", "alt", " ",],
    },
  };

  const handlePhysicalKeyboardInput = (e) => {
    if (e.key === "backspace") {
      // smaže poslední přidaný charakter
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else {
      // řeší ostatní klávesy na fyzické klávesnici
      setInputValue((prevValue) => prevValue + e.key);
    }
  };

  const handleButtonClick = (newValue, buttonText) => {

    // Pole tlačítek, které chceme momentálně ignorovat
    const keysToIgnore = ["ENTER", "ALT","CAPSLOCK","escape","SHIFT", "OPTION", "CONTROL", "FN", "TAB", "ESCAPE", "F1", "F2", "F3","F4","F5","F6","F7","F8","F9","F10", "F11"];

    // Funkce, která kontroluje jestli je stisklá klávesa v listu ignorovaných
    if (keysToIgnore.includes(newValue)) {
      return; // Při kliknutí na jakékoliv tlačítko z tohoto pole se nic nebude dít (dříve to vypisovalo hodnotu tlačítka do INPUTU)
    }


    if (newValue === "BACKSPACE") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (newValue === " ") {
      setInputValue(inputValue + " "); // přidá jednu mezeru
    } else if ( newValue === "capslock"){
      newValue=newValue.toUpperCase;  
    } else {
      setX(newValue);
      setClickedKeys([...clickedKeys, buttonText]);
      setInputValue(inputValue + newValue);
    }
  

    setButtonSuccess((prevState) => ({
      ...prevState,
      [buttonText]: true,
    }));
  
    if (isGreenToggleOn) {
      // Označí tlačítko zeleně pokud je funkční
      setButtonSuccess((prevState) => ({
        ...prevState,
        [buttonText]: true,
      }));
    }
  };

  const logKeyPressed = (key, x) => {
    console.log(`Stisknutá klávesa: ${key}`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      setButtonColors((prevColors) => ({
        ...prevColors,
        [key]: true,
      }));
      logKeyPressed(key);
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      setButtonColors((prevColors) => ({
        ...prevColors,
        [key]: false,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keyup", handleKeyPress);

    // rozpoznává reálné klávesy od kliknutí na té virtuální
    window.addEventListener("keypress", handlePhysicalKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keypress", handlePhysicalKeyboardInput);
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

    return (
        <div >
            <div>
              <p className="text-foreColorWhite bigScreen:pt-8 laptop:pt-4 tablet:pt-2  text-center text-lg font-thin">

              Virtuální klávesnice, která zobrazuje stisklé klávesy<br/>
              je dostupná v Anglickém, Českém, Windows a Mac rozpoložení<br/>
              test klávesnice můžete spustit kliknutím <span className="cursor-pointer text-foreColorOrange font-semibold" onClick={() => setIsGreenToggleOn(!isGreenToggleOn)} style={{ textDecoration: "underline" }}>zde</span>

              </p>
              
            </div>

             
              {/* Input pole pro zobrazení napsaných znaků*/}
              <div className="pl-16 tablet:pt-2 tablet:px-16 laptop:pt-8 laptop:px-32 bigScreen:px-80 bigScreen:pt-48">
                  <InputKeyboard inputValue={inputValue} setInputValue={setInputValue} />
              </div>
           

                <div className="flex justify-start h-screen pt-4">
                 <div className="text-white rounded-lg text-foreColorWhite
                     absolute left-0 top-0 ml-8 mt-4 flex flex-row">

                      {/*Komponenta, která mění layout klávesnice z české na anglickou*/}
                      <div className="">
                        <ChangeKeyboard onLayoutChange={handleLayoutChange} />
                       
                      </div>
            
                  </div>  

                    <div className=" h-[45%] w-[100%] flex flex-col items-center text-left gap-2">

                        {/* Vrchní řada znaků ESC - F9*/}
                        <div className="flex flex-row gap-2">
                        {layouts[keyboardLayout].row1.map((key) => (
                          <ButtonKey
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
                            key={key}
                            text={key} // text je pouze to co se zobrazuje, tudíž je možné vytvořit vlastní pole 
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                            keyboardLayout={keyboardLayout} // Pass the current layout
                            isEscape={key === 'escape'}
                            isF10={key === 'f10'}
                            isF11={key === 'f11'}
                        
                            />
                          ))}
                        </div>

                        {/* druhá řada znaků ; - DELETE*/}
                        <div className="flex flex-row gap-2">
                        {layouts[keyboardLayout].row2.map((key) => (
                          <ButtonKey
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
                            key={key}
                            text={key}
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                            keyboardLayout={keyboardLayout} // Pass the current layout
                            isBackspace={key === 'backspace'}
                            />
                          ))}
                        </div>

                        {/* Třetí řada znaků TAB - ENTER*/}
                        <div className="flex flex-row gap-2">
                        {layouts[keyboardLayout].row3.map((key) => (
                          <ButtonKey
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
                            key={key}
                            text={key}
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                            keyboardLayout={keyboardLayout} // Pass the current layout
                            isEnter={key === 'Enter'}
                            isTab={key === 'Tab'}
                            />
                          ))}
                        </div>

                      
                        {/* Čtvrtá řadu znaků CAPS - AC */}   
                        <div className="flex flex-row gap-2">
                        {layouts[keyboardLayout].row4.map((key) => (
                          <ButtonKey
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
                            key={key}
                            text={key}
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                            keyboardLayout={keyboardLayout} // Pass the current layout
                            isCapsLock={key === 'capslock'}
                            />
                          ))}
                        </div>
                      
                            
                        {/* Pátá řada znaků CONTROL - <>*/}
                        <div className="flex flex-row gap-2">
                        {layouts[keyboardLayout].row5.map((key) => (
                          <ButtonKey
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
                            key={key}
                            text={key}
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                            keyboardLayout={keyboardLayout} // Pass the current layout
                            isAlt={key === 'alt'}
                            isControl={key === 'control'}
                            isShift={key === 'shift'}
                            />
                          ))}
                        </div>

                        {/* Poslední řada znaků FN - OPTION*/}
                        <div className="flex flex-row gap-2">
                        {layouts[keyboardLayout].row6.map((key) => (
                          <ButtonKey
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
                            key={key}
                            text={key}
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                            keyboardLayout={keyboardLayout} // Pass the current layout
                            isSpaceBar={key === ' '}
                            isControl={key === 'control'}
                            isOption={key === 'option'}
                            />
                          ))}
                        </div> 
                        
                        {/* Zobrazuje naposledy stisklou klávesu v pravém dolním rohu*/}
                        </div>  
                          <div className="text-foreColorWhite absolute bottom-0 ml-8 left-0 mb-6">
                            <div>
                              <DisplayKey/>
                            </div>
                          </div>   

                          {/* ZOBRAZUJE VÝPIS FUNKČNOSTI KLÁVESNICE PO SPUŠTĚNÍ TESTU*/}
                          {/*<div class="fixed bottom-0 left-0 right-0 flex items-center justify-center">
                              <p class="mb-2 text-foreColorWhite">Your keyboard is working 100%</p>
                        </div>*/}

              
                </div>         
                      
               
        </div>            
    )
}

export default Keyboard