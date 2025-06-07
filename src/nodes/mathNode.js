import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("+");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-num1`,
      style: { top: "33%" },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-num2`,
      style: { top: "66%" },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-result`,
      style: { top: "50%" },
    },
  ];

  return (
    <BaseNode title="Math" subTitle="Performs arithmetic" handles={handles}>
      <label>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="bg-[#8b41cf] rounded-sm ml-1"
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
      </label>
    </BaseNode>
  );
};
