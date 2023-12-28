// import MainGoal from "./MainGoal";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* <h2>Time to get started!</h2> */}
        {/* <MainGoal></MainGoal> */}
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
