import Header from "./components/header/Header";
import Keyboard from "./components/keyboard/Keyboard";
import backgroundImage from "./assets/backgroundImage.png"
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (

    <section className="w-full h-screen lg:h-full bg-backColor">
      <div className="flex flex-row">
        <div className={`${open ? "w-[60%]": "w-[95%]"} duration-300`}>
            <Header/>
            <Keyboard/>
        </div>
        {/* DOKUMENTACE*/}

        <div className={`${open ? "w-[40%] bg-foreColorWhite": "w-[5%] bg-backColor"} duration-300 absolute right-0 h-full`} >
          <button 
          className={`absolute text-foreColorWhite top-4 px-2 left-4 rounded-full  border-4 ${open && "rotate-180 text-backColor"}`}
           style={{"fontSize": "28px"}}
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
