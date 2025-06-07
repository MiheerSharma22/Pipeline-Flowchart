// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`flex cursor-grab items-center justify-center hover:bg-[#8b41cf] text-white transition-all dration-150 min-w-[80px] px-[1.5rem] py-[0.5rem] rounded-lg ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      // style={{
      //   cursor: "grab",
      //   minWidth: "80px",
      //   height: "60px",
      //   display: "flex",
      //   alignItems: "center",
      //   borderRadius: "8px",
      //   backgroundColor: "#1C2536",
      //   justifyContent: "center",
      //   flexDirection: "column",
      // }}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
