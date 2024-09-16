import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

function App() {
  const [taskName, setTaskName] = useState("");

  const onTaskNameChanged = (name: string) => {
    setTaskName(name);
  };

  return (
    <>
      <Header onTaskNameChanged={onTaskNameChanged}/>
      <Dashboard taskName={taskName}/>
    </>
  );
}

export default App;
