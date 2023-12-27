// import MainGoal from "./MainGoal";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

function App() {
  const handleSelect = (selectedButton) => {
    console.log(selectedButton);
  };

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        {/* <MainGoal></MainGoal> */}
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concepts) => (
              <CoreConcepts {...concepts}></CoreConcepts>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
