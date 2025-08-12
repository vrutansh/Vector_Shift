//textnode

import { useEffect, useState, useRef } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

// RegEx to match {{ variable }} pattern
const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 200, height: 100 });
  const textRef = useRef(null);

  // Parse variables from text
  useEffect(() => {
    const matches = new Set();
    let match;
    while ((match = VARIABLE_REGEX.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    setVariables([...matches]);
  }, [currText]);

  // Resize the node to fit text content
  useEffect(() => {
    if (textRef.current) {
      const { scrollHeight, scrollWidth } = textRef.current;

      const newWidth = Math.min(Math.max(200, scrollWidth + 20), 400);
      const newHeight = Math.min(Math.max(100, scrollHeight + 20), 300);

      setDimensions({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      outputs={[Position.Right]}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        overflow: 'hidden',
        padding: '5px',
      }}
      customHandles={variables.map((v, i) => ({
        type: 'target',
        position: Position.Left,
        id: `${id}-input-${v}`,
        style: {
          top: `${(i + 1) * 30}px`,
        },
      }))}
    >
      <label style={{ width: '100%' }}>
        Text:
        <textarea
          ref={textRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            width: '90%',
            minHeight: '60px',
            resize: 'none',
            overflow: 'hidden',
            border: '1px solid #ccc',
            padding: '4px',
            fontSize: '14px',
            fontFamily: 'inherit',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px',
          }}
        />
      </label>
    </BaseNode>
  );
};
