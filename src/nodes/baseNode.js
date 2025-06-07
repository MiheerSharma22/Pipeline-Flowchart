// baseNode.js
import React from "react";
import { Handle } from "reactflow";

export const BaseNode = ({ title, subTitle = "", handles = [], children }) => {
  return (
    <div
      style={{ width: 200 }}
      className="min-h-fit min-w-fit rounded-xl bg-transparent text-white opacity-80"
    >
      {/* title */}
      <div className="text-center bg-[#8b41cf] rounded-tl-xl rounded-tr-xl p-2 font-bold">
        <span>{title}</span>
      </div>

      {/* sub title and children container */}
      <div className="rounded-bl-xl rounded-br-xl bg-[#1C2536] p-2 gap-3">
        {/* subtitle */}
        {subTitle && (
          <div>
            <span>{subTitle}</span>
          </div>
        )}

        {/* children */}
        {children && <div>{children}</div>}
      </div>

      {/* handles */}
      {handles.map((handle) => (
        <Handle
          className="handle"
          key={handle.id}
          type={handle.type}
          id={handle.id}
          position={handle.position}
          style={handle.style}
        />
      ))}
    </div>
  );
};
