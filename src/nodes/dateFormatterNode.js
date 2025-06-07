import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const DateFormatterNode = ({ id }) => {
  const [format, setFormat] = useState("YYYY-MM-DD");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-inputDate`,
      style: { top: "50%" },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-formattedDate`,
      style: { top: "50%" },
    },
  ];

  return (
    <BaseNode
      title="Date Formatter"
      subTitle="Format a date string"
      handles={handles}
    >
      <label>
        Format:
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="DD-MM-YYYY">DD-MM-YYYY</option>
        </select>
      </label>
    </BaseNode>
  );
};
