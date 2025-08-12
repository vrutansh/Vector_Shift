//delaynode
import BaseNode from '../nodes/baseNode';

export function DelayNode({ id, data }) {
  return (
    <BaseNode id={id} title="Delay" inputs={['left']} outputs={['right']}>
      <input
        type="number"
        placeholder="Delay (ms)"
        defaultValue={data?.delay || 1000}
      />
    </BaseNode>
  );
}
