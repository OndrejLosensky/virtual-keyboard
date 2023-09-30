import Header from "../src/header/Header"
import Keyboard from "./keyboard/Keyboard";

function App() {
  return (
    <section className="w-full h-screen lg:h-full bg-backColor">
          <Header/>
          <Keyboard/>
    </section>
  );
}

export default App;
