import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LoopNode = ({ id }) => {
  const [loopType, setLoopType] = useState("for");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-loopInput`,
      style: { top: "50%" },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-loopOutput`,
      style: { top: "50%" },
    },
  ];

  return (
    <BaseNode title="Loop" subTitle="Choose loop type" handles={handles}>
      <label>
        Loop Type:
        <select
          value={loopType}
          onChange={(e) => setLoopType(e.target.value)}
          style={{ width: "100%", marginTop: 4 }}
          className="bg-[#8b41cf] rounded-sm"
        >
          <option value="for">for</option>
          <option value="while">while</option>
          <option value="do-while">do...while</option>
          <option value="for-of">for...of</option>
          <option value="for-in">for...in</option>
        </select>
      </label>
    </BaseNode>
  );
};
