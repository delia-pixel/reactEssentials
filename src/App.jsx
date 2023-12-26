// import MainGoal from "./MainGoal";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";



function App() {
  
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
      </main>
    </div>
  );
}

export default App;
