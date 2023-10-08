import Header from "./components/header/Header";
import Keyboard from "./components/keyboard/Keyboard";
import backgroundImage from "./assets/backgroundImage.png"
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (

    <section className="w-full h-screen lg:h-full bg-backColor" style={{ 
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <div className="flex flex-row">
        <div className={`${open ? "w-[60%]": "w-[95%]"} duration-300`}>
            <Header/>
            <Keyboard/>
        </div>
        {/* DOKUMENTACE*/}

        <div className={`${open ? "w-[40%] bg-foreColorWhite": "w-[5%] bg-backColor"} bg-foreColorWhite duration-300 absolute right-0 h-full`} >
          <button 
          className={`absolute left-5 top-3 rounded-full px-2 border-4 ${open && "rotate-180"}`} style={{"fontSize": "32px"}}
          onClick={()=>setOpen(!open)}
          >
            ←
          </button>

          <h2 className={`text-4xl uppercase text-center pt-6 font-semibold ${!open && 'scale-0'} duration-300`}> dokumentace</h2>
        </div>
      </div>
    </section>
    
  );
}

export default App;
