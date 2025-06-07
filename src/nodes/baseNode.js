// baseNode.js
import React from "react";
import { Handle } from "reactflow";

export const BaseNode = ({ title, subTitle = "", handles = [], children }) => {
  return (
    <div style={{ width: 200, border: "1px solid black", padding: 8 }}>
      {/* title */}
      <div>
        <strong>{title}</strong>
      </div>

      {/* sub title */}
      {subTitle && (
        <div>
          <small>{subTitle}</small>
        </div>
      )}

      {/* children */}
      {children && <div>{children}</div>}

      {/* handles */}
      {handles.map((handle) => (
        <Handle
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
