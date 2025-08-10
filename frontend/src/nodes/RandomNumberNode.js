import BaseNode from '../nodes/baseNode';

export function RandomNumberNode({ id, data }) {
  return (
    <BaseNode id={id} title="Random Number" outputs={['right']}>
      <input type="number" placeholder="Min" defaultValue={0} />
      <input type="number" placeholder="Max" defaultValue={100} />
    </BaseNode>
  );
}
