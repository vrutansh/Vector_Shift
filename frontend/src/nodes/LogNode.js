import BaseNode from '../nodes/baseNode';

export function LogNode({ id, data }) {
  return (
    <BaseNode id={id} title="Log" inputs={['left']}>
      <label>
        <input type="checkbox" />
        Verbose Logging
      </label>
    </BaseNode>
  );
}
