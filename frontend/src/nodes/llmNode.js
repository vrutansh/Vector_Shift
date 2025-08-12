//llmnode

import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      outputs={[Position.Right]}
      customHandles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-response`,
        }
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
