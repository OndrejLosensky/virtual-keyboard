import Header from "../src/header/Header"
import Keyboard from "./keyboard/Keyboard";
import backgroundImage from "./assets/backgroundImage.png"
import { ThemeProvider } from "./darkOrLight/ThemeChanger";
import ThemeToggleButton from "./darkOrLight/ThemeToggleButton";
function App() {
  return (

    <ThemeProvider>
        <section className="w-full h-screen lg:h-full bg-backColor" style={{ 
      backgroundImage: `url(${backgroundImage})`,
    }}>
          <Header/>
          <ThemeToggleButton/>
          <Keyboard/>
      </section>
    </ThemeProvider>
    
  );
}

export default App;
