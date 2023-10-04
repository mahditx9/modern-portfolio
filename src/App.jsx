import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import styles from "./styles";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Featured from "./Components/Featured";
import Contact from "./Components/Contact";
function App() {
  return (
    <section className="min-w-full min-h-full">
      <Navbar />
      <section className={styles.container_layout}>
        <Intro />
        <Services />
        <Skills />
        <Featured />
        <Contact />
      </section>
    </section>
  );
}

export default App;
