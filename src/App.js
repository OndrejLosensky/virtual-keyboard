import Header from "./components/header/Header";
import Keyboard from "./components/keyboard/Keyboard";
import backgroundImage from "./assets/backgroundImage.png"
function App() {
  return (

    <section className="w-full h-screen lg:h-full bg-backColor" style={{ 
      backgroundImage: `url(${backgroundImage})`,
    }}>
          <Header/>
          <Keyboard/>
    </section>
    
  );
}

export default App;
