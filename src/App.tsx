import "./App.scss";
import { ReactFlowProvider } from "reactflow";
import Flow from "./components/Flow/Flow";

function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}

export default App;
