// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }} className=" border-b-1 border-[#3F3F3F]">
      <div className="flex felx-wrap">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="conditionNode" label="ConditionNode" />
        <DraggableNode type="mathNode" label="MathNode" />
        <DraggableNode type="dateFormatterNode" label="DateFormatterNode" />
        <DraggableNode type="loopNode" label="LoopNode" />
        <DraggableNode type="consoleLoggerNode" label="ConsoleLoggerNode" />
      </div>
    </div>
  );
};
