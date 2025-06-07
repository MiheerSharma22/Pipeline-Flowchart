import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id }) => {
  const [condition, setCondition] = useState("a > b");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-conditionInput`,
      style: { top: "33%" },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-context`,
      style: { top: "66%" },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-ifTrue`,
      style: { top: "30%" },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-ifFalse`,
      style: { top: "70%" },
    },
  ];

  return (
    <BaseNode title="Condition" subTitle="If-Else logic" handles={handles}>
      <label>
        Condition:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
