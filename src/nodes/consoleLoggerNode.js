import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ConsoleLoggerNode = ({ id }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
      style: { top: "50%" },
    },
  ];

  return (
    <BaseNode title="Logger" subTitle="Logs input to console" handles={handles}>
      <p>No configuration needed.</p>
    </BaseNode>
  );
};
