// // BaseNode.js
// import { Handle } from 'reactflow';

// export default function BaseNode({ 
//   title, 
//   inputs = [], 
//   outputs = [], 
//   children, 
//   id, 
//   style = {},
//   customHandles = []
// }) {
//   return (
//     <div style={{ width: 200, border: '1px solid black', padding: 10, ...style }}>
//       <div style={{ fontWeight: 'bold', marginBottom: 5 }}>{title}</div>

//       <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
//         {children}
//       </div>

//       {/* Standard handles */}
//       {inputs.map((pos, idx) => (
//         <Handle key={`input-${idx}`} type="target" position={pos} id={`${id}-input-${idx}`} />
//       ))}
//       {outputs.map((pos, idx) => (
//         <Handle key={`output-${idx}`} type="source" position={pos} id={`${id}-output-${idx}`} />
//       ))}

//       {/* Custom handles (e.g., LLM node) */}
//       {customHandles.map((handle, i) => (
//         <Handle key={`custom-${i}`} {...handle} />
//       ))}
//     </div>
//   );
// }


// BaseNode.js
import { Handle } from 'reactflow';
import { Database, Cpu, Bot, Settings, Layers } from 'lucide-react';

const iconMap = {
  database: Database,
  cpu: Cpu,
  bot: Bot,
  settings: Settings,
  layers: Layers
};

export default function BaseNode({
  title,
  icon = "layers", // icon key from iconMap
  inputs = [],
  outputs = [],
  children,
  id,
  style = {},
  customHandles = []
}) {
  const IconComponent = iconMap[icon] || Layers;

  return (
    <div
      style={{
        width: 220,
        borderRadius: 12,
        overflow: 'hidden',
        background: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        ...style
      }}
      className="node-card"
    >
      {/* Header */}
      <div
        style={{
          background: '#b3b0f5ff',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        <IconComponent size={18} strokeWidth={2} color="#374151" />
        <span style={{ fontWeight: 600, fontSize: 14, color: '#374151' }}>{title}</span>
      </div>

      {/* Content */}
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {children}
      </div>

      {/* Handles */}
      {inputs.map((pos, idx) => (
        <Handle
          key={`input-${idx}`}
          type="target"
          position={pos}
          id={`${id}-input-${idx}`}
          style={{ background: '#2563eb', border: 'none', width: 10, height: 10 }}
        />
      ))}
      {outputs.map((pos, idx) => (
        <Handle
          key={`output-${idx}`}
          type="source"
          position={pos}
          id={`${id}-output-${idx}`}
          style={{ background: '#10b981', border: 'none', width: 10, height: 10 }}
        />
      ))}

      {customHandles.map((handle, i) => (
        <Handle key={`custom-${i}`} {...handle} />
      ))}
    </div>
  );
}
