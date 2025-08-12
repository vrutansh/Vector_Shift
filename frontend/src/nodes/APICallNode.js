//Apicallnode

import BaseNode from '../nodes/baseNode';

export function APICallNode({ id, data }) {
  return (
    <BaseNode id={id} title="API Call" inputs={['left']} outputs={['right']}>
      <input
        type="text"
        placeholder="https://api.example.com"
        defaultValue={data?.url || ''}
      />
    </BaseNode>
  );
}
