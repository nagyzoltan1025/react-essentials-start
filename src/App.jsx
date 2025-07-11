import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState("Please select a topic!")

    const handleSelect = ({selectedButton}) => {
        console.log(`Hello world! - selected! ${selectedButton}`);
        console.log("selectedTopic value: ", selectedTopic);
        setSelectedTopic(selectedButton);
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
                  <TabButton onSelect={() => {
                      handleSelect({selectedButton: "component"})
                  }}>Components</TabButton>
                  <TabButton onSelect={() => {
                      handleSelect({selectedButton: "jsx"})
                  }}>JSX</TabButton>
                  <TabButton onSelect={() => {
                      handleSelect({selectedButton: "props"})
                  }}>Props</TabButton>
                  <TabButton onSelect={() => {
                      handleSelect({selectedButton: "state"})
                  }}>State</TabButton>
              </menu>
              {selectedTopic}
          </section>
      </main>
    </div>
  );
}

export default App;
