import { useState } from "react";
import data from "./data"

const App = () => {
  const [questions, setQuestions] = useState(data);
  console.log(data);
  return <main>
    <section className="container">
      <h1>Questions</h1>
    </section>
  </main>
};
export default App;
