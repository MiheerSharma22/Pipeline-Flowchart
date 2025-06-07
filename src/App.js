import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#1b003a,_#4b0082,_#000000,_#000000,_#000000,_#000000,_#6a0dad,_#b972ff)]">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
