import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();
      alert(
        `Pipeline parsed!\n\nNodes: ${data.num_nodes}\nEdges: ${
          data.num_edges
        }\nIs DAG: ${data.is_dag ? "Yes" : "No"}`
      );
    } catch (err) {
      console.error("Error submitting pipeline:", err);
      alert("Failed to submit pipeline.");
    }
  };

  return (
    <div className="flex items-center justify-center text-white mt-[1rem]">
      <button
        className="w-fit min-w-[10rem] px-[1rem] py-[0.4rem] bg-[#8A36CF] rounded-md hover:opacity-80 transition-all duration-150 cursor-pointer"
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
