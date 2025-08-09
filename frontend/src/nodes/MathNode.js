import BaseNode from '../nodes/baseNode';

export function MathNode({ id, data }) {
  return (
    <BaseNode id={id} title="Math Operation" inputs={['left']} outputs={['right']}>
      <select value={data.operation || 'add'} onChange={() => {}}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
    </BaseNode>
  );
}
