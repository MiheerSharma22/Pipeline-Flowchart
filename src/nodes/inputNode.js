// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-value`,
    },
  ];

  return (
    <BaseNode title={"Input"} handles={handles}>
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="bg-[#8b41cf] px-2 rounded-sm"
        />
      </label>
      <label>
        Type:
        <select
          value={inputType}
          onChange={handleTypeChange}
          className="mt-2 bg-[#8b41cf] rounded-sm ml-1"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
