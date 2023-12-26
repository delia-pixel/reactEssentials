// import MainGoal from "./MainGoal";
import CoreConcepts from "./CoreConcepts";
import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Core", "Crucial"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const qualifier = reactDescriptions[genRandomInt(2)];
  return (
    <div>
      <header>
        <img src={reactImage} />
        <h1>React Essentials</h1>
        <p>
          {qualifier} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
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
      </main>
    </div>
  );
}

export default App;
