import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton";

function App() {
    const handleSelect = () => {
        console.log("Hello world! - selected!");
    }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
            <ul>
                <CoreConcepts
                    title={CORE_CONCEPTS[0].title}
                    description={CORE_CONCEPTS[0].description}
                    image={CORE_CONCEPTS[0].image}
                />
                <CoreConcepts {...CORE_CONCEPTS[1]} />
                <CoreConcepts {...CORE_CONCEPTS[2]} />
            </ul>
        </section>
          <section id={"examples"}>
              <h2>Examples</h2>
              <menu>
                  <TabButton onSelect={handleSelect}>Components</TabButton>
                  <TabButton onSelect={handleSelect}>JSX</TabButton>
                  <TabButton onSelect={handleSelect}>Components</TabButton>
                  <TabButton onSelect={handleSelect}>Components</TabButton>
              </menu>
              Dynamic Content
          </section>
      </main>
    </div>
  );
}

export default App;
