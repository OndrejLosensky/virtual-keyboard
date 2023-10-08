import Header from "./components/header/Header";
import Keyboard from "./components/keyboard/Keyboard";
//import backgroundImage from "./assets/backgroundImage.png"
import { useState } from "react";
import refreshIcon from "./assets/refreshIcon.png"

function App() {
  const [open, setOpen] = useState(true);

  const handleKeyPress = (e) => {
  if (e.shiftKey && (e.key === "d" || e.key === "D")) {
    // Otevřít sekci dokumentace
  }
  }

  return (

    <section className="w-full h-screen lg:h-full bg-backColor">
      <div className="flex flex-row">

        <div className={`${open ? "bigScreen:w-[60%] laptop:w-[70%]": "w-[95%]"} duration-300`}>
            <Header/>
            <Keyboard/>
        </div>
        {/* DOKUMENTACE*/}
        <div className={`${open ? "bigScreen:w-[40%] laptop:w-[30%] bg-docuBg": "w-[5%] bg-backColor"} duration-300 absolute text-docuText right-0 h-full`} >
          <button 
          className={`absolute text-foreColorWhite top-2 px-2 bigScreen:left-4 laptop:left-2 rounded-full  border-4 ${open && "rotate-180 text-arrowColor"}`}
           style={{"fontSize": "32px", "scale": "75%"}}
          onClick={()=>setOpen(!open)}
          >
            ←
          </button>
          <div className={`border-b-[2px] h-[60px] text-2xl border-b-foreColorWhite mt-2 ${open && 'scale-0'}`}></div>

          <h2 className={`bigScreen:text-4xl laptop:text-2xl uppercase text-center pt-6 font-semibold ${!open && 'scale-0'} duration-300`}> dokumentace</h2>
          
          {/*přidání tlačítka, které vždy obnoví stránku po kliknutí na něj*/}
          <div className={`${!open && 'scale-0'} cursor-pointer absolute right-0 top-0 mt-7 mr-4 w-[40px] h-[40px]`}>
              <img src={refreshIcon} alt="refresh" onClick={() => window.location.reload()}/>
          </div>

          <div className={`${!open && 'scale-0'} duration-500`} style={{ overflowY: 'auto', maxHeight: '100%', paddingRight: '0px' }}>
            <p className="text-center bigScreen:text-xl laptop:text-md laptop:px-20 pt-6 pb-12"> 
              Zde se nachází kompletní dokumentace k této aplikaci <br/>
              Najdete zde návod, obsah funkcí i chyby, které aplikace má <br/>
              také bude ke stažení samostatná klávesnice jako NPM PACKAGE
            </p>
            <div className="text-center">
              <h3 className="uppercase font-bold text-2xl laptop:text-xl py-2"> Funkce</h3>
                <p> <span className="font-semibold text-xl">Klávesnice má zkratky pro ovládání:</span> <br/> SHIFT + SPACEBAR  =  Změní typ klávesnice <br/> CTRL + R  =  Obnoví stránku</p>
              <h3 className="uppercase font-bold text-2xl text-center laptop:text-xl py-2"> Vzhled</h3>
                <p> <span className="font-semibold text-xl">Seznam všech použitých barev: </span> <br/> Barva pozadí : "#ffffff" <br/> Barva textu : "#ffffff" <br/> Barva kláves : "#ffffff" <br/> </p>
              <h3 className="uppercase font-bold text-2xl text-center laptop:text-xl py-2"> Ovládání</h3>
                <p><span className="font-semibold text-xl px-8"> Popis ovládání virtuální klávesnice:</span> <br/> klávesnice reaguje na stisky reálných kláves <br/> při kliknutí se rozsvítí klávesa červeně a vypíše dané písmenko do inputu <br/> Lze spustit test, který vyhodnotí zda máte funkční klávesnici </p>
              <h3 className="uppercase font-bold text-2xl text-center laptop:text-xl py-2"> Chyby</h3>
                <p> <span className="font-semibold text-xl px-12"> Chyby, které se v aplikaci vyskytují: </span> <br/> - aplikace občas nezaznamenává stisky virtuálních kláves <br/> - klávesy jako je COMMAND nebo OPTION nefungují ani se nezobrazují <br/> - dokumentace nemá scrollbar z důvodu vypnutého scrollování klávesnice </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    
  );
}

export default App;
