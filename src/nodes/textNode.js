import { useState, useEffect, useRef } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./baseNode";

// Matches {{ variable }}
const extractVariables = (text) => {
  const matches = [...text.matchAll(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g)];
  return [...new Set(matches.map((match) => match[1]))]; // unique vars
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });
  const inputRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Recalculate variables and node size when text changes
  useEffect(() => {
    // Extract variables
    const vars = extractVariables(currText);
    setVariables(vars);

    // Auto-resize node height
    if (inputRef.current) {
      const scrollHeight = inputRef.current.scrollHeight;
      setNodeSize((prev) => ({
        ...prev,
        height: Math.max(40, scrollHeight),
      }));
    }
  }, [currText]);

  const [handles, setHandles] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();
  // handle dynamic addition of handles upon encountering a new variable in the text
  useEffect(() => {
    setHandles([
      ...variables.map((v, i) => ({
        type: "target",
        position: Position.Left,
        id: `${id}-${v}`,
        style: { top: `${(i + 1) * 25}px` },
      })),
      {
        type: "source",
        position: Position.Right,
        id: `${id}-output`,
        style: { top: "50%" },
      },
    ]);

    // to recalculate edge layout after new handles are added, so that new edges are rendered for new dynamic handles
    updateNodeInternals(id);
  }, [variables]);

  return (
    <BaseNode title="Text" handles={handles} customStyle={nodeSize}>
      <label className="w-full">
        Text:
        <textarea
          ref={inputRef}
          value={currText}
          onChange={handleTextChange}
          className="bg-[#8A36CF] text-white rounded-sm w-full resize-none p-1 mt-1"
          style={{ height: nodeSize.height }}
        />
      </label>
    </BaseNode>
  );
};
