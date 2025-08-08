// BaseNode.js
import { Handle } from 'reactflow';

export default function BaseNode({ 
  title, 
  inputs = [], 
  outputs = [], 
  children, 
  id, 
  style = {},
  customHandles = []
}) {
  return (
    <div style={{ width: 200, border: '1px solid black', padding: 10, ...style }}>
      <div style={{ fontWeight: 'bold', marginBottom: 5 }}>{title}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {children}
      </div>

      {/* Standard handles */}
      {inputs.map((pos, idx) => (
        <Handle key={`input-${idx}`} type="target" position={pos} id={`${id}-input-${idx}`} />
      ))}
      {outputs.map((pos, idx) => (
        <Handle key={`output-${idx}`} type="source" position={pos} id={`${id}-output-${idx}`} />
      ))}

      {/* Custom handles (e.g., LLM node) */}
      {customHandles.map((handle, i) => (
        <Handle key={`custom-${i}`} {...handle} />
      ))}
    </div>
  );
}
