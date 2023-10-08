import Header from "./components/header/Header";
import Keyboard from "./components/keyboard/Keyboard";
import backgroundImage from "./assets/backgroundImage.png"
function App() {
  return (

    <section className="w-full h-screen lg:h-full bg-backColor" style={{ 
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <div className="flex flex-row">
        <div className="w-[60%]">
            <Header/>
            <Keyboard/>
        </div>
        <div className="w-[40%] bg-foreColorWhite">
           <h2 className="text-4xl uppercase text-center pt-6 font-semibold"> dokumentace</h2>
        </div>
      </div>
    </section>
    
  );
}

export default App;
